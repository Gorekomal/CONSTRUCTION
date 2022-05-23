import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconstructionserviceComponent } from './reconstructionservice.component';

describe('ReconstructionserviceComponent', () => {
  let component: ReconstructionserviceComponent;
  let fixture: ComponentFixture<ReconstructionserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReconstructionserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconstructionserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
