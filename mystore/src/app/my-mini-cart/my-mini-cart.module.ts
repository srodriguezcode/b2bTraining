import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMiniCartComponent } from './my-mini-cart.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';



@NgModule({
  declarations: [
    MyMiniCartComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        MiniCartComponent:{
          component:MyMiniCartComponent
        }
      }
    } as CmsConfig)
  ]
})
export class MyMiniCartModule { }
