// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function generatePassword() {
	// var password = generatePassword()
	var passwordText = document.querySelector('#password')

	const pwLength = Number(prompt('How many characters would you like your password to contain?'))

	const pwLower = confirm('Would you like your password to contain LOWERCASE LETTERS?')

	const pwUpper = confirm('Would you like your password to contain UPPERCASE LETTERS?')

	const pwNumber = confirm('Would you like your password to contain NUMBERS?')

	const pwSpecial = confirm('Would you like your password to contain SPECIAL CHARACTERS?')

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
