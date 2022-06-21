import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})
export class TVSearchComponent implements OnInit {
  search = new FormControl
  constructor() { }

  ngOnInit(): void {
  }

}
