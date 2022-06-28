import { Component, Input, OnInit } from '@angular/core';
import { ITV } from '../itv';
import { TVServiceService } from '../tvservice.service';

@Component({
  selector: 'app-tvcomponent',
  templateUrl: './tvcomponent.component.html',
  styleUrls: ['./tvcomponent.component.css'],
})
export class TVComponentComponent implements OnInit {
<<<<<<< HEAD
  @Input() current: ITV;

  constructor(private tVServiceService: TVServiceService) {
=======
  @Input() current: ITV
  constructor(private tvServiceService: TVServiceService) {
>>>>>>> 77326423bffb3f620e8c84068e03bf60ca488650
    this.current = {
      name: '',
      status: '',
      premiered: '',
      network: '',
      image: '',
      rating: 0,
      runtime: 0,
      time: '',
      days: '',
    };
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.tVServiceService.getCurrentTVData('Friends').subscribe(data => this.current = data);
=======
>>>>>>> 77326423bffb3f620e8c84068e03bf60ca488650
  }
}
