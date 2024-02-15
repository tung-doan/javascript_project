function updatetime(){
    let now = new Date();
    let hours = now.getHours();
    let meridiem = hours <= 12 ? "AM" : "PM"; 
    hours = hours.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const seconds = now.getSeconds().toString().padStart(2, 0);
    const string = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = string;
}
updatetime();
setInterval(updatetime, 1000);