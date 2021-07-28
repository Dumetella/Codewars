/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!
*/


function getSum (a, b) {
   let res = 0;
   if (b < a) {
     [a,b] = [b,a];
   }
   while (a <= b){
     res += a++;
   }
   return res;
}
