import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpravaZoznamComponent } from './sprava-zoznam.component';

describe('SpravaZoznamComponent', () => {
  let component: SpravaZoznamComponent;
  let fixture: ComponentFixture<SpravaZoznamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpravaZoznamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpravaZoznamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
