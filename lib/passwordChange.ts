// Checks if the password has at least one number
export function validatePasswordHasAtLeastOneNumber(password: string): boolean {
  const numberRegex = /[0-9]/;
  return numberRegex.test(password);
}

// Checks if the password has at least one special character
export function validatePasswordHasAtLeastOneSpecialChar(password: string): boolean {
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]\\;]/;
  return specialCharRegex.test(password);
}

// Checks if the password has at least one uppercase character
export function validatePasswordHasAtLeastOneUpperCaseChar(password: string): boolean {
  const upperCaseRegex = /[A-Z]/;
  return upperCaseRegex.test(password);
}

// Checks if the password has at least one lowercase character
export function validatePasswordHasAtLeastOneLowerCaseChar(password: string): boolean {
  const lowerCaseRegex = /[a-z]/;
  return lowerCaseRegex.test(password);
}

// Checks if the password has at least 10 characters
export function validatePasswordHasAtLeastTenChar(password: string): boolean {
  return password.length >= 10;
}
