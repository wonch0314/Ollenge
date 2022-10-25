package com.ollenge.api.service;

import org.json.JSONObject;

public interface OAuthService {
    public String getKakaoAccessToken(String code);
    public JSONObject getKakaoUser(String token) throws Exception;
}
