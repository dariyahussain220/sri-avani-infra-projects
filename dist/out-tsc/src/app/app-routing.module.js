import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./modules/home/home.component";
import { RegisterComponent } from "./modules/register/register.component";
import { LoginComponent } from "./modules/login/login.component";
import { UsersListComponent } from "./modules/users-list/users-list.component";
import { AboutComponent } from "./modules/about/about.component";
import { ContactUsComponent } from "./modules/contact-us/contact-us.component";
import { ServicesComponent } from "./modules/services/services.component";
import { GalleryComponent } from "./modules/gallery/gallery.component";
import { EditUserformComponent } from "./modules/edit-userform/edit-userform.component";
const routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "register", component: RegisterComponent },
    { path: "login", component: LoginComponent },
    { path: "users-list", component: UsersListComponent },
    { path: "services", component: AboutComponent },
    { path: "contactUs", component: ContactUsComponent },
    { path: "about", component: ServicesComponent },
    { path: "gallery", component: GalleryComponent },
    { path: "editform", component: EditUserformComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map