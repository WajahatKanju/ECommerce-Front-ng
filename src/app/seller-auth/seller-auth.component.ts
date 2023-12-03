import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SellerService } from '../services/seller.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { confirmPasswordValidator } from './confirm-password.validator';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss',
})
export class SellerAuthComponent implements OnInit {
  hide = true;
  signUpForm: FormGroup = new FormGroup({});

  constructor(private seller: SellerService) {}

  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        username: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(3),
        ]),
        email: new FormControl<string>('', [
          Validators.required,
          Validators.email, // Ensure it is a valid email format
        ]),
        password: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(8), // Minimum password length
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()\-_+=<>{}[\]:;'",./\\|~`])[A-Za-z\d@$!%*?&^#()\-_+=<>{}[\]:;'",./\\|~`]+$/,
          ),
        ]),
        confirm_password: new FormControl<string>('', [Validators.required]),
      },
      { validators: confirmPasswordValidator },
    );
  }

  SubmitForm() {
    if(this.signUpForm.valid){
      const formData = this.signUpForm.value;
      this.seller.userSignup(formData).subscribe((result) => {
        console.log(result);
      });
    }
  }
}
