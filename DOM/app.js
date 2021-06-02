// step 1
let stepOneButton = document.createElement(`button`)
let buttonText = document.createTextNode(`Button 1`)

stepOneButton.appendChild(buttonText)
document.body.prepend(stepOneButton)

stepOneButton.addEventListener(`click`, buttonClick)

function buttonClick(e) {
    alert(`Any (nice) message`)
}

// step 2
let stepTwoButton = document.querySelector(`button.stepTwo`)

stepTwoButton.addEventListener(`click`, function() {
    let alertText = document.querySelector(`div.stepTwo`)

    alert(alertText.textContent)
})

// step 3
let stepThree = document.querySelector(`.stepThree`)

stepThree.addEventListener(`pointerenter`, function() {
    stepThree.style.backgroundColor = "blue"
    stepThree.style.color = "white"
})

stepThree.addEventListener(`pointerleave`, function() {
    stepThree.style.backgroundColor = "white"
    stepThree.style.color = "black"
})

// step 4
let stepFour = document.querySelector(`p`)

stepFour.addEventListener(`click`, function() {
    
    let randomColor = ["red", "orange", "yellow", "green", "blue", "purple"]
    
    stepFour.style.color = randomColor[Math.floor(Math.random() * randomColor.length)]
})

// step 5
let stepFiveButton = document.querySelector(`button.stepFive`)
let stepFiveDiv = document.querySelector(`div.stepFive`)

stepFiveButton.addEventListener(`click`, function() {
    let stepFiveSpan = document.createElement(`span`)
    let stepFiveText = document.createTextNode(`Mitchell Gaylord `)

    stepFiveSpan.appendChild(stepFiveText)
    stepFiveDiv.appendChild(stepFiveSpan)
})

// step 6
let stepSixButton = document.querySelector(`button.stepSix`)
let clickCounter = 0
let friends = [`Darren`, `Rachel`, `Zoe`, `Kenzie`, `Emily Mountain`, `Hayden`, `Katelyn`, `Deanna`, `Clysta`, `Dane`]


stepSixButton.addEventListener(`click`, function() {
    let stepSixList = document.querySelector(`ul.stepSix`)
    let stepSixItem = document.createElement(`li`)
    let itemText = document.createTextNode(friends[clickCounter])

    if (clickCounter == friends.length - 1) {
        stepSixItem.appendChild(itemText)
        stepSixList.appendChild(stepSixItem)
        clickCounter = 0
    } else {
    stepSixItem.appendChild(itemText)
    stepSixList.appendChild(stepSixItem)
    clickCounter++
    }
})