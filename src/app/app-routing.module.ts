import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamingScreenModule } from './GamingWebsite/gaming-screen.module';
// const routes: Routes = [
//   { path: '', component: HomepageComponent },
//   { path: 'home', component: HomepageComponent },
//   { path: 'gamescard', component: GamesComponent },
//   { path: 'visualgames', component: VisualsectionComponent },
//   { path: '3dgames', component: GamesComponent },
//   {path:'footer',component:FooterComponent}
// ];

export const routes: Routes = [
  { path: 'gaming-screen', loadChildren: () => import('./GamingWebsite/gaming-screen.module').then(m => m.GamingScreenModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
