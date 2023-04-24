import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasomasparamsUnoComponent } from './pasomasparams-uno.component';

describe('PasomasparamsUnoComponent', () => {
  let component: PasomasparamsUnoComponent;
  let fixture: ComponentFixture<PasomasparamsUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasomasparamsUnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasomasparamsUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
