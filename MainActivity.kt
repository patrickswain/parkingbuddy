package com.example.ucfgarageparking
import android.content.Intent
import android.os.Bundle
import android.util.Log.d
import com.google.android.material.snackbar.Snackbar
import androidx.appcompat.app.AppCompatActivity
import android.view.Menu
import android.view.MenuItem
class MainActivity:AppCompatActivity() {
  internal var click:Button
  internal var data:TextView
  protected fun onCreate(savedInstanceState:Bundle) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)
    click = findViewById(R.id.button) as Button
    data = findViewById(R.id.fetcheddata) as TextView
    click.setOnClickListener(object:View.OnClickListener() {
      fun onClick(view:View) {
        val process = fetchData()
        process.execute()
      }
    })
  }
}
