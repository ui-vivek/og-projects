import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private _router:Router){}

  signOut(){
   if(localStorage.getItem('isLogedIn')){
    localStorage.setItem('isLogedIn','false')
    this._router.navigate(['sign-in'])
   }
  }

}
