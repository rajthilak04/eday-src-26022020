/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreshProduceComponent } from './fresh-produce.component';

describe('FreshProduceComponent', () => {
  let component: FreshProduceComponent;
  let fixture: ComponentFixture<FreshProduceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshProduceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshProduceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
