import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
  ],
  providers: [
  ],
  exports: [
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent
  ],
  bootstrap: []
})
export class SharedModule { }
