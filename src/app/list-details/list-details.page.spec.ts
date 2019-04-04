import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { listDetailsPage } from './list-details.page';

describe('listDetailsPage ', () => {
  let component: listDetailsPage ;
  let fixture: ComponentFixture<listDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ listDetailsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(listDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
