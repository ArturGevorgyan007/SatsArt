import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryboardComponent } from './storyboard/storyboard.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { AnimationComponent } from './animation/animation.component';

const routes: Routes = [
  { path: 'story/portfolio', component: StoryboardComponent},
  { path: '', component: AboutmeComponent},
  { path: 'animation/portfolio', component: AnimationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
