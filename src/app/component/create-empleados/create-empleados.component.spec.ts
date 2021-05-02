import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpleadosComponent } from './create-empleados.component';

describe('CreateEmpleadosComponent', () => {
  let component: CreateEmpleadosComponent;
  let fixture: ComponentFixture<CreateEmpleadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpleadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpleadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
