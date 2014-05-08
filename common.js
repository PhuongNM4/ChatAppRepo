function GetDateTimeNow() {
    var date = new Date();
    return AppendZero(date.getHours()) + ":" + AppendZero(date.getMinutes()) + "  " + AppendZero(date.getDate()) + "-" + AppendZero((date.getMonth() + 1)) + "-" + (date.getYear() + 1900);
}

function AppendZero(input) {
    if (input.toString().length < 2) {
        return "0".concat(input);
    }
    return input;
}
