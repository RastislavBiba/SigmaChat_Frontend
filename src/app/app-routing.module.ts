import {RouterModule, Routes} from "@angular/router";
import {OsobaStrankaComponent} from "./osoba/osoba-stranka/osoba-stranka.component";
import {VypozickyStrankaComponent} from "./vypozicky/vypozicky-stranka/vypozicky-stranka.component"
import {NgModule} from "@angular/core";
import {SpravaStrankaComponent} from "./sprava/sprava-stranka/sprava-stranka.component";

const routes: Routes = [
  {
    path: 'osoba',
    component: OsobaStrankaComponent,
  },
  {
    path: 'sprava',
    component: SpravaStrankaComponent,
  },
  {
    path: 'vypozicka',
    component: VypozickyStrankaComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
