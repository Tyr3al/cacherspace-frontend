import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, ActivatedRoute} from '@angular/router';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './uiparts/navbar.component';
import { FooterComponent } from './uiparts/footer.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { NotFoundComponent } from './pages/not-found.component';
import { TextCharSumComponent } from './pages/tools/text-char-sum.component';
import { TextRotComponent } from './pages/tools/text-rot.component';
import { ToolComponent } from './pages/tool.component';
import { BannerOverviewComponent } from './pages/banner/banner-overview.component';
import { BannerListComponent } from './pages/banner/ui/banner-list.component';
import { BannerIncludeComponent } from './pages/banner/banner-include.component';

// services
import { BannerService } from './pages/banner/banner.service';

// routes
const appRoutes: Routes = [
  // Normal pages
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'about/about', component: AboutComponent },
  // Banner
  { path: 'banner', component: BannerOverviewComponent },
  { path: 'banner/:id', component: BannerIncludeComponent },
  // Tools
  { path: 'tools', component: ToolComponent},
  { path: 'tools/buchstabenwert', component: TextCharSumComponent },
  { path: 'tools/rot', component: TextRotComponent },
  // Error Pages
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

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
    ToolComponent,
    BannerOverviewComponent,
    BannerListComponent,
    BannerIncludeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [BannerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
