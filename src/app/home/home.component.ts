import { Component, OnInit } from '@angular/core';
import { VozThreads } from '../voz';
import { VozThreadService } from '../voz-thread.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.css' ]
})
export class HomeComponent implements OnInit {
  voz_threads: VozThreads;

  constructor(private vozThreadService: VozThreadService) { }

  ngOnInit() {
    this.getThreads();
  }

  getThreads(): void {
    this.vozThreadService.getThreads()
      .subscribe(voz_threads => this.voz_threads = voz_threads["results"]);
  }
}