import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
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
}
