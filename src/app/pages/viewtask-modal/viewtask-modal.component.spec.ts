import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtaskModalComponent } from './viewtask-modal.component';

describe('ViewtaskModalComponent', () => {
  let component: ViewtaskModalComponent;
  let fixture: ComponentFixture<ViewtaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtaskModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
