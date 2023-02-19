document.getElementById('start').addEventListener("click", function () {

    const date = new Date();
});

window.setInterval(function () {
    const date = new Date("2023-1-1");

    // Formats and display the local time
    document.querySelector(".today").innerHTML = `Today: ${(date.getHours().length < 2) ? "0" + date.getHours() : date.getHours()}:${(date.getMinutes().length < 2) ? "0" + date.getMinutes() : date.getMinutes()}:${(date.getSeconds().length < 2) ? "0" + date.getSeconds() : date.getSeconds()} ${(date.getDate().length < 2) ? "0" + date.getDate() : date.getDate()}/${((date.getMonth() + 1).length < 2) ? (date.getMonth() + 1) : "0" + (date.getMonth() + 1)}/${(date.getFullYear().length < 2) ? "0" + date.getFullYear() : date.getFullYear()}`;
}, 1000);