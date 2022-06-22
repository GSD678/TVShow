import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl ,Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-tv-search',
  templateUrl: './tv-search.component.html',
  styleUrls: ['./tv-search.component.css']
})

export class TVSearchComponent implements OnInit {
  @Output() searchEvent = new EventEmitter<string>()

  search = new FormControl('', [Validators.minLength(3)])
  constructor() { }
  ngOnInit(): void {
    this.search.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(data => {
      if(!this.search.invalid){
        this.searchEvent.emit(data)
  }
  })
}
  }