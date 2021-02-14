import { Component,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { LocalheroeService } from '../../../services/heroe.service'

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.scss'],
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};

  @Input() indice: number;
  @Input() enFavoritos;


  constructor(private actionSheetCtrl: ActionSheetController,
    private localService: LocalheroeService) {}

  ngOnInit() {}

  async lanzarMenu() {

    let guardarBorrarBtn;

    if (!this.enFavoritos) {
      guardarBorrarBtn = 
      {
        text: 'Agregar a Favorito',
        icon: 'heart',
        cssClass: 'action-dark',
        handler: () => {
          this.localService.guardarHeroes(this.heroe);
        }
      }
    } else {
      guardarBorrarBtn = 
      {
        text: 'Eliminar',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.localService.borrarHeroes(this.heroe);
        }
      }

    }
    const actionSheet = await this.actionSheetCtrl.create({
        buttons: [guardarBorrarBtn, 
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

  }

}