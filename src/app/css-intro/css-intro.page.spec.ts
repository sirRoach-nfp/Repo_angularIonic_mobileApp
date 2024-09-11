import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CssIntroPage } from './css-intro.page';

describe('CssIntroPage', () => {
  let component: CssIntroPage;
  let fixture: ComponentFixture<CssIntroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CssIntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
