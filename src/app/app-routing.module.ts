import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VoiceComponent} from "./components/voice/voice.component";

const routes: Routes = [{
  path:'', component:VoiceComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
