import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRestService { constructor(private httpClient:HttpClient) { }

public validar(nombre:string,clave:string):Observable<Usuario> {
    return this.httpClient.post<Usuario>(`http://localhost:8080/webapi/usuarios/validar`,
      {"nombre":nombre,"clave":clave});
   }}
