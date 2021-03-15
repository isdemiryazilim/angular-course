import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialOrneklerComponent } from './material-ornekler.component';

describe('MaterialOrneklerComponent', () => {
  let component: MaterialOrneklerComponent;
  let fixture: ComponentFixture<MaterialOrneklerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialOrneklerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialOrneklerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
