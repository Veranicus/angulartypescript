import {CanDeactivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ProductDetailComponent} from './product.component';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate<ProductDetailComponent> {

  canDeactivate(productDetailComponent: ProductDetailComponent) {
    if (productDetailComponent.name.dirty) {
      return window.confirm('You have unsaved changes. Do you want to proceed ?')
    } else {
      return true;
    }
  }
}
