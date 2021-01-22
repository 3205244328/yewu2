import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManageComponent } from './manage/manage.component';
import { Manage1Component } from './manage1/manage1.component';
import { Manage2Component } from './manage2/manage2.component';
import { Manage6Component } from './manage6/manage6.component';
import { Manage3Component } from './manage3/manage3.component';
import { Manage4Component } from './manage4/manage4.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { LoginGuard } from './login.guard';
import { AuthService } from './auth.service';
import { NgxEchartsModule } from 'ngx-echarts';
import { Manage5Component } from './manage5/manage5.component';
import { DeviceComponent } from './device/device.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ManageComponent,
    Manage1Component,
    Manage2Component,
    Manage6Component,
    Manage3Component,
    Manage4Component,
    Manage5Component,
    DeviceComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot()
  ],
  providers: [LoginGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
