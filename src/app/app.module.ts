import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // cái này tự thêm
import { HttpClientModule } from '@angular/common/http';  // cái này tự thêm
import { Routes, RouterModule} from '@angular/router';

const routesConfig: Routes = [
  {path: 'getapi', component: CallApiComponent},
  {path: 'postdata', component: PostApiComponent},
  {path: 'getweather', component: WeatherApiComponent},
  {path: 'formlogin', component: LoginComponent},
  { path: 'formgroup', component: FormGroupComponent },
  // fix error routing
  // set page default
  { path: '', redirectTo: '/getweather', pathMatch: 'full' },
  // set page mặc định khi ng dùng nhập tào lao
  { path: '**', component: PagenotfoundComponent }
];


// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PersonComponent } from './person/person.component';
import { ListPersonComponent } from './list-person/list-person.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { ChaComponent } from './cha.component';
import { ChitComponent } from './chit.component';
import { CardComponent } from './card.component';
import { LearnPipeComponent } from './learn-pipe/learn-pipe.component';
import { RoundPipe } from './round.pipe';
import { IpComponent } from './ip.component';
import { AppSmallComponent } from './app-small/app-small.component';
import { LoginComponent } from './login/login.component';
import { CallApiComponent } from './call-api/call-api.component';
import { PostApiComponent } from './post-api/post-api.component';
import { WeatherApiComponent } from './weather-api/weather-api.component';
import { FormGroupComponent } from './form-group/form-group.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonComponent,
    ListPersonComponent,
    ParentComponent,
    ChildComponent,
    ChaComponent,
    ChitComponent,
    CardComponent,
    LearnPipeComponent,
    RoundPipe,
    IpComponent,
    AppSmallComponent,
    LoginComponent,
    CallApiComponent,
    PostApiComponent,
    WeatherApiComponent,
    FormGroupComponent,
    PagenotfoundComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    NgbModule,
    ReactiveFormsModule, // cái này tự import
    FormsModule, // cái này tự import
    HttpClientModule, // phải import chổ này !!!
    RouterModule.forRoot( routesConfig ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
