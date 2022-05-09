import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvodStrankaComponent } from './uvod-stranka.component';

describe('UvodStrankaComponent', () => {
  let component: UvodStrankaComponent;
  let fixture: ComponentFixture<UvodStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvodStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvodStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
