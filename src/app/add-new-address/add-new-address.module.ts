import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddNewAddressPageRoutingModule } from './add-new-address-routing.module';
import { AddNewAddressPage } from './add-new-address.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddNewAddressPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddNewAddressPage]
})
export class AddNewAddressPageModule {}
