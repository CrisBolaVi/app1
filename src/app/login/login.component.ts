import { Component } from '@angular/core';
import { Usuario } from '../usuario';
import { FormsModule } from '@angular/forms';
import { LoginRestService } from '../login-rest.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  nombre:string="";
  clave:string="";
  constructor(private loginService:LoginRestService) {

  }

  validar() {

   this.loginService.validar(this.nombre,this.clave).subscribe((datos:Usuario)=> {

      console.log(datos);
   })
  }
}

