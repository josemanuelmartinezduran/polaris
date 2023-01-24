import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = "";
  passwd = "";
  error = ""

  constructor(private _sessionService:SessionService, private router:Router) {
   }


  async doLogin(){
    if(this.user == "" || this.passwd ==""){
      this.error = "No puede iniciar sesión sin usuario"
    }
    this._sessionService.auth(this.user, this.passwd);
    setTimeout(() => {
      if(this._sessionService.sesion_valid){
        this.router.navigate(['dashboard'])
      }
    }, 300);
    
  }

  ngOnInit(): void {
  }

}
