package com.ollenge.api.service;

import org.json.JSONObject;
import org.springframework.stereotype.Service;

@Service
public class OAuthServiceImpl implements OAuthService {

    @Override
    public String getKakaoAccessToken(String code) {
        return null;
    }

    @Override
    public JSONObject getKakaoUser(String token) throws Exception {
        return null;
    }
}
