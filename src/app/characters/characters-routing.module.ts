import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersPage } from './characters.page';
import { InfoCharacterComponent } from './components/info-character/info-character.component';

const routes: Routes = [
  {
    path: '',
    component: CharactersPage,
  },
  { path: 'character/:idCharacter', component: InfoCharacterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CharactersPageRoutingModule {}
