import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.component.html',
  styleUrls: ['./inicial.component.css']
})
export class InicialComponent {

  admin: boolean = false;

  constructor(private router: Router){}

  ngOnInit(){
    if(this.router.url === "/admin"){
      this.admin = true;
    }
    console.log(this.admin)
  }

}
