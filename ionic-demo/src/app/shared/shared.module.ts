import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule
  ],
  exports: [NewsComponent]
})
export class SharedModule { }
