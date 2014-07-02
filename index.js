// day names in ordered array
module.exports.dayStrings = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

// day abbreviations in ordered array
module.exports.dayStringsAbbreviated = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
];

// change 0 index list to 1
// add '0' before single digits
module.exports.fixMonth = function(month){
    var m = month + 1;
    if (m < 10){
        m = '0' + m;
    }
    return m;
}

// month names in ordered array
module.exports.monthStrings = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

// month abbreviations in ordered array
module.exports.monthStringsAbbreviated = [
    'Jan', 
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
];

// return am or pm based on hour
module.exports.ampm = function(hour) {
    var m = "AM";
    if (hour > 11){
        m = "PM";
    }
    return m;
}

// return 12 hour from 24 hour time
module.exports.to12Hour = function(hour){
    var h = hour;
    if (hour > 12){
        h = hour - 12;
    }
    if (hour == 0){
        h = 12;
    }
    return h;
}

// add '0' before single digit for mins
module.exports.fixZeroes = function(minutes){
    var m = minutes;
    if (minutes < 10){
        m = '0'+minutes;
    }
    return m;
}

// common way to display a date time as a string
module.exports.dateTimeString = function(dateTime){
    var date = new Date(dateTime);
    var text = this.dayStringsAbbreviated[date.getDay()] + ', ';
    text += this.monthStringsAbbreviated[date.getMonth()] + ' ';
    text += date.getDate() + ', ';
    text += date.getFullYear() + ' ';
    text += this.to12Hour(date.getHours()) + ':';
    text += this.fixZeroes(date.getMinutes());
    text += this.ampm(date.getHours());
    return text;
}

// common way to display date as string
module.exports.dateString = function(dateTime){
    var date = new Date(dateTime);
    var text = this.monthStringsAbbreviated[date.getMonth()] + ' ';
    text += date.getDate() + ', ';
    text += date.getFullYear() + ' ';
    return text;   
}

// return integer as minutes:seconds
module.exports.mmss = function (secs) {
    var s = secs % 60;
    if (s < 10) {
        s = "0" + s;
    }
    return Math.floor(secs/60) + ":" + s;
}
