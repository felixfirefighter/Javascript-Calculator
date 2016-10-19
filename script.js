/**
 * Created by LEE on 2016/10/18.
 */

function isTooLong() {
    return $("#current-input").text().length >= 17;
}

function isOperation(){
    var result;

    //check last character is an operation
    //if no argument is passed in, it means we want to check the last character of the string
    if(arguments.length === 0) {
        var currentInput = $("#current-input");
        result = currentInput.text().charAt(currentInput.text().length - 1);
    }else{
        result = arguments[0];
    }
    
    return result == "+" || result == "-" || result == "x" || result == "/" || result == "%";
}

function appendInput(value){
        var currentInput = $("#current-input");

        if(isTooLong()){
            currentInput.text("");
            $("#result").text("Max Digit Input!");
        }else{
            if(isOperation() && (isOperation(value))){
                var text = currentInput.text().slice(0,-1) + value;
                currentInput.text(text);
            }else{
                currentInput.append(value);
            }
        }
}

function addOperation(value){
    appendInput(value);
}

$(document).ready(function () {
    var currentInput = $("#current-input");

    $("#clear").click(function () {
        currentInput.text("");
    });

    $("#delete").click(function () {
        currentInput.text(currentInput.text().slice(0,-1));
    });

    $("#zero").click(function () {
        appendInput("0");
    });

    $("#double-zero").click(function () {
        appendInput("00");
    });

    $("#one").click(function () {
        appendInput("1");
    });

    $("#two").click(function () {
        appendInput("2");
    });

    $("#three").click(function () {
        appendInput("3");
    });

    $("#four").click(function () {
        appendInput("4");
    });
    $("#five").click(function () {
        appendInput("5");
    });

    $("#six").click(function () {
        appendInput("6");
    });

    $("#seven").click(function () {
        appendInput("7");
    });

    $("#eight").click(function () {
        appendInput("8");
    });
    $("#nine").click(function () {
        appendInput("9");
    });

    $("#dot").click(function () {
        appendInput(".");
    });

    $("#plus").click(function () {
        addOperation("+");
    });

    $("#minus").click(function () {
        addOperation("-");
    });

    $("#divide").click(function () {
        addOperation("/");
    });

    $("#percent").click(function () {
        addOperation("%");
    });

    $("#multiply").click(function () {
        appendInput("x");
    });

});