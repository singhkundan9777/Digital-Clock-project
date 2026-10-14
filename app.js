
setInterval(()=> {
    let h2 = document.querySelector("h2");
    let currTime = new Date().toLocaleTimeString();
    h2.innerHTML = currTime;
}, 1000);