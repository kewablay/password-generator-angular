import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordGeneratorComponent } from './components/password-generator/password-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PasswordGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'password-generator';
}
