
import {  NgModule,Component, OnInit,ViewChild } from '@angular/core';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

class data {
  constructor(public userName:string = '',
              public emailid:string = '',
              public address:string = '',
              public phone:string = '',
             
) {
  }
}

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  providers: [UserServiceService]
})
export class AdduserComponent implements OnInit {
  model: data = new data();
  @ViewChild('f') form: any;

  //constructor( private userservice: UserServiceService,) { }
  constructor(private router: Router,private userservice: UserServiceService,){ }
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      console.log(this.form.value);
      
      // var valli=[];
      this.userservice.addUser(this.form.value);
     
     
  this.router.navigate(['dashboard/listusers']); 

   }
    }
  
  ngOnInit() {
  }

}
