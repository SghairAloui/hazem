import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretaryComponent } from './secretary.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SecretaryComponent', () => {
  let component: SecretaryComponent;
  let fixture: ComponentFixture<SecretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
