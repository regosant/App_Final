import { Component,Input, OnInit } from '@angular/core';
import { Villano } from '../../../services/villanos.service';

@Component({
  selector: 'app-villano',
  templateUrl: './villano.component.html',
  styleUrls: ['./villano.component.scss'],
})
export class VillanoComponent implements OnInit {

  @Input() villanos: Villano[] = [];
  @Input() enFavoritos = false;

  constructor() { console.log('recupero villano',this.villanos)}

  ngOnInit() {}
}