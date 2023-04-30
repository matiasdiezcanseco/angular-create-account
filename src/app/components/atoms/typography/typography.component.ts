import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent {
  @Input() text: string = '';
  @Input() variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'text' = 'text';
}
