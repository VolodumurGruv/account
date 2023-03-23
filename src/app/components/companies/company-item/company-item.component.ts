import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Company } from 'src/app/interfaces/company';

@Component({
  selector: 'app-company-item',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './company-item.component.html',
  styleUrls: ['./company-item.component.scss'],
})
export class CompanyItemComponent {
  @Input() company!: Company;
}
