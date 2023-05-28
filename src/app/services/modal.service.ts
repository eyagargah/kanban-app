import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }
  darkBackground = false;

  showTaskModal = false;
  showEditTaskModal = false;
  showCreateTaskModal = false;
  showDeleteTaskModal = false;

  showEditBoardModal = false;
  showDeleteBoardModal = false;
  showCreatedBoardModal = false;

  showEditDeleteContainer = false;

  
}
