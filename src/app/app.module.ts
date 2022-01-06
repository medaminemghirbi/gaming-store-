import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddProdComponent } from './admin/add-prod/add-prod.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { ConnexionComponent } from './admin/connexion/connexion.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { FeedbacksComponent } from './admin/feedbacks/feedbacks.component';
import { MailComponent } from './admin/mail/mail.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { UpdateProduitComponent } from './admin/update-produit/update-produit.component';
import { UsersComponent } from './admin/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgImageSliderModule} from 'ng-image-slider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './user/home/home.component';
import { CartComponent } from './user/cart/cart.component';
import { ContactComponent } from './user/contact/contact.component';
import { DetailProduitComponent } from './user/detail-produit/detail-produit.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { LoginComponent } from './user/login/login.component';
import { PayementComponent } from './user/payement/payement.component';
import { ProfilComponent } from './user/profil/profil.component';
import { RegisterComponent } from './user/register/register.component';
import { VerifyEmailComponent } from './user/verify-email/verify-email.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    AddProdComponent, 
    AddUserComponent,
    ConnexionComponent,
    DashbordComponent,
    FeedbacksComponent,
    MailComponent,
    SettingsComponent,
    UpdateProduitComponent,
    UsersComponent,
    HomeComponent,
    CartComponent,
    ContactComponent,
    DetailProduitComponent,
    ForgotPasswordComponent,
    LoginComponent,
    PayementComponent,
    ProfilComponent,
    RegisterComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    
    FontAwesomeModule,
    MatDialogModule,
    MatCardModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    Ng2SearchPipeModule,
    MDBBootstrapModulesPro,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    
//AIzaSyCiR--FlIsHkuEUTDilOydcHqyuwksKUuQ
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
