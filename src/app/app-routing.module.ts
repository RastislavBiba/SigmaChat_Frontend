import {RouterModule, Routes} from "@angular/router";
import {OsobaStrankaComponent} from "./osoba/osoba-stranka/osoba-stranka.component";
import {MiestnostiStrankaComponent} from "./miestnost/miestnosti-stranka/miestnosti-stranka.component"
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
    path: 'miestnost',
    component: MiestnostiStrankaComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
