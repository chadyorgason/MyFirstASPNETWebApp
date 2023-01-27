////document.getElementById("btnSend").addEventListener("click", function () {
////    alert("From: " + document.getElementById("txtUhh").value +
////        "\nSubject: " + document.getElementById("txtSomething").value +
////        "\nMessage: " + document.getElementById("txtMessage").value);
////});

$("#btnSend").click(function () {
    var lGrade = "";
    var pctFinal = parseInt($("#pctA").val()) +
                    parseInt($("#pctGP").val()) +
                    parseInt($("#pctQ").val()) +
                    parseInt($("#pctME").val()) +
                    parseInt($("#pctFE").val()) +
                    parseInt($("#pctI").val())

    if (pctFinal >= 94) {
        lGrade = "A"
    }
    else if (pctFinal >= 90) {
        lGrade = "A-"
    }
    else if (pctFinal >= 87) {
        lGrade = "B+"
    }
    else if (pctFinal >= 84) {
        lGrade = "B"
    }
    else if (pctFinal >= 80) {
        lGrade = "B-"
    }
    else if (pctFinal >= 77) {
        lGrade = "C+"
    }
    else if (pctFinal >= 74) {
        lGrade = "C"
    }
    else if (pctFinal >= 70) {
        lGrade = "C-"
    }
    else if (pctFinal >= 67) {
        lGrade = "D+"
    }
    else if (pctFinal >= 64) {
        lGrade = "D"
    }
    else if (pctFinal >= 60) {
        lGrade = "D-"
    }
    else {
        lGrade = "E"
    };

    $("#FG").html("Final Grade: " + String(pctFinal) + "%");
    $("#LG").html("Letter Grade: " + lGrade);
    /*$("#picChad").fadeToggle("slow");*/
});
