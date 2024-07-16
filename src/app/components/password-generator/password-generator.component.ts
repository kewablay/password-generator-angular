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
  passwordStrength: string = '';

  private lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  private uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private numberChars = '0123456789';
  private specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  generatePassword(): void {
    let characterPool = '';

    // console.log(`lowercase: ${this.includeLowercase} , uppercase: ${this.includeUppercase} , numbers: ${this.includeNumbers} , symbols: ${this.includeSymbols}`);

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
    this.passwordStrength = this.getPasswordStrength(generatedPassword);

  }

  private getPasswordStrength(password: string): string {
    const length = password.length;
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^a-zA-Z0-9]/.test(password);

    const typeCount = [hasLowercase, hasUppercase, hasNumber, hasSymbol].filter(
      Boolean
    ).length;

    if (length < 8) {
      return 'Too Weak';
    } else if (length >= 8 && typeCount === 1) {
      return 'Weak';
    } else if (length >= 8 && typeCount >= 2 && typeCount < 3) {
      return 'Medium';
    } else if (length >= 12 && typeCount >= 3) {
      return 'Strong';
    } else {
      return 'Medium';
    }
  }
}
