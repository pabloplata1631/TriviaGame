$('#start').on('click', function () {
    game.start();
})

$(document).on('click','#end',function(){
    game.done();
})

var questions = [{
    question: "What year did the Mavs win the NBA Finals?",
    answers: ["2011", "2010", "2006", "2015,"],
    correctAnswers: "2011"
}, {
    question: "Who was the NBA MVP in 2007?",
    answers: ["Lebron James", "Michael Jordan", "Dirk Nowitzki", "Stephen Curry"],
    correctAnswer: "Dirk Nowitzki"
}, {
    question: "Who in the NBA top scorer of all time",
    answers: ["Kobe Bryant", "Michael Jordan", "Kareem Abdul-Jabber", "Lebron James"],
    correctAnswer: "Kareem Abdul-Jabber"
}, {
    question: "What NBA team has the most Championships",
    answers: ["Lakers", "Warriors", "Bulls", "Celtics"],
    correctaAnswer: "Celtics"
}, {
    question: "How many rings does Michael Jordan have",
    answers: ["4", "5", "6", "7"],
    correctAnswer: "6"
}, {
    question: "How many rings does Kobe Bryant have",
    answers: ["4", "5", "6", "7"],
    correctAnswer: "5"
}];

//BELOW CODE IS FOR BUTTON AND FOR A TIMER THAT RUNS IN THE BACKGROUND 
// var=game IS GOING TO HAVE UNIQUE PROPERTIES THAT WILL KEEP TRACK OF HOW MANY 'CORRECT' 'INCORRECT' AND 'COUNTER' THAT STARTS IS 120 
var game = {
    correct: 0,
    incorrect: 0,
    //counter: EVERY SECOND THAT PLAYERS IS PLAYING - THIS IS GOING TO COUNT BY ONE
    counter: 10,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        // if (game.counter <= 0) TO END GAME
        if(game.counter<=0){
            console.log("Times Up!");
            game.done();
        }
    },
    start: function () {
        // timer =setInterval(game.countdown,1000); BELOW MEANS THAT THERE IS GOING TO BE A TIMER THAT EVERY 1000 MILLISECODS IS GOING TO RUN THE game.done function
        timer = setInterval(game.countdown,1000);
        //   $('#subwrapper').prepend('<h2>Time Remaining: <span id ="counter"120</span> Seconds</h2>') THIS IS GOING TO ADD THE TIME REMAINING 
        $('#subwrapper').prepend('<h2>Time Remaining: <span id ="counter">10</span> Seconds</h2>');
        //$('#start').remove(); REMOVES START BUTTON
        $('#start').remove();
        //below is removing that start button//
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append('<h2>' + questions[i].question + '</h2>');
            for (var j = 0; j < questions[i].answers.length; j++) {
                //'radio' LETS USER CHOOSE ONLY 1 ANSWER PER QUESTION
                $("#subwrapper").append("<input type='radio' name='questions-" + i + "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
            }
        }
        //DONE BUTTON
        $("#subwrapper").append('<br><button id="end">DONE</button>');
    },
    // THE BELOW IS SO WHEN TIMER GETS TO zeeerooo THERE WONT BE ANY ERRORS 
    done: function (){
        //   $.each($('input[name="question-1]":checked')) this is looking for any input type that has the name of question 1 and hat is currentl checked
        $.each($("input[name='question-0']:checked"), function() {
            if ($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-1']:checked"), function() {
            if ($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-2']:checked"), function() {
            if ($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-3']:checked"), function() {
            if ($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-4']:checked"), function() {
            if ($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($("input[name='question-5']:checked"), function() {
            if ($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });

        //BELOW IS GOING TO SHOW THE RESULTS
        this.result();
    },
    result:function(){
        //clearInterval(timer); HERE WE ARE CLEARING OUR INTERVAL FROM OUR TIMER SO IT STOPS COUNTING
        clearInterval(timer);
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>DONE!</h2>");
        //Below is printing the correct and incorrect asnwers ---Results
        $('#subwrapper').append("<h3> Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3> Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3> Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
    }


