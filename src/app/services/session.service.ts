import { Injectable } from '@angular/core';
import { AntaresService } from './antares.service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  id:string|null = "";
  nombre:string|null = "";
  sesion_valid:boolean = false;

  constructor(private antaresService:AntaresService) { }

  isAuth(){
    
  }

  auth(username:string, password:string){
    this.antaresService.getData("res.users", [["login", "=", username], ["solar_passwd", "=", password]]).subscribe(
      (data:any) => {
        this.id = data[0].id;
        this.nombre = data[0].name;
        this.sesion_valid = true;
        this.setSession()
      });
  }

  setSession(){
    if(this.id)
      window.sessionStorage.setItem("id", this.id);
    if(this.nombre)
      window.sessionStorage.setItem("nombre", this.nombre);
  }

  getSession(){
    this.id = window.sessionStorage.getItem("id");
    this.nombre = window.sessionStorage.getItem("nombre");
  }

  closeSession(){
    window.sessionStorage.clear();
  }
}
