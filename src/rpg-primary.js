export class Calculator {
  constructor() {
    this.date = "";
  }



  getDay(date) {
    this.date = date.toString();
    let array = this.date.split(" ");
    switch (array[0]) {
      case "Sun":
        return "Sunday";
        break;
      case "Mon":
        return "Monday";
        break;
      case "Tue":
        return "Tuesday";
        break;
      case "Wed":
        return "Wednesday";
        break;
      case "Thu":
        return "Thursday";
        break;
      case "Fri":
        return "Friday";
        break;
      case "Sat":
        return "Saturday";
        break;
      default:
        return "Please enter a valid data"

    }

  }



}
