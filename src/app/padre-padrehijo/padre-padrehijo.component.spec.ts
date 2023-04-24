import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrePadrehijoComponent } from './padre-padrehijo.component';

describe('PadrePadrehijoComponent', () => {
  let component: PadrePadrehijoComponent;
  let fixture: ComponentFixture<PadrePadrehijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrePadrehijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrePadrehijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
