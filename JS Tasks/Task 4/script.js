/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';
const resultDiv = document.getElementById('output');

const getCar = () => {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(json => {
        console.log(json.cars)
    })
};

  const stats = Object.keys(brand.model).map(cars => {
    return `${cars[brand]} ${cars[model]}`
  }).join('');
  
  resultDiv.innerHTML = `<p>${brand}${model}</p>`
