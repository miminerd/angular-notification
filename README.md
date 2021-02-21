 ```html
<p align="right">
  <a href="https://www.buymeacoffee.com/yev" rel="nofollow">
  <img width="200" alt="screen shot 2018-03-01 at 10 33 39" src="https://user-images.githubusercontent.com/1577802/36840220-21beb89c-1d3c-11e8-98a4-45fc334842cf.png" style="max-width:100%;">
  </a>
</p>

````
![Alt text](https://camo.githubusercontent.com/5d0893ba93b18e9359e7d233cf5dd79c0c214fd9ac7b9eb602b664ce2c4452f4/68747470733a2f2f62616467652e667572792e696f2f6a732f7675652d6e6f74696669636174696f6e2e737667)
# Angular  notifications

Easy to use, highly customizable Angular notification- alert  component.

## Demo

- 👉 comming soon 

## Setup

`npm install --save angular-notification`

Add dependencies to your `app.module.ts`:

 ```js
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

```

There are 2 ways to use the notification element; \
inject it directly in your view and customize the element configuration in NgOnInit() for example\
`<lib-notif></lib-notif>`

<strong>Or </strong> 
<br>
show the notification element on an event trigger like addNotifElement() for example \
explained below

Trigger notifications from your class files (component.ts):

 ```js
  // import the notification service from the angular-notification module
  import { AngularNotificationService  } from 'angular-notification';
  import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';


  // inject the service in your constructor class
  constructor(private Service: AngularNotificationService,
              private componentFactoryResolver: ComponentFactoryResolver) { }


  // then set up the configuration of the notification component 
  // in any method where you want to implement it statically in NgOnInit()
  // or dynamically show the component from an event click for example

  // in this example I am usuing it on ngOnInit() this way the notification will be
  // viewable in my component view directly

  ngOnInit(): void {
    // setting object to set up the configuration
    this.setting = {
      width: '450px',
      type: 'green',
      title: 'Notication title',
      body: 'The notification will viewable directly in your component',
      position: 'bottom right
    };

    // pass the setting to the service so it can be applied in the notification component. 
    this.Service.setProperties(this.setting);
  }

  // or show the notif element when an event fires 
    addNotifElement() {
    this.setting = {
      width: '300px',
      type: 'danger',
      title: 'this an error message',
      body: '<b>Something went wrong </b> check it out',
      position: 'center',
      duration: 4000,
      background: '#fff'
    };
    this.Service.setProperties(this.setting);
    const childComponent = this.componentFactoryResolver.resolveComponentFactory( NotifComponent );
    this.componentRef = this.target.createComponent(childComponent);
  }
  ```

## Usage

Here is the list of the configurations you can pass to the notification component
Note that all props are optional.

comming soon 


