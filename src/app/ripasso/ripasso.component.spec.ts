import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RipassoComponent } from './ripasso.component';

describe('RipassoComponent', () => {
  let component: RipassoComponent;
  let fixture: ComponentFixture<RipassoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RipassoComponent]
    });
    fixture = TestBed.createComponent(RipassoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
