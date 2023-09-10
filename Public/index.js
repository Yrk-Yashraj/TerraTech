var eventname = ["Devheat beta", "AlgoHours 3.0", "LCS Orientation", "Stranger Codes 2.0", "Gaming Night", "eventname6"];
var organisername = ["GDSC IIIT Surat", "organiser2", "organiser3", "organiser4", "organiser5", "organiser6"];
let Lorem = "We hope you're doing well, developing stuff, writing codes. 𝘎𝘋𝘚𝘊 𝘐𝘐𝘐𝘛 𝘚𝘶𝘳𝘢𝘵 is here with an amazing opportunity to put your coding skills to solve some real world problems. We invite you all to 𝗗𝗲𝘃𝗛𝗲𝗮𝘁 Beta a 𝟳 𝙙𝙖𝙮 𝙡𝙤𝙣𝙜 𝙙𝙚𝙫𝙚𝙡𝙤𝙥𝙢𝙚𝙣𝙩 𝙘𝙝𝙖𝙡𝙡𝙚𝙣𝙜𝙚 where you'll be working on some amazing problem statements and solving them through your weapon code 👨‍💻. New to code! Afraid to get stuck? Well well well we have got you covered. Our team of mentors will guide you through this complete journey.😌😌 "
var vanuename = ["Home", "vanue2", "vanue3", "vanue4", "vanue5", "vanue6"];
var eventdate = ["21/07/2022", "22/07/2022", "23/07/2022", "24/07/2022", "25/07/2022", "26/07/2022"];
var eventtime = ["12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]
var partlinks = ["https://docs.google.com/forms/d/e/1FAIpQLSfIyB-J_IkKHjObnIIQ9HQXx5JsCtfp79Qn7OZdWXxoRiTrng/viewform?usp=sf_link", "https://docs.google.com/forms/d/e/1FAIpQLSc3nTnrXgA3-JoF-6Zb4b1NMvJ0azu2Dx5py8yLg9QYfuN9tw/viewform?usp=sf_link", "https://docs.google.com/forms/d/e/1FAIpQLSdX0McC4AIXKJQrFxDcORhsjwiotdfoSwg8jrNJIe_UmtQjJg/viewform?usp=sf_link", "https://docs.google.com/forms/d/e/1FAIpQLSdIXCgBmvN28SxaaXqOt9sMHMj_31ApSxEWLbpbZ0ZjRjr-vA/viewform?usp=sf_link", "https://docs.google.com/forms/d/e/1FAIpQLSfWj3TxYfQVZev6MjmUhCSnAtYY6UxVDkGGXOL7hhD17jBHog/viewform?usp=sf_link", "https://docs.google.com/forms/d/e/1FAIpQLSfWj3TxYfQVZev6MjmUhCSnAtYY6UxVDkGGXOL7hhD17jBHog/viewform?usp=sf_link"]
var eventdes = [Lorem, Lorem, Lorem, Lorem, Lorem, Lorem]
var i = 0;
let eventlength = eventname.length;
function myfunction() {
    if (i == 0) {
        document.getElementById("leftslide").style.opacity = "0.3";
    }
    else if (i == eventlength - 1) {
        document.getElementById("rightslide").style.opacity = "0.3";
    }
    else {
        document.getElementById("leftslide").style.opacity = "1";
        document.getElementById("rightslide").style.opacity = "1";
    }
}
function evinfo() {
    document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
    document.getElementById("eventname1").innerHTML = '<img src="content\\logo' + (i + 1) + '.jpg" alt="nologo" id="eventlogo">';
}
var a = 0;
var t = a;
function nextevent() {
    if (i < eventlength - 1) {
        i++
        if (t % 2 == 1) {
            info()
        }
        evinfo();
        myfunction();
        eventnamechange();
    }
}
function lastevent() {
    if (i > 0) {
        i--;
        if (t % 2 == 1) {
            info()
        }
        evinfo();
        myfunction();
        eventnamechange();
    }
}
function cardinfofun(p) {
    let x = `<div id="eventinfocard"><div id="evnamediv"><span>${eventname[p]}</span></div><div id="descdiv"><span>${eventdes[p]}</span></div><div class="eventbtns" id="desdiv"><div><button class="navbutton eventnavbtns" title="share"><img src="content\\share.png" id="share"></button><button class="navbutton eventnavbtns" title="Participate"><a href ="${partlinks[p]}" target ="_blank"><img src="content\\participate.png" id="takepart"></a></button><button class="navbutton eventnavbtns" title="More" onclick="slide()"><img src="content\\more.png" id="more"></button> </div></div></div></div>`
    return x;
}
function info() {
    document.getElementById("eventinfo").innerHTML = cardinfofun(i)
}

function slide() {
    if (a % 2 == 0) {
        document.getElementById("notiposterid").style.cssText = "transition: 0.3s; width: 35rem;  ";
        document.getElementById("abouteventicon").style.cssText = "transition: 0.3s; transform: rotate(180deg)"
        setTimeout(info, 300);
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:35rem; height:34rem; display: inline-block; float: right; background-color: rgb(255,255,255,);"
        a++
    }
    else {
        document.getElementById("notiposterid").style.cssText = "transition: 0.3s; width: 70rem;"
        document.getElementById("abouteventicon").style.cssText = "transition: 0.3s; transform: rotate(0deg)"
        document.getElementById("eventinfo").style.cssText = "transition: 0.5s; transition-delay: 0s; width:0rem; height:34rem; display: inline-block; float: right; background-color: transparent;"
        document.getElementById("notiposterid").style.backgroundImage = 'url("./content/event' + (i + 1) + '.jpg")'
        document.getElementById("eventinfo").innerHTML = ""
        // document.getElementById("eventinfo").style.display = "none";`
        a--;
    }
    t = a
}