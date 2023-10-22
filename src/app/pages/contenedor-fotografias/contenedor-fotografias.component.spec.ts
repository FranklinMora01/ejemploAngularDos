import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorFotografiasComponent } from './contenedor-fotografias.component';

describe('ContenedorFotografiasComponent', () => {
  let component: ContenedorFotografiasComponent;
  let fixture: ComponentFixture<ContenedorFotografiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenedorFotografiasComponent]
    });
    fixture = TestBed.createComponent(ContenedorFotografiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
