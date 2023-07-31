import { NgModule } from '@angular/core';

import { CoreRountingModule } from './core-rounting.module';

import { ConsultageneralComponent } from './pages/consultageneral/consultageneral.component';
import { RegistrodeprocesosComponent } from './pages/registrodeprocesos/registrodeprocesos.component';



@NgModule({
  declarations: [
    ConsultageneralComponent,
    RegistrodeprocesosComponent
  ],
  imports: [
    CoreRountingModule
  ]
})
export class CoreModule { }
