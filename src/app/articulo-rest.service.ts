import { Injectable } from '@angular/core';
import { Articulo } from './articulo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticuloRestService {
  constructor(private httpClient:HttpClient) { }
  
  public buscarTodos():Observable<Articulo[]>{
  
  return this.httpClient.get<Articulo[]>("http://admin:admin123@localhost:4200/api/articulos");
  }
  
  public insertar (articulo:Articulo):Observable<Articulo>{
    return this.httpClient.post<Articulo>("http://admin:admin123@localhost:4200/api/articulos",articulo);
  
  }
  
  
  public borrar (articulo:Articulo):Observable<Articulo>{
    return this.httpClient.delete<Articulo>(`http://admin:admin123@localhost:4200/api/articulos/${articulo.id}`);
  }
  }
 