package com.ollenge.api.service;

import com.ollenge.api.exception.DuplicatedPeriodTopicRankingChallengeException;
import com.ollenge.api.exception.InvalidAuthTypeException;
import com.ollenge.api.exception.InvalidDateTimeException;
import com.ollenge.api.exception.InvalidFieldException;
import com.ollenge.api.request.ChallengePostReq;
import com.ollenge.api.response.data.ChallengeCreatedData;
import com.ollenge.common.util.LocalDateTimeUtils;
import com.ollenge.db.entity.AuthClassification;
import com.ollenge.db.entity.Challenge;
import com.ollenge.db.entity.ChallengePreset;
import com.ollenge.db.entity.ClassificationType;
import com.ollenge.db.repository.*;
import lombok.AllArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;


@Service
@AllArgsConstructor
public class ChallengeService {

    private final ChallengeRepository challengeRepository;
    private final ChallengeRepositorySupport challengeRepositorySupport;
    private final ClassificationTypeRepository classificationTypeRepository;
    private final AuthClassificationRepository authClassificationRepository;
    private final AuthClassificationRepositorySupport authClassificationRepositorySupport;

    public ChallengeCreatedData createChallenge(ChallengePostReq challengePostReq) throws NoSuchElementException, InvalidDateTimeException, DuplicatedPeriodTopicRankingChallengeException, InvalidAuthTypeException, InvalidFieldException {
        ChallengePreset challengePreset = null;
        // 날짜 검증
        if (!LocalDateTimeUtils.isValidStartDate(challengePostReq.getStartDate()) && !LocalDateTimeUtils.isValidEndDate(challengePostReq.getStartDate(), challengePostReq.getEndDate()))
            throw new InvalidDateTimeException("Start date or End Date invalid exception");
        //동일 주제, 기간 중복 검증
        if (challengePostReq.getChallengePresetId() != null) {
            challengePreset = ChallengePreset.builder()
                    .challengePresetId(challengePostReq.getChallengePresetId())
                    .build();
            if (isDuplicatedTopicPeriod(challengePostReq.getStartDate(), challengePostReq.getEndDate(), challengePostReq.getChallengeTopic())) {
                throw new DuplicatedPeriodTopicRankingChallengeException("Duplicated ranking challenge that has same period and topic exception");
            }
        }
        // 인증 방식 유효성 검증
        if(!isValidAuthType(challengePostReq.getAuthType())) {
            throw new InvalidAuthTypeException("Invalid auth type exception");
        }
        // 인증 코드 생성
        String inviteCode = RandomStringUtils.randomAlphanumeric(8);
        // DB 저장
        Challenge challenge = Challenge.ChallengeBuilder()
                .challengePreset(challengePreset)
                .challengeImg(challengePostReq.getChallengeImg())
                .challengeName(challengePostReq.getChallengeName())
                .challengeTopic(challengePostReq.getChallengeTopic())
                .authType(challengePostReq.getAuthType())
                .startDate(challengePostReq.getStartDate())
                .endDate(challengePostReq.getEndDate())
                .startTime(challengePostReq.getStartTime())
                .endTime(challengePostReq.getEndTime())
                .inviteCode(inviteCode)
                .rewardContent(challengePostReq.getRewardContent())
                .penaltyContent(challengePostReq.getPenaltyContent())
                .challengeScore(0)
                .challengeDescription(challengePostReq.getChallengeDescription())
                .build();

        long challengeId = challengeRepository.save(challenge).getChallengeId();
        if (challengePostReq.getAuthType().equals("classifi")) {
            if(challengePostReq.getClassificationTypeID() == null) {
                throw new InvalidFieldException("Cannot match auth type to classification type");
            }
            ClassificationType classificationType = classificationTypeRepository.findById(challengePostReq.getClassificationTypeID()).orElseThrow(() -> { return new InvalidFieldException("Not exist classification type ID"); });
            challenge.setChallengeId(challengeId);
            AuthClassification authClassification = AuthClassification.builder()
                    .classificationType(classificationType)
//                    .classificationType(ClassificationType.builder().classificationTypeId(challengePostReq.getClassificationTypeID()).build())
                    .challenge(challenge)
                    .build();
            authClassificationRepository.save(authClassification);
        }

        return ChallengeCreatedData.of(challengeId, inviteCode);
    }

    private boolean isValidAuthType(String authType) {
        return authType.equals("none") || authType.equals("feature") || authType.equals("classifi") || authType.equals("step");
    }

    private boolean isDuplicatedTopicPeriod(LocalDate startDate, LocalDate endDate, String challengeTopic) {
        List<Challenge> challengeList = challengeRepositorySupport.getRankingChallengeTopicPeriod(startDate, endDate, challengeTopic);
        return challengeList.size() > 0;
    }
}
