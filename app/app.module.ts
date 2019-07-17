import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { VideofileComponent } from './videofile/videofile.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AgmCoreModule} from '@agm/core';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';
import { FolklorshoppocetnaComponent } from './folklorshoppocetna/folklorshoppocetna.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    VideofileComponent,
    PhotogalleryComponent,
    AboutComponent,
    ContactComponent,
    FormComponent,
    GeolocationComponent,
    routingComponents,
    AboutpageComponent,
    PocetnaComponent,
    PageNotFoundComponent,
    GallerypageComponent,
    FolklorshoppocetnaComponent,
    
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TextMaskModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBvXUcJrl0zNEoGOxpsfhR9Z9rYejVwgqk'
    }),
    HttpClientModule,
    RouterModule,
    
   
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
