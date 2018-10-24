import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DayConfig } from '../../../node_modules/ion2-calendar';
import { CalendarComponentOptions } from '../../../node_modules/ion2-calendar';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  date: string;
  type: 'string';
  options: CalendarComponentOptions = {
    from: new Date(2000, 0, 1)
  };
  constructor(public navCtrl: NavController) {



    let _daysConfig: DayConfig[] = [];



    /*_daysConfig.push({
      cssClass: 'red',
      date: new Date(2018, 9, 27),
      //subTitle: 'sub',
      marked: true
    })*/

    for (var i = 1; i < 31; i++) {
      if (i % 2 == 0) {
        _daysConfig.push({
          cssClass: 'red',
          date: new Date(2018, 9, i), //every even day in October
          //subTitle: 'sub',
          marked: true
        })
      }
    }


    setTimeout(() =>
      this.options = {
        ...this.options,
        daysConfig: _daysConfig
      }
      , 3000);

  }


  onChange($event) {
    console.log($event);
  }

}
