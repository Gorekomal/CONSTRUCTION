import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstructionconsultantComponent } from './constructionconsultant.component';

describe('ConstructionconsultantComponent', () => {
  let component: ConstructionconsultantComponent;
  let fixture: ComponentFixture<ConstructionconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConstructionconsultantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
