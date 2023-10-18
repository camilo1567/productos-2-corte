//https://app.quicktype.io/

export interface Productos {
    id:               number;
    product:          string;
    characteristics:  string;
    linkvideo:        Linkvideo[];
    conditions:       Conditions;
    featured:         number;
    brandproviderid:  number;
    subcategoryid:    number;
    optionsstatus:    Applydevolution;
    optionscreatedat: Date;
    optionsupdatedat: null;
    weight:           number;
    volume:           number;
    sku:              string;
    long:             number;
    high:             number;
    wide:             number;
    warrantyid:       number;
    applydevolution:  Applydevolution;
}

export enum Applydevolution {
    No = "No",
    Si = "Si",
}

export enum Conditions {
    AceptaDevoluciones = "Acepta devoluciones",
}

export interface Linkvideo {
    url: string;
}


export interface UsuariosNew {
    nombre: string;
    correo: string;
    rol:    string;
    estado: boolean;
    google: boolean;
    uid:    string;
}

export interface UsuarioRef {
    _id:    string;
    nombre: string;
}


export interface CategoriasNew {
    _id:     string;
    nombre:  string;
    usuario: UsuarioRef;
}

export interface CategoriaRef {
    _id:    string;
    nombre: string;
}

export interface ProductosNew {
    _id:       string;
    nombre:    string;
    usuario:   string;
    precio:    number;
    categoria: CategoriaRef;
    imagen:    string;
}



export interface Producto {
    _id:              string;
    sku:              string;
    nombre:           string;
    descripcion:      string;
    peso:             number;
    volumen:          number;
    largo:            number;
    alto:             number;
    ancho:            number;
    aplicaDevolucion: boolean;
    IdProveedorMarca: IDProveedorMarca;
    IdCategoria:      IDCategoria;
    IdGarantia:       string;
    usuario:          IDUsuario;
    fecha_creacion:   Date;
    precio:           number;
    iva:              number;
    color:            string;
}


export interface Referencia {
    _id:               string;
    sku:               string;
    nombre:            string;
    precio:            number;
    iva:               number;
    cantidad:          number;
    color:             string;
    descripcionColor:  string;
    talla:             string;
    calificacion:      string;
    IdProducto:        IDProducto;
    IdGrupoMultimedia: IDGrupoMultimedia;
    usuario:           IDUsuario;
    fecha_creacion:    Date;
    fecha_modificacion:Date;
}

export interface CarritoReferencia {
    _id:               string;
    cantidad:          number;
    ref: Referencia;
}





export interface Multimedia {
    _id:               string;
    url:               string;
    tipo:              string;
    IdGrupoMultimedia: IDGrupoMultimedia;
    usuario:           IDUsuario;
    fecha_creacion:    Date;
}

export interface IDGrupoMultimedia {
    _id:    string;
    nombre: string;
}

export interface IDUsuario{
    _id:    string;
    nombre: string;
}

export interface IDProducto {
    _id:    string;
    sku:    string;
    nombre: string;
}

export interface IDCategoria {
    _id:    string;
    nombre: string;
}

export interface IDProveedorMarca {
    _id:    string;
    nombre: string;
}



