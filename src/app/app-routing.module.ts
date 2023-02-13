import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillsComponent } from './components/bills/bills/bills.component';
import { CompaniesComponent } from './components/companies/companies/companies.component';

const routes: Routes = [
  { path: 'bills', component: BillsComponent },
  {
    path: 'companies',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/companies/companies/companies.component').then(
            (m) => m.CompaniesComponent
          ),
      },
      {
        path: 'addacompany',
        loadChildren: () =>
          import(
            './components/companies/add-company/add-company.component'
          ).then((m) => m.AddCompanyComponent),
      },
      {
        path: 'company',
        loadChildren: () =>
          import('./components/companies/company/company.component').then(
            (m) => m.CompanyComponent
          ),
      },
    ],
  },
  { path: '', redirectTo: 'bills', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
