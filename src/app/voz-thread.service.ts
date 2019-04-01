import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { VozThreads} from './voz';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class VozThreadService {

  private voz_threads_url = 'https://cors.io/?https://p.voz.vn/feed';

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

  getThread(id:number): Observable<VozThreads> {
    return null;
  }
}