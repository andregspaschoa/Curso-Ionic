import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JogoDaVelhaComponent } from './jogo-da-velha.component';
import { JogoDaVelhaService } from './shared/jogo-da-velha.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  declarations: [
  	JogoDaVelhaComponent
  ],
  exports: [
  	JogoDaVelhaComponent
  ],
  providers: [
  	JogoDaVelhaService
  ]
})
export class JogoDaVelhaModule { }
