import { Injectable } from '@angular/core';
import { Storage } from "@capacitor/core";
import { ToastController } from '@ionic/angular';
import { Heroe } from './heroes.service';

@Injectable({
  providedIn: 'root'
})
export class LocalheroeService {

  heroes: Heroe[] = [];
  
  constructor(public toastController: ToastController) {
    this.cargarFavoritos();
   }

   guardarHeroes( heroe: Heroe) {    
      const existe = this.heroes.find(her => her.nombre === heroe.nombre);

      if (!existe) {
      this.heroes.unshift(heroe);
     
          Storage.set({
             key: 'heroe',
             value: JSON.stringify(this.heroes)
          });
     }
     this.presentToast( 'Se guardo en favoritos' );
     console.log('heroe guardado',heroe )
  }
  
  cargarFavoritos() {
    const favorito = Storage.get({ key: 'h' }).then(favorito => {
      if (favorito.value != null) {
        this.heroes.unshift(JSON.parse(favorito.value));
      }
    });    
  }

  borrarHeroes(heroe: Heroe) {
    this.heroes = this.heroes.filter(her => her.nombre != heroe.nombre);

    Storage.set({
      key: 'heroe',
      value: JSON.stringify(this.heroes)
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