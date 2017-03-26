import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './uiparts/navbar.component';
import { FooterComponent } from './uiparts/footer.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { NotFoundComponent } from './pages/not-found.component';
import { TextCharSumComponent } from './pages/tools/text-char-sum.component';
import { TextRotComponent } from './pages/tools/text-rot.component';

// routes
const appRoutes: Routes = [
  // Normal pages
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "about/about", component: AboutComponent },
  // Tools
  { path: "tool/buchstabenwert", component: TextCharSumComponent },
  { path: "tool/rot", component: TextRotComponent },
  // Error Pages
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }

]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    TextCharSumComponent,
    TextRotComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
