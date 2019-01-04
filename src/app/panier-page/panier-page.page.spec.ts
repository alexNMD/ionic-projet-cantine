import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierPagePage } from './panier-page.page';

describe('PanierPagePage', () => {
  let component: PanierPagePage;
  let fixture: ComponentFixture<PanierPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanierPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanierPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
