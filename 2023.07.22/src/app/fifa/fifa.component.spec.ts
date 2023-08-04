import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifaComponent } from './fifa.component';

describe('FifaComponent', () => {
  let component: FifaComponent;
  let fixture: ComponentFixture<FifaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FifaComponent]
    });
    fixture = TestBed.createComponent(FifaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
