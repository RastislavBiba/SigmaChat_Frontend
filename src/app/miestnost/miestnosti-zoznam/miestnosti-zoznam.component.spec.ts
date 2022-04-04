import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiestnostiZoznamComponent } from './miestnosti-zoznam.component';

describe('VypozickyZoznamComponent', () => {
  let component: MiestnostiZoznamComponent;
  let fixture: ComponentFixture<MiestnostiZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiestnostiZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiestnostiZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
