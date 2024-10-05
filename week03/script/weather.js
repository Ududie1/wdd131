const temperature = 50;
const wind = 20;



const calculateWindChill = function(T,V) {
    return 35.74 + (0.62115*T) - (35.75*(Math.pow(V,0.16)) + 0.4275*T)*(Math.pow(V,0.16);
}

document.getElementById("temp").innerHTML = temperature;
document.querySelector("#wind").innerHTML = wind;

function handClick() {
    const chill = calculateWindChill(temperature,wind);
    document.getElementById("chill").innerText = chill;
}

function handClick() {
    const chill = calculateWindChill(temperature,wind);
    document.getElementById("chill").innerText = chill;
}

document.getElementById("chillButton").addEventListener('click',() =>{
    
})