import { Component } from '@angular/core';
import { ArticuloRestService } from '../articulo-rest.service';
import { Articulo } from '../articulo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-articulos',
  imports: [RouterLink],
  templateUrl: './lista-articulos.component.html',
  styleUrl: './lista-articulos.component.scss'
})
export class ListaArticulosComponent {
  listaarticulos: Articulo[] = [];
  constructor(private articuloRestservice: ArticuloRestService) {
    articuloRestservice.buscarTodos().subscribe((datos) => {
      this.listaarticulos = datos;
    })
  }

  borrar(articulo:Articulo) {
    this.articuloRestservice.borrar(articulo).subscribe((datos) => {
      this.articuloRestservice.buscarTodos().subscribe((datos) => {
        this.listaarticulos = datos;
      })

    })
  }
  

}


