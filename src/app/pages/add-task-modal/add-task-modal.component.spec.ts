import { ComponentFixture, TestBed } from '@angular/core/testing';

import { addTaskModal } from './add-task-modal.component';

describe('TaskModalComponent', () => {
  let component: addTaskModal;
  let fixture: ComponentFixture<addTaskModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ addTaskModal ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(addTaskModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
