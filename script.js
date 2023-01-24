const random = async () => {
    try {
        const POKEMON_NAME = document.querySelector('input').value
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${POKEMON_NAME}`)
        const json = await result.json()
        const p = document.querySelector('div')
        p.innerHTML = `<p> abilità:${json.abilities.map(x => x.ability.name).join()} </p>
    <p>esperienza_base:${json.base_experience}</p>
    <p> nome :${json.name}</p>`;

    }
    catch (ex) {
        console.error(ex)
    }
}
let button = document.querySelector('button');

button.onclick = () => {

    random();

}

