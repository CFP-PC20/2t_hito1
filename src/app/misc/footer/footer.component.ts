import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  cookieVisibility: boolean;

  constructor() { }

  ngOnInit() {
    this.getCookie();
  }

  getCookie() {
    const cookie = decodeURIComponent(document.cookie);
    console.log(cookie);

    this.cookieVisibility = cookie.indexOf('hasAcceptedCookies') !== 0;
  }

  setCookie() {
    document.cookie = 'hasAcceptedCookies=yes';
    this.cookieVisibility = false;
  }

}
