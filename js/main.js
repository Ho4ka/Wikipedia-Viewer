document.getElementById('search').addEventListener('click', function (val) {
    request();
})

function request() {
    let userInput = document.getElementById('userInput');
    let term = userInput.value;
    userInput.value = '';
    let wikiRequest = new XMLHttpRequest();
    //let url = 'https://en.wikipedia.org/w/api.php?action=query&origin=*&format=json&list=search&prop=extracts&explaintext&exintro&exsentences=1&exlimit=max&srsearch=' + term ;
    // 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&prop=extracts&exlimit=max&explaintext&exintro&exsentences=1&gsrsearch='
    let url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + term + '&format=json&origin=*';
    wikiRequest.open('GET', url)
    wikiRequest.onload = function () {
        let data = JSON.parse(wikiRequest.responseText);
        let termArray = data[1];
        let termArrayText = data[2];
        let holderForIteration;
        let output = document.getElementById('output');
        output.innerHTML = '';

        for (let i = 0; i < termArray.length; i++) {

            for (let j = 0; j < termArrayText.length; j++) {
                holderForIteration = termArrayText[i];
            }
            output.insertAdjacentHTML('beforeEnd', '<div id="wrapper"><h3 class="title">' + termArray[i] + '</h3>' + '<p>' + holderForIteration + '</p>' + "</div>");

            goToLink();
        }
    }
    wikiRequest.send();
}


function goToLink() {
    let switchingToTheLink = document.getElementsByClassName('title');
    for (let b = 0; b < switchingToTheLink.length; b++) {
        switchingToTheLink[b].addEventListener('click', function (val) {
            let valueOfTitle = switchingToTheLink[b].innerHTML;

            window.open("https://en.wikipedia.org/wiki/" + valueOfTitle);
        })
    }
}


let hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";
}

window.onload = function () {
    doStuff();
};