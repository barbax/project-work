import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeContainerComponent } from './anime-container.component';

describe('AnimeContainerComponent', () => {
  let component: AnimeContainerComponent;
  let fixture: ComponentFixture<AnimeContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimeContainerComponent]
    });
    fixture = TestBed.createComponent(AnimeContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
