import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubMenuComponent } from '../../shared/sub-menu/sub-menu.component';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [CommonModule, SubMenuComponent],
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss'],

})
export class CompaniesComponent {}
