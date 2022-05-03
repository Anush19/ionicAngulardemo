import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AlertController, IonSlides, ModalController } from '@ionic/angular';
import { NewsArticlesPage } from '../news-section/news-articles/news-articles.page';
import { FirebaseNewsService } from '../services/firebaseinfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;
  @ViewChild(IonSlides) slides: IonSlides;
  @Output() onSelect = new EventEmitter<{}>();
  slideOpts = {
    initialSlide: 1,
    speed: 400,
    autoplay: true,
  };
  constructor(private router: Router, private service: FirebaseNewsService, private modalContrl: ModalController, private alertCntrl: AlertController) { }
  slidearr = [];
  ngOnInit() {
    this.service.getNews().subscribe(res => {
      console.log(res);
      this.slidearr = res;
    }, _err => {

    })
  }

  /**This block is just to demo check the add operations .. to be reordered later */
  async addNews() {
    const alert = await this.alertCntrl.create(
      {
        header: 'Add new news',
        inputs: [{
          name: 'title',
          placeholder: 'title',
          type: 'text'
        }, {
          name: 'subtitle',
          placeholder: 'subtitle',
          type: 'text'
        }, {
          name: 'info',
          placeholder: 'info',
          type: 'text'
        }, {
          name: 'thumbnail',
          placeholder: 'thumbnail',
          type: 'text'
        }, {
          name: 'altText',
          placeholder: 'altText',
          type: 'text'
        }],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel'
          },
          {
            text: 'Add',
            handler: (res) => {
              this.service.addNews({
                title: res.title,

                subtitle: res.subtitle,
                altText: res.altText,
                info: res.info,
                thumbnail: res.thumbnail
              })
            }
          }
        ]
      }


    );
    await alert.present();
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
    console.log('Current index is', this.slides.isEnd());
  }
  news() {
    this.router.navigate(['/news-articles']);
  }

  demise() {
    this.router.navigate(['/tabs/tab1/demise']);
  }

  communities() {
    this.router.navigate(['/tabs/tab1/communities']);
  }

  knowYourCommunity() {
    this.router.navigate(['/tabs/tab1/knowYourCommunity']);
  }
  /**This block is just to demo check the crud operations .. to be reordered later */
  async detectChangedSelection(news: any) {

    console.log('clicked');
    //this.router.navigate(['/news-articles']);
    const modal = await this.modalContrl.create({
      component: NewsArticlesPage,
      componentProps: { id: news.id },
      breakpoints: [0, 0.5, 0.8],
      initialBreakpoint: 0.5
    });
    modal.present();
  }

}
