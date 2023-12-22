import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRouteModule } from "./app-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { RegistComponent } from "./components/regist/regist.component";
import { HomeComponent } from "./components/home/home.component";
import { UserListComponent } from "./components/user-list/user-list.component";

@NgModule({
    declarations:[
        AppComponent,
        LoginComponent,
        RegistComponent,
        HomeComponent,
        UserListComponent,
    ],
    imports:[
        AppRouteModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        BrowserModule,
    ],
    providers:[],
    bootstrap:[ AppComponent]
})
export class AppModule{}