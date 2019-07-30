package com.example.ucfgarageparking
import android.app.Activity
import android.os.AsyncTask
import org.json.JSONException
import org.json.JSONObject
import java.io.BufferedReader
import java.io.IOException
import java.io.InputStream
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.MalformedURLException
import java.net.URL
class fetchData:AsyncTask<Void, Void, Void>() {
  internal var data = ""
  internal var dataParsed = ""
  internal var singleParsed = ""
  protected fun doInBackground(vararg voids:Void):Void {
    try
    {
      val url = URL("https://parkingbuddy.herokuapp.com/testing/ENG1")
      val httpURLConnection = url.openConnection() as HttpURLConnection
      val inputStream = httpURLConnection.getInputStream()
      val bufferedReader = BufferedReader(InputStreamReader(inputStream))
      val line = ""
      while (line != null)
      {
        line = bufferedReader.readLine()
        data = data + line
      }
      val jo = JSONObject(data)
      singleParsed = "Gargage is" + jo.get("garage")
    }
    catch (e:MalformedURLException) {
      e.printStackTrace()
    }
    catch (e:IOException) {
      e.printStackTrace()
    }
    catch (e:JSONException) {
      e.printStackTrace()
    }
    return null
  }
  protected fun onPostExecute(aVoid:Void) {
    super.onPostExecute(aVoid)
  }
}
