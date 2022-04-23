import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarPersonaComponent } from './mostrar-persona.component';

describe('MostrarPersonaComponent', () => {
  let component: MostrarPersonaComponent;
  let fixture: ComponentFixture<MostrarPersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarPersonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
