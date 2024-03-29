import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyBannerComponent } from './my-banner.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';



@NgModule({
  declarations: [
    MyBannerComponent
  ],
  imports: [
    CommonModule,
    MediaModule,
    ConfigModule.withConfig({
      cmsComponents:{
        SimpleResponsiveBannerComponent:{
          component: MyBannerComponent
        }
      }
    } as CmsConfig)
  ]
})
export class MyBannerModule { }
