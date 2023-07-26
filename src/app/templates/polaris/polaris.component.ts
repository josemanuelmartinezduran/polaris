import { Component } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-polaris',
  templateUrl: './polaris.component.html',
  styleUrls: ['./polaris.component.css']
})
export class PolarisComponent {
  nombre:string|null = "";
  constructor(private sessionService:SessionService) {
    this.sessionService.getSession();
    this.nombre = this.sessionService.nombre;
  }
}
