// https://skalman.github.io/UglifyJS-online/

var d = new Date();
var hours, minutes, seconds;
var nameInput = document.getElementById("name-input");
var username = "";
var counter = 0;
var error = false;
var current = "";
var subject = "", 
	body = "", 
	url;

// what time is it?
// the hour
if (String(d.getHours()).length == 1) {
	hours = "0" + d.getHours();
}
else {
	hours = d.getHours();
}

// the minutes
if (String(d.getMinutes()).length == 1) {
	minutes = "0" + d.getMinutes();
}
else {
	minutes = d.getMinutes();
}

// the seconds
if (String(d.getSeconds()).length == 1) {
	seconds = "0" + d.getSeconds();
}
else {
	seconds = d.getSeconds();
}

// sets the date
document.getElementById("date").innerHTML = d.toDateString() + " " + hours + ":" + minutes + ":" + seconds;

window.onload = function() {
	var text = document.getElementById('typewriter').dataset.text;
	typeWriter(text, 0);
	var move = false;
	document.addEventListener("touchstart",function() {
		move = false;
	})
	document.addEventListener("touchmove",function() {
		move = true;
	})
	document.addEventListener("touchend",function() {
		if (move == false) {
			if (username == "") {
				document.getElementById("name-input").focus();
			}
			else {
				document.getElementById("current-p").focus();
			}
		}
	})
	setTimeout(function() {
		document.getElementById("input").style.visibility = "visible";
		nameInput.focus();
	    nameInput.onblur= function() {
	        setTimeout(function() {
	            nameInput.focus();
	        }, 0);
	    };
	}, 1600);
};

// change the name of the directory based on the first question
nameInput.onkeypress = function(e){
	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if ((keyCode == '13') && (nameInput.innerHTML != "")){
		username = nameInput.innerHTML.toLowerCase().replace(/\W/g, '');
		if (username == "") {
			username = "visitor";
		}
		nameInput.classList.remove("active");
		nameInput.contentEditable = false;
		nameResponse();
		ga('send','pageview','v3/site?myParam=' + this.innerHTML);
		counter++;
	}
}

document.body.onkeypress = function(e) {
	// check to see if name input has been updated
	if (username != "") {
		if (e.target.id.toLowerCase() === 'current-p') {
			if (!e) e = window.event;
			var keyCode = e.keyCode || e.which;
			if ((keyCode == '13') && (document.getElementById("current-p").innerHTML != "")){
				document.getElementById("current-p").contentEditable = false;
				ga('send','pageview','v3/site?myParam=' + username + "_" + document.getElementById("current-p").innerHTML);
				if (current == "") {
					valid();
				}
				else if (current == "clips") {
					whichPortfolio();
				}
				else if (current == "contact") {
					emailGenerator();
				}
				else if (current == "subject") {
					setSubject();
				}
				else if (current == "body") {
					setBody();
				}
				else if (current == "send") {
					sendEmail();
				}
				counter++;
			}
	  	}
	}
}

// generic response after name input
function nameResponse() {
	document.getElementById("typewriter").removeAttribute("id");
	var input = document.getElementById("input");
	input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="Well, ' + nameInput.innerHTML + ', I\'m glad you\'re here! How can I help you today? (Hint: Try typing <span class=\'highlight\'>bio</span>, <span class=\'highlight\'>portfolio</span>, <span class=\'highlight\'>resume</span> or <span class=\'highlight\'>contact</span>.)"></span></div>');
	var inputLength = nameInput.innerHTML.length;
	var timeout = 10*(inputLength);
	input.removeAttribute("id");
	var input = document.getElementById("input");
	var text = document.getElementById('typewriter').dataset.text;  
	typeWriter(text, 0);
	setTimeout(function(){
		newInput();
	}, 2000 + timeout)
}

// command responses
function valid() {
	document.getElementById("typewriter").removeAttribute("id");
	var input = document.getElementById("input");
	if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "bio") {
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="Alright! Gimme a sec. I\'m a fast typer."></span></div>');
		input.removeAttribute("id");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		setTimeout(function(){
		document.getElementById("typewriter").removeAttribute("id");
		var input = document.getElementById("input");
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="My name is Benjamin Din, and I\'m a recent Medill grad from Northwestern (Go \'Cats!). Past stints: reporting intern with <a href=&quot;http://bloomberg.com/&quot; target=&quot;_blank&quot;>Bloomberg News</a>, <a href=&quot;http://wsj.com&quot; target=&quot;_blank&quot;>The Wall Street Journal</a> and <a href=&quot;http://iol.co.za/the-star&quot; target=&quot;_blank&quot;>The Star</a> in Johannesburg; Olympics research runner with <a href=&quot;http://nbcolympics.com&quot;>NBC Sports</a>; data viz fellow at <a href=&quot;http://texastribune.com&quot;>The Texas Tribune</a>; graphics + design intern at <a href=&quot;http://wapo.st&quot;>The Washington Post</a>; interactive intern at the <a href=&quot;http://sfchronicle.com&quot; target=&quot;_blank&quot;>San Francisco Chronicle</a>. "></span></div>');
		input.removeAttribute("id");
		var input = document.getElementById("input");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		}, 900);
		// setTimeout(function(){
		// document.getElementById("typewriter").removeAttribute("id");
		// var input = document.getElementById("input");
		// input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="I like to write. I like to code. If it\'s not too much to ask, one day I hope to be doing both. But for now – while I\'m still in school – I\'ll keep on doing what I do best: spending late nights in the newsroom, doing marathon coding sessions, solving crossword puzzles and counting down the days until I get to go back to sunny California."></span></div>');
		// input.removeAttribute("id");
		// var input = document.getElementById("input");
		// var text = document.getElementById('typewriter').dataset.text;  
		// typeWriter(text, 0);
		// }, 8500);
		setTimeout(function(){
		document.getElementById("typewriter").removeAttribute("id");
		var input = document.getElementById("input");
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="Well, that\'s me! Type another command for more."></span></div>');
		input.removeAttribute("id");
		var input = document.getElementById("input");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		// }, 12800);
		}, 7000);
		setTimeout(function(){
			newInput();
		// }, 13800);
		}, 8000);
	}

	else if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "resume") {

		// take the current input value and put in a new input line
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="One resume, coming right up:"></span></div>');
		// remove the first input, keeping the second
		input.removeAttribute("id");
		// typewriter function
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		setTimeout(function(){
			// load the doc, which also includes an input
			loadResume();
		}, 1000);
		setTimeout(function(){
		// remove the first input, keep the second, it's here so it doesn't run async to loadDoc
		var input = document.getElementById("input");
		input.removeAttribute("id");
		// remove typewriter id, so it can be used on the next one
		document.getElementById("typewriter").removeAttribute("id");
		// grabs the current input
		var input = document.getElementById("input");
		// adds the second input
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="That\'s what I\'ve been up to! Type another command for more."></span></div>');
		// removes the first input line
		input.removeAttribute("id");
		// grabs the current input
		var input = document.getElementById("input");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		}, 4500);
		setTimeout(function(){
			newInput();
		}, 5500);
	}

	else if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "portfolio") {
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="Let\'s narrow that down. What kind of clips are you looking for? Tell me <span class=\'highlight\'>words</span> or <span class=\'highlight\'>code</span>."></span></div>');
		input.removeAttribute("id");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		setTimeout(function(){
			current = "clips";
			newInput();
		}, 1800);
	}

	else if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "contact") {
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="<a href=\'http://linkedin.com/in/bcdin\' target=\'blank\'>LinkedIn</a> / <a href=\'mailto:benjamin.din@gmail.com\' target=\'blank\'>Email</a> / <a href=\'http://twitter.com/benjamindin\' target=\'blank\'>Twitter</a>"></span></div>');
		input.removeAttribute("id");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		setTimeout(function(){
		document.getElementById("typewriter").removeAttribute("id");
		var input = document.getElementById("input");
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="I can also help you draft an email in the console, if you\'d like. Type <span class=\'highlight\'>email</span> to proceed or a different command to exit."></span></div>');
		input.removeAttribute("id");
		current = "contact";
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		}, 1800);
		setTimeout(function(){
			newInput();
		}, 3800);
	}

	else if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "consulting") {
		window.location.href = "http://www.benjamindin.com/consulting";
	}

	else if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "help") {
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="Are you lost? Here are some quick commands to help you navigate this website:"></span></div>');
		input.removeAttribute("id");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		setTimeout(function(){
		document.getElementById("typewriter").removeAttribute("id");
		var input = document.getElementById("input");
		input.insertAdjacentHTML('afterend','<div id="input"><table id="typewriter"><tr><td class="highlight" style="width: 120px">bio</td><td>read up on my background</td></tr><tr><td class="highlight">portfolio</td><td>check out the work I\'ve done</td></tr><tr><td class="highlight">resume</td><td>see where I\'ve worked</td></tr><tr><td class="highlight">contact</td><td>talk to me!</td></tr><tr><td class="highlight">consulting</td><td>need essay help? work with me!</td></tr><tr><td class="highlight">help</td><td>quick guide to navigating this site</td></tr></div>');
		input.removeAttribute("id");
		var input = document.getElementById("input");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		}, 1500);
		setTimeout(function(){
			newInput();
		}, 2000);
	}

	else if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "clear") {
		location.reload();
	}

	else {
		invalid();
	}
}

// which portfolio do you want to see?
function whichPortfolio() {
	if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "words") {
		loadWords();
		setTimeout(function(){
		// remove the first input, keep the second, it's here so it doesn't run async to loadDoc
		var input = document.getElementById("input");
		input.removeAttribute("id");
		// remove typewriter id, so it can be used on the next one
		document.getElementById("typewriter").removeAttribute("id");
		// grabs the current input
		var input = document.getElementById("input");
		// adds the second input
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="That\'s my work! Type another command to see more."></span></div>');
		// removes the first input line
		input.removeAttribute("id");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		}, 1500);
		setTimeout(function(){
			// grabs the current input
			var input = document.getElementById("input");
			newInput();
		}, 2000);
	}
	else if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "code") {
		loadDigital();
		setTimeout(function(){
		// remove the first input, keep the second, it's here so it doesn't run async to loadDoc
		var input = document.getElementById("input");
		input.removeAttribute("id");
		// remove typewriter id, so it can be used on the next one
		document.getElementById("typewriter").removeAttribute("id");
		// grabs the current input
		var input = document.getElementById("input");
		// adds the second input
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="That\'s my work! Type another command to see more."></span></div>');
		// removes the first input line
		input.removeAttribute("id");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);
		}, 6500);
		setTimeout(function(){
			// grabs the current input
			var input = document.getElementById("input");
			newInput();
		}, 7000);
	}
	else {
		current = "";
		valid();
	}
}

// want to send an email?
function emailGenerator() {
	if (document.getElementById("current-p").innerHTML.replace(/(<([^>]+)>)/ig,"").toLowerCase() == "email") {
		// remove typewriter id, so it can be used on the next one
		document.getElementById("typewriter").removeAttribute("id");
		// grabs the current input
		var input = document.getElementById("input");
		// adds the second input
		input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="Enter a subject line"></span></div>');
		// removes the first input line
		input.removeAttribute("id");
		var text = document.getElementById('typewriter').dataset.text;  
		typeWriter(text, 0);	
		setTimeout(function(){
			// grabs the current input
			var input = document.getElementById("input");
			newInput();
			current = "subject";
		}, 500);
	}
	else {
		current = "";
		valid();
	}
}

// input email subject line
function setSubject() {
	subject = document.getElementById('current-p').innerHTML;
	console.log(subject);
	// remove typewriter id, so it can be used on the next one
	document.getElementById("typewriter").removeAttribute("id");
	// grabs the current input
	var input = document.getElementById("input");
	// adds the second input
	input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="Enter your email text"></span></div>');
	// removes the first input line
	input.removeAttribute("id");
	var text = document.getElementById('typewriter').dataset.text;  
	typeWriter(text, 0);
	setTimeout(function(){
		// grabs the current input
		var input = document.getElementById("input");
		newInput();
		current = "body";
	}, 500);
}

// input email body text
function setBody() {
	var body = document.getElementById('current-p').innerHTML;
	console.log(body);
	// remove typewriter id, so it can be used on the next one
	document.getElementById("typewriter").removeAttribute("id");
	// grabs the current input
	var input = document.getElementById("input");
	// adds the second input
	input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="Type <span class=\'highlight\'>send</span> if you\'re satisfied with your email. Typing any other command will discard your current draft."></span></div>');
	// removes the first input line
	input.removeAttribute("id");
	var text = document.getElementById('typewriter').dataset.text;  
	typeWriter(text, 0);
	setTimeout(function(){
		// grabs the current input
		var input = document.getElementById("input");
		newInput();
		current = "send";
		url = "mailto:benjamin.din@gmail.com?subject=" + subject + "&body=" + body;
	}, 1500);
}

// sends the email by opening up in a mail client
function sendEmail() {
	document.getElementById("current-p").contentEditable = false;
	if (document.getElementById("current-p").innerHTML.toLowerCase() == "send") {
		window.open(url, "_blank");
	}
	newInput();
	current = "";
}

// invalid command
function invalid() {
	var input = document.getElementById("input");
	input.insertAdjacentHTML('afterend','<div id="input"><span class="directory">benjamindin</span><span id="typewriter" class="text" data-text="I\'m sorry. That\'s not a valid command. If you need instructions, feel free to type <span class=\'highlight\'>help</span>."></span></div>');
	error = true;
	input.removeAttribute("id");
	var input = document.getElementById("input");
	var text = document.getElementById('typewriter').dataset.text;  
	typeWriter(text, 0);
	setTimeout(function(){
		newInput();
	}, 1000);
}

// creates a new input row
function newInput() {	
	if (counter > 1) {
		var currentP = document.getElementById("current-p");
		currentP.removeAttribute("id");
		currentP.classList.remove("active");
	}
	var input = document.getElementById("input");
	if (error == true) {
		input.insertAdjacentHTML('afterend','<div id="input"><span class="arrow" style="color: #B8565F">➜</span><span id="first-directory" class="directory">' + username + '</span><span id="current-p" class="active paragraph" contenteditable="true"></span></div>');
		error = false;
	}
	else {
		input.insertAdjacentHTML('afterend','<div id="input"><span class="arrow">➜</span><span id="first-directory" class="directory">' + username + '</span><span id="current-p" class="active paragraph" contenteditable="true"></span></div>');
	}	
	input.removeAttribute("id");
	focusme();
	counter++;
}

// makes the input always active
function focusme() {
	var currentP = document.getElementById("current-p");
	currentP.focus();
    currentP.onblur= function() {
        setTimeout(function() {
            currentP.focus();
        }, 0);
    };
}

// generates resume
function loadResume() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("input").insertAdjacentHTML('afterend','<div id="input">' + this.responseText + '</div>');
    }
  };
  xhttp.open("GET", "http://benjamindin.com/v3/resume.txt?t=" + Math.random(), true);
  xhttp.send();
}

// generates words portfolio
function loadWords() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("input").insertAdjacentHTML('afterend','<div id="input">' + this.responseText + '</div>');
    }
  };
  xhttp.open("GET", "http://benjamindin.com/v3/written-portfolio.txt?t=" + Math.random(), true);
  xhttp.send();
}

// generates digital portfolio
function loadDigital() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("input").insertAdjacentHTML('afterend','<div id="input">' + this.responseText + '</div>');
    }
  };
  xhttp.open("GET", "http://benjamindin.com/v3/digital-portfolio.txt?t=" + Math.random(), true);
  xhttp.send();
}

// props to https://codepen.io/voronianski/pen/aicwk, with a little tweaking of my own
var openLink = 0;
var closeLink = 0;

function typeWriter(text, n) {
  if (n < (text.length)) {
    document.getElementById("typewriter").innerHTML = text.substring(0, n+1);
	if (text.substring(n, n+1).indexOf("<") != -1) {
		openLink++;
	}
	else if (text.substring(n,n+1).indexOf(">") != -1) {
		closeLink++;
	}
	else {}
	if (openLink > closeLink) {
		var timer = 0;
	}
	else {
		var timer = 10;
	}
	
	n++;

    setTimeout(function() {
      typeWriter(text, n);
      if (document.body.scrollHeight > window.screen.height) {
		 window.scrollTo(0,document.body.scrollHeight);
	  }
    }, timer);
  }
}