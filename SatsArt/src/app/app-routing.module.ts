import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryboardComponent } from './storyboard/storyboard.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  { path: 'https://zealous-meadow-0c2741c10.3.azurestaticapps.net/story/portfolio', component: StoryboardComponent},
  { path: '', component: AboutmeComponent},
  { path: 'https://zealous-meadow-0c2741c10.3.azurestaticapps.net/animation/portfolio', component: AnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
