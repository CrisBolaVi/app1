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
  
  return this.httpClient.get<Articulo[]>("http://localhost:8080/webapi/articulo");
  }
  
  public insertar (articulo:Articulo):Observable<Articulo>{
    return this.httpClient.post<Articulo>("http://localhost:8080/webapi/articulo",articulo);
  
  }
  
  
  public borrar (articulo:Articulo):Observable<Articulo>{
    return this.httpClient.delete<Articulo>(`http://localhost:8080/webapi/articulo/${articulo.id}`);
  }
  }
 