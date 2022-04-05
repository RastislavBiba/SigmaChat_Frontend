import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpravaStrankaComponent } from './sprava-stranka.component';

describe('SpravaStrankaComponent', () => {
  let component: SpravaStrankaComponent;
  let fixture: ComponentFixture<SpravaStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpravaStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpravaStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
