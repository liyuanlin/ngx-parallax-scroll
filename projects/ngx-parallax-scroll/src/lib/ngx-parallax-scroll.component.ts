import { Component, OnInit, Input } from '@angular/core';
import { IParallaxScrollConfig } from './ngx-parallax.interfaces';

@Component({
  selector: 'ngx-parallax-scroll',
  template: `
    <div class="parallax-container" ngxParallaxScroll [config]="config">
      <ng-content></ng-content>
    </div>
  `,
  styles: ['.parallax-container{display:inline-block;}']
})
export class NgxParallaxScrollComponent implements OnInit {
  @Input() config: IParallaxScrollConfig = {
    // Set parallax speed, requared
    parallaxSpeed: 10,
    // Set parallax smoothness (transition time), requared
    parallaxSmoothness: 1000
  };

  constructor() { }

  ngOnInit() { }
}
