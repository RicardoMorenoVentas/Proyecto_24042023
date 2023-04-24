import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasomasparamsDosComponent } from './pasomasparams-dos.component';

describe('PasomasparamsDosComponent', () => {
  let component: PasomasparamsDosComponent;
  let fixture: ComponentFixture<PasomasparamsDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasomasparamsDosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasomasparamsDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
