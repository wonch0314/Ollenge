package com.ollenge.api.controller;

import com.ollenge.api.service.OAuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/oauth")
public class OAuthController {

    @Autowired
    OAuthService oAuthService;

    @GetMapping("/kakao")
    public ResponseEntity<?> kakaoLogin(@RequestParam String accessToken) {
        String userId = "";

        try {

            // 존재하면 로그인

            // 존재하지 않으면 계정 추가

        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }


        return null;
    }



}
