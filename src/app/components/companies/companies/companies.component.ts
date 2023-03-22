import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from '../../shared/sub-menu/sub-menu.component';
import { AddCompanyService } from 'src/app/services/add-company.service';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, SubMenuComponent],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],
})
export class CompaniesComponent implements OnInit {
  public companies = [];
  constructor(private addCompanySer: AddCompanyService) {}

  ngOnInit(): void {
    this.addCompanySer.getCompanies().subscribe((res) => console.log(res));
  }
}
