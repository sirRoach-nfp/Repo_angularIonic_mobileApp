import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultPagePage } from './search-result-page.page';

describe('SearchResultPagePage', () => {
  let component: SearchResultPagePage;
  let fixture: ComponentFixture<SearchResultPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
