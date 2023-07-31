import { NgModule } from '@angular/core';
import { ConsultageneralComponent } from './pages/consultageneral/consultageneral.component';
import { RouterModule, Routes } from '@angular/router';
import { RegistrodeprocesosComponent } from './pages/registrodeprocesos/registrodeprocesos.component';


const routes: Routes = [
  { path: 'consultageneral', component: ConsultageneralComponent },
  { path: 'registrodeprocesos', component: RegistrodeprocesosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRountingModule { }
