import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreHijopadreComponent } from './padre-hijopadre.component';

describe('PadreHijopadreComponent', () => {
  let component: PadreHijopadreComponent;
  let fixture: ComponentFixture<PadreHijopadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadreHijopadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadreHijopadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
