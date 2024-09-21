import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqlinsertPage } from './sqlinsert.page';

describe('SqlinsertPage', () => {
  let component: SqlinsertPage;
  let fixture: ComponentFixture<SqlinsertPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlinsertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
