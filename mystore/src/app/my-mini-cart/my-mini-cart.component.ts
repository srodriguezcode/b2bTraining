import { Component } from '@angular/core';
import { MiniCartComponent } from '@spartacus/cart/base/components/mini-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-mini-cart',
  templateUrl: './my-mini-cart.component.html',
  styleUrls: ['./my-mini-cart.component.scss']
})
export class MyMiniCartComponent extends MiniCartComponent{
  entries$: Observable<number> = this.miniCartComponentService.getQuantity();
}
