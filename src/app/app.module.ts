import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent
  }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    RouterModule.forRoot(routes, config),
    ProfileModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
