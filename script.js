/**
 * Created by LEE on 2016/10/18.
 */

$(document).ready(function () {
    var currentInput = $("#current-input");

    currentInput.change(function () {
       alert(this.length);
        if(this.length > 17){
           this.text("");
       }
    });

    $("#one").click(function () {
        currentInput.append("1");
    });
});