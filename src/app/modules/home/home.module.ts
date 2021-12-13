import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';


@NgModule({
  declarations: [
    HomeComponent,
    HomeLayoutComponent,
    HeaderComponent,
    FooterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
