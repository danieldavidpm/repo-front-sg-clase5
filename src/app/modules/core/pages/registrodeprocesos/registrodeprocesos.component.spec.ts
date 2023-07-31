import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodeprocesosComponent } from './registrodeprocesos.component';

describe('RegistrodeprocesosComponent', () => {
  let component: RegistrodeprocesosComponent;
  let fixture: ComponentFixture<RegistrodeprocesosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrodeprocesosComponent]
    });
    fixture = TestBed.createComponent(RegistrodeprocesosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
