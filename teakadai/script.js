(async () => {

    if ("serviceWorker" in navigator) {

        // we register our service worker                             						
        const registration = await navigator.serviceWorker.register('/offline.js');

        // when our service worker is updated
        registration.onupdatefound = () => {

            // when our service worker is updated
            registration.installing.onstatechange = function () {
                console.log(`Service worker... ${this.state}`);
            };
        };

    }

})()
.catch(e => console.log(`:) : ${e}`));



let deferredPrompt = null;

const triggerAskToInstall = async () => {

    console.log('Ask to install ! ');

    if (deferredPrompt === null) {
        return false;
    }

    // The user has had a positive interaction with our app and Chrome
    // has tried to prompt previously, so let's show the prompt.
    deferredPrompt.prompt().catch(console.log);

    // Follow what the user has done with the prompt.
    const choiceResult = await deferredPrompt.userChoice.catch(console.log);

    // We no longer need the prompt.  Clear it up.
    deferredPrompt = null;

    return choiceResult.outcome

};


window.addEventListener('beforeinstallprompt', function (e) {
  
    if(deferredPrompt) {
      return false;
    }

    console.log('[PWA] beforeinstallprompt Event fired and stashed');

    e.preventDefault();

    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    if (deferredPrompt) {
        readyToInstall();
    }

});



const readyToInstall = () => {

    const $pwaInstall = document.querySelector('#pwa-install');

    $pwaInstall.classList.remove('hidden');

    $pwaInstall.addEventListener('click', async function (e) {

        const userChoice = await triggerAskToInstall();

        if (userChoice === 'dismissed') {
            console.log('User cancelled home screen install');
        } else {
            console.log('User added to home screen');
        }

    });


};

performance.mark('form-loaded');





  
// Live TV open close js  
 var acc = document.getElementsByClassName("chat");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
scrollFunction()
};
function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
document.getElementById("myBtn").style.display = "block";
}
else {
document.getElementById("myBtn").style.display = "none";
}
}



// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  
  
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
  
var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);  
}




function openPage(pageName, elmnt, color) {
var i, tabcontent, tablinks;
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
tabcontent[i].style.display = "";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < tablinks.length; i++) {
tablinks[i].style.backgroundColor = "";
}
document.getElementById(pageName).style.display = "block";
elmnt.style.backgroundColor = color;
}




// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
myFunction()
};
function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}


function openNav() {
document.getElementById("mySidenav").style.width = "355px";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0%";
}
window.addEventListener('beforeinstallprompt', (e) => {
  
  
  
// Prevent Chrome 67 and earlier from automatically showing the prompt
e.preventDefault();
  
  
  
// Stash the event so it can be triggered later.
deferredPrompt = e;
  
  
}
);

    


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
acc[i].addEventListener("click", function() {
this.classList.toggle("inactive");
var panel = this.nextElementSibling;
if (panel.style.maxHeight){
panel.style.maxHeight = null;
} else {
panel.style.maxHeight = panel.scrollHeight + "px";
} 
});
}

var tday=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var tmonth=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

function GetClock(){
var d=new Date();
var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getFullYear();
var nhour=d.getHours(),nmin=d.getMinutes(),nsec=d.getSeconds(),ap;

if(nhour==0){ap=" AM";nhour=12;}
else if(nhour<12){ap=" AM";}
else if(nhour==12){ap=" PM";}
else if(nhour>12){ap=" PM";nhour-=12;}

if(nmin<=9) nmin="0"+nmin;
if(nsec<=9) nsec="0"+nsec;

var clocktext=" "+nhour+":"+nmin+":"+nsec+ap+" "+tmonth[nmonth]+" "+ndate+", "+nyear+" ";
document.getElementById('clockbox').innerHTML=clocktext;
}

GetClock();
setInterval(GetClock,1000);



var version = "v2.0.2";
var swPath;
var urlObject = new URL(location);
var host;
if (urlObject.searchParams.get("swPath")) {
    swPath = urlObject.searchParams.get("swPath");
}
else {
    if (urlObject.searchParams.get("version")) {
        version = urlObject.searchParams.get("version");
    }
    if (urlObject.searchParams.get("swJSHost")) {
        host = "https://" + urlObject.searchParams.get("swJSHost");
    }




    else {
        host = "https://sdki.truepush.com/sdk/";
    }
    swPath = host + version + "/sw.js";
}
importScripts(swPath);





