import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SectionsPageRoutingModule } from './sections-routing.module';

import { SectionsPage } from './sections.page';
import { HomePage } from '../home/home.page';
import { NgPipesModule, FilterByPipe } from 'ngx-pipes';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SectionsPageRoutingModule,
    NgPipesModule,

  ],
  declarations: [SectionsPage],
  providers: [HomePage, FilterByPipe]
})
export class SectionsPageModule { }
