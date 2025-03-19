export class Articulo {
constructor(public id: number,public nombre:String, public descripcion:String, public codigoBarras: String, public categoria:String, public fotografia:String,
    public stock:number ,public disponible:boolean, public precioCompra:number, public precioVenta:number, public activo:boolean){

    }

}
