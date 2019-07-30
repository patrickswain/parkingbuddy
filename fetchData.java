package com.example.ucfgarageparking;

import android.app.Activity;
import android.os.AsyncTask;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

public class fetchData extends AsyncTask <Void,Void,Void> {
    String data ="";
    String dataParsed = "";
    String singleParsed = "";
    @Override
    protected Void doInBackground(Void ... voids) {
        try {
            URL url = new URL("https://parkingbuddy.herokuapp.com/testing/ENG1");
            HttpURLConnection httpURLConnection = (HttpURLConnection) url.openConnection();
            InputStream inputStream = httpURLConnection.getInputStream();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream));
            String line = "";
            while(line!=null) {
                line = bufferedReader.readLine();
                data = data + line;
            }

            JSONObject jo = new JSONObject(data);
            singleParsed = "Gargage is" + jo.get("garage");

        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    protected void onPostExecute(Void aVoid) {
        super.onPostExecute(aVoid);
    }
}
