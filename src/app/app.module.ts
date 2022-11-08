import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ItemsComponent } from './pages/items/items.component';
import { InformationsComponent } from './pages/informations/informations.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { MenuComponent } from './components/menu/menu.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { getAuth } from 'firebase/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ItemsComponent,
    InformationsComponent,
    PaginationComponent,
    SignUpComponent,
    MenuComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    NgxPaginationModule,
    AppRoutingModule
  ],
  providers: [PaginationComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
