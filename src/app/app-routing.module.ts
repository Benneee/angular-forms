import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TdFormComponent } from './td-form/td-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/template-driven-form', pathMatch: 'full' },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'template-driven-form', component: TdFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
