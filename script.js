let time = 300;

setInterval(() => {
    let min = Math.floor(time / 60);
    let sec = time % 60;

    document.getElementById("timer").innerText =
    "Encryption process: " + min + ":" + (sec < 10 ? "0" : "") + sec;

    if(time > 0) time--;
}, 1000);

function checkKey(){
    let key = document.getElementById("key").value;
    let status = document.getElementById("status");

    if(key === "SAFE-KEY"){
        status.style.color = "lime";
        status.innerText = "SYSTEM RESTORED";
        document.body.style.background = "#001a00";
    } else {
        status.style.color = "red";
        status.innerText = "Invalid key - access denied";
    }
}
