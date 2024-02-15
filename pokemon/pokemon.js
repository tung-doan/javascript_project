



async function fetchpokemon() {
    try {
        const name = document.getElementById("pokemon").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }
        else {
            const data = await response.json();
            const image = document.getElementById("pokemonsprite");
            image.src = data.sprites.front_default;
            image.style.display = "block";
        }
    }
    catch (error) {
        console.error(error);
    }
}