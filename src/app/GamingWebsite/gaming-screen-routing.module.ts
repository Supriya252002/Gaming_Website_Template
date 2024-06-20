import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { GamesectionComponent } from './gamesection/gamesection.component';
import { VisualsectionComponent } from './visualsection/visualsection.component';
import { GamesComponent } from './games/games.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'gamesection', component: GamesectionComponent },
  { path: 'visual', component: VisualsectionComponent },
  { path: 'games', component: GamesComponent },
  { path: 'footer', component: FooterComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamingScreenRoutingModule { }
