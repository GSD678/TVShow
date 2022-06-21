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
        'https://static.tvmaze.com/uploads/images/medium_portrait/403/1007647.jpg',
      rating: 0,
      runtime: 0,
      time: '22:00',
      days: 'Sunday',
    };
  }

  ngOnInit(): void {
    this.tVServiceService.getCurrentTVData('Game of Thrones').subscribe(data => this.current = data);
  }
}
