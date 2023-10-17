import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';
import { URL_SERVICIOS_MONGO } from 'src/config/url.servicios';

@Injectable({
  providedIn: 'root'
})
export class MongodbService {
  //userToken!: any;

  constructor(private http: HttpClient) { }

  getProductosComo(unComo:string){
    const unaURL = `${URL_SERVICIOS_MONGO}/buscar/productos/${unComo}`;
  
    return this.http.get(unaURL, {}).pipe(
      map((res: any) => {
        //console.log('Productos',res);
        return res;
      })
    );

  }


  /*
  public leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  getProductosComo(unComo:string){
    return this.http.get(`${URL_SERVICIOS_MONGO}/buscar/productos/${unComo}`, {}).pipe(
      map((res: any) => {
        //console.log('Productos',res);
        return res;
      })
    );
  }

  getReferenciasXProducto(unIdProducto: any): //Observable<UserModel[]>
  any {
    var headers_object = new HttpHeaders().set('x-token', this.leerToken());

    //console.log(headers_object);

    //let url = URL_SERVICIOS_PAMII + "/user";

    let url = `${URL_SERVICIOS_MONGO}/referencias/producto/${unIdProducto}`;

    //console.log(url);

    return this.http.get(url, { headers: headers_object }).pipe(
      map((data) => {
        return data;
      })
    );
  }

  getMultimediasXGrupoMultimedia(unIdGrupoMultimedia: any): //Observable<UserModel[]>
  any {
    var headers_object = new HttpHeaders().set('x-token', this.leerToken());

    //console.log(headers_object);

    //let url = URL_SERVICIOS_PAMII + "/user";

    let url = `${URL_SERVICIOS_MONGO}/multimedias/grupomultimedia/${unIdGrupoMultimedia}`;

    //console.log(url);

    return this.http.get(url, { headers: headers_object }).pipe(
      map((data) => {
        return data;
      })
    );
  }
*/
}
