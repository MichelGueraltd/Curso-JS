/*
&& -> false && -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"

FALSY 

false 
0
'' " " ``
null / undefined
NaN 
*/
const a = 0;
const b = null;
const c = 'Gabi';
const d = false;
const e = NaN;
const f = NaN;

console.log(a || b || c || d || e || f );