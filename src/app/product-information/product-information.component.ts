import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Multimedia, Producto, Referencia } from 'src/app/interfaces';
import { MongodbService } from 'src/app/services/mongodb.service';

@Component({
  selector: 'app-product-information',
  templateUrl: './product-information.component.html',
  styleUrls: ['./product-information.component.css']
})
export class ProductInformationComponent {

  termino!: string;

  @Input() producto!: Producto;
  @Input() index!: number;

  referencesColor: Referencia[] = [];
  multimediaColor: Multimedia[] = [];
  imagenes: any[] = [];

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
    private activatedRoute: ActivatedRoute,
    private mongodb: MongodbService
  ) {
    this.termino = '';
    this.idGrupoMultimedia = this.idGrupoMultimedia;
  }


  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      //console.log(this.termino);

      this.cargarProductosxReferencia();

      //console.log('CARGAR', cargar);
    });
  }

  async cargarProductosxReferencia() {
    await this.mongodb
      .getReferenciasXProducto(this.termino)
      .toPromise()
      .then((resp: any) => {
        console.log('res', resp);
        //console.log('multi', resp['resp'][0]['IdGrupoMultimedia']['_id']);
        console.log('sku', resp['resp'][0]['IdProducto']['sku']);



        this.producto = resp['resp'][0];
        this.producto.sku = resp['resp'][0]['IdProducto']['sku'];
        this.idGrupoMultimedia = resp['resp'][0]['IdGrupoMultimedia']['_id'];
        this.multimedia();

      });
  }

  async multimedia() {
    await this.mongodb
      .getMultimediasXGrupoMultimedia(this.idGrupoMultimedia)
      .toPromise()
      .then((resp: any) => {
        //console.log('multimedia', resp.resp);
        this.imagenes = resp.resp;
        //console.log('imagenes resp', this.imagenes);
      });
  }


}
