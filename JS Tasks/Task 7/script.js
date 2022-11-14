/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};
function showObjectKeys(){
  const key = ()=> {for (audi [key] of Object.entries(audi)) {
    console.log(`${key}`);
  }
  return key
}}

console.log(showObjectKeys)

