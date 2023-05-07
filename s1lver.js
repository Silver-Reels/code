{ //"BACK TO TOP" BUTTON FUNCTIONALITY/////////////////////////////////////////////////////////////////
const topButtonDiv=document.querySelector(".TopButton");
window.onscroll = function() {TopButtonFunc()};  //when scrolling happens in window, activate function

function TopButtonFunc(){
  if (window.pageYOffset>92) {topButtonDiv.classList.add("TopButtonActive")} //if scrolled down below 92px
  else                       {topButtonDiv.classList.remove("TopButtonActive")}}
}//////////////////////////////////////////////////////////////////////////////////////////////////////

{//URL DELAYER: USE IN HTML WITH href="javascript:delay('url')"/////////////////////////////
function delay(url){setTimeout(function(){window.location=url},300)} //time in milliseconds.
}///////////////////////////////////////////used to delay page leaving so animation can play

//LOADING SCREEN/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const allimages= Array.from(document.getElementsByTagName("img"));        //initial request is a "node list", we need to array-fy this
const loadMsg=   document.querySelector(".loadingMessage2");              //part of HTML responsible for displaying loadscreen text (25% etc)
const loadDiv=   document.querySelector(".loadingDiv");                   //loadingscreen div
const loadBar=   document.querySelector(".loadingBar");                   //loading progress bar graphic
const navButtons=Array.from(document.getElementsByClassName("ButtonAc")); //all navbar buttons that are active
const navArrow= document.querySelector(".arrow");                         //navbar arrow
const descText=document.querySelector(".desctext");                       //all description text
const descTextModular=document.querySelector(".desctextB");               //description text part we want to swipe away
const reel=document.querySelector(".reel");                               //reel
const nonreel=document.querySelector(".non-reel");                        //reel alts
const inacButton=document.querySelector(".ButtonInac")                    //inactive button

const allimageslength=allimages.length;
//we determine load progress based on how many images the browser has loaded
allimages.forEach((img)=> img.onload=()=>{return loadingCalc()}); //run loadingCalc() every time 1 image loads

let imgLoaded=0;                          
function loadingCalc(){ //function that sets the text of loading screen progress
  imgLoaded++;          //every time function is invoked (only by 'allimages.forEach' above), adds +1 to imgLoaded
  loadMsg.innerText=
  `${((imgLoaded/allimageslength)*100).toFixed(0)}%`; //sets text to calc of imgLoaded out of total images. eg: 23%. toFixed is amount of decimals
  loadBar.style.width=                                 //same with progress bar graphic
  `${((imgLoaded/allimageslength)*33.4)}vw`;         //these will often NOT reach 100%, as small images sometimes load faster than this JS script, so can't be iterated
}

//once <body> i.e. entire page is fully loaded
document.body.onload=()=>{
  loadDiv.classList.add("loadingDivGone");                                //loadingscreen goes away
  descTextModular.classList.remove("desctextBGone");                      //desctext B span swipes in
  descTextModular.style.filter="blur(0)";                                 //desctext B removes blur while swiping in
  if (reel){reel.classList.remove("reel-moving-in")};                     //moves reel in onload
  if (nonreel){nonreel.classList.remove("reel-moving-in")};
  loadDiv.style.filter="blur(0.9vw)";                                     //add "motion" blur when loaddiv is to move away

//console.log(`body loaded`);
}


//once active navigation bar button is clicked (i.e. page will load away)

//for each active nav button clicked
navButtons.forEach((button)=>
button.onclick=function(){
  loadDiv.classList.remove("loadingDivGone"); //brings back loading screen
  loadDiv.style.filter="blur(0)";             //
  loadMsg.innerText=`0%`;                     //set loading text to 0%,
  loadBar.style.width="0";                    //& reset loadprogress before page loads away, for flavor
  switch (true){                              //moves navbar arrow to correct new position
    case button.className.includes("Button1") : navArrow.className="arrow arrowpos1";break;
    case button.className.includes("Button2") : navArrow.className="arrow arrowpos2";break;
    case button.className.includes("Button3") : navArrow.className="arrow arrowpos3";break;
    case button.className.includes("Button4") : navArrow.className="arrow arrowpos4";break;
    case button.className.includes("Button5") : navArrow.className="arrow arrowpos5";break;
    case button.className.includes("Button6") : navArrow.className="arrow arrowpos6";break;
  }
  descTextModular.classList.add("desctextBGone");                         //swipes away description text
  descTextModular.style.filter="blur(0.3vw)";
  if (reel){reel.classList.add("reel-moving-away");}                      //moves reel style page away
  if (nonreel){nonreel.classList.add("reel-moving-away")};                //moves nonreel style page away
  inacButton.classList.remove("ButtonInac");                              //moves the navbar button back down
}
)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IMAGE VIEWER FUNCTIONALITY

const reelImg= Array.from(reel.getElementsByClassName("reel-img"));       //needs "reel" const to be defined above
const viewerDivParent=  document.querySelector(".viewerDivParent");
const viewer=           document.querySelector(".viewer");                //viewer class, for the image in viewer functionality
const viewertext=       document.querySelector(".viewertext");

let lastImgClicked=""; //this is here so the other functions like "hide viewer" can track 'img'
if (reelImg){
reelImg.forEach((img,i)=>
img.onclick=function(){
    lastImgClicked=img; //letting 'img' be tracked elsewhere, no need to use this const here tho

    //anims for removing clicked thumbnail from view
    let styleAddress=img.parentElement.style;
    styleAddress.left="98vw";
    styleAddress.zIndex="2";
    styleAddress.transform="rotate(-5deg)";
    styleAddress.filter="blur(0.9vw)";

    //'src' of <img> in class=viewer is (default empty) grabbed from HTML of image clicked in 'reel-img'.
    //should have a 'x-vsrc' that can then be displayed by the viewer
    viewer.src="";                 //reset viewer image
    viewer.src=img.attributes.getNamedItem("x-vsrc").value; 
    
    viewertext.innerText=          //grabs reeltitle text and puts it in viewertext
    `FILE #${i+1>9? i+1 : "0"+(i+1)}: ${img.parentElement.getElementsByClassName("reel-title")[0].innerText}`;
    viewer.style.filter="blur(0)"; //for motion blur

    //adds visibility to viewerDivParent (do this last)
    viewerDivParent.classList.add("viewerDivParentVisible");
  }
)
}

//hide viewer
viewerDivParent.onclick=function(){hideViewer()};
//hide viewer with ESC
document.onkeydown=function(e){
  if(e.key=="Escape" && viewerDivParent.className=="viewerDivParent viewerDivParentVisible"){
    hideViewer()}};

function hideViewer(){viewerDivParent.classList.remove("viewerDivParentVisible");
                      viewer.style.filter="blur(0.9vw)"; //viewer "motion" blur
                      lastImgClicked.parentElement.style.left="0"; //animations for the thumbnail
                      lastImgClicked.parentElement.style.filter="";
                      setTimeout(function(){lastImgClicked.parentElement.style.transform=""},150);
                      setTimeout(function(){lastImgClicked.parentElement.style.zIndex=""},500);
}
///////////////////////////////////////////////////////////////////////////////////////

//INKR

if (window.location.pathname.toLowerCase()==`/inkr.html` || window.location.pathname.toLowerCase()==`/inkr`){ //only run if we're on the correct HTML page
  console.log(`Activating external INKR`);
  if (reel){reel.style.height=0;reel.style.width=0;reel.style.padding=0;reel.style.margin=0};
  if (reelImg){reelImg[0].style.height=0;reelImg[0].style.width=0};
  if (viewerDivParent){viewerDivParent.style.width=0;viewerDivParent.style.height=0};

  const inkrForm=     document.querySelector(".typeForm");
  const counter=      document.querySelector(".typeCounter");
  const inkrTextField=document.querySelector("input[type=text");

  inkrForm.onsubmit=function(e){         
    e.preventDefault();

    if (inkrTextField.value.length<=40){
    const iframeDiv=   document.getElementsByTagName("iframe")[0];
    const iframeWindow=iframeDiv.contentWindow;
    let charDivs=      Array.from(iframeWindow.document.querySelectorAll(".char"));
    let charParent=    iframeWindow.document.querySelector(".charParent");
    let charCount=     iframeWindow.document.querySelector(".charParent").children;
    let charHeight=    50;

    iframeWindow.document.body.children[0].innerHTML=iframeWindow.populateHTML(inkrTextField.value);
    charDivs.forEach(x=>x.style.height=`${charHeight*0.6}px`);
    iframeWindow.setWidthAll();
    iframeWindow.setTail(charCount);
    iframeWindow.animateHTML(charParent);
    }
    else alert('Above INKR demo character limit!');
  }
  //character counter visuals
  window.onkeyup=function(){
    counter.innerHTML=`<p>${40-inkrTextField.value.length}/40</p>`;
  }

  const typeInput=document.querySelector(".typeInput");
  let focused=false;
  typeInput.onclick=function(){typeInput.style.width=`42vw`;typeInput.style.boxShadow=`0 0 0.15vw #D7D7D7`;focused=true};
     window.onclick=function(){if (focused==true){focused=false} else {typeInput.style.width=`26vw`;typeInput.style.boxShadow=`0 0 0.4vw #D7D7D7`}};

}
// INTRO PAGE ICONS///////////////////////////////////////////////////////
let softwareIcon1=   Array.from(document.querySelectorAll(".softwareIcon1"));
let softwareIcon2=   Array.from(document.querySelectorAll(".softwareIcon2"));
let aboutTextInsert1=document.getElementById("aboutTextInsert1");
let aboutTextInsert2=document.getElementById("aboutTextInsert2");

function iconNameDisplay(iconArray,field){
  iconArray.forEach((icon)=>{
    icon.onmouseenter=function(){
      field.innerText=icon.id;
      let desiredColor=icon.attributes.getNamedItem("x-color").value;
      field.style.color=desiredColor;
      field.style.textShadow=`0 0 0.15vw ${desiredColor}`;
    }
  })
}
iconNameDisplay(softwareIcon1,aboutTextInsert1);
iconNameDisplay(softwareIcon2,aboutTextInsert2);
//////////////////////////////////////////////////////////////////////////

//INTRO TOOLTIP///////////////////////////////////////////////////////
/*
let tooltipIcon=Array.from(document.querySelectorAll(".tooltipIcon"));
let tooltipBox=document.querySelector(".tooltipBox");

tooltipIcon.forEach((tooltip)=>{
  tooltip.onmouseenter=function(e){
    //console.log(`FIRING TOOLTIP`)
    console.log(e);
    //console.log(`X=${e.clientX} | Y=${e.clientY}`);
    tooltipBox.style.left =`${e.pageX+20}px`;
    tooltipBox.style.top =`${e.pageY-150}px`;
    tooltipBox.style.opacity=1;
  }
  tooltip.onmouseleave=function(e){
    tooltipBox.style.opacity=0;
  }
})
*/
//////////////////////////////////////////////////////////////////////

//INTRO page fixing bs with vestigial reel class
if (window.location.pathname.toLocaleLowerCase()==`/` || window.location.pathname.toLocaleLowerCase()==`/index.html`){
  if (reel){reel.style.pointerEvents="none";}
  
  //INTRO page fetching LeetCode data
  const introicons=Array.from(document.getElementsByClassName("introicon"));
  //console.log(`made leetcodeIcon ${leetcodeIcon}`);
  
  let leetcodeURL=`https://leetcode.com/graphql/`;
  let leetcodeQuery={
    "query":"query skillStats($username: String!) {matchedUser(username: $username) {tagProblemCounts {advanced {tagName problemsSolved} intermediate {tagName problemsSolved} fundamental { tagName problemsSolved } } } }",
    "variables":{"username": "Silver-Reels"},
    "operationName": "skillStats"
  };

  const init={
  method:"POST",
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(leetcodeQuery)
  };

  introicons[1].onmouseenter = async () => {
    try{
      console.log(`calling...`);
      const response = await fetch("/.netlify/functions/fetchLeetCode")
      .then(rawResponse=>rawResponse.json())
      console.log(response);
    }
    catch(e){
      console.warn(`${e}`);
    }

    introicons[0].onmouseenter= async ()=>{
      let response=await fetch("/.netlify/functions/hi",{method:"GET",headers:{"Content-Type":"application/json"},body:'{"gay":1}'})
      .then(rawResponse=>rawResponse.json());
      console.log(response);
    }

    
  
    //responseText.innerText = response
  }
  
}
////////////////////////////////////////////////////////////////////

//MOUSE GLOW
let mouseGlow=document.querySelector(".mouse-glow");
//function mousePosition(e){}
document.onmousemove=function(e){
  mouseGlow.style.opacity=`0.1`;
  mouseGlow.style.top=`${e.clientY-5}px`;
  mouseGlow.style.left=`${e.clientX-10005}px`;
  //console.log(e);
}

//315 to 370
let bg=document.getElementsByTagName("body");
let gradientAngle=315;
function gradientShift(value){
  let newValue;
  if (value===315){newValue=370}
  if (value===370){newValue=315}
  bg.style.backgroundImage=`url(/bg.webp), linear-gradient(${newValue}deg, rgba(18,18,18,1) 84%, rgba(48,48,48,1) 100%)`
}
//setInterval();

/////////////////////////////////////////////////////////////////
/*
let leetcodeURL=`https://leetcode.com/graphql/`;
let leetcodeQuery=
{
  "query": "\n    query skillStats($username: String!) {\n  matchedUser(username: $username) {\n    tagProblemCounts {\n      advanced {\n        tagName\n        problemsSolved\n      }\n      intermediate {\n        tagName\n        problemsSolved\n      }\n      fundamental {\n        tagName\n        problemsSolved\n      }\n    }\n  }\n}\n    ",
  "variables":{"username": "Silver-Reels"},
  "operationName": "skillStats"
};

async function fetchLeetCode(){
  const init={
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(leetcodeQuery)
  };
  const response=await fetch(leetcodeURL,init)
  .then(rawResponse=>rawResponse.json())
  .catch(e=>console.warn(`Could not get data from LeetCode. ${e}`));
  return response;
}
console.log(fetchLeetCode());
*/

/*
request with console:

curl --request POST \
  --url https://leetcode.com/graphql \
  --header 'Content-Type: application/json' \
  --data '{
    "query": "\n    query skillStats($username: String!) {\n  matchedUser(username: $username) {\n    tagProblemCounts {\n      advanced {\n        tagName\n        problemsSolved\n      }\n      intermediate {\n        tagName\n        problemsSolved\n      }\n      fundamental {\n        tagName\n        problemsSolved\n      }\n    }\n  }\n}\n    ",
    "variables":{"username": "Silver-Reels"},
    "operationName": "skillStats"
  }'
*/

