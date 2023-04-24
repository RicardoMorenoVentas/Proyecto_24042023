import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasoparamsUnoComponent } from './pasoparams-uno.component';

describe('PasoparamsUnoComponent', () => {
  let component: PasoparamsUnoComponent;
  let fixture: ComponentFixture<PasoparamsUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasoparamsUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasoparamsUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
