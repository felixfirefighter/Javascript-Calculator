/**
 * Created by LEE on 2016/10/18.
 */

var yoongTiGlobal = {
    decimalAdded: false,
    clear: false,
    firstDigit: false
};

function isTooLong() {
    return $("#current-input").text().length >= 17;
}

function isOperation() {
    var result;

    //check last character is an operation
    //if no argument is passed in, it means we want to check the last character of the string
    if (arguments.length === 0) {
        var currentInput = $("#current-input");
        result = currentInput.text().charAt(currentInput.text().length - 1);
    } else {
        result = arguments[0];
    }

    return result == "+" || result == "-" || result == "x" || result == "/";
}

function appendInput(value) {

    var currentInput = $("#current-input");

    if(yoongTiGlobal.clear){
        currentInput.text("");
        yoongTiGlobal.clear = false;
    }

    if (isTooLong()) {
        currentInput.text("Max Digit Input!");
        yoongTiGlobal.clear = true;
    } else {
        if (isOperation() && (isOperation(value))) {
            var text = currentInput.text().slice(0, -1) + value;
            currentInput.text(text);
        } else {
            if(isOperation(value)){
                yoongTiGlobal.decimalAdded = false;

                //the next input will be the first digit
                yoongTiGlobal.firstDigit = true;
            }

            if(value == "."){
                if(!yoongTiGlobal.decimalAdded){
                    currentInput.append(value);
                }
                yoongTiGlobal.decimalAdded = true;
            }else{
                currentInput.append(value);
            }
        }
    }
}

function evalResult(currentInput, value) {
    if (isOperation()) {
        value = currentInput.text().slice(0, -1);
    }else{
        value = currentInput.text();
    }

    value = value.replace(/x/g, '*');

    return eval(value);
}
$(document).ready(function () {
    var currentInput = $("#current-input");

    $("#clear").click(function () {
        currentInput.text("");
    });

    $("#delete").click(function () {
        currentInput.text(currentInput.text().slice(0, -1));
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

    $("#percent").click(function () {
        appendInput("%");
    });

    $("#plus").click(function () {
        appendInput("+");
    });

    $("#minus").click(function () {
        appendInput("-");
    });

    $("#divide").click(function () {
        appendInput("/");
    });

    $("#multiply").click(function () {
        appendInput("x");
    });

    $("#equal").click(function () {
        var result = evalResult(currentInput);
        currentInput.text(result);
    });
});