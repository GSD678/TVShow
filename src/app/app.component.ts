import { Component } from '@angular/core';
import { ITV } from './itv';

import { TVServiceService } from './tvservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV-Show';
  currentShow : ITV = {
    name: '',
    status: '',
    premiered: '',
    network:'',
    image: '',
    rating: 0,
    runtime: 0,
    time: '',
    days: '',
  }
  constructor (private tvService : TVServiceService) {}
    doSearch(searchValue: string){
      const inputname = searchValue
      this.tvService.getCurrentTVData(inputname).subscribe(data => this.currentShow = data);
    }
}
