exports.yymmddhhmmss = (date) => {
    const dt = null;
    
    if (date) {
        dt = new Date(date);
    } else {
        dt = new Date();
    }

    year = "" + dt.getFullYear();
    month = "" + (dt.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + dt.getDate(); if (day.length == 1) { day = "0" + day; }
    hour = "" + dt.getHours(); if (hour.length == 1) { hour = "0" + hour; }
    minute = "" + dt.getMinutes(); if (minute.length == 1) { minute = "0" + minute; }
    second = "" + dt.getSeconds(); if (second.length == 1) { second = "0" + second; }

    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + second;
}

exports.yymmdd = (date) => {
    let dt = null;
    
    if (date) {
        dt = new Date(date);
    } else {
        dt = new Date();
    }

    year = "" + dt.getFullYear();
    month = "" + (dt.getMonth() + 1); if (month.length == 1) { month = "0" + month; }
    day = "" + dt.getDate(); if (day.length == 1) { day = "0" + day; }

    return year + "-" + month + "-" + day;
}