var d = new Date();
var hours, minutes, timezone;
var counter = 0;
var weekday = new Array(7);
	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thu";
	weekday[5] = "Fri";
	weekday[6] = "Sat";

var n = weekday[d.getDay()];
var chatInput = document.getElementById("input-wrapper");
var chatText = document.getElementById("chat-input");
var whereIveBeen = document.getElementById("whereIveBeen");
var whatIveDone = document.getElementById("whatIveDone");
var contactMe = document.getElementById("contactMe");
var chatClick = false;
var current = "";
var username = "";
var chatCounter = 0;
var chats = document.getElementById("chats");
var errorCounter = 0;


// what time is it?
// the hour
if (String(d.getHours()) > 12) {
	hours = d.getHours() - 12;
	timezone = "PM";
}
else {
	hours = d.getHours();
	timezone = "AM";
}

// the minutes
if (String(d.getMinutes()).length == 1) {
	minutes = "0" + d.getMinutes();
}
else {
	minutes = d.getMinutes();
}

// sets the date
document.getElementById("date").innerHTML = n + " " + hours + ":" + minutes + " " + timezone;

window.onload = function() {
	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Just an FYI: I log and monitor submitted inputs to my site. (It helps me filter out spam and whatnot.)</div></div>');
 	}, 800);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Before we begin, what\'s your name? (100% OK if you put a fake name, but you\'ll have to put something to unlock full access to the site.)</div></div>');
 	}, 1600);
}

// some code that deals with the placeholder text
chatText.onclick = function() {
	counter = 10;
	chatClick = true;
	textReplace();
};

function textReplace() {
  if (chatText.innerHTML == "Type here") {
  	chatText.innerHTML = "";
  }
  counter = 0;
}

function textReplaceChecker() {
	counter++;
	if (chatClick == true && chatText.innerHTML == "" && counter != 1) {
		chatText.innerHTML = "Type here";
		chatClick = false;
	}
}

document.onclick = function() {
	textReplaceChecker();
}

// whereIveBeen click

function whereIveWorked() {
	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Of course! Well, I’m currently an editorial  intern at POLITICO, covering breaking news. It’s a great gig, and it keeps me pretty busy.</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 800);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Some other things I’ve done:<br><br>— reported from LA for <a href="http://wsj.com" target="_blank">The Wall Street Journal</a>, where I got to interview Jeff Katzenberg and Meg Whitman (RIP, Quibi)<br>— covered U.S. government for <a href="http://bloomberg.com" target="_blank">Bloomberg News</a><br>— wrote for <a href="https://www.iol.co.za/the-star" target="_blank">The Star</a>, an English-language daily in Johannesburg<br>— researched facts and stats for <a href="http://nbcolympics.com" target="_blank">NBC Olympics</a>’ coverage of the 2018 Games<br>— designed and built interactives at <a href="http://washingtonpost.com" target="_blank">The Washington Post</a>, <a href="http://sfchronicle.com" target="_blank">The San Francisco Chronicle</a> and <a href="http://texastribune.org" target="_blank">The Texas Tribune</a></div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 1600);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">I’ve also done comms work for <a href="http://bfa.org" target="_blank">Bibles for America</a>, a Christian nonprofit that distributes free Bibles!</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 2400);
}

whereIveBeen.onclick = function() {
	chats.insertAdjacentHTML('beforeend',
    '<div class="chat-bubble visitor child"><div class="inner-text">I want to hear more about where you\'ve worked!</div></div>');

	chats.scrollTop = chats.scrollHeight;

	whereIveWorked();
}

// whatIveDone click

function thingsIveDone() {
	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Yes, happy to show you my work! However, could you clarify what exactly you\'re looking for? Would you like to see words or code? (I\'ve got both!)</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 800);
}

function words(){
	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Yup, let me send you some clips. I\'ve got them arranged by topic, since there are quite a few.</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 800);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text"><strong>Politics</strong><br><a href="https://www.bloomberg.com/news/articles/2018-10-05/trump-s-race-to-save-house-takes-him-to-reliably-red-kansas" target="_blank">Trump\'s race to save House takes him to reliably red Kansas</a> Bloomberg News<br><a href="https://www.bloomberg.com/news/articles/2018-11-13/trump-scoffs-at-report-north-korea-has-undeclared-nuclear-sites" target="_blank">Trump scoffs at report North Korea has undeclared nuclear sites</a> Bloomberg News<br><a href="http://www.usnews.com/news/national-news/articles/2016-11-01/ground-game-differences-could-be-key-in-nc" target="_blank">Ground game differences could be key in N.C.</a> U.S. News<br><a href="http://www.usnews.com/news/politics/articles/2016-10-27/michelle-obama-denounces-rigged-election-allegations" target="_blank">Michelle Obama denounces rigged election allegations</a> U.S. News<br><a href="http://medillonthehill.medill.northwestern.edu/2016/11/which-senators-have-passed-the-most-laws/" target="_blank">Which senators have passed the most laws?</a> Medill News Service</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 1600);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text"><strong>Entertainment</strong><br><a href="https://www.wsj.com/articles/a-renaissance-for-documentaries-1535895000?mod=searchresults&page=1&pos=3" target="_blank">A renaissance for documentaries</a> The Wall Street Journal<br><a href="https://www.wsj.com/articles/for-spike-lee-blackkklansman-is-a-period-piece-best-viewed-now-1533734406?mod=searchresults&page=1&pos=6" target="_blank">For Spike Lee, \'BlacKkKlansman\' is a period piece best viewed now</a> The Wall Street Journal</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 2400);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text"><strong>Business</strong><br><a href="https://www.bloomberg.com/news/articles/2018-11-21/charity-s-impact-investment-helps-soviet-emigre-lap-carmakers" target="_blank">Charity\'s ‘impact’ investment helps Soviet emigre lap carmakers</a> Bloomberg News<br><a href="https://www.wsj.com/articles/moviepass-woes-may-be-opportunity-for-competitors-1536952474?mod=searchresults&page=1&pos=1" target="_blank">MoviePass woes may be opportunity for competitors</a> The Wall Street Journal<br><a href="https://www.wsj.com/articles/alibaba-hollywood-studios-are-among-those-pouring-1-billion-into-a-mobile-video-startup-1533636000" target="_blank">Alibaba, Hollywood studios are among those pouring $1 billion into a mobile video startup</a> The Wall Street Journal</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 3200);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text"><strong>Education</strong><br><a href="http://www.iol.co.za/the-star/growing-affordable-private-school-industry-raises-questions-9940227" target="_blank">Growing affordable private school industry raises questions</a> The (Johannesburg) Star<br><a href="http://www.iol.co.za/the-star/delivery-protest-planned-over-waterless-school-9042545" target="_blank">Delivery protest planned over waterless school</a> The (Johannesburg) Star<br><a href="http://dailynorthwestern.com/2015/05/06/campus/faculty-to-call-for-asian-american-studies-major-20-years-after-hunger-strike/" target="_blank">Faculty to call for Asian-American studies major 20 years after hunger strike</a> The Daily Northwestern</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 4000);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text"><strong>Other News</strong><br><a href="https://www.wsj.com/articles/yosemite-area-fire-continues-to-grow-1532037567?mod=searchresults&page=1&pos=10" target="_blank">Yosemite-area fire continues to grow</a> The Wall Street Journal<br><a href="http://www.iol.co.za/news/south-africa/gauteng/cellphone-tower-plan-sends-neighbourhood-into-frenzy-8791335" target="_blank">Cellphone tower plan sends neighbourhood into frenzy</a> The (Johannesburg) Star<br><a href="http://www.iol.co.za/the-star/victims-family-not-happy-with-wisanis-sentencing-9078808" target="_blank">Victim\'s family not happy with Wisani\'s sentencing</a> The (Johannesburg) Star</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 4800);
}

function code() {
	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Here\'s a sampling of what I\'ve done (mostly charts and maps and timelines). Check them out and let me know what you think!</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 800);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text"><a href="https://wapo.st/real-ids" target="_blank">New driver’s license requirements are coming to U.S. airports. Is your state ready?</a> The Washington Post<br><a href="http://benjamindin.com/press-secretaries" target="_blank">Sean Spicer\'s stint as press secretary unusually short</a> Personal Project<br><a href="https://www.texastribune.org/2017/11/30/how-texas-curtailed-traditional-welfare-without-ending-poverty/" target="_blank">How Texas curtailed traditional welfare without ending poverty</a> The Texas Tribune<br><a href="http://apps.dailynorthwestern.com/bestofevanston/2017" target="_blank">Best of Evanston 2017</a> The Daily Northwestern<br><a href="http://projects.sfchronicle.com/2016/voter-guide" target="_blank">2016 Voter Guide</a> The San Francisco Chronicle<br><a href="http://projects.sfchronicle.com/2016/bart-timeline" target="_blank">How BART became the fleet we know today</a> The San Francisco Chronicle');
		chats.scrollTop = chats.scrollHeight;
 	}, 1600);

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">If you\'re interested in seeing more, you can type \'v3\' into the chatbox, which will take you to an older version of my portfolio with all my past projects!</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 2400);
}

whatIveDone.onclick = function() {
	chats.insertAdjacentHTML('beforeend',
    '<div class="chat-bubble visitor child"><div class="inner-text">Can I see some of the work you\'ve done?</div></div>');

	chats.scrollTop = chats.scrollHeight;

	thingsIveDone();
}

// contactMe click

function contactBen() {
	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Sure! You can find me online in these places:<br><br>Email: <a href="mailto:benjamin.din@gmail.com" target="_blank">benjamin.din@gmail.com</a><br>Twitter: <a href="http://twitter.com/benjamindin" target="_blank">@benjamindin</a><br>LinkedIn: <a href="http://linkedin.com/in/bcdin" target="_blank">Benjamin Din</a><br></div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 800);
}

contactMe.onclick = function() {
	chats.insertAdjacentHTML('beforeend',
    '<div class="chat-bubble visitor child"><div class="inner-text">I want to talk to you. How can I reach you?</div></div>');

	chats.scrollTop = chats.scrollHeight;

	contactBen();
}

// welcome message

function welcomeMessage(name) {
	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Nice to meet you, ' + name + '! What can I do for you today?</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 800);
}

// youre welcome message

function youreWelcome() {
	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">You\'re welcome! Glad to have you here at the site.</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 800);
}

// display the text they want to send

function displayText() {
	current = chatText.innerHTML;
	chats.insertAdjacentHTML('beforeend',
    '<div class="chat-bubble visitor child"><div class="inner-text">' + current + '</div></div>');

	chatText.innerHTML = "";
	chats.scrollTop = chats.scrollHeight;

	if (chatCounter > 0) {
		ga('send','pageview','site?myParam=' + current);
	}
}

// dark mode

function darkMode() {
	document.body.classList.add("dark-mode");

	setTimeout(function(){ 
		chats.insertAdjacentHTML('beforeend',
    	'<div class="chat-bubble ben child"><div class="inner-text">Nice! If you want to switch back, just type \'light mode.\'</div></div>');
		chats.scrollTop = chats.scrollHeight;
 	}, 800);
}

function lightMode() {
	document.body.classList.remove("dark-mode");
}

// no response!

function invalid() {
	if (errorCounter == 0) {
		setTimeout(function(){ 
			chats.insertAdjacentHTML('beforeend',
	    	'<div class="chat-bubble ben child"><div class="inner-text">Hmm, that didn\'t work. Maybe try asking for my contact info, portfolio or resume? (You can also switch to dark mode!)</div></div>');
			chats.scrollTop = chats.scrollHeight;
	 	}, 800);
	 	errorCounter++;
	}
	else if (errorCounter == 1) {
		setTimeout(function(){ 
			chats.insertAdjacentHTML('beforeend',
	    	'<div class="chat-bubble ben child"><div class="inner-text">If you still can\'t find what you\'re looking for, feel free to reach out to me directly. I check my <a href="mailto:benjamin.din@gmail.com" target="_blank">email</a> a lot — more than the average person, I\'m sure! — and can get back to you ASAP. (Otherwise, feel free to keep browsing for some of the things I mentioned earlier!)');
			chats.scrollTop = chats.scrollHeight;
	 	}, 800);
	 	counter = 0;		
	}
}

// how to respond to ppl

document.body.onkeypress = function(e) {
	if (!e) e = window.event;
	var keyCode = e.keyCode || e.which;
	if ((keyCode == '13') && (chatText.innerHTML != "") && (chatText.innerHTML != "Type here")){
		e.preventDefault();
		// this is the username value
		if (chatCounter == 0) {
			username = chatText.innerHTML.toLowerCase().replace(/\W/g, '');
			if (username == "") {
				username = "visitor";
			}
			setTimeout(function(){
				whereIveBeen.classList.remove("hidden");
				whatIveDone.classList.remove("hidden");
				contactMe.classList.remove("hidden");
			}, 800)
			ga('send','pageview','site?myParam=' + this.innerHTML);
			var name = chatText.innerHTML;
			displayText();
			welcomeMessage(name);			
			chatCounter++;
		}
		else if (chatText.innerHTML.toLowerCase().includes("contact") || chatText.innerHTML.toLowerCase().includes("email") || chatText.innerHTML.toLowerCase().includes("linkedin") || chatText.innerHTML.toLowerCase().includes("twitter") || chatText.innerHTML.toLowerCase().includes("reach") || chatText.innerHTML.toLowerCase().includes("talk")) {
			displayText();
			contactBen();
		}
		else if (chatText.innerHTML.toLowerCase().includes("resume")) {
			displayText();
			whereIveWorked();
		}
		else if (chatText.innerHTML.toLowerCase().includes("portfolio") || chatText.innerHTML.toLowerCase().includes("work") || chatText.innerHTML.toLowerCase().includes("clips")) {
			displayText();
			thingsIveDone();
		}
		else if (chatText.innerHTML.toLowerCase().includes("words")) {
			displayText();
			words();
		}
		else if (chatText.innerHTML.toLowerCase().includes("code")) {
			displayText();
			code();
		}
		else if (chatText.innerHTML.toLowerCase().includes("thank")) {
			displayText();
			youreWelcome();
		}
		else if (chatText.innerHTML.toLowerCase().includes("dark mode")) {
			displayText();
			darkMode();
		}
		else if (chatText.innerHTML.toLowerCase().includes("light mode")) {
			displayText();
			lightMode();
		}
		else if (chatText.innerHTML.toLowerCase().includes("v3")) {
			window.location.href = "http://www.benjamindin.com/v3";		
		}
		else if (chatText.innerHTML.toLowerCase().includes("v2")) {
			window.location.href = "http://www.benjamindin.com/v2";		
		}
		else if (chatText.innerHTML.toLowerCase().includes("v1")) {
			window.location.href = "http://www.benjamindin.com/v1";		
		}
		else {
			displayText();
			invalid();
		}
	}
}