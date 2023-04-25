// Import stylesheets
import './style.css';

function solution(S: Array<string>) {
  let result: number[] = [];
  let isFound = false;
  S.every((_, i) => {
    let currentString = S[i];

    for (let j = i + 1; j < S.length; j++) {
      let chkString = S[j];

      for (let p = 0; p < currentString.length; p++) {
        if (currentString.charAt(p) === chkString.charAt(p)) {
          result[0] = i;
          result[1] = j;
          result[2] = p;
          isFound = true;
          break;
        }
      }
      if (isFound) break;
    }
    if (isFound) {
      return false;
    } else {
      return true;
    }
  });
  return result;
}

let output = solution(['abc', 'bca', 'dbe']);
console.log(output);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>${output}</h1>`;
