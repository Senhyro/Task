class Utils {

    hourDifference(date1: Date, date2: Date): Number {
        let timeStart = date1.getHours();
        let timeEnd = date2.getHours();
        let hourDifference = timeEnd - timeStart;
        return hourDifference;
    }
}