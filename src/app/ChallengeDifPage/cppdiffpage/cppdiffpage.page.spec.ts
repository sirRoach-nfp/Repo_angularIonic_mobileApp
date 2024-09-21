import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CppdiffpagePage } from './cppdiffpage.page';

describe('CppdiffpagePage', () => {
  let component: CppdiffpagePage;
  let fixture: ComponentFixture<CppdiffpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CppdiffpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
