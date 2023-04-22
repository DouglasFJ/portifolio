import { Component } from '@angular/core';
import { Projeto } from 'src/app/models/projetos';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {

  projetos: Projeto[] = []

  constructor(
    private http: HttpClient
  ){}

  ngOnInit(){
    this.http.get('assets/json/projetos.json').subscribe((projetos: any)=>{
      for(let projeto in projetos){
        this.projetos.push(projetos[projeto])
      }
      console.log(this.projetos)
    })
    
  }

}
