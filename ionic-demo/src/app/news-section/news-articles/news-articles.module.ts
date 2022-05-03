import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsArticlesPageRoutingModule } from './news-articles-routing.module';

import { NewsArticlesPage } from './news-articles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsArticlesPageRoutingModule
  ],
  declarations: [NewsArticlesPage]
})
export class NewsArticlesPageModule {}
