import { Injectable } from '@angular/core';
import {FormsModule,FormGroup,FormControl} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
class data {
  constructor(public userName:string = '',
              public emailid:string = '',
              public address:string = '',
              public phone:string = ''
) {
  }
}
@Injectable()

export class UserServiceService {
  model: data = new data();
 
private data =[];
  constructor() { }

addUser(obj){
  var arr =JSON.parse(localStorage.getItem('item')) ||[];
  var newValue =obj;
  var val =arr.length ;
 
  newValue.id = val+1;
 console.log(newValue.id);
 
  var final =arr ? arr : [];
  final.push( newValue );
localStorage.setItem('item', JSON.stringify(final)) ;
}
 setUser(obj) { 
   var arr = JSON.parse(localStorage.getItem('item')); 
   arr[obj.id - 1] = obj;
   console.log(arr);
   localStorage.setItem('item', JSON.stringify(arr)) ;
   return true;
  } 
  
 getUser(varName) { 
  var arr = JSON.parse(localStorage.getItem('item')); 
  if(arr == null) { 
  arr = new Array(); 
  } 
  return arr; 
  } 
removeUser(obj){
  var arr = JSON.parse(localStorage.getItem('item')); 
  //var element = arr[obj.id - 1];
  var newA = arr.filter(function(el) {
      return el.id !== obj.id;
  });
  var newArr = [];
  for(var i=0; i<newA.length; i++){
    newA[i].id = i+1;
    var newObj = newA[i]
    newArr.push(newObj)
  }
  console.log(newArr);
  localStorage.setItem('item', JSON.stringify(newArr)) ;
  return true;
}
}