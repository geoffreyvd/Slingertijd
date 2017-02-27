/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GettersComponent } from './getters.component';

describe('GettersComponent', () => {
  let component: GettersComponent;
  let fixture: ComponentFixture<GettersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GettersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
