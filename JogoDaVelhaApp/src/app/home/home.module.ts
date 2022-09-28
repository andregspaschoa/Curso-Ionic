import { NgModule } from '@angular/core';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { JogoDaVelhaModule } from '../jogo-da-velha/jogo-da-velha.module';


@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule,
    JogoDaVelhaModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
