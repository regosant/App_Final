import { Component, OnInit, Input,Output, EventEmitter  } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Villano } from '../../../services/villanos.service';
import { LocalvillanoService } from '../../../services/villano.service'


@Component({
  selector: 'app-villano-tarjeta',
  templateUrl: './villano-tarjeta.component.html',
  styleUrls: ['./villano-tarjeta.component.scss'],
})
export class VillanoTarjetaComponent implements OnInit {
  
  @Input() villano: Villano;
  @Input() index: number;
  @Input() enFavoritos;

  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private actionSheetCtrl: ActionSheetController,
    private localService: LocalvillanoService) {}

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
          this.localService.guardarVillanos(this.villano);
        }
      }
    } else {
      guardarBorrarBtn = 
      {
        text: 'Eliminar',
        icon: 'trash',
        cssClass: 'action-dark',
        handler: () => {
          this.localService.borrarVillanos(this.villano);
        }
      }

    }
    const actionSheet = await this.actionSheetCtrl.create({
        buttons: [guardarBorrarBtn
       , 
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
