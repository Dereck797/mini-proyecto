import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit{

  ngOnInit(): void {
    console.log('Init Page');
  }

  onLoginClick(): void {
    console.log('Se ha hecho clic en el botón de inicio de sesión.');
    // Aquí puedes agregar más código para manejar el evento
  }

  onRegisterClick(): void {
    console.log('Se ha hecho clic en el botón de registro de sesión.');
    // Aquí puedes agregar más código para manejar el evento
  }

}
