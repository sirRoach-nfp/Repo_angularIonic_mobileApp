import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqlselectPage } from './sqlselect.page';

describe('SqlselectPage', () => {
  let component: SqlselectPage;
  let fixture: ComponentFixture<SqlselectPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlselectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
