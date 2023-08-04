const time = document.getElementById("timeLabel");
const date = document.getElementById("dateLabel");

updateDate();
updateTime();
setInterval(updateDate, 1000);
setInterval(updateTime, 1000);

function updateDate() {
    let currdate = new Date();
    date.innerHTML = formatDate(currdate);

    function formatDate(date){
        let year = currdate.getFullYear();
        let month = currdate.getMonth();
        let day = currdate.getDate();

        switch(month) {
            case 0:
                month = "January"
                break;
            case 1:
                month = "Febuary"
                break;
            case 2:
                month = "March"
                break;
            case 3:
                month = "April"
                break;
            case 4:
                month = "May"
                break;
            case 5:
                month = "June"
                break;
            case 6:
                month = "July"
                break;
            case 7:
                month = "August"
                break;
            case 8:
                month = "September"
                break;
            case 9:
                month = "October"
                break;
            case 10:
                month = "November"
                break;
            case 11:
                month = "December"
                break;
        }
        return `${month} ${day}, ${year}`
    }
}

function updateTime() {
    let currdate = new Date();
    time.innerHTML = formatTime(currdate);

    function zeroFormat(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }

    function formatTime(date){
        let hours = currdate.getHours();
        let minutes = currdate.getMinutes();
        let seconds = currdate.getSeconds();
        let amPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;
        
        hours = zeroFormat(hours);
        minutes = zeroFormat(minutes);
        seconds = zeroFormat(seconds);

        return `${hours}:${minutes}:${seconds} ${amPm}`
    }
}

