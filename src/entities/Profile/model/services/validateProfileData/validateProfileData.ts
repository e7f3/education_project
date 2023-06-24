import { Profile, ValidateProfileError } from '../../types/profileSchema'

export const validateProfileData = (data?: Profile) => {
  if (!data) {
    return [ValidateProfileError.NO_DATA]
  }

  const validationErrors: ValidateProfileError[] = []
  const { firstname, lastname, username, age, city, country, currency } = data

  // Validation starts

  if (!firstname || firstname.length < 2 || !/^[a-zA-Z\s-]*$/.test(firstname)) {
    validationErrors.push(ValidateProfileError.INVALID_FIRSTNAME)
  }

  if (!lastname || lastname?.length < 2 || !/^[a-zA-Z\s-]*$/.test(lastname)) {
    validationErrors.push(ValidateProfileError.INVALID_LASTNAME)
  }

  if (!username || username.length < 4 || !/^[a-zA-Z0-9_.-]*$/.test(username)) {
    validationErrors.push(ValidateProfileError.INVALID_USERNAME)
  }

  if (
    !age ||
    !Number.isInteger(age) ||
    !/^[1-9]$|^[1-9][0-9]$|^[1][0-2][0-9]$$/.test(String(age))
  ) {
    validationErrors.push(ValidateProfileError.INVALID_AGE)
  }

  if (
    !city ||
    city.length <= 2 ||
    !/^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ\s]*$/.test(city)
  ) {
    validationErrors.push(ValidateProfileError.INVALID_CITY)
  }

  if (!country) {
    validationErrors.push(ValidateProfileError.INVALID_COUNTRY)
  }

  if (!currency) {
    validationErrors.push(ValidateProfileError.INVALID_CURRENCY)
  }

  return validationErrors
}
