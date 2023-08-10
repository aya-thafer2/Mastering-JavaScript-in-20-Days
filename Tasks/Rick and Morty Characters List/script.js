let characterList = document.getElementById('characterList');

let data='';
const displayCharacters = (aliveCharacters) =>{
    aliveCharacters.map(aliveChar => (
        data += `
        <li class="aliveCharacter">
            <img src="${aliveChar.image}" alt="${aliveChar.name}">
            <h2>${aliveChar.name}</h2>
            <p><span>Location:</span> ${aliveChar.location['name']}</p>
            <p><span>Species:</span> ${aliveChar.species}</p>
            <p><span>Gender:</span> ${aliveChar.gender}</p>
        </li>
        `
    ))

   characterList.innerHTML = data;
}

const getLiveCharacters =  (results)=>{
    const aliveCharacters =  results.filter(aliveCharacter => aliveCharacter.status === 'Alive');
    console.log(aliveCharacters);
    displayCharacters(aliveCharacters);
}
const getCharacters = async () =>{
    try{
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const {results} = await response.json();
        console.log(results.slice(0, 50)); 
        getLiveCharacters(results);
    }
    catch(err){
        console.log(`An error occurred while fetching: ${err.message}`);
    }
   
}
getCharacters();