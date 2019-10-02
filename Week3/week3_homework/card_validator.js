'use strict';

const test_valid_input = '6698666658666166';
const test_invalid_input = 'a9224533219c0112';

// #- Number must be 16 digits
const digits_count = 16;

function validate_number_of_digits(input) {
  return input.length === digits_count ? true : false;
}

// #- all of them must be numbers
const is_number_validation = /^[0-9]+$/;

function validate_is_number(input) {
  return is_number_validation.test(input) ? true : false;
}

//#- You must have at least two different digits represented (all of the digits cannot be the same)
function validate_frequency(input) {
  let counter = 0;
  const firstChar = input[0];

  for (const x of input) {
    if (firstChar === x) counter++;
  }

  return counter >= digits_count ? false : true;
}

// #- The final digit must be even
function validate_final(input) {
  return input[input.length - 1] % 2 === 0 ? true : false;
}

// The sum of all the digits must be greater than 16
let sum_of_digits = 0;

function validate_sum(input) {
  for (const digit of input) {
    sum_of_digits += digit;
  }

  return sum_of_digits > 16 ? true : false;
}

// final function
function validate_credit_card(input) {
  const str_input = input.toString();

  if (
    // Number must be 16 digits:
    validate_number_of_digits(str_input) &&
    // all of them must be numbers
    validate_is_number(str_input) &&
    // at least two different digits
    validate_frequency(str_input) &&
    // last digit == even
    validate_final(str_input) &&
    // sum of digits > 16:
    validate_sum(str_input)
  )
    return `The inserted card number ${input} is valid`;
  return `The inserted card number ${input} is invalid`;
}

console.log(validate_credit_card(test_valid_input));
console.log(validate_credit_card(test_invalid_input));
