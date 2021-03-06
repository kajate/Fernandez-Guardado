$(document).ready(function() {
    $(
        "#martaBtn, #introBtn, #modelBtn, #modelBtn, #june14Btn, #intro, #june14, #model, #marta"
    ).hide();
    $("#martaBtn").slideToggle(150);
    $("#modelBtn").slideToggle(150);
    $("#introBtn").slideToggle(150);
    $("#june14Btn").slideToggle(150);
    $("#link").slideToggle(150);

    $(document).ready(function() {
        calculateDivs();
    });
    //
    // $(window).resize(function() {
    //     calculateDivs();
    // });

    // function blueColor() {
    //     return (
    //         "rgba(" +
    //         Math.floor(255 * Math.random() - 150) +
    //         "," +
    //         Math.floor(255 * Math.random() - 10) +
    //         "," +
    //         Math.floor(255 * Math.random() + 250)
    //     );
    // }
    //
    // function greenColor() {
    //     return (
    //         "rgba(" +
    //         Math.floor(255 * Math.random() - 75) +
    //         "," +
    //         Math.floor(255 * Math.random() + 250) +
    //         "," +
    //         Math.floor(255 * Math.random() - 75)
    //     );
    // }

    function mixColor() {
        return (
            "rgba(" +
            Math.floor(255 * Math.random() - 10) +
            "," +
            Math.floor(255 * Math.random() - 10) +
            "," +
            Math.floor(255 * Math.random() - 10)
        );
    }

    var hue = mixColor();

    var link = document.querySelector(".link, #martaBtn, #marta");
    var marta = document.querySelector("#marta");
    var frame = document.querySelector("#frame");

    // textarea.addEventListener("input", function(e) {
    //     var hue = mixColor();
    //     link.style.backgroundColor = hue + "," + 1 + ")";
    //     marta.style.backgroundColor = hue + "," + 1 + ")";
    // });

    var div_h = 115;

    function calculateDivs() {
        var w_h = $(window).height() - 0;
        var divs = Math.round(w_h / div_h);
        for (var i = 3; i < divs; i++) {
            $(frame).append($('<div class="link">'));
        }
        var margin = 0;
        $(".link").css("height", w_h / divs - margin);
    }

    $(function() {
        $(".link").each(function() {
            var hue = mixColor();
            $(this).css("background-color", hue + "," + 1 + ")");
        });
    });

    $(function() {
        $("#martaBtn").each(function() {
            var hue = mixColor();
            $(this).css("background-color", hue + "," + 1 + ")");
            $("#marta").css("background-color", hue + "," + 1 + ")");
        });
    });

    $(function() {
        $("#introBtn").each(function() {
            var hue = mixColor();
            $(this).css("background-color", hue + "," + 1 + ")");
            $("#intro").css("background-color", hue + "," + 1 + ")");
        });
    });

    $(function() {
        $("#modelBtn").each(function() {
            var hue = mixColor();
            $(this).css("background-color", hue + "," + 1 + ")");
            $("#model").css("background-color", hue + "," + 1 + ")");
        });
    });

    $("#martaBtn").click(function() {
        $("#marta").slideToggle(100);
    });

    $("#introBtn").click(function() {
        $("#intro").slideToggle(100);
    });

    $("#modelBtn").click(function() {
        $("#model").slideToggle(100);
    });

    $("#june14Btn").click(function() {
        $("#june14").slideToggle(100, function() {});
    });
});
