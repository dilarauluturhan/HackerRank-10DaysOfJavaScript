function getDayName(dateString) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date(dateString).getDay();

    return weekDays[day];
}
