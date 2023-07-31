import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { RolesComponent } from './pages/roles/roles.component';
import { PanelComponent } from './pages/panel/panel.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'roles', component: RolesComponent },
  { path: 'panel', component: PanelComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRountingModule { }
