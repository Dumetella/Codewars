const set = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };

function solution(roman){
  
  const input = roman.split('');
  
  let total = 0;
  let current;
  let currentValue;
  let next;
  let nextValue;
  
  for (let i = 0; i < input.length; i++) {
    
      current = input[i];
      currentValue = set[current];
    
      next = input[i+1];
      nextValue = set[next];
    
      if (currentValue < nextValue) {
          total -= currentValue;
      } else {
          total += currentValue;
      }
  }
  return total;
}
