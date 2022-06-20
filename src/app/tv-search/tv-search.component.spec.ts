import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVSearchComponent } from './tv-search.component';

describe('TVSearchComponent', () => {
  let component: TVSearchComponent;
  let fixture: ComponentFixture<TVSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
