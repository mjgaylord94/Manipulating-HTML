$(document).ready(function() {
    
    // step 1
    $(`body`).prepend(`<button class="stepOne">Button 1</button>`)

    $(`.stepOne`).click(function() {
        alert(`Any (nice) message`)
    })

    // step 2
    $(`button.stepTwo`).click(function() {
        let alertText = $(`textarea.stepTwo`).val()
        alert(alertText)
    })

    // step 3
    $(`.stepThree`).mouseenter(function() {
        $(this).css({
            "backgroundColor": "blue",
            "color": "white"
        });
    });

    $(`.stepThree`).mouseleave(function() {
        $(this).css({
            "backgroundColor": "white",
            "color": "black"
        });
    });

    // step 4
    let randomColor = ["red", "orange", "yellow", "green", "blue", "purple"]

    $(`p.stepFour`).click(function() {
        $(this).css("color", randomColor[Math.floor(Math.random() * randomColor.length)])
    })

    // step 5
    $(`button.stepFive`).click(function() {
        $(`div.stepFive`).append(`<span>Mitchell Gaylord </span>`)
    })

    // step 6
    let clickCounter = 0
    let friends = [`Darren`, `Rachel`, `Zoe`, `Kenzie`, `Emily Mountain`, `Hayden`, `Katelyn`, `Deanna`, `Clysta`, `Dane`]

    $(`button.stepSix`).click(function() {
        if (clickCounter == friends.length - 1) {
            $(`ul.stepSix`).append(`<li>${friends[clickCounter]}</li>`);
            clickCounter = 0
        } else {
            $(`ul.stepSix`).append(`<li>${friends[clickCounter]}</li>`);
            clickCounter++
        }
    })

});
