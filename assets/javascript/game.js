//Upon page load the following actions will occur
$(document).ready(function() {
    $("#questionPage").hide();
    $("#answerPage").hide();




    //my set variables that will be declared on the results screen.  Value set to 0 since results will be pushed to these variables
    var correct = 0;
    var wrong = 0;
    var notAnswered = 0;
    var totalQuestions = 10;



    //page change on starting button click
    $("#start").click(function() {
        $("#initialPage").hide();
        $("#questionPage").show();


    });


    //Submit Button
    $("#submit").click(function() {
        clearInterval(countdown);
        $("#questionPage").hide();
        $("#answerPage").show();
        $("#initialPage").hide();
    });

    //retry button
    $("#retry").click(function() {
        $("#questionPage").hide();
        $("#answerPage").hide();
        $("#initialPage").show();
    })



    var countdown = setInterval(function() {
        var clock = $('#timer').html();
        clock = clock.split(':');
        var minutes = parseInt(clock[0], 10);
        var seconds = parseInt(clock[1], 10);
        seconds -= 1;
        if (minutes < 0) return clearInterval(countdown);
        if (minutes < 10 && minutes.length != 2) minutes = '0' + minutes;
        if (seconds < 0 && minutes != 0) {
            minutes -= 1;
            seconds = 59;
        } else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;
        $('#timer').html(minutes + ':' + seconds);

        if (minutes == 0 && seconds == 0) {
            clearInterval(countdown);
            $('#timeExpired').modal('show');
            $("#closure").click(function() {
                $("#submit").click();
            });
        }

    }, 1000);

    //Checking the Answers
    function correctAnswer() {
        $("input:checked").each(function() {
            var answerCheck = $(this).val()
            if (answerCheck == "true") {
                correct++;

            } else {
                wrong++;
            }
        })

        notAnswered = totalQuestions - (correct + wrong);
        $("#correct").html(correct);
        $("#wrong").html(wrong);
        $("#notAnswered").html(notAnswered);
    }

    $(document).on("click", "#submit", function() {
        correctAnswer();
    });

});
