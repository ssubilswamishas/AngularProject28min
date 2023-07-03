import { Component , OnInit } from '@angular/core';

@Component({
  selector: 'app-trail-login',
  templateUrl: './trail-login.component.html',
  styleUrls: ['./trail-login.component.css']
})
export class TrailLoginComponent implements OnInit {

  username = 'subil'
  password = ''

  handleLogin(){
    console.log(this.username)
  }
  constructor(){


  }

  ngOnInit() {
      
  }

}
