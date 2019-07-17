import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { FolklorshoppocetnaComponent } from './folklorshoppocetna/folklorshoppocetna.component';
import { GallerypageComponent } from './gallerypage/gallerypage.component';


const appRoutes:Routes = [
  { path: '', component:  FolklorshoppocetnaComponent},
  { path: 'pocetna', component: PocetnaComponent},
  { path: 'about', component: AboutpageComponent },
  { path: 'gallery', component: GallerypageComponent },

  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routingComponents = [ FolklorshoppocetnaComponent,
                                  PocetnaComponent,
                                  AboutpageComponent,
                                  GallerypageComponent,
                                  ]