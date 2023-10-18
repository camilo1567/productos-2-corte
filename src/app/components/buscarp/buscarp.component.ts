import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MongodbService } from 'src/app/services/mongodb.service';

@Component({
  selector: 'app-buscarp',
  templateUrl: './buscarp.component.html',
  styleUrls: ['./buscarp.component.css'],
})
export class BuscarpComponent {
  termino!: string;
  misProductos: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private mongodb: MongodbService
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      //this.heroes = this._heroesService.buscarHeroes( params['termino'] );
      console.log(this.termino);

      let cargarProductos = this.cargarProductos();

      if(this.termino.length == 0){
        cargarProductos = this.cargarProductosxReferencia();
      }

    });
  }

  async cargarProductos() {
    await this.mongodb
      .getProductosComo(this.termino)
      .toPromise()
      .then((resp: any) => {
        this.misProductos = resp.results;
        console.log('PRODUCTOS', this.misProductos);
      });
  }

  async cargarProductosxReferencia() {
    await this.mongodb
      .getReferenciasXProducto(this.termino)
      .toPromise()
      .then((resp: any) => {
        this.misProductos = resp.results;
        //console.log('PRODUCTOS', this.misProductos);
      });
  }

  verProducto(id: string) {
    this.router.navigate( ['/producto',id] );
  }
}
