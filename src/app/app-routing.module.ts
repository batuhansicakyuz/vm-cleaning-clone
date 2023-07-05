import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { ReferenzenComponent } from './referenzen/referenzen.component';
import { UberunsComponent } from './uberuns/uberuns.component';
import { ContactSection } from './contact/contact.component';
import { LeistungenSection } from './leistungen/leistungen.component';

const routes: Routes = [
{path:'',component:StartComponent },
{ path: 'start-component', component: StartComponent },
  {path:'uberuns-component',component:UberunsComponent},
  { path: 'referenzen-component', component: ReferenzenComponent },
  { path: 'contact-component', component: ContactSection },
  { path: 'leistungen-component', component: LeistungenSection },
//   { path:'home', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
