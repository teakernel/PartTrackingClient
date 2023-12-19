import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { AppRouteModule } from "./app-routing.module";

@NgModule({
    declarations:[
        AppComponent,
    ],
    imports:[
        AppRouteModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
    ],
    providers:[],
    bootstrap:[ AppComponent]
})
export class AppModule{}