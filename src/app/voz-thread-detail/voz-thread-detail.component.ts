import { Component, OnInit, Input } from '@angular/core';
import { VozThreads } from '../voz';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { VozThreadService }  from '../voz-thread.service';

@Component({
  selector: 'app-voz-thread-detail',
  templateUrl: './voz-thread-detail.component.html',
  styleUrls: ['./voz-thread-detail.component.css']
})
export class VozThreadDetailComponent implements OnInit {

  @Input() voz_thread: VozThreads;

  constructor(
    private route: ActivatedRoute,
    private vozThreadService: VozThreadService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getThread();
  }

  getThread(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vozThreadService.getThread(id)
      .subscribe(voz_thread => this.voz_thread = voz_thread);
  }

  goBack(): void {
    this.location.back();
  }
}
