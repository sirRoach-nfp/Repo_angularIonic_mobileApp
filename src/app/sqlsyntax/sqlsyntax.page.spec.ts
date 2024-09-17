import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqlsyntaxPage } from './sqlsyntax.page';

describe('SqlsyntaxPage', () => {
  let component: SqlsyntaxPage;
  let fixture: ComponentFixture<SqlsyntaxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlsyntaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
