import { CDFlashingDirective } from '@angular-challenges/shared/directives';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-random',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div cd-flash>I do nothing but I'm here</div>
  `,
  imports: [CDFlashingDirective],
})
export class RandomComponent {}
