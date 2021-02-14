import { Component, OnInit,Input } from '@angular/core';
import { Heroe } from '../../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss'],
})
export class HeroeComponent implements OnInit {

  @Input() heroes: Heroe[] = [];
  @Input() enFavoritos = false;

  constructor( ) { console.log('recupero heroe',this.heroes) }

  ngOnInit() {}

}
