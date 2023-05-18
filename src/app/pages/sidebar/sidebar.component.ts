import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
 
  itoogle: boolean = false;
  toggleMenu() {
    alert('clicked')
    this.itoogle = !this.itoogle;
    
  }


  dropDownMenu(){
    const dropdownMenu = document.querySelector('.dropdownContent')

    if(dropdownMenu?.classList.contains('hide')){
      dropdownMenu.classList.remove('hide')
    }else {
      dropdownMenu?.classList.add('hide')
    }
  
  }
 
}
