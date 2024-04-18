import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirreriaComponent } from './birreria.component';

describe('BirreriaComponent', () => {
  let component: BirreriaComponent;
  let fixture: ComponentFixture<BirreriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BirreriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BirreriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
