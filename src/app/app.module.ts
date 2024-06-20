import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgApexchartsModule } from 'ng-apexcharts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageComponent } from './GamingWebsite/homepage/homepage.component';
import { FooterComponent } from './GamingWebsite/footer/footer.component';
import { GamesectionComponent } from './GamingWebsite/gamesection/gamesection.component';
import { VisualsectionComponent } from './GamingWebsite/visualsection/visualsection.component';
import { GamesComponent } from './GamingWebsite/games/games.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GamesectionComponent,
    VisualsectionComponent,
    GamesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([]),
    FontAwesomeModule,
    NgApexchartsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
