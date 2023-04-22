import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicialComponent } from './componentes/inicial/inicial.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { AdminComponent } from './componentes/admin/admin.component';
import { SobreComponent } from './componentes/principal/sobre/sobre.component';
import { NavStickyComponent } from './componentes/nav-sticky/nav-sticky.component';
import { ProjetosComponent } from './componentes/principal/projetos/projetos.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicialComponent,
    PrincipalComponent,
    AdminComponent,
    SobreComponent,
    NavStickyComponent,
    ProjetosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
