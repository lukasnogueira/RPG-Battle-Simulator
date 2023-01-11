let id = 0;

let name = document.getElementById("Name");
let ca = document.getElementById("CA");
let dmb_base = document.getElementById("DMG_Base");
let haste = document.getElementById("Haste");
let hp = document.getElementById("HP");
let tabela = document.getElementById("tbody");
function add() {
  ++id;
  let newcharacter = `<tr id="${id}">
        <td aligh="center"> <button class="editar center" onclick="morrer(${id})">Morreu</button></td>
        <td align="center"> ${id}</td>
        <td align="center"> ${name.value}</td>
        <td align="center"> ${ca.value}</td>
        <td align="center"> ${dmb_base.value}</td>
        <td align="center" id="${id + "hp"}"> ${hp.value}</td>
        <td >
          <input type="text" id="${id+"mod"}" class="dano">
          <input type="button" onclick="dmg(${id})" class="deletar btn" value="-">
          <input type="button" value="+" class="editar btn"  onclick="heal(${id})">
        </td>
        <td align="center"> ${haste.value}</td>
        <td align="center"><button class="deletar center" onclick="Delete(${id})">Deletar</button></td>
        <td align="center"><input type="text" class="dano"</td>
       </tr>`;
  tabela.innerHTML += newcharacter;
  console.log(newcharacter);
}

let morreu = 0;
function morrer(id) {
  let classe = document.getElementById(id);  
  if (morreu == 0) {
    morreu = 1;
    classe.classList.add("item-nome");
  } else {
    morreu = 0;
    classe.classList.remove("item-nome");
  }
}

function Delete (d){
  var tarefa = document.getElementById(d);
  tarefa.remove();
}



function heal(h){
  let mod = document.getElementById(h+"mod");
  let hp_atual = document.getElementById(h+"hp");
  console.log(parseInt(hp_atual.innerHTML));
  hp_atual.innerHTML = (parseInt(hp_atual.innerHTML) + parseInt(mod.value))
}
function dmg(h){
  let mod = document.getElementById(h+"mod");
  let hp_atual = document.getElementById(h+"hp");
  console.log(parseInt(mod.value));
  hp_atual.innerHTML = (parseInt(hp_atual.innerHTML) - parseInt(mod.value))
}