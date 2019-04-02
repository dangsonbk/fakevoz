import { Component, OnInit } from '@angular/core';
import { VozThreads } from '../voz';
import { VozThreadService } from '../voz-thread.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  voz_threads: VozThreads;
  voz_error: HttpErrorResponse;

  constructor(private vozThreadService: VozThreadService) { }

  ngOnInit() {
    this.getThreads();
  }

  getThreads(): void {
    this.vozThreadService.getThreads()
      .subscribe(
        voz_threads => this.voz_threads = voz_threads["results"],
        error => this.voz_error = error
      );
  }
}