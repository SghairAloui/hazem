import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorSecretaryComponent } from './doctor-secretary.component';
import { TranslateService } from '@ngx-translate/core';

describe('DoctorSecretaryComponent', () => {
  let component: DoctorSecretaryComponent;
  let fixture: ComponentFixture<DoctorSecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorSecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorSecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
