import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-sticky',
  templateUrl: './nav-sticky.component.html',
  styleUrls: ['./nav-sticky.component.css']
})
export class NavStickyComponent {

  constructor() {
    document.addEventListener('scroll', () => {
      let nav: any = document.getElementById('nav')
      console.log(window.innerHeight)
      console.log(window.scrollY)
      if (window.scrollY < window.innerHeight) {
        
        nav.classList.remove('active')
        nav.classList.add('disabled')
      } else if (window.scrollY >= window.innerHeight) {
        
        nav.classList.remove('disabled')
      }
      
    })
  }

  btnNav(){
    let nav: any = document.getElementById('nav')
    if(nav.classList.contains('active')){
      nav.classList.remove('active')
    }else{
      nav.classList.add('active')
    }
  }

}
