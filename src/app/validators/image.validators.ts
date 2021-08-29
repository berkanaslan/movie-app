import {AbstractControl, ValidationErrors} from "@angular/forms";

export class ImageValidator {
  static isValid(control: AbstractControl): ValidationErrors | null {
    const value = control.value as String;

    if (value.endsWith(".jpg") || value.endsWith(".jpeg") || value.endsWith(".png")) {
      return {wrongExtension: false};
    }

    return {wrongExtension: true};
  }
}
