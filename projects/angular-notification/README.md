# Angular  notifications

Easy to use, highly customizable Angular notification- alert  component.

## Demo

- 👉 comming soon 

## Setup

`npm install --save angular-notification` 
Add dependencies to your `app.module.ts`:
<pre>
import { AngularNotificationModule} from 'angular-notification';
         ...

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    AngularNotificationModule
  ],
  providers: [],
  bootstrap: [...]
})
</pre>

Add the notification component to your view:
`<lib-notif></lib-notif>`

Trigger notifications from your class files (component.ts):

// import the notification service from the angular-notification module
`import { AngularNotificationService  } from 'angular-notification';`

<pre>
  // inject the service in your constructor class
  constructor(private Service: AngularNotificationService) { }


  // then set up the configuration of the notification component
  // in any method where you want to implement it
  // in this example I am usuing it on ngOnInit() this way the notification will be
  // viewable in my component view directly

  ngOnInit(): void {
    // setting object to set up the configuration
    this.setting = {
      width: '450px',
      type: 'green',
      title: 'uuunjnkkjnjnjnnkj',
      body: 'This is some <b>content</b>',
      position: 'bottom right
    };

    // pass the setting to the service so it can be applied in the notification component. 
    this.Service.setProperties(this.setting);
  }
</pre>

## Usage

Here is the list of the configurations you can pass to the notification component
Note that all props are optional.

comming soon 


![Alt text](https://user-images.githubusercontent.com/1577802/36840220-21beb89c-1d3c-11e8-98a4-45fc334842cf.png)