# source
 fork from  [https://github.com/farengeyt451/ngx-parallax-scroll](https://github.com/farengeyt451/ngx-parallax-scroll)
# update after fork
 
 update to fit angular 14+

# ngx-parallaxs-scroll

This is a simple angular plugin, that allows us to implement parallax effect for some element in page.

## Demo

Example application: [https://ngx-parallax-scroll.stackblitz.io](https://ngx-parallax-scroll.stackblitz.io)
<br/>
StackBlitz example: [https://stackblitz.com/edit/ngx-parallax-scroll](https://stackblitz.com/edit/ngx-parallax-scroll)


or  you can download code from [https://github.com/liyuanlin/ngx-parallax-scroll](https://github.com/liyuanlin/ngx-parallax-scroll)

run command 
```
npm i
npm start
```
then open [http://localhost:4200](http://localhost:4200) to view this demo 
## Installation

Install from npm:

`npm i @liyuanlin/ngx-parallax-scroll --save`

## Importing

Reference the directive in the main module:

`import { NgxParallaxScrollModule } from '@liyuanlin/ngx-parallax-scroll';`

Then in your base module:

    @NgModule({
        imports: [
            ...,
            NgxParallaxScrollModule,
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })

## Using

### Using as component

Use the component, providing content for parallax effect, and config.

In template:

    <ngx-parallax-scroll [config]="ngParallaxConf">
      <img src="..." class="parallax-img" alt="parallax-img">
    </ngx-parallax-scroll>

In component:

    import { Component } from '@angular/core';
    import { IParallaxScrollConfig } from 'ngx-parallax-scroll';

    @Component({
      ...
    })
    export class AppComponent {
      ngParallaxConf: IParallaxScrollConfig = {
        parallaxSpeed: 1,
        parallaxSmoothness: 1,
        parallaxDirection: 'reverse',
        parallaxTimingFunction: 'ease-in',
        parallaxThrottleTime: 80
      };
    }

### Using as directive

Use the directive, providing properties:

    <img src="..."
         class="parallax-img"
         alt="parallax-img"
         ngxParallaxScroll
         [parallaxSpeed]='1'
         [parallaxSmoothness]='1'
         [parallaxDirection]='"straight"'
         [parallaxTimingFunction]='"linear"'
         [parallaxThrottleTime]='0'>

or providing config:

    <img src="..."
         class="parallax-img"
         alt="parallax-img"
         ngxParallaxScroll
         [config]="ngParallaxConf">

## Expected properties

| Attribute              | Type   | Optinal | Default  | Description                                                                                                                |
| ---------------------- | ------ | ------- | -------- | -------------------------------------------------------------------------------------------------------------------------- |
| parallaxSpeed          | number | no      | -        | Set scroll-speed behavior on scroll event                                                                                  |
| parallaxSmoothness     | number | no      | -        | Set smooth effect (css transition time)                                                                                    |
| parallaxDirection      | string | yes     | straight | Set element movement direction <br> `('straight' or 'reverse')`                                                            |
| parallaxTimingFunction | string | yes     | linear   | Set css timing-function. <br> Accept [ timing-function ](https://developer.mozilla.org/en-US/docs/Web/CSS/timing-function) |
| parallaxThrottleTime   | number | yes     | 0        | Set throttling for scroll event                                                                                            |

## License

MIT
