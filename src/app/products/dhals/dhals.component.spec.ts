/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DhalsComponent } from './dhals.component';

describe('DhalsComponent', () => {
  let component: DhalsComponent;
  let fixture: ComponentFixture<DhalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DhalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
