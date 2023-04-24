import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPadrehijoComponent } from './hijo-padrehijo.component';

describe('HijoPadrehijoComponent', () => {
  let component: HijoPadrehijoComponent;
  let fixture: ComponentFixture<HijoPadrehijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijoPadrehijoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijoPadrehijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
