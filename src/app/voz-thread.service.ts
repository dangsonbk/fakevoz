import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { VozThread} from './voz';
import { VOZTHREADS } from './voz-mock';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VozThreadService {

  private voz_thread_url = 'http://cors.io/?https://p.voz.vn/feed/';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`VozThreadService: ${message}`);
  }

  getThreads(): Observable<VozThread[]> {
    this.messageService.add('Thread: fetched threads');
    return this.http.get<VozThread[]>(this.voz_thread_url);
  }

  getThread(id:number): Observable<VozThread> {
    this.messageService.add(`VozThreadService: fetched thread id=${id}`);
    return of(VOZTHREADS.find(voz_thread => voz_thread.id === id));
  }

}