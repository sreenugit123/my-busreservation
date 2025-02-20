import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddbusComponent } from './addbus/addbus.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookbusComponent } from './bookbus/bookbus.component';
import { BusdetailsComponent } from './busdetails/busdetails.component';
import { BussearchComponent } from './bussearch/bussearch.component';
import { BusseatsComponent } from './busseats/busseats.component';
import { CanclebusComponent } from './canclebus/canclebus.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeletebusComponent } from './deletebus/deletebus.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { MyprofilesComponent } from './myprofiles/myprofiles.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SignupComponent } from './signup/signup.component';
import { UpdateprofileComponent } from './updateprofile/updateprofile.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'changepassword',component:ChangepasswordComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutUsComponent},
  {path:'privacypolicy',component:PrivacyPolicyComponent},
  {path:'admindashboard',component:AdmindashboardComponent},
  {path:'adminlogin',component:AdminloginComponent},
  // sahana's components
  {path:'bussearch',component:BussearchComponent},//processing
  {path:'bookbus',component:BookbusComponent}, //processing
  {path:'cancelbus',component:CanclebusComponent},//processing
  {path:'deletebus',component:DeletebusComponent},//processing
  {path:'addbus',component:AddbusComponent},//processing
  //srinu
  {path:'busdetails',component:BusdetailsComponent},//processing
  {path:'busseats',component:BusseatsComponent},//processing
  //dhananjay
  {path:'feedbacks',component:FeedbacksComponent}, 
  {path:'myprofile',component:MyprofilesComponent},
  {path:'updateprofile',component:UpdateprofileComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
