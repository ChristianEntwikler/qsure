import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AdminHomeComponent } from './modules/nimda/home/home.component';
import { HomeComponent } from './modules/home/home/home.component';


const routes: Routes = [
  {
    path: "home",
    component: HomeComponent,
    /* loadChildren: () => import('./modules/home/home.module')
    .then(m => m.HomeModule), */
  },

  {
    path: "secured",
    //component: AdminHomeComponent,
    loadChildren: () => import('./modules/nimda/home/home.module')
    .then(m => m.AdminHomeModule),
  },
  
    {
    path: "auth",
    loadChildren: () => import('./modules/nimda/auth/auth.module')
    .then(m => m.AuthModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
