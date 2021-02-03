import { NgModule } from '@angular/core';
import { AngularNotificationComponent } from './angular-notification.component';
import { NotwidthDirective } from './directives/notwidth.directive';
import { NotifComponent } from './components/notif/notif.component';



@NgModule({
  declarations: [AngularNotificationComponent, NotwidthDirective, NotifComponent],
  imports: [
  ],
  exports: [AngularNotificationComponent, NotifComponent]
})
export class AngularNotificationModule { }
