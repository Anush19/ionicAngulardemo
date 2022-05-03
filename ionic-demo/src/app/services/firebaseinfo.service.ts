import { Injectable } from '@angular/core';
import { collectionData, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { News } from '../interface/newsInterface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseNewsService {
  newsInfo: News = {
    title: '',
    subtitle: '',
    altText: '',
    info: '',
    thumbnail: ''
  };
  constructor(private firestore: Firestore) { }
  getNews(): Observable<News[]> {
    const newsRef = collection(this.firestore, 'news');
    return collectionData(newsRef, { idField: 'id' }) as Observable<News[]>;
  }

  getNewsById(id): Observable<News[]> {
    const docRef = doc(this.firestore, `news/${id}`);
    return docData(docRef) as Observable<News[]>;
  }

  addNews(news: News) {
    const newsref = collection(this.firestore, 'news');
    return addDoc(newsref, news);
  }

  deleteNews(news: News) {
    const docRef = doc(this.firestore, `news/${news.id}`);
    return deleteDoc(docRef);
  }

  updateNews(news: News) {
    const docRef = doc(this.firestore, `news/${news.id}`);
    return updateDoc(docRef, {
      title: news.title,
      subtitle: news.subtitle,
      altText: news.altText,
      info: news.info,
      thumbnail: news.thumbnail
    });
  }
}

