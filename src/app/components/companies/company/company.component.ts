import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCompanyService } from 'src/app/services/add-company.service';
import { ActivatedRoute } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { Company } from 'src/app/interfaces/company';
import { CompanyItemComponent } from '../company-item/company-item.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, CompanyItemComponent, MatCardModule, MatButtonModule],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  public company!: Company[];

  constructor(
    private comapnyService: AddCompanyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const ipn = this.route.snapshot.paramMap.get('id');

    if (ipn) {
      this.comapnyService
        .getCompany(+ipn)
        .subscribe((res) => (this.company = res));
    }
  }

  public deleteCompany(ipn: number) {
    this.comapnyService.deleteCompany(ipn).subscribe();
  }
  public companyBills(ipn: number) {}
  public editCompany(ipn: number) {}
}
