import { NgModule } from '@angular/core';
import { AngularNotificationComponent } from './angular-notification.component';
import { NotwidthDirective } from './directives/notwidth.directive';



@NgModule({
  declarations: [AngularNotificationComponent, NotwidthDirective],
  imports: [
  ],
  exports: [AngularNotificationComponent]
})
export class AngularNotificationModule { }
