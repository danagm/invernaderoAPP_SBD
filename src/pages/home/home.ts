import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  invernaderos = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public  http: Http) {
    console.log(this.navParams.get('usuario'))

    this.getInvernaderos();
  }

  getInvernaderos() {
    this.http.get('/invernadero/?usuario=' + this.navParams.get('usuario')).subscribe(data => {
      console.log(data.text());
      this.invernaderos = data.json();
    }, error1 => {
      console.log('error');
    });
  }
}
