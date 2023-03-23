import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from '../../shared/sub-menu/sub-menu.component';
import { AddCompanyService } from 'src/app/services/add-company.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { Company } from '../../../interfaces/company';
import { Router } from '@angular/router';
import { CompanyItemComponent } from '../company-item/company-item.component';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, SubMenuComponent, MatCardModule, MatButtonModule, CompanyItemComponent],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  public companies: Company[] = [];
  constructor(
    private addCompanySer: AddCompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addCompanySer
      .getCompanies()
      .subscribe((res) => (this.companies = res));
  }
  public showCompany(id: number) {
    // redirect to company by IPN
    this.router.navigate([`/companies/company/${id}`]);
  }
}
