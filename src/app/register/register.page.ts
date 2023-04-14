import { Component, OnInit } from '@angular/core';
import { brandConstant, ICON } from '../brand-constant/label';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  brandConstant = brandConstant;
  brandICON = ICON;

  constructor() { }

  ngOnInit() {
  }

}
