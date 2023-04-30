import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() name: string = '';
  @Input() type: string = 'text';
  @Input() inputModel: string = '';
  @Input() errorText: string = '';
  @Input() error: boolean = false;

  @Output() inputModelChange = new EventEmitter<string>();
}
