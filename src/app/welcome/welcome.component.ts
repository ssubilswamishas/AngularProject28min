import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

message = 'Some Welcome message'
welcomeMessageFromTheService:any

name = ''


constructor( private route : ActivatedRoute , private service : WelcomeDataService){

}

ngOnInit(){

  console.log(this.message)

  this.name = this.route.snapshot.params['name'];

  
}
getWelcomeMessage(){
  //console.log(this.service.executeHelloWorldBeanService());

  this.service.executeHelloWorldBeanService().subscribe(

   // response => this.handleSuccessfullResponse(response)

   response => this.handleSuccessfullResponse(response), 
   error =>  this.handleErrorResponse(error)
   );
  }
   getWelcomeMessageWithParameter(){
    //console.log(this.service.executeHelloWorldBeanService());
  
    this.service.executeHelloWorldServiceWithPathVariable(this.name).subscribe(
  
     // response => this.handleSuccessfullResponse(response)
  
     response => this.handleSuccessfullResponse(response), 
     error =>  this.handleErrorResponse(error)
     );
     

 
} 

handleSuccessfullResponse(response : any){

  this.welcomeMessageFromTheService = response.message

// console.log(response)
// console.log(response.message)
}

handleErrorResponse(error : any){
  this.welcomeMessageFromTheService = error.error.message;
}





}

export class class1{

}

export class class2{
   
}
