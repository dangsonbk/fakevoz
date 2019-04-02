import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { VozThreads, VozThread, VozThreadComment} from './voz';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VozThreadService {

  private voz_threads_url = 'https://cors.io/?https://p.voz.vn/feed';
  private voz_thread_url = 'https://cors.io/?https://p.voz.vn/posts/';
  // private voz_threads_url = 'https://p.voz.vn/feed';
  // private voz_thread_url = 'https://p.voz.vn/posts/';
  private voz_thread_comment_url = '/comments';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`VozThreadService: ${message}`);
  }

  getThreads(): Observable<VozThreads[]> {
    this.messageService.add('Thread: fetched threads');
    return this.http.get<VozThreads[]>(this.voz_threads_url);
  }

  getThread(id:number): Observable<VozThread> {
    this.messageService.add('Thread: fetched thread');
    return this.http.get<VozThread>(this.voz_thread_url + id);
  }

  getThreadComment(id:number): Observable<VozThreadComment> {
    this.messageService.add('Thread: fetched thread comments');
    return this.http.get<VozThreadComment>(this.voz_thread_url + id + this.voz_thread_comment_url);
  }
}