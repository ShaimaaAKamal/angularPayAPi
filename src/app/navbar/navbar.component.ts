import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   @ViewChild('close') close:any;
   @ViewChild('menu') menu:any;
   @ViewChild('collapse') navbarCollapse:any;

   handleOpenMenu=()=>{
    this.menu.nativeElement.classList.add('d-none');
    this.close.nativeElement.classList.add('adjustBtn');
    this.close.nativeElement.classList.remove('d-none');
    this.navbarCollapse.nativeElement.classList.add('d-block');
    this.navbarCollapse.nativeElement.classList.remove('d-none');
  }
   handleCloseMenu=()=>{
    this.close.nativeElement.classList.add('d-none');
    this.menu.nativeElement.classList.remove('d-none');
    this.navbarCollapse.nativeElement.classList.add('d-none');
    this.navbarCollapse.nativeElement.classList.remove('d-block');
    this.close.nativeElement.classList.remove('adjustBtn');
  }
}
