/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const searchInput = document.getElementById("search").value;
const submit = document.querySelector("submit-btn");
const output = document.getElementById("output");

function weightConverterTo(e) {
    e.preventDefault()
    const gvalue = Number(searchInput.value / 0.0010000);
    const lbvalue = Number(searchInput.value * 0.0022046);
    const ozvalue= Number(searchInput.value * 35.274);
    return gvalue + lbvalue + ozvalue
} 
function showResults(){
    output.innerText= weightConverterTo();
}
submit.addEventListener("onclick", showResults());