// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Spinal Tap Case</h1>`;

/** 
 * TODO: Convert a string to spinal case.  Spinal case is all-lowercase-words-joined-by-dashes.
 * 
 function spinalCase(str) {
   return str;
 }
 
 spinalCase('This Is Spinal Tap');
 */

function spinalCase(str) {
  const regex = /\s+|_+/g;
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
  return str
    .split(/(?:_| )+/) // /(?:_| )+/
    .join('-')
    .toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('The_Andy_Griffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));
console.log(spinalCase('AllThe-small Things'));
