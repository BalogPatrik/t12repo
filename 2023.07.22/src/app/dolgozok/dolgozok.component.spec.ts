import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolgozokComponent } from './dolgozok.component';

describe('DolgozokComponent', () => {
  let component: DolgozokComponent;
  let fixture: ComponentFixture<DolgozokComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DolgozokComponent]
    });
    fixture = TestBed.createComponent(DolgozokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
