import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqldiffpagePage } from './sqldiffpage.page';

describe('SqldiffpagePage', () => {
  let component: SqldiffpagePage;
  let fixture: ComponentFixture<SqldiffpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SqldiffpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
