package com.ollenge.api.service;

import com.ollenge.db.entity.User;
import org.json.JSONException;
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

    @Override
    public boolean checkUser(JSONObject jsonObject) throws JSONException {
        return false;
    }

    @Override
    public User createUser(JSONObject jsonObject) throws JSONException {
        return null;
    }
}
