import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallApiComponent } from './call-api/call-api.component';
import { PostApiComponent} from './post-api/post-api.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { LoginComponent } from './login/login.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
// tạo module : ng g module namemodule

const routesConfig: Routes = [
  {path: 'getapi', component: CallApiComponent},
  {path: 'postdata', component: PostApiComponent},
  {path: 'getweather', component: WeatherApiComponent},
  {path: 'formlogin', component: LoginComponent},
  { path: 'formgroup', component: FormGroupComponent },
  { path: '', redirectTo: '/getweather', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule( {
  imports: [ RouterModule.forRoot( routesConfig ), ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
