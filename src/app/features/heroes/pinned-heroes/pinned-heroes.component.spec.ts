import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinnedHeroesComponent } from './pinned-heroes.component';

describe('PinnedHeroesComponent', () => {
  let component: PinnedHeroesComponent;
  let fixture: ComponentFixture<PinnedHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinnedHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinnedHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
