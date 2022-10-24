package com.ollenge.db.entity;

import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Builder
@AllArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long userId;

    @Column(length = 45, nullable = false)
    String authCode;

    @Column(length = 14, nullable = false)
    String nickname;

    @Column(length = 255)
    String profileImg;

    @Column(length = 10, nullable = false)
    String loginType;

    @Column(length = 300)
    String description;

    @Column(nullable = false)
    int userScore;

}