import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home/home-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './home/layout/header/header.component';
import { NavComponent } from './home/layout/nav/nav.component';
import { FooterComponent } from './home/layout/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ]
})
export class HomeModule { }
