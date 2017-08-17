// Generic numeric template formatter
// https://www.codewars.com/kata//train/javascript

function numericFormatter(template, digits) {
  digits = digits || '1234567890';
  let cnt = 0;
  return template.replace(/[a-z]/gi, c => digits[cnt++ % digits.length]);
}