import { Component } from '@angular/core';

import { MenuController, Platform } from '@ionic/angular';
import { StatusBar, Style } from '@capacitor/status-bar';
import { TranslateConfigService } from './translate-config.service';
import { SplashScreen } from '@capacitor/splash-screen';
import { Capacitor } from '@capacitor/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentRoute:any;
  constructor(
    private platform: Platform,
    private translateConfigService: TranslateConfigService,
    private menu: MenuController
  ) {
    this.initializeApp();
  }

  systemLanguage:any;
  initializeApp() {
    this.platform.ready().then(() => {
      this.updateAppLanguage();
      SplashScreen.show();
      this.setStatusBar();
    });
  }

  updateAppLanguage(){
    if(!localStorage.getItem('appLanguage')){
      localStorage.setItem('appLanguage', "en");
      this.systemLanguage = "en";
    }else{
     this.systemLanguage = localStorage.getItem('appLanguage');
    }
    this.translateConfigService.setLanguage(this.systemLanguage);
  } 

  setStatusBar() {
    if (Capacitor.getPlatform() !== 'web') {
      const setStatusBarStyleLight = async () => {
        await StatusBar.setStyle({ style: Style.Light });
        await StatusBar.setBackgroundColor({ color: "#fafafa" });
      };
      setStatusBarStyleLight();
    }
  }

  closeMenu(){
    this.menu.close('first');
  }
}