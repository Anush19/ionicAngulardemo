import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NewsArticlesPage } from 'src/app/news-articles/news-articles.page';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  @Input() cardTitle: string = '';
  @Input() cardSubTitle: string = '';
  @Input() contentText: string = '';
  @Input() imageLocation: any = '';
  @Input() imageAltText: string = '';
  
  constructor() { }
  ngOnInit() { }

}
