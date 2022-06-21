import { Component, OnInit } from '@angular/core';
import { ITV } from '../itv';
import { TVServiceService } from '../tvservice.service';

@Component({
  selector: 'app-tvcomponent',
  templateUrl: './tvcomponent.component.html',
  styleUrls: ['./tvcomponent.component.css'],
})
export class TVComponentComponent implements OnInit {
  current: ITV;

  constructor(private tVServiceService: TVServiceService) {
    this.current = {
      name: '',
      status: '',
      premiered: '',
      network: '',
      image:
        '',
      rating: 0,
      runtime: 0,
      time: '',
      days: '',
    };
  }

  ngOnInit(): void {
    this.tVServiceService.getCurrentTVData('Game of thrones').subscribe(data => this.current = data);
  }
}
