import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultageneralComponent } from './consultageneral.component';

describe('ConsultageneralComponent', () => {
  let component: ConsultageneralComponent;
  let fixture: ComponentFixture<ConsultageneralComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultageneralComponent]
    });
    fixture = TestBed.createComponent(ConsultageneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
