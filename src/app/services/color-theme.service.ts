import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {

  constructor() { }
  darkMode = false
  getTheme(){
    this.darkMode = JSON.parse(localStorage['darkMode'])
   
  }
  setTheme(themeMode: string){
    localStorage.setItem('darkMode', themeMode)
  }
  toggleTheme(){
    this.darkMode = !this.darkMode
    this.setTheme(JSON.stringify(this.darkMode))
  }
}
