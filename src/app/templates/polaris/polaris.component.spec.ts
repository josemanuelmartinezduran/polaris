import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolarisComponent } from './polaris.component';

describe('PolarisComponent', () => {
  let component: PolarisComponent;
  let fixture: ComponentFixture<PolarisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolarisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolarisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
