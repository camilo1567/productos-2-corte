import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/home/home.component';
import { BodyComponent } from './components/body/body.component';
import { BuscarpComponent } from './components/buscarp/buscarp.component';
import { ProductInformationComponent } from './product-information/product-information.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'inicial', component: BodyComponent },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'producto/:termino', component: ProductInformationComponent},

  { path: 'buscar/:termino', component: BuscadorComponent },

  { path: 'buscarp/:termino', component: BuscarpComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
