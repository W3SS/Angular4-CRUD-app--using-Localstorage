import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css'],
  providers: [UserServiceService]
})
export class ViewuserComponent implements OnInit {
  id='';
  private dataarray;
  private newValue;

  constructor(private route: ActivatedRoute,private userservice: UserServiceService) { 
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
    
if(this.dataarray[i].id==res){
  // return this.dataarray[i];
  this.newValue =this.dataarray[i];
  
}

    }
    
  }

}
