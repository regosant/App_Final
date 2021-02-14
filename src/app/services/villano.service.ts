import { Injectable } from '@angular/core';
import { Storage } from "@capacitor/core";
import { ToastController } from '@ionic/angular';
import { Villano } from './villanos.service';

@Injectable({
  providedIn: 'root'
})
export class LocalvillanoService {

  villanos: Villano[] = [];

  constructor(public toastController: ToastController) {
    this.cargarFavoritos();
   }

   guardarVillanos( villano: Villano) {
    console.log('Villanos Favoritos ',this.villanos);
    
      const existe = this.villanos.find(vill => vill.nombre === villano.nombre);

      if (!existe) {
      this.villanos.unshift(villano);
     
          Storage.set({
             key: 'villano',
             value: JSON.stringify(this.villanos)
          });
     }
    
     this.presentToast( 'Se guardo en favoritos' );
  }

  cargarFavoritos() {
 
    const favorito = Storage.get({ key: 'v' }).then(favorito => {
      if (favorito.value != null) {
        this.villanos.unshift(JSON.parse(favorito.value));
      }
    });    
  }

  borrarVillanos(villano: Villano) {
    this.villanos = this.villanos.filter(vill => vill.nombre != villano.nombre);

    Storage.set({
      key: 'villano',
      value: JSON.stringify(this.villanos)
    });
    this.presentToast( 'Se Eliminado Exitosamente' );
  }

  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

}