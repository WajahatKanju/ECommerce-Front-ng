import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',

})
export class SellerService {
  constructor(private http: HttpClient) {}

  userSignup(data: any) {
    console.log(data)
    const { confirm_password, ...requestData } = data;
    return this.http.post('http://127.0.0.1:8000/auth/users/', data);
  }
}
