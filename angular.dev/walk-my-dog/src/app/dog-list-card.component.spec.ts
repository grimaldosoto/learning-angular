import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogListCardComponent } from './dog-list-card.component';

describe('DogListCardComponent', () => {
  let component: DogListCardComponent;
  let fixture: ComponentFixture<DogListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DogListCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
