import { Component, OnInit } from '@angular/core';
import { brandConstant, ICON } from '../brand-constant/label';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  brandConstant = brandConstant;
  brandICON = ICON;
  constructor() { }

  ngOnInit() {
  }

}
