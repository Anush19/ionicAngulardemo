import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FirebaseNewsService } from '../../services/firebaseinfo.service';

@Component({
  selector: 'app-news-articles',
  templateUrl: './news-articles.page.html',
  styleUrls: ['./news-articles.page.scss'],
})
export class NewsArticlesPage implements OnInit {
  @Input() id: string = '';
  news = null;
  constructor(private service: FirebaseNewsService, private modalcntrl: ModalController) { }

  ngOnInit(): void {
    this.service.getNewsById(this.id).subscribe((res => {
      this.news = res;
    }))
  }
   /**This block is just to demo check the crud operations .. to be reordered later */
  updateNews(){
    console.log('id is ', this.id);
    console.log('news is ', this.news)
    this.service.updateNews(this.news);
  }
   /**This block is just to demo check the crud operations .. to be reordered later */
  async deleteNews(){
    await this.service.deleteNews(this.news);
    this.modalcntrl.dismiss();
  }
}
