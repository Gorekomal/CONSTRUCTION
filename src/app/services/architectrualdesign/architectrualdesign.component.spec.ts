import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectrualdesignComponent } from './architectrualdesign.component';

describe('ArchitectrualdesignComponent', () => {
  let component: ArchitectrualdesignComponent;
  let fixture: ComponentFixture<ArchitectrualdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchitectrualdesignComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchitectrualdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
