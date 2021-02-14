import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {

  items = Array(7);

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {}

  onClick( valor: number ) {
    
    this.popoverCtrl.dismiss({
      item: valor
    });

  }
}