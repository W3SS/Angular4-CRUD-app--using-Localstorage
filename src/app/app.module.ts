import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ListusersComponent } from './listusers/listusers.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { EdituserComponent } from './edituser/edituser.component';
import {RouterModule, Routes} from '@angular/router';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AdduserComponent,
    ListusersComponent,
    ViewuserComponent,
    EdituserComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BootstrapModalModule,
    RouterModule.forRoot([
      {
        path: '',  pathMatch: 'prefix', redirectTo: 'login'
      },
      {
        path: 'login',  component: LoginComponent
      },
       {
        path: 'register', component: RegisterComponent
      },
      {
        path: 'dashboard', component: DashboardComponent,
        children:[
          {
            path: '',  pathMatch: 'prefix', redirectTo: 'listusers'
          },
          {
            path: 'adduser', component: AdduserComponent
          },
          {
            path: 'listusers', component: ListusersComponent
          },
          {
            path: 'viewuser/:id', component: ViewuserComponent
          },
          {
            path: 'edituser/:id', component: EdituserComponent
          }
        ]
      }
    
      ])
  ],
  entryComponents: [
    ConfirmComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
