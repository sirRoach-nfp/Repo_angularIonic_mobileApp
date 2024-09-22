import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchresultpagePage } from './searchresultpage.page';

describe('SearchresultpagePage', () => {
  let component: SearchresultpagePage;
  let fixture: ComponentFixture<SearchresultpagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchresultpagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
