import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPharmacyComponent } from './admin-pharmacy.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdminPharmacyComponent', () => {
  let component: AdminPharmacyComponent;
  let fixture: ComponentFixture<AdminPharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPharmacyComponent ],imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
