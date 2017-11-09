import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { DialogService } from "ng2-bootstrap-modal";
import { ConfirmComponent } from '../confirm/confirm.component';


@Component({
  selector: 'app-listusers',
  templateUrl: './listusers.component.html',
  styleUrls: ['./listusers.component.css'],
  providers: [UserServiceService,DialogService]

})
export class ListusersComponent implements OnInit {
  private valli;
  model: any = {};

 constructor(private userservice: UserServiceService,private dialogService:DialogService) { }
// constructor(){}

  //We can close dialog calling disposable.unsubscribe();
  //If dialog was not closed manually close it by timeout

getval(item){
  console.log(item);
}
deleteUser(item){
  let disposable = this.dialogService.addDialog(ConfirmComponent, {
    title:'Delete', 
    message:'Do you like to delete user'+"  "+item.userName})
    .subscribe((isConfirmed)=>{
        //We get dialog result
        if(isConfirmed) {
            
            this.userservice.removeUser(item);
            location.reload();
          
        }
        else {
            alert('declined');
        }
    });
//We can close dialog calling disposable.unsubscribe();
//If dialog was not closed manually close it by timeout
setTimeout(()=>{
    disposable.unsubscribe();
},10000 );
  
}
  ngOnInit() {
    this.valli= this.userservice.getUser('item');
    console.log(this.valli);

    // var valli = localStorage.getItem('item');
    // console.log('valli',valli);
    // console.log(v
  }

}
