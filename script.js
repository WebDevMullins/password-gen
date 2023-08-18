// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function generatePassword() {
	// var password = generatePassword()
	var passwordText = document.querySelector('#password')
	// Prompt user for password length
	const pwLength = Number(prompt('How many characters would you like your password to contain?'))
	// Check to see if password length is between 8 and 128
	if (pwLength < 8 || pwLength > 128) {
		alert('Password length must be between 8 and 128 characters.')
		return
	}
	// Prompt user for password criteria
	const pwLower = confirm('Would you like to inclue LOWERCASE LETTERS?')
	const pwUpper = confirm('Would you like to include UPPERCASE LETTERS?')
	const pwNumber = confirm('Would you like to include NUMBERS?')
	const pwSpecial = confirm('Would you like to include SPECIAL CHARACTERS?')

	passwordText.value = password
	// Console Logs
	console.log(pwLength)
	console.log(pwLower)
	console.log(pwUpper)
	console.log(pwNumber)
	console.log(pwSpecial)
}

// Add event listener to generate button
generateBtn.addEventListener('click', generatePassword)
