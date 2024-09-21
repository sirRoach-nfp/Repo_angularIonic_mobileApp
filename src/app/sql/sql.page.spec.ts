import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqlPage } from './sql.page';

describe('SqlPage', () => {
  let component: SqlPage;
  let fixture: ComponentFixture<SqlPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
