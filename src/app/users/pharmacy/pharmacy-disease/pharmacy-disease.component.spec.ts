import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacyDiseaseComponent } from './pharmacy-disease.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PharmacyDiseaseComponent', () => {
  let component: PharmacyDiseaseComponent;
  let fixture: ComponentFixture<PharmacyDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacyDiseaseComponent ],imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacyDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
