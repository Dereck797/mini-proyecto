import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  title = 'login-window';
  person = {
    nickname: 'Nickname',
    name: 'David',
    email: 'david@gmail.com',
    password: '**********'
  }
  onEdit(){
    console.log(this.person);
  }
}
