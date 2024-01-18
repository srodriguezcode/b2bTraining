import { NgModule } from "@angular/core";
import { CmsConfig, ConfigModule } from "@spartacus/core";
import { SalesDetailComponent3 } from "./sales-detail.component";

@NgModule({
    imports:[
        ConfigModule.forRoot({
            cmsComponents:{
                component: SalesDetailComponent3
            }
        } as CmsConfig )
    ],
    declarations:[SalesDetailComponent3]
})
export class SalesDetailModule {}