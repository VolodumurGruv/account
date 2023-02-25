import { Route } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyComponent } from './company/company.component';

export const COMPANIES_ROUTES: Route[] = [
  {
    path: '',
    component: CompaniesComponent,
  },
  {
    path: 'addacompany',
    component: AddCompanyComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
  },
];
