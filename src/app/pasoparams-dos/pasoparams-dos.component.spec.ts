import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoparamsDosComponent } from './pasoparams-dos.component';

describe('PasoparamsDosComponent', () => {
  let component: PasoparamsDosComponent;
  let fixture: ComponentFixture<PasoparamsDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasoparamsDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasoparamsDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
