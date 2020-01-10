const changeBackGround = function(element) {
  const typesOfPokemon = {
    fire: 'rgb(236,180,151)',
    dragon: 'rgb(95,119,189)',
    fighting: 'rgb(251,183,209)',
    water: 'rgb(95,119,189)',
    bug: 'rgb(94,164,203)',
    psychic: 'rgb(255,225,70)',
    normal: 'rgb(253,221,185)',
    poison: 'rgb(151,106,160)',
    ground: 'rgb(238,137,57)',
    electric: 'rgb(241,184,134)',
    rock: 'rgb(185,183,190)',
    fairy: 'rgb(246,202,214)',
    grass: 'rgb(103,167,165)',
    flying: 'rgb(241,184,134)',
    ghost: 'rgb(185,183,190)',
    ice: 'rgb(240,225,231)',
    simple: 'rgb(255,255,255)'
  };

  const type = element.childNodes[7].innerText;
  const types = type.split(',');
  const firstType = types[0];
  let secondType = types[1];
  if (!secondType) {
    secondType = 'simple';
  }

  element.onmouseover = function() {
    element.style.backgroundImage = `repeating-radial-gradient(${typesOfPokemon[firstType]} 40%,${typesOfPokemon[secondType]},${typesOfPokemon[firstType]}`;
  };

  element.onmouseleave = function() {
    element.style.backgroundImage = `repeating-radial-gradient(${typesOfPokemon.simple},${typesOfPokemon.simple},${typesOfPokemon.simple}`;
  };
};

const getDetail = function(element) {
  const image = element.childNodes[3].src;
  const name = element.childNodes[1].innerText;
  const description = element.childNodes[5].innerText;
  const contentToAdd = getAboutPanel(name, image, description);
  const detailPanel = document.getElementById('detailPanel');
  detailPanel.innerHTML = contentToAdd;
  detailPanel.style.margin = '0px';
  detailPanel.style.transition = 'margin .5s';
};

const removePanel = function() {
  const detailPanel = document.getElementById('detailPanel');
  detailPanel.style.margin = '-600px';
  detailPanel.style.transition = 'margin .5s';
  detailPanel.innerText = '';
};

const filterCards = function(card) {
  const name = card.children[0].children[0].innerText.toLowerCase();
  return name.includes(this.toLowerCase());
};

const filterPokemon = function() {
  const input = document.getElementById('search');
  const cards = document.getElementsByClassName('card');
  const listOfCard = Array.from(cards);
  listOfCard.forEach(card => (card.style.display = 'none'));
  const newCards = listOfCard.filter(filterCards.bind(input.value));
  newCards.forEach(card => (card.style.display = 'block'));
};
const getAboutPanel = function(name, image, description) {
  const panelDetails = `<div id="panel" class="panel">
      <button id="button" class="panelButton" onClick = "removePanel()">
        <img src="cross.png"  height="15px" width="15px" alt="close" /img>
      </button>
      <h1 class="panelName">${name}</h1> 
   <img src="${image}" width= "400px"; alt="${name}" class="panelImage"</img> 
   <p class= "panelDescription">${description}</p>
   </div>`;
  return panelDetails;
};
