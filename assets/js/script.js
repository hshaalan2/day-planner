//defining variables. I know I used way too many but that is the only way I know to set vars for each row (hour), one var for the li element for each hour, another var for each text input inside that row, as well as other variables for buttons some of which I ended up not using. In due time, I expect to learn how to make my code more concise but for now that is all I know. 

const hourRow = $('.list-group-item-action');
const currentday = $('#currentDay');
const eventInput = $('#event-input');
const timeBlock = $('.list-group');
const inputEl = $('#input-form');
const inputEl2 = $('#input-form2');
const inputEl3 = $('#input-form3');
const inputEl4 = $('#input-form4');
const inputEl5 = $('#input-form5');
const inputEl6 = $('#input-form6');
const inputEl7 = $('#input-form7');
const inputEl8 = $('#input-form8');
const inputEl9 = $('#input-form9');
const events = $('#events');
const nineEl = $('#9am')
const tenEl = $('#10am')
const elevenEl = $('#11am')
const tweleveEl = $('#12pm')
const oneEl = $('#1pm')
const twoEl = $('#2pm')
const threeEl = $('#3pm')
const fourEl = $('#4pm')
const fiveEl = $('#5pm')
const nineAm = $('#span-9am');
const tenAm = $('#span-10am');
const elevenAm = $('#span-11am');
const twelevePm = $('#span-12pm');
const onePm = $('#span-1pm');
const twoPm = $('#span-2pm');
const threePm = $('#span-3pm');
const fourPm = $('#span-4pm');
const fivePm = $('#span-5pm');
const button = $('.btn');
const formInput = $('.form-input .w-100')
const btn1Biz = $('#business1');
const btnDelete = $('#delete3');


//for each row (representing an hour) I am hiding two things on page load,the text input and the delete button.  I have nine of these functions resperting hours from 9am to 5pm
function hideText (){
    $('#event-input1').hide()
    $('#delete').hide()

}

function hideText2 (){
    $('#event-input2').hide()
    $('#delete2').hide()

};
function hideText3 (){
    $('#event-input3').hide()
    $('#delete3').hide()
    // btnDelete.hide()
};
function hideText4 (){
    $('#event-input4').hide()
    $('#delete4').hide()
};
function hideText5 (){
    $('#event-input5').hide()
    $('#delete5').hide()
};
function hideText6 (){
    $('#event-input6').hide()
    $('#delete6').hide()
};
function hideText7 (){
    $('#event-input7').hide()
    $('#delete7').hide()
};
function hideText8 (){
    $('#event-input8').hide()
    $('#delete8').hide()
};
function hideText9 (){
    $('#event-input9').hide()
    $('#delete9').hide()

};

////for each row (representing an hour) I am showing the input text box upon clicking on the row or line item.  I have nine of these functions resperting hours from 9am to 5pm. Again I could have consolidated these into one function. In fact a tutor showed me how but I wasn't able to execute on my own. 
function showText (event){
    // event.preventDefault();
    $('#event-input1').show()
 };

function showText2 (event){
    event.preventDefault();
    $('#event-input2').show()
};
function showText3 (event){
    event.preventDefault();
    $('#event-input3').show()
    // btnDelete.show()
};

function showText4 (event){
    event.preventDefault();
    $('#event-input4').show()
};
function showText5 (event){
    event.preventDefault();
    $('#event-input5').show()
};
function showText6 (event){
    event.preventDefault();
    $('#event-input6').show()
};

function showText7 (event){
    event.preventDefault();
    $('#event-input7').show()
};
function showText8 (event){
    event.preventDefault();
    $('#event-input8').show()
};
function showText9 (event){
    event.preventDefault();
    $('#event-input9').show()
};

//here I am calling each show text function upoh clicking the row or line item in question
nineEl.on('click', showText)
tenEl.on('click', showText2)
elevenEl.on('click', showText3)
tweleveEl.on('click', showText4)
oneEl.on('click', showText5)
twoEl.on('click', showText6)
threeEl.on('click', showText7)
fourEl.on('click', showText8)
fiveEl.on('click', showText9)

function addEvent (event) {
    event.preventDefault();
    console.log('You triggered addEvent function')
    let eventAdded = $('input[id="event-input1"]').val();
    console.log(eventAdded)
    nineAm.text(eventAdded)
    hideText();
    //change color of element to indicate time slot no longer free
    nineEl.attr('class', 'list-group-item list-group-item-danger')
    //assuming there is an appt there now so show delete icon
    $('#delete').show()
     };

function addEvent2 (event) {
    event.preventDefault();
    console.log('You triggered addEvent2 function')
    let eventAdded2 = $('input[id="event-input2"]').val();
    console.log(eventAdded2);
    tenAm.text(eventAdded2);
    hideText2();
    tenEl.attr('class', 'list-group-item list-group-item-danger')
    $('#delete2').show()
    };

function addEvent3 (event) {
    event.preventDefault();
    console.log('You triggered addEvent3 function')
    let eventAdded3 = $('input[id="event-input3"]').val();
    console.log(eventAdded3);
    elevenAm.text(eventAdded3);
    hideText3();
    elevenEl.attr('class', 'list-group-item list-group-item-danger')
    $('#delete3').show()
    };

function addEvent4 (event) {
    event.preventDefault();
    console.log('You triggered addEvent4 function')
    let eventAdded4 = $('input[id="event-input4"]').val();
    console.log(eventAdded4);
    twelevePm.text(eventAdded4);
    hideText4();
    tweleveEl.attr('class', 'list-group-item list-group-item-danger')
    $('#delete4').show()
    };

function addEvent5 (event) {
    event.preventDefault();
    console.log('You triggered addEvent5 function')
    let eventAdded5 = $('input[id="event-input5"]').val();
    console.log(eventAdded5);
    onePm.text(eventAdded5);
    hideText5();
    oneEl.attr('class', 'list-group-item list-group-item-danger')
    $('#delete5').show()
    };

function addEvent6 (event) {
    event.preventDefault();
    console.log('You triggered addEvent6 function')
    let eventAdded6 = $('input[id="event-input6"]').val();
    console.log(eventAdded6);
    twoPm.text(eventAdded6);
    hideText6();
    twoEl.attr('class', 'list-group-item list-group-item-danger')
    $('#delete6').show()
    };

function addEvent7 (event) {
    event.preventDefault();
    console.log('You triggered addEvent7 function')
    let eventAdded7 = $('input[id="event-input7"]').val();
    console.log(eventAdded7);
    threePm.text(eventAdded7);
    hideText7();
    threeEl.attr('class', 'list-group-item list-group-item-danger')
    $('#delete7').show()
    };

function addEvent8 (event) {
    event.preventDefault();
    console.log('You triggered addEvent8 function')
    let eventAdded8 = $('input[id="event-input8"]').val();
    console.log(eventAdded8);
    fourPm.text(eventAdded8);
    hideText8();
    fourEl.attr('class', 'list-group-item list-group-item-danger')
    $('#delete8').show()
    };

function addEvent9 (event) {
    event.preventDefault();
    console.log('You triggered addEvent9 function')
    let eventAdded9 = $('input[id="event-input9"]').val();
    console.log(eventAdded9);
    fivePm.text(eventAdded9);
    hideText9();
    fiveEl.attr('class', 'list-group-item list-group-item-danger')
    $('#delete9').show()
    };

//here I tried to add category buttons to each appointment like business, family, personal but was not successful
// function selectCat (event) {
//     event.preventDefault();
//     console.log('You triggered selectCat function')
//     let catSelected = $('input[id="business1"]').val();
//     console.log(catSelected);
//     nineEl.attr('class', 'list-group-item list-group-item-secondary')

//     };

////for each row (representing an hour) I am creating a delete function that is called upon clicking the delete icon. The function clears the text box. Again I could have consolidated these into one function. In fact a tutor showed me how but I wasn't able to execute on my own
function deleteNine () {
    $('input[id="event-input1"]').val("");
    nineAm.text(""); 
    hideText();
    nineEl.attr('class', 'list-group-item list-group-item-success');
};

function deleteTen () {
    $('input[id="event-input2"]').val("");
    tenAm.text(""); 
    hideText();
    tenEl.attr('class', 'list-group-item list-group-item-success');
};

function deleteEleven () {
    $('input[id="event-input3"]').val("");
    elevenAm.text(""); 
    hideText();
    elevenEl.attr('class', 'list-group-item list-group-item-success');
};

function deleteTwelve () {
    $('input[id="event-input4"]').val("");
    twelevePm.text(""); 
    hideText();
    tweleveEl.attr('class', 'list-group-item list-group-item-success');
};

function deleteOne () {
    $('input[id="event-input5"]').val("");
    onePm.text(""); 
    hideText();
    oneEl.attr('class', 'list-group-item list-group-item-success');
};

function deleteTwo () {
    $('input[id="event-input6"]').val("");
    twoPm.text(""); 
    hideText();
    twoEl.attr('class', 'list-group-item list-group-item-success');
};

function deleteThree () {
    $('input[id="event-input7"]').val("");
    threePm.text(""); 
    hideText();
    threeEl.attr('class', 'list-group-item list-group-item-success');
};

function deleteFour () {
    $('input[id="event-input8"]').val("");
    fourPm.text(""); 
    hideText();
    fourEl.attr('class', 'list-group-item list-group-item-success');
};

function deleteFive () {
    $('input[id="event-input9"]').val("");
    fivePm.text(""); 
    hideText();
    fiveEl.attr('class', 'list-group-item list-group-item-success');
};

// Here I am calling the function to populuate the event entered into the span element inside each line item element
inputEl.on('submit', addEvent);
inputEl2.on('submit', addEvent2);
inputEl3.on('submit', addEvent3);
inputEl4.on('submit', addEvent4);
inputEl5.on('submit', addEvent5);
inputEl6.on('submit', addEvent6);
inputEl7.on('submit', addEvent7);
inputEl8.on('submit', addEvent8);
inputEl9.on('submit', addEvent9);




//event handlers for deleting events with trash icon
$('#delete').on('click', deleteNine);
$('#delete2').on('click', deleteTen);
$('#delete3').on('click', deleteEleven);
$('#delete4').on('click', deleteTwelve);
$('#delete5').on('click', deleteOne);
$('#delete6').on('click', deleteTwo);
$('#delete7').on('click', deleteThree);
$('#delete8').on('click', deleteFour);
$('#delete9').on('click', deleteFive);

//moment.js function to display today's date in the desire format
function displayToday (event) {
    // event.preventDefault();
    let todayDate = moment().format('dddd, MMM DD, YYYY');
    currentday.text(todayDate);
    };



//call functions on load to display today's date and hide elements on each hour row
displayToday();
hideText();
hideText2();
hideText3();
hideText4();
hideText5();
hideText6();
hideText7();
hideText8();
hideText9();