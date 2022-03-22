import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpravaFormularComponent } from './sprava-formular.component';

describe('SpravaFormularComponent', () => {
  let component: SpravaFormularComponent;
  let fixture: ComponentFixture<SpravaFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpravaFormularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpravaFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
