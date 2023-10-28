import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAlertDialogComponent } from './new-alert-dialog.component';

describe('NewAlertDialogComponent', () => {
  let component: NewAlertDialogComponent;
  let fixture: ComponentFixture<NewAlertDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAlertDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAlertDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
