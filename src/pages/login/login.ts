import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {Http, HttpModule} from "@angular/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  home = HomePage;

  usuario = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clickHome(){
    console.log("clickHome");
    console.log(this.usuario);
    console.log(this.password);

    this.http.get('/home/')
      .subscribe( data => {
        console.log(data.text());
      }, error => {
          console.log("error");
        }
      );
    ///this.navCtrl.push(this.home);

    ///this.navCtrl.setRoot(this.home);
  }
}


