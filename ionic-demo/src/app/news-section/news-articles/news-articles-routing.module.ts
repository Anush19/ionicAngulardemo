import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsArticlesPage } from './news-articles.page';

const routes: Routes = [
  {
    path: '',
    component: NewsArticlesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewsArticlesPageRoutingModule {}
