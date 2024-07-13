fetchData();

async function fetchData() {
    try {
        let pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        // await: wait for a promise and return a value
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok) {
            throw new Error("Couldn't found resources");
        }

        const data = await response.json();
        const pokemonImage = document.getElementById("pokemonImage");
        pokemonImage.src = data.sprites.front_default;
        pokemonImage.style.display = "block";
    } catch(error) {
        console.error(error);
    }
}