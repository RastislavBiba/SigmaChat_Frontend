import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiestnostiStrankaComponent } from './miestnosti-stranka.component';

describe('MiestnostiStrankaComponent', () => {
  let component: MiestnostiStrankaComponent;
  let fixture: ComponentFixture<MiestnostiStrankaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiestnostiStrankaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiestnostiStrankaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
