import { Component, OnInit,ViewChild } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
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
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
  providers: [UserServiceService]
})
export class EdituserComponent implements OnInit {
  model: data = new data();
  @ViewChild('f') form: any;
  

  id='';
  private dataarray;
  private newValue;
  private newEdit;
  private dataVal;
  constructor(private route: ActivatedRoute,private userservice: UserServiceService,private router: Router,) { 
    // this.route.params.subscribe( params => console.log(params) );
  }

  ngOnInit() {
    this.id =this.route.snapshot.params.id;
    console.log(this.id);
    var res = this.id.slice(1);
    console.log(res);
    this.dataarray = this.userservice.getUser('item');
    console.log(this.dataarray);
    for(var i=0; i<this.dataarray.length; i++){
    // console.log(this.dataarray[i]);
if(this.dataarray[i].id==res){
  // return this.dataarray[i];
  this.newValue =this.dataarray[i];
  console.log(this.newValue);
  
}
}
    
  }
  onSubmit(){
    if (this.form.valid) {
      console.log("Form Submitted!");
      
      this.newEdit =this.form.value;
      this.newEdit.id = this.newValue.id;
         console.log(this.newValue);
      var status = this.userservice.setUser(this.newEdit);
      this.router.navigate(['dashboard/listusers']); 
      if(status){
        console.log('success');
        
      }else{
        console.log('error')
      }
    }
  }

}
