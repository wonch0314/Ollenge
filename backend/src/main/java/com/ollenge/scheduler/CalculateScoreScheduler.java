package com.ollenge.scheduler;

import com.ollenge.common.util.LocalDateTimeUtils;
import com.ollenge.db.entity.Challenge;
import com.ollenge.db.entity.ChallengeResult;
import com.ollenge.db.repository.ChallengeRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Slf4j
@Component
@AllArgsConstructor
public class CalculateScoreScheduler {

    private final ChallengeRepository challengeRepository;

    @Scheduled(cron = "0 0 0 * * *", zone = "Asia/Seoul")
    public void calculateScore() {
        LocalDate target = LocalDate.now(ZoneId.of("Asia/Seoul")).minusDays(1);
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String formatedTarget = target.format(formatter);
        log.info("execute scheduler - {} + 1", formatedTarget);

        HashMap<Integer, String> presetIdToType = new HashMap<Integer, String>() {{
            put(null, "user");
            put(1, "ranking1");
            put(2, "ranking2");
            put(3, "ranking3");
            put(4, "ranking4");
            put(5, "ranking5");
            put(6, "ranking6");
        }};

        List<Challenge> challengeList = challengeRepository.findByEndDate(target);
        // 랭킹 챌린지가 종료되는 날, 랭킹 챌린지에 대한 로직 추가
        if(!challengeList.isEmpty() && target.equals(LocalDateTimeUtils.getLastDayOfTargetMonth(target))) {
            // 랭킹 계산 로직
            List<List<Challenge>> challengeListByPreset = new ArrayList<>();
            List<Integer> challengeListSize = new ArrayList<>();
            List<HashMap<Long, Integer>> challengeRankMap = new ArrayList<>();
            for (int i = 0; i < 7; i++) {
                challengeListByPreset.add(new ArrayList<>());
                challengeRankMap.add(new HashMap<>());
            }
            for(Challenge challenge : challengeList) {
                if(challenge.getChallengePreset() != null) {
                    challengeListByPreset.get((int) challenge.getChallengePreset().getChallengePresetId()).add(challenge);
                }
            }
            for (int presetIdx = 0; presetIdx < 7; presetIdx++) {
                challengeListSize.add(challengeListByPreset.get(presetIdx).size());
                Collections.sort(challengeListByPreset.get(presetIdx), (challenge1, challenge2) -> {
                    double achievement1 = (double) challenge1.getChallengeScore() / challenge1.getPeopleCnt();
                    double achievement2 = (double) challenge2.getChallengeScore() / challenge2.getPeopleCnt();
                    if (achievement2 > achievement1) return 1;
                    else if (achievement2 == achievement1) return 0;
                    else return -1;
                });
                int rank = 1;
                int offset = 1;
                for(int challengeIdx = 0; challengeIdx < challengeList.size(); challengeIdx++) {
                    if(challengeIdx == 0) {
                        challengeRankMap.get(presetIdx).put(challengeListByPreset.get(presetIdx).get(challengeIdx).getChallengeId(), rank);
                        continue;
                    }
                    if((double)challengeListByPreset.get(presetIdx).get(challengeIdx).getChallengeScore()/challengeListByPreset.get(presetIdx).get(challengeIdx).getPeopleCnt() == (double)challengeListByPreset.get(presetIdx).get(challengeIdx-1).getChallengeScore()/challengeListByPreset.get(presetIdx).get(challengeIdx-1).getPeopleCnt()) {
                        offset++;
                        challengeRankMap.get(presetIdx).put(challengeListByPreset.get(presetIdx).get(challengeIdx).getChallengeId(), rank);
                    } else {
                        rank += offset;
                        offset = 1;
                        challengeRankMap.get(presetIdx).put(challengeListByPreset.get(presetIdx).get(challengeIdx).getChallengeId(), rank);
                    }
                }
            }
        }

    }
}
