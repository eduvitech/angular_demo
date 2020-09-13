import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';



@NgModule({
  declarations: [AboutusComponent, ContactusComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
