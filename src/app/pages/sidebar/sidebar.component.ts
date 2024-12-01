import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { addTaskModalComponent } from '../add-task-modal/add-task-modal.component';
import { EditBoardModalComponent } from '../edit-board-modal/edit-board-modal.component';
import { DeleteBoardModalComponent } from '../delete-board-modal/delete-board-modal.component';
import { BoardModalComponent } from '../board-modal/board-modal.component';
import { ColorThemeService } from 'src/app/services/color-theme.service';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentBoard = ''
  columns:any
  boards:any
  darkModeOn : boolean = false
  addTaskModalDialogRef: MatDialogRef<addTaskModalComponent> | undefined;
  addBoardModalDialogRef: MatDialogRef<BoardModalComponent> | undefined;
  deleteBoardDialogRef: MatDialogRef<DeleteBoardModalComponent> | undefined;
  EditDialogRef: MatDialogRef<EditBoardModalComponent> | undefined;

  constructor(private dialog: MatDialog, public colorTheme: ColorThemeService , private boardsService : BoardService ) {}

  ngOnInit(){
    this.boards = this.boardsService.boards.boards
  }
  
  getCurrentBoard(i:number){
   this.currentBoard = this.boards[i].name
   this.boardsService.setCurrentBoard(this.boardsService.boards.boards[i])
   this.boardsService.indexes.boardIndex = i
  }
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
    }
  }
  hideSideNav() {
    const showSidebar = document.querySelector('.showSidebar');
    if (showSidebar?.classList.contains('hide')) {
      showSidebar.classList.remove('hide');
      showSidebar.classList.add('show');
    }
  }

  openTaskModal() {
    this.addTaskModalDialogRef = this.dialog.open(addTaskModalComponent);
  }

  addNewBoard() {
    this.addBoardModalDialogRef = this.dialog.open(BoardModalComponent);
  }
  editBoard() {
    this.EditDialogRef = this.dialog.open(EditBoardModalComponent);
  }

  deleteBoard() {
    this.deleteBoardDialogRef = this.dialog.open(DeleteBoardModalComponent);
  }
 
}
