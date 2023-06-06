import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'subil'
  password = ''
  errorMessage = 'InvadiCrediential'
  invalidLogin = false


  handleLogin(){

    if(this.username === 'subil' && this.password === 'angular'){

      this.router.navigate(['welcome' , this.username])
      this.invalidLogin = false
    }else{

      this.invalidLogin = true
    }
    console.log(this.username);
    // console.log(this.password)

  }

  constructor( private router : Router){

  }
  ngOnInit(){
    
  }

}
