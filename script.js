// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')
// Write password to the #password input
var passwordText = document.querySelector('#password')

// Character type lists
const lowercaseCharacters = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseCharacters = lowercaseCharacters.toUpperCase()
const numberCharacters = '0123456789'
const specialCharacters = '!@#$%^&*()_+'

function generatePassword() {
	// Prompt user for password length
	const pwLength = Number(
		prompt('How many characters would you like your password to contain? (8-128)')
	)
	// Check to see if password length is between 8 and 128 and is a number
	if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
		alert('Password length must be between 8 and 128 characters and a number.')
		return
	}
	// Prompt user for password criteria (characterType)
	const pwLower = confirm('Would you like to inclue LOWERCASE LETTERS?')
	const pwUpper = confirm('Would you like to include UPPERCASE LETTERS?')
	const pwNumber = confirm('Would you like to include NUMBERS?')
	const pwSpecial = confirm('Would you like to include SPECIAL CHARACTERS?')

	// Character Types
	var characterType = ''
	// If true, add characters to characterType
	if (pwLower) characterType += lowercaseCharacters
	if (pwUpper) characterType += uppercaseCharacters
	if (pwNumber) characterType += numberCharacters
	if (pwSpecial) characterType += specialCharacters
	// Check to see if at least one character type is selected
	if (!pwLower && !pwUpper && !pwNumber && !pwSpecial) {
		alert('You must select at least one character type.')
		return
	}

	// Generate Password
	var password = ''
	// Loop through password length and add random character
	for (let i = 0; i < pwLength; i++) {
		const randomCharacter = Math.floor(Math.random() * characterType.length)
		password += characterType[randomCharacter]
	}
	// Display password
	passwordText.value = password

	// Console Logs
	console.log(pwLength) // User input - Number bween 8 and 128
	console.log(pwLower) // Boolean
	console.log(pwUpper) // Boolean
	console.log(pwNumber) // Boolean
	console.log(pwSpecial) // Boolean
	console.log(lowercaseCharacters.length) // If pwLower is true, 26
	console.log(uppercaseCharacters.length) // If pwUpper is true, 26
	console.log(numberCharacters.length) // If pwNumber is true, 10
	console.log(specialCharacters.length) // If pwSpecial is true, 12
	console.log(characterType.length) // Total number of characters of selected types
}

// Add event listener to generate button
generateBtn.addEventListener('click', generatePassword)
