import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilityServiceService {

  constructor(private toastController: ToastController) {}

  async simpleToast(position: 'top' | 'middle' | 'bottom', msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
