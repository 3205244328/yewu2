import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-manage1',
  templateUrl: './manage1.component.html',
  styleUrls: ['./manage1.component.css']
})
export class Manage1Component implements OnInit {
  myForm: FormGroup;
  type: AbstractControl;
  id: AbstractControl;
  value: AbstractControl;
  cz: AbstractControl;
  users$: Observable<User>;
  baseUrl = 'http://192.168.43.151:3000/';
  currentUser: User;
  constructor(private fb: FormBuilder, private httpClient: HttpClient) {
    this.myForm = this.fb.group({
      'id': [''],
      'type': [''],
      'value': [''],
      'cz': [''],
    });

    this.type = this.myForm.controls['type'];
    this.id = this.myForm.controls['id'];
    this.value = this.myForm.controls['value'];
    this.cz = this.myForm.controls['cz'];
  }
  ngOnInit(): void {
  }
  LED() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + '001');
  }
  FAN() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + '004');
  }
  TEMP() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + '002');
  }
  TEMP1() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + '007');
  }
  HUM() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + '003');
  }
  HUMI() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + '009');
  }
  JIAN() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + '006');
  }
  HEAT() {
    this.users$ = <Observable<User>>this.httpClient.get(this.baseUrl + 'checks2/' + '008');
  }
}
