// Initialize Firebase (ADD YOUR OWN DATA)

var config = {
    apiKey: "AIzaSyDQK6L_zgNBgu1SFNPK-61TyxmB6im14f4",
    authDomain: "hacknu-7c471.firebaseapp.com",
    databaseURL: "https://hacknu-7c471.firebaseio.com",
    projectId: "hacknu-7c471",
    storageBucket: "hacknu-7c471.appspot.com",
    messagingSenderId: "1038114408684"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);
document.getElementById('surveyForm').addEventListener('submit', submitForm2);

var name, lname, bdate, sex, city, country, photo_200, has_mobile, followers_count, online, domain, site, education, status, last_seen, about;
var email, phone;
// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  name = getInputVal('name');
  lname = getInputVal('lname');
  bdate = getInputVal('bdate');
  sex = getInputVal('sex');
  city = getInputVal('city');
  country = getInputVal('country');
  photo_200 = getInputVal('photo_200');
  has_mobile = getInputVal('has_mobile');
  followers_count = getInputVal('followers_count');
  online = getInputVal('online');
  domain = getInputVal('domain');
  site = getInputVal('site');
  education = getInputVal('education');
  status = getInputVal('status');
  last_seen = getInputVal('last_seen');
  about = getInputVal('about');
  email = getInputVal('email');
  phone = getInputVal('phone');

  // Save message
  /*saveMessage(name, lname, bdate, sex, city, country, photo_200, has_mobile);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);*/

  // Clear form
  document.getElementById('contactForm').reset();
}
function submitForm2(e){
  e.preventDefault();

  // Get values
  var first = getInputVal('11');
  var second = getInputVal('22');
  var third = getInputVal('33');
  var fourth = getInputVal('44');
  var fifth = getInputVal('55');
  var sixth = getInputVal('66');
  var seventh = getInputVal('77');
  var eighth = getInputVal('88');
  var ninth = getInputVal('99');
  var tenth = getInputVal('1010');

  // Save message
  saveMessage(phone, email, name, lname, bdate, sex, city, country, photo_200, has_mobile, followers_count, online, domain, site, education, status, last_seen, about, first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth);

 
  // Clear form
  document.getElementById('surveyForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(phone, email, name, lname, bdate, sex, city, country,photo_200,has_mobile,followers_count,online,domain,site,education,status,last_seen,about,first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lname: lname,
    bdate: bdate,
    sex: sex,
    city: city,
    country: country,
    photo_200: photo_200,
    has_mobile: has_mobile,
    followers_count: followers_count,
    online: online,
    domain: domain,
    site: site,
    education: education,
    status: status,
    last_seen: last_seen,
    about: about,
    email: email,
    phone: phone,
    answers: [first,second,third,fourth,fifth,sixth,seventh,eighth,ninth,tenth]
  });
}