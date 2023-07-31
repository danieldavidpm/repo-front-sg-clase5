import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./modules/auth/auth.component";
import { MainComponent } from "./modules/main/main.component";
import { CoreComponent } from "./modules/core/core.component";

const routes: Routes = [
    { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule), component: AuthComponent},
    { path: 'main', loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), component: MainComponent},
    { path: 'core', loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule), component: CoreComponent},
    { path: '', redirectTo: 'auth', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }