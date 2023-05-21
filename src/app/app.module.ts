import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { BoardComponent } from './pages/board/board.component';
import { TaskComponent } from './pages/task/task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule } from '@angular/material/sidenav';
import {MatIconModule } from '@angular/material/icon';
import {MatListModule } from '@angular/material/list';
import {MatButtonModule } from '@angular/material/button';
import { addTaskModal } from './pages/add-task-modal/add-task-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BoardModalComponent } from './pages/board-modal/board-modal.component';
import { EditBoardModalComponent } from './pages/edit-board-modal/edit-board-modal.component';
import { DeleteBoardModalComponent } from './pages/delete-board-modal/delete-board-modal.component';
import { ViewtaskModalComponent } from './pages/viewtask-modal/viewtask-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    BoardComponent,
    TaskComponent,
    addTaskModal,
    BoardModalComponent,
    EditBoardModalComponent,
    DeleteBoardModalComponent,
    ViewtaskModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
