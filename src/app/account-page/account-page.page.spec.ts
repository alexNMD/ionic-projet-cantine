import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountPagePage } from './account-page.page';

describe('AccountPagePage', () => {
  let component: AccountPagePage;
  let fixture: ComponentFixture<AccountPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
