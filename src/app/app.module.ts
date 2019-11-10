import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireLite } from 'angularfire-lite';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherCardComponent } from './shared/components/weather-card/weather-card.component';
import { AddCardComponent } from './shared/components/add-card/add-card.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { DetailsComponent } from './pages/details/details.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddComponent } from './pages/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherCardComponent,
    AddCardComponent,
    ErrorComponent,
    DetailsComponent,
    LoginComponent,
    SignupComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NguiAutoCompleteModule,
    AngularFireLite.forRoot(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
