import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDiseaseComponent } from './patient-disease.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PatientDiseaseComponent', () => {
  let component: PatientDiseaseComponent;
  let fixture: ComponentFixture<PatientDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
