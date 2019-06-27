import $ from 'jquery';
import './styles.css';
import {
  Calculator
} from './rpg-primary';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




let calc = new Calculator();


$(function() {
  $("form#submit_calculator").submit(function(event) {
    event.preventDefault();
    let input_year = parseInt($("#year").val());
    // console.log(input_year);
    let input_month = parseInt($("#month").val());
    // console.log(input_month);
    let input_day = parseInt($("#day").val());
    // console.log(input_day);
    let new_date = new Date(input_year, input_month - 1, input_day);
    debugger;
    let weekDay = calc.getDay(new_date);

    $("#output_result").html(weekDay);
    $("#output").fadeIn(1000);
  });
});
