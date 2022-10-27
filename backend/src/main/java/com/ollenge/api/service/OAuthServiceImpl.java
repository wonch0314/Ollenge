package com.ollenge.api.service;

import com.ollenge.db.entity.User;
import com.ollenge.db.repository.UserRepository;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Service
public class OAuthServiceImpl implements OAuthService {

    @Autowired
    UserRepository userRepository;

    @Override
    public String getKakaoAccessToken(String code) {
        return null;
    }

    @Override
    public JSONObject getKakaoUser(String token) throws Exception {
        String reqURL = "https://kapi.kakao.com/v2/user/me";
        StringBuilder result = new StringBuilder();
        BufferedReader br = null;

        try {
            URL url = new URL(reqURL);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();

            conn.setRequestMethod("POST");
            conn.setDoOutput(true);
            conn.setRequestProperty("Authorization", "Bearer " + token);

            br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
            String line = "";
            while ((line = br.readLine()) != null) {
                result.append(line);
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (br != null) br.close();
        }

        return new JSONObject(result.toString());
    }

    @Override
    public boolean checkUser(JSONObject jsonObject) throws JSONException {
        String id = jsonObject.getString("id");
        return userRepository.findUserByUserId(id).isPresent();
    }

    @Override
    public User createUser(JSONObject jsonObject) throws JSONException {
        return null;
    }
}
