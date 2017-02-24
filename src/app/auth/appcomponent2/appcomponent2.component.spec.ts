/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Appcomponent2Component } from './appcomponent2.component';

describe('Appcomponent2Component', () => {
  let component: Appcomponent2Component;
  let fixture: ComponentFixture<Appcomponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Appcomponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Appcomponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
