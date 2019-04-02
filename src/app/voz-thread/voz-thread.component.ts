import { Component, OnInit } from '@angular/core';
import { VozThreadService } from '../voz-thread.service';
import { VozThreads } from '../voz';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-voz-thread',
  templateUrl: './voz-thread.component.html',
  styleUrls: ['./voz-thread.component.css']
})
export class VozThreadComponent implements OnInit {
  voz_threads: VozThreads[];
  voz_error: HttpErrorResponse;
  
  constructor(private vozThreadService: VozThreadService) { }

  getThreads(): void {
    this.vozThreadService.getThreads()
      .subscribe(
        voz_threads => this.voz_threads = voz_threads["results"],
        error => this.voz_error = error
      );
  }
  
  ngOnInit() {
    this.getThreads();
  }

}
