import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'bmi-calculator';
  @Input() weight: number = 0;
  @Input() height: number = 0;

  calculateBMI() {
    return (this.weight / (this.height * this.height));
  }
}
