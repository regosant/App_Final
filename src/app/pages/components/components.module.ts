import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { VillanoTarjetaComponent } from './villano-tarjeta/villano-tarjeta.component';
import { HeroeComponent } from './heroe/heroe.component';
import { VillanoComponent } from './villano/villano.component';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HeroeTarjetaComponent,
    VillanoTarjetaComponent,
    HeroeComponent,
    VillanoComponent,
    InfoComponent,
  ],
  exports: [
    HeaderComponent,
    HeroeTarjetaComponent,
    VillanoTarjetaComponent,
    HeroeComponent,
    VillanoComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }