import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  user: User = new User();
  message:string ="";

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.authService.onRegister(this.user);
    if(user)
    {
      this.message="USUARIO REGISTRADO CON EXITO";
      console.log('okey registro');
      this.router.navigateByUrl('/');
    }else
    {
      this.message="Email ya registrado";
    }
  }

}
