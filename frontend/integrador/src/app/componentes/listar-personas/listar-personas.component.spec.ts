import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPersonasComponent } from './listar-personas.component';

describe('ListarPersonasComponent', () => {
  let component: ListarPersonasComponent;
  let fixture: ComponentFixture<ListarPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
