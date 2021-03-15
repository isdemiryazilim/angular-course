import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CokluDilComponent } from './coklu-dil.component';

describe('CokluDilComponent', () => {
  let component: CokluDilComponent;
  let fixture: ComponentFixture<CokluDilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CokluDilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CokluDilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
