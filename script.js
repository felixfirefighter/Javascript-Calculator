/**
 * Created by LEE on 2016/10/18.
 */

function isTooLong() {
    return $("#current-input").text().length > 17;
}

function appendInput(value){
        if(isTooLong()){
            $("#current-input").text("");
            $("#result").text("Max Digit Input!");
        }else{
            $("#current-input").append(value);
            $("#result").text("");
        }

}

$(document).ready(function () {
    $("#one").click(function () {
       appendInput("1");
    });

    $("#two").click(function () {
        appendInput("1");
    });

    $("#three").click(function () {
        appendInput("1");
    });

    $("#four").click(function () {
        appendInput("1");
    });
    $("#five").click(function () {
        appendInput("1");
    });

    $("#six").click(function () {
        appendInput("1");
    });

    $("#seven").click(function () {
        appendInput("1");
    });

    $("#eight").click(function () {
        appendInput("1");
    });
    $("#nine").click(function () {
        appendInput("1");
    });

    $("#dot").click(function () {
        appendInput("1");
    });

    $("#plus").click(function () {
        appendInput("1");
    });

    $("#minus").click(function () {
        appendInput("1");
    });

    $("#divide").click(function () {
        appendInput("1");
    });

    $("#").click(function () {
        appendInput("1");
    });

    $("#one").click(function () {
        appendInput("1");
    });

    $("#one").click(function () {
        appendInput("1");
    });

});