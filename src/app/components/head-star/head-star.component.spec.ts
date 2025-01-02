import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadStarComponent } from './head-star.component';

describe('HeadStarComponent', () => {
  let component: HeadStarComponent;
  let fixture: ComponentFixture<HeadStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
