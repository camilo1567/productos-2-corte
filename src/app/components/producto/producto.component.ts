import { Component, Input } from '@angular/core';
import { Multimedia, Producto, Referencia } from 'src/app/interfaces';
import { MongodbService } from 'src/app/services/mongodb.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  @Input() producto!: Producto;
  @Input() index!: number;

  referencesColor: Referencia[] = [];
  multimediaColor: Multimedia[] = [];

  idGrupoMultimedia: any;

  currReference!: Referencia;

  productsColor: any[] = [];
  idProduct: any;

  references: Referencia[] = [];
  idReference: any;

  idColor: any;
  colorDescripcion: any;

  public selectedColor: string = '';
  public selectedSize: string = '';

  skuReference: string = '';
  skuRef: string = '';
  price: any = 0;
  qty: any = 0;
  nroSlides: number = 1;

  estado: number = 0;
  favorite!:boolean;
  cantidadCarrito!:number;


  constructor(
    private mongodb: MongodbService,
    private router: Router,
  ) { }

  verProducto(id: string) {
    this.router.navigate( ['/producto',id] );
  }

}
