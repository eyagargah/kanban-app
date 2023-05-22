import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { addTaskModal } from '../add-task-modal/add-task-modal.component';
import { EditBoardModalComponent } from '../edit-board-modal/edit-board-modal.component';
import { DeleteBoardModalComponent } from '../delete-board-modal/delete-board-modal.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sideNavOpened : boolean | undefined 
  addTaskModalDialogRef: MatDialogRef<addTaskModal> | undefined;
  deleteBoardDialogRef :MatDialogRef<DeleteBoardModalComponent> | undefined
  EditDialogRef: MatDialogRef<EditBoardModalComponent> | undefined;

  constructor(private dialog: MatDialog) {}

  dropDownMenu() {
    const dropdownMenu = document.querySelector('.dropdownContent');

    if (dropdownMenu?.classList.contains('hide')) {
      dropdownMenu.classList.remove('hide');
    } else {
      dropdownMenu?.classList.add('hide');
    }
  }

  showSideBar() {
    const showSidebar = document.querySelector('.showSidebar');
    const logo = document.querySelector('.logo')
    if (showSidebar?.classList.contains('show')) {
      showSidebar.classList.remove('show');
      showSidebar.classList.add('hide');
      this.sideNavOpened = true
    }
  }
  hideSideNav() {
    const showSidebar = document.querySelector('.showSidebar');
    const logo = document.querySelector('.logo')
    if (showSidebar?.classList.contains('hide')) {
      logo?.classList.add('show')
      logo?.classList.remove('hide');
      showSidebar.classList.remove('hide');
      showSidebar.classList.add('show');
      this.sideNavOpened = false
    }
  }

  openTaskModal() {
    this.addTaskModalDialogRef = this.dialog.open(addTaskModal);
  }

  editBoard(){
    this.EditDialogRef = this.dialog.open(EditBoardModalComponent);
  }

  
  deleteBoard(){
    this.deleteBoardDialogRef = this.dialog.open(DeleteBoardModalComponent)
  }
}
