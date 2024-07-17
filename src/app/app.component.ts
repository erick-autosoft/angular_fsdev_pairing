import { Component, VERSION } from '@angular/core';
import { TitleHeadingComponent } from './components/title-heading/title-heading.component';

@Component({
  standalone: true,
  selector: 'my-app',
  imports: [TitleHeadingComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {}
