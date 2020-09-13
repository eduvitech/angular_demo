import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDirective } from './directives/index.directive';
import { IndexPipe } from './pipes/index.pipe';
import { DashboardPipe } from './pages/dashboard.pipe';



@NgModule({
  declarations: [IndexDirective, IndexPipe, DashboardPipe],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
