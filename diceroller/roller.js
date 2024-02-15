

function rolldice() {
    const numofdice = document.getElementById("numofdice").value;
    const diceresult = document.getElementById("diceResult");
    const diceimage = document.getElementById("diceimage");
    const values = [];
    const images = [];

    for (let i = 0; i < numofdice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src = "${value}.png">`);
    }

    diceresult.textContent = `dice: ${values.join(", ")}`;
    diceimage.innerHTML = images.join('');
}