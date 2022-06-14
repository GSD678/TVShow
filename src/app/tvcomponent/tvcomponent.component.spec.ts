import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TVComponentComponent } from './tvcomponent.component';

describe('TVComponentComponent', () => {
  let component: TVComponentComponent;
  let fixture: ComponentFixture<TVComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TVComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TVComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
