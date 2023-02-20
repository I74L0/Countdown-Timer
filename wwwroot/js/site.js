var event_date = "";

// When button is clicked
document.getElementById('start').addEventListener("click", function () {
    if (document.getElementById("name").value != '' && document.getElementById('date').value != '') {
        document.querySelector(".name").innerHTML = document.getElementById("name").value;
        let time = "00:00:00";
        if (document.querySelector(".input #hours").value != "" && document.querySelector(".input #minutes").value != "" && document.querySelector(".input #seconds").value != "") {
            time = `${document.querySelector(".input #hours").value}:${document.querySelector(".input #minutes").value}:${document.querySelector(".input #seconds").value}`;
        }
        event_date = new Date(`${document.getElementById('date').value} ${time}`);
        document.querySelector(".event").innerHTML = `Event date: ${(event_date.getHours().toString().length < 2) ? "0" + event_date.getHours() : event_date.getHours()}:${(event_date.getMinutes().toString().length < 2) ? "0" + event_date.getMinutes() : event_date.getMinutes()}:${(event_date.getSeconds().toString().length < 2) ? "0" + event_date.getSeconds() : event_date.getSeconds()} ${(event_date.getDate().toString().length < 2) ? "0" + event_date.getDate() : event_date.getDate()}/${((event_date.getMonth() + 1).toString().length < 2) ? "0" + (event_date.getMonth() + 1) : event_date.getMonth() + 1}/${event_date.getFullYear()}`;
    }
    else {
        alert("Name or date can't be empty!");
    }
});

window.setInterval(function () {
    let local_date = new Date();

    // Formats and display the local time
    document.querySelector(".today").innerHTML = `Today: ${(local_date.getHours().toString().length < 2) ? "0" + local_date.getHours() : local_date.getHours()}:${(local_date.getMinutes().toString().length < 2) ? "0" + local_date.getMinutes() : local_date.getMinutes()}:${(local_date.getSeconds().toString().length < 2) ? "0" + local_date.getSeconds() : local_date.getSeconds()} ${(local_date.getDate().toString().length < 2) ? "0" + local_date.getDate() : local_date.getDate()}/${((local_date.getMonth() + 1).toString().length < 2) ? "0" + (local_date.getMonth() + 1) : local_date.getMonth() + 1}/${local_date.getFullYear()}`;


    if (event_date != "") {
        let time_left = (event_date.getTime() - local_date.getTime()) / 1000;
        if (time_left > 0) {
            document.querySelector(".timer #days").innerHTML = Math.trunc(time_left / 86400);
            document.querySelector(".timer #hours").innerHTML = Math.trunc(time_left % 86400 / 3600);
            document.querySelector(".timer #minutes").innerHTML = Math.trunc(time_left % 86400 % 3600 / 60);
            document.querySelector(".timer #seconds").innerHTML = Math.trunc(time_left % 86400 % 3600 % 60);
        }
        else {
            document.querySelector(".timer #days").innerHTML = "00";
            document.querySelector(".timer #hours").innerHTML = "00";
            document.querySelector(".timer #minutes").innerHTML = "00";
            document.querySelector(".timer #seconds").innerHTML = "00";
        }
    }
}, 1000);