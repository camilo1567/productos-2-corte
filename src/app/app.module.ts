import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NuevoComponent } from './components/nuevo/nuevo.component';
import { Nuevo1Component } from './components/nuevo1/nuevo1.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BuscarpComponent } from './components/buscarp/buscarp.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ProductInformationComponent } from './product-information/product-information.component';

@NgModule({
  declarations: [
    AppComponent,
    NuevoComponent,
    Nuevo1Component,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    AboutComponent,
    NavbarComponent,
    BuscadorComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    HeroesComponent,
    HomeComponent,
    BuscarpComponent,
    ProductosComponent,
    ProductoComponent,
    ProductInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
