/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';
const showUserbtn = document.getElementById("btn");
const userInfo = document.getElementById("output");
const mesageP = document.getElementById ('message')

const showUserInfo = () => {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(json => {
        userInfo.innerHTML = `<p'${json.login} ${json.avatar_url}</p>`
      })
  };
  
  showUserbtn.onclick = () => showUserInfo();
  showUserbtn.onclick = () => deleteMesage();
  
 

  
