import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }


  executeAutheticationService( username : string ,password :string){




let basicAuthHeaderString = 'Basic ' + window.btoa(`${username}:${password}`);
{ Authorization: basicAuthHeaderString }


  

    let headers = new HttpHeaders({

      Authentication : basicAuthHeaderString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers});
    //console.log("Execute Hello World Bean Service")
  }



  authenticate( username : string ,password :string):boolean{

    //console.log('before' + this.isUserLoggedIn());
        if(username === 'subil' && password === 'angular'){
    
          sessionStorage.setItem('authenticaterUser' , username);
         // console.log('After' + this.isUserLoggedIn());
          return true;
    
        }
        return false;
      }
    
    
      isUserLoggedIn(){
    
        let user= sessionStorage.getItem('authenticaterUser')
    
        return !(user === null)
      }
    
      logout(){
        sessionStorage.removeItem('authenticateUser')
      }
    }

    export class AuthenticationBean{

      constructor(public message : String)
      {}
    }
    

 

 