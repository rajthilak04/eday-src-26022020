/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpicesComponent } from './spices.component';

describe('SpicesComponent', () => {
  let component: SpicesComponent;
  let fixture: ComponentFixture<SpicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
