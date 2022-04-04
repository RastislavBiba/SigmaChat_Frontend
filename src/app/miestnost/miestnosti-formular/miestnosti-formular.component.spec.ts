import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiestnostiFormularComponent } from './miestnosti-formular.component';

describe('VypozickaFormularComponent', () => {
  let component: MiestnostiFormularComponent;
  let fixture: ComponentFixture<MiestnostiFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiestnostiFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiestnostiFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
