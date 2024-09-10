import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtmlattriPage } from './htmlattri.page';

describe('HtmlattriPage', () => {
  let component: HtmlattriPage;
  let fixture: ComponentFixture<HtmlattriPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlattriPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
