import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoHijopadreComponent } from './hijo-hijopadre.component';

describe('HijoHijopadreComponent', () => {
  let component: HijoHijopadreComponent;
  let fixture: ComponentFixture<HijoHijopadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoHijopadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoHijopadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
