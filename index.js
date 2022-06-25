// JS Code For Rating numbers start

let val;

function clicked1() {
  document.getElementById('1').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.getElementById('1').style.color = 'white';
  document.getElementById('2').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('3').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('4').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('5').style.backgroundColor = 'hsl(214, 16%, 28%)';
  val = document.getElementById('1').value;
}

function clicked2() {
  document.getElementById('2').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.getElementById('2').style.color = 'white';
  document.getElementById('1').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('3').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('4').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('5').style.backgroundColor = 'hsl(214, 16%, 28%)';
  val = document.getElementById('2').value;
}

function clicked3() {
  document.getElementById('3').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.getElementById('3').style.color = 'white';
  document.getElementById('2').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('1').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('4').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('5').style.backgroundColor = 'hsl(214, 16%, 28%)';
  val = document.getElementById('3').value;
}

function clicked4() {
  document.getElementById('4').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.getElementById('4').style.color = 'white';
  document.getElementById('2').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('3').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('1').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('5').style.backgroundColor = 'hsl(214, 16%, 28%)';

  val = document.getElementById('4').value;
}

function clicked5() {
  document.getElementById('5').style.backgroundColor = 'hsl(25, 97%, 53%)';
  document.getElementById('5').style.color = 'white';
  document.getElementById('2').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('3').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('4').style.backgroundColor = 'hsl(214, 16%, 28%)';
  document.getElementById('1').style.backgroundColor = 'hsl(214, 16%, 28%)';

  val = document.getElementById('5').value;
}

// JS Code For Rating numbers end

let button = document.getElementById('btn-submit');
let para = document.getElementById('para');
let heading = document.getElementById('heading');
let rating_sub = document.getElementById('rating_sub');
let logo = document.getElementById('logo');
let thankyou = document.getElementById('thankyou');
let rate = document.getElementById('rate');
let submit = document.getElementById('submit');
button.addEventListener('click', submitClicked);

function submitClicked() {
  
  logo.style.visibility = 'hidden';
  thankyou.style.display = 'inline';

  rate.style.display = 'none';

  rating_sub.innerText = `You selected ${val} out of 5`;
  rating_sub.style.fontSize = '10pt';
  rating_sub.style.textAlign = 'center';
  rating_sub.style.justifyContent = 'center';
  rating_sub.style.display = 'block';

  heading.innerText = `Thank You!`;
  heading.style.textAlign = 'center';

  para.innerText = `We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!`;
  para.style.textAlign = 'center';


  submit.style.display = 'none';
}

// let rate2 = document.getElementById('2');
// rate2.addEventListener('click', clicked2);

// function clicked2() {
//   rate2.style.backgroundColor = 'hsl(25, 97%, 53%)';
//   rating=2;
// }

// let rate3 = document.getElementById('3');
// rate3.addEventListener('click', clicked3);

// function clicked3() {
//   rate3.style.backgroundColor = 'hsl(25, 97%, 53%)';
//   rating=3;
// }

// let rate4 = document.getElementById('4');
// rate4.addEventListener('click', clicked4);

// function clicked4() {
//   rate4.style.backgroundColor = 'hsl(25, 97%, 53%)';
//   rating=4;
// }

// let rate5 = document.getElementById('5');
// // rate5.addEventListener('mouseover', mouseOver5);
// // rate5.addEventListener('mouseout', mouseOut5);
// rate5.addEventListener('click', clicked5);

// function clicked5() {
//   rate5.style.backgroundColor = 'hsl(25, 97%, 53%)';
//   rating=5;
// }
// function mouseOver5() {
//   rate5.style.backgroundColor = 'hsl(217, 12%, 63%)';
//   rate5.style.color = 'white';
// }

// function mouseOut5() {
//   rate5.style.backgroundColor = 'hsl(214, 16%, 28%)';
//   rate5.style.color = 'grey';
// }
