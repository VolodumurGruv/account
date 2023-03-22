import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { AddCompanyService } from 'src/app/services/add-company.service';

@Component({
  selector: 'app-make-company',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss'],
})
export class AddCompanyComponent implements OnInit {
  public companyForm = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    account: [
      '',
      [
        Validators.required,
        Validators.minLength(29),
        Validators.maxLength(29),
        Validators.pattern(/^(UA)\d+$/),
      ],
    ],
    EDRPOU: [
      null,
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(8),
        Validators.pattern(/^\d+$/),
      ],
    ],
    IPN: [
      null,
      [
        Validators.required,
        Validators.minLength(12),
        Validators.maxLength(12),
        Validators.pattern(/^\d+$/),
      ],
    ],
  });

  get name() {
    return this.companyForm.get('name');
  }
  get account() {
    return this.companyForm.get('account');
  }
  get EDRPOU() {
    return this.companyForm.get('EDRPOU');
  }
  get IPN() {
    return this.companyForm.get('IPN');
  }

  constructor(private fb: FormBuilder, private addCompany: AddCompanyService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.companyForm.value);

    this.addCompany
      .addCompany(this.companyForm.value)
      .subscribe((res) => console.log(res));

    // this.companyForm.reset();
  }

  clear() {
    this.companyForm.reset();
  }
}
