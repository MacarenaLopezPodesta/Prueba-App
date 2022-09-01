import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../shared/user.class';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
  message:string="";
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }
  async onLogin(){
    
    const user = await this.authService.onLogin(this.user);
    if(user)
    {
      this.message="LOG IN PERFECT";
      console.log('okey login');
      this.router.navigateByUrl('/');
    }else{
      this.message="Email y/o contraseña invalida";
      console.log('error');
    }
  }

}
