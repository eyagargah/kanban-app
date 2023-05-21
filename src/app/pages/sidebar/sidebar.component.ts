import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TaskComponent } from '../task/task.component';
import { addTaskModal } from '../add-task-modal/add-task-modal.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  sideNavOpened : boolean | undefined 
  fileNameDialogRef: MatDialogRef<TaskComponent> | undefined;

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
 
    if (showSidebar?.classList.contains('show')) {
      showSidebar.classList.remove('show');
      showSidebar.classList.add('hide');
      this.sideNavOpened = true
    }
  }
  hideSideNav() {
    const showSidebar = document.querySelector('.showSidebar');
    
    if (showSidebar?.classList.contains('hide')) {
      showSidebar.classList.remove('hide');
      showSidebar.classList.add('show');
      this.sideNavOpened = false
    }
  }

  openTaskModal() {
    this.fileNameDialogRef = this.dialog.open(addTaskModal);
  }
}
