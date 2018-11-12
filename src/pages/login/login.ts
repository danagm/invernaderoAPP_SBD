import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
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
  invernaderos = [];
  home = HomePage;

  usuario = '';
  password = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clickHome(){
    console.log("clickHome");
    console.log(this.usuario);
    console.log(this.password);

    this.http.get('/login/?usuario='+this.usuario+'&password='+this.password)
      .subscribe( data => {
        console.log(data.text());
        if(data.text() == "True"){
          //mandar a la siguiente pagina
          this.navCtrl.setRoot(this.home, {usuario: this.usuario});
        }
        else{
          ///mandar alerta
          const alerta = this.alertCtrl.create(
            {
              title: 'Oops!',
              subTitle: 'Usuario/Contraseña incorrectos',
              buttons: ['Ok']
            }
          );
          alerta.present();
        }
      }, error => {
          console.log("error");
          const alerta = this.alertCtrl.create(
            {
              title: 'Oops!',
              subTitle: 'Error de conexión',
              buttons: ['Ok']
            }
          );
        alerta.present();
        }
      );
    ///this.navCtrl.push(this.home);

    ///this.navCtrl.setRoot(this.home);
  }
}


