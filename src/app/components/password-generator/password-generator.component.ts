import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-generator',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-generator.component.html',
  styleUrl: './password-generator.component.sass',
})
export class PasswordGeneratorComponent {
  password: string = '';
  passwordLength: number = 1;
  includeUppercase: boolean = false;
  includeLowercase: boolean = false;
  includeNumbers: boolean = false;
  includeSymbols: boolean = false;

  private lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  private uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numberChars = '0123456789';
  private specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  generatePassword(): void {
    let characterPool = '';

    if (this.includeLowercase) {
      characterPool += this.lowercaseChars;
    }
    if (this.includeUppercase) {
      characterPool += this.uppercaseChars;
    }
    if (this.includeNumbers) {
      characterPool += this.numberChars;
    }
    if (this.includeSymbols) {
      characterPool += this.specialChars;
    }

    if (characterPool === '') {
      this.password = '';
      return;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterPool.length);
      generatedPassword += characterPool[randomIndex];
    }

    this.password = generatedPassword;
  }
}
