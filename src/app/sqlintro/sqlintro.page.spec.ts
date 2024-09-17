import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SqlintroPage } from './sqlintro.page';

describe('SqlintroPage', () => {
  let component: SqlintroPage;
  let fixture: ComponentFixture<SqlintroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlintroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
