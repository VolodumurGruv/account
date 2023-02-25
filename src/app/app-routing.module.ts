import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './components/bills/bills/bills.component';

const routes: Routes = [
  { path: 'bills', component: BillsComponent },
  {
    path: 'companies',
    loadChildren: () =>
      import('./components/companies/companies-routing').then(
        (m) => m.COMPANIES_ROUTES
      ),
  },
  { path: '', redirectTo: 'bills', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
