const pokemon = require('./pokemon.json');

const types = {
  fire: './fwdpokemonicons/fire.png',
  dragon: './fwdpokemonicons/dragon.png',
  fighting: './fwdpokemonicons/fighting.png',
  water: './fwdpokemonicons/water.png',
  bug: './fwdpokemonicons/bug.png',
  psychic: './fwdpokemonicons/psychic.png',
  normal: './fwdpokemonicons/normal.png',
  poison: './fwdpokemonicons/poison.png',
  ground: './fwdpokemonicons/ground.png',
  electric: './fwdpokemonicons/electric.png',
  rock: './fwdpokemonicons/rock.png',
  fairy: './fwdpokemonicons/fairy.png',
  grass: './fwdpokemonicons/grass.png',
  flying: './fwdpokemonicons/flying.png',
  ghost: './fwdpokemonicons/ghost.png',
  ice: './fwdpokemonicons/ice.png',
  dark: './fwdpokemonicons/dark.png',
  steel: './fwdpokemonicons/steel.png'
};

for (let i in pokemon) {
  const pType = pokemon[i].types;
  let imageBlock = '<div class="icon flex">';
  pType.forEach(type => {
    imageBlock = `${imageBlock}
   <img class="typeImg" src="${types[type]}" />`;
  });
  imageBlock = imageBlock + '</div>';

  let content = `<div class="card" onclick="getDetail(this)" onmouseover="changeBackGround(this)">
    <div class="nameBlock">
      <div class="name">${pokemon[i].name}</div>
      ${imageBlock}
    </div>
    <img  src = "${pokemon[i].art_url}" class="image" />
    <p hidden class= "description" > ${pokemon[i].description}</p>
    <p hidden id="type">${pokemon[i].types}</p>
  </div>
  `;
  console.log(content);
}
