import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { AboutComponent } from './modules/about/about.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users-list', component: UsersListComponent},
  {path: 'services', component: AboutComponent},
  {path: 'contactUs', component: ContactUsComponent},
  {path: 'about', component: ServicesComponent},
  {path: 'gallery', component: GalleryComponent}

  ];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
