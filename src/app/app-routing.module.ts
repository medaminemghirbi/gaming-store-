import { CartComponent } from './user/cart/cart.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProdComponent } from './admin/add-prod/add-prod.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { FeedbacksComponent } from './admin/feedbacks/feedbacks.component';
import { MailComponent } from './admin/mail/mail.component';
import { SettingsComponent } from './admin/settings/settings.component';
import { UpdateProduitComponent } from './admin/update-produit/update-produit.component';
import { UsersComponent } from './admin/users/users.component';
import { HomeComponent } from './user/home/home.component';
import { ConnexionComponent } from './admin/connexion/connexion.component';
import { LoginComponent } from './user/login/login.component';
import { ProfilComponent } from './user/profil/profil.component';
import { RegisterComponent } from './user/register/register.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './user/verify-email/verify-email.component';
import { DetailProduitComponent } from './user/detail-produit/detail-produit.component';
import { PayementComponent } from './user/payement/payement.component';
import { AuthGGuard } from './services/auth-g.guard';
import { UserAuthGuard } from './services/user-auth.guard';
import { ContactComponent } from './user/contact/contact.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
  {path:'dashbord',canActivate: [AuthGGuard], component:DashbordComponent},
  {path:'addprod',canActivate: [AuthGGuard], component:AddProdComponent},
  {path:'adduser',canActivate: [AuthGGuard], component:AddUserComponent},
  {path:'users',canActivate: [AuthGGuard], component:UsersComponent},
  {path:'feedbacks',canActivate: [AuthGGuard], component:FeedbacksComponent},
  {path:'mail',canActivate: [AuthGGuard],component:MailComponent},
  {path:'settings',canActivate: [AuthGGuard], component:SettingsComponent},
  {path: "updateProduit/:id",canActivate: [AuthGGuard],  component: UpdateProduitComponent},
  {path:'cart',canActivate: [UserAuthGuard],component:CartComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'login',component:LoginComponent},
  {path:'profil',canActivate: [UserAuthGuard],component:ProfilComponent},
  {path:'register',component:RegisterComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent },
  {path: 'verify-email-address', component: VerifyEmailComponent },
  {path: 'DetailProduitComponent/:id', component: DetailProduitComponent},
  {path: 'payement',canActivate: [UserAuthGuard],component:PayementComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
