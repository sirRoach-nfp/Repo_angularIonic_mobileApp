import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestTopicSelectorPage } from './test-topic-selector.page';

describe('TestTopicSelectorPage', () => {
  let component: TestTopicSelectorPage;
  let fixture: ComponentFixture<TestTopicSelectorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTopicSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
