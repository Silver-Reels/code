{ //"BACK TO TOP" BUTTON FUNCTIONALITY/////////////////////////////////////////////////////////////////
const topButtonDiv=document.querySelector(".TopButton");
window.onscroll = function(e){
  TopButtonFunc();
  readjustMinHeight();
};

function TopButtonFunc(){
  if (window.pageYOffset>92) {topButtonDiv.classList.add("TopButtonActive")} //if scrolled down below 92px
  else                       {topButtonDiv.classList.remove("TopButtonActive")}
}

function readjustMinHeight(){ //trying to fix issues with body bg being broken on mobile
  //doing this will correctly increase minHeight dynamically, but in case of resize to smaller won't decrease
  document.body.style.minHeight=`${document.body.scrollHeight}px`;
}
//console.log(e);
//document.body.style.minHeight=`${e.currentTarget.screen.availHeight}px;`
//availWidth
//availHeight
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
const descText=document.querySelector(".desc-text");                       //all description text
const descTextModular=document.querySelector(".desc-text-b");               //description text part we want to swipe away
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

//DOCUMENT BODY ONLOAD/////////////////////////////////////////////////////////////////////////////////////////////
//once <body> i.e. entire page is fully loaded
document.body.onload=()=>{
  loadDiv.classList.add("loadingDivGone");                                //loadingscreen goes away
  descTextModular.classList.remove("desc-text-b-gone");                      //desc-text-b span swipes in
  descTextModular.style.filter="blur(0)";                                 //desc-text-b removes blur while swiping in
  if (reel){reel.classList.remove("reel-moving-in")};                     //moves reel in onload
  if (nonreel){nonreel.classList.remove("reel-moving-in")};
  loadDiv.style.filter="blur(0.9vw)";                                     //add "motion" blur when loaddiv is to move away

  
  //console.log(`body loaded`);
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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
  descTextModular.classList.add("desc-text-b-gone");                         //swipes away description text
  descTextModular.style.filter="blur(0.3vw)";
  if (reel){reel.classList.add("reel-moving-away");}                      //moves reel style page away
  if (nonreel){nonreel.classList.add("reel-moving-away")};                //moves nonreel style page away
  inacButton.classList.remove("ButtonInac");                              //moves the navbar button back down
}
)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IMAGE VIEWER FUNCTIONALITY
let reelImg=null;
if (reel){reelImg=      Array.from(reel.getElementsByClassName("reel-img"))}; //needs "reel" const to be defined above
const viewerDivParent=  document.querySelector(".viewerDivParent");
const viewer=           document.querySelector(".viewer");                    //viewer class, for the image in viewer functionality
const viewertext=       document.querySelector(".viewertext");
let lastImgClicked=""; //this is here so the other functions like "hide viewer" can track 'img'

if (reelImg){
  reelImg.forEach((img,i)=>
  img.onclick=function(){
    lastImgClicked=img; //letting 'img' be tracked elsewhere, no need to use this const here tho
    
    document.body.style.overflowY="hidden"; //no scrolling
    
    //anims for removing clicked thumbnail from view
    let styleAddress=img.parentElement.style;
    styleAddress.left="98vw";
    styleAddress.zIndex="2";
      styleAddress.transform="rotate(-5deg)";
      styleAddress.filter="blur(0.9vw)";
      
      viewer.src="";                 //reset viewer image
      //'src' of <img> in class=viewer is (default empty) grabbed from x-vsrc of image clicked in 'reel-img'.
      viewer.src=img.attributes.getNamedItem("x-vsrc").value;
      
      viewertext.innerText=          //grabs reel-title text and puts it in viewertext
      `FILE #${i+1>9? i+1 : "0"+(i+1)}: ${img.parentElement.getElementsByClassName("reel-title")[0].innerText}`;
      viewer.style.filter="blur(0)"; //for motion blur
      
      //adds visibility to viewerDivParent (do this last)
      viewerDivParent.classList.add("viewerDivParentVisible");
    }
    )
  }
  
  //hide viewer
  if (viewerDivParent){viewerDivParent.onclick=function(){hideViewer()};}
  //hide viewer with ESC
  document.onkeydown=function(e){
    if(e.key=="Escape" && (viewerDivParent) && viewerDivParent.className=="viewerDivParent viewerDivParentVisible"){
      hideViewer()}};
      
      function hideViewer(){viewerDivParent.classList.remove("viewerDivParentVisible");
      viewer.style.filter="blur(0.9vw)"; //viewer "motion" blur
      lastImgClicked.parentElement.style.left="0"; //animations for the thumbnail
      lastImgClicked.parentElement.style.filter="";
      document.body.style.overflowY="auto"; //scrolling is back
      setTimeout(function(){lastImgClicked.parentElement.style.transform=""},150);
      setTimeout(function(){lastImgClicked.parentElement.style.zIndex=""},500);
    }
    ///////////////////////////////////////////////////////////////////////////////////////
    
    //INKR
    
    if (window.location.pathname.toLowerCase()==`/inkr.html` || window.location.pathname.toLowerCase()==`/inkr`){ //only run if we're on the correct HTML page
  console.log(`Activating external INKR`);
  if (reel){reel.style.height=0;reel.style.width=0;reel.style.padding=0;reel.style.margin=0};
  if (reelImg){reelImg[0].style.height=0;reelImg[0].style.width=0};
  if (viewerDivParent){viewerDivParent.style.width=0;viewerDivParent.style.height=0;viewerDivParent.style.display="none"};
  if (nonreel){nonreel.style.display="block"};
  
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
let softwareIcon1=   Array.from(document.querySelectorAll(".software-icon-1"));
let softwareIcon2=   Array.from(document.querySelectorAll(".software-icon-2"));
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
  if (reel){reel.style.pointerEvents="none"};
  if (viewerDivParent){viewerDivParent.style.display=`none`};
  
  //INTRO page fetching LeetCode data/////////////////////////////////////////////////////////////////////////////////////
  const introicons=Array.from(document.getElementsByClassName("introicon"));
  const leetTextAdv=document.getElementById("leet-adv");
  const leetTextInt=document.getElementById("leet-int");
  const leetTextFun=document.getElementById("leet-fun");
  const leetClass=Array.from(document.getElementsByClassName("leet-stats"));
  const aboutTextQuery=document.querySelector(".about-text-query");
  const leetLink=document.querySelector(".leet-link");
  
  /*  
  let leetcodeURL=`https://leetcode.com/graphql/`;
  let leetcodeQuery={
    "query":"query skillStats($username: String!) {matchedUser(username: $username) {tagProblemCounts {advanced {tagName problemsSolved} intermediate {tagName problemsSolved} fundamental { tagName problemsSolved } } } }",
    "variables":{"username": "Silver-Reels"},
    "operationName": "skillStats"
  };
  const init={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(leetcodeQuery)};
  
  WE ARE USING THESE IN THE SERVERLESS FUNCTION

  REQUEST WITH CONSOLE:
  curl --request POST \
  --url https://leetcode.com/graphql \
  --header 'Content-Type: application/json' \
  --data '{
    "query": "\n    query skillStats($username: String!) {\n  matchedUser(username: $username) {\n    tagProblemCounts {\n      advanced {\n        tagName\n        problemsSolved\n      }\n      intermediate {\n        tagName\n        problemsSolved\n      }\n      fundamental {\n        tagName\n        problemsSolved\n      }\n    }\n  }\n}\n    ",
    "variables":{"username": "Silver-Reels"},
    "operationName": "skillStats"
  }'
  
  */
 let leetcodeStats={};
 let leetFetched=false;
 
 aboutTextQuery.onclick = async () => {
   if (!leetFetched){
     leetFetched=true;
     try{
       aboutTextQuery.style.filter=`blur(2vw) opacity(0)`;
       aboutTextQuery.style.pointerEvents=`none`;
       //console.log(`calling...`);
       const response = await fetch("/.netlify/functions/fetchLeetCode") //netlify serverless function
       .then(rawResponse=>rawResponse.json())
       
       leetcodeStats=response.data.data.matchedUser.tagProblemCounts;
       
       //strings
       let advS=``;
       let intS=``;
       let funS=``;
       
       //arrays
       leetcodeStats.advanced.forEach(obj=>advS+=`x${obj.problemsSolved} ${obj.tagName}\n`);
       leetcodeStats.intermediate.forEach(obj=>intS+=`x${obj.problemsSolved} ${obj.tagName}\n`);
        leetcodeStats.fundamental.forEach(obj=>funS+=`x${obj.problemsSolved} ${obj.tagName}\n`);

        
        //<p>'s
        leetTextAdv.innerText=advS;
        leetTextInt.innerText=intS;
        leetTextFun.innerText=funS;
        
        //effect to uncover <p>
        leetClass[0].classList.add("leet-stats-shown");  
        leetLink.style.pointerEvents=`all`;
      }
      catch(e){console.warn(`${e}`)}
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //INTRO PARALLAX
  
  let layer1=document.querySelector(".parallax-layer-1").style; //moves most, on top
  let layer2=document.querySelector(".parallax-layer-2").style;
  let layer3=document.querySelector(".parallax-layer-3").style;
  let layer4=document.querySelector(".parallax-layer-4").style;
  let layer5=document.querySelector(".parallax-layer-5").style; //moves least, on bottom
  
  let mod1=13;let mod2= 8;let mod3= 5;let mod4= 3;let mod5= 2;  //fibonacci. could do modX & modY too
  
  function parallax(x,y){ //mousemove event; e.clientX, e.clientY
    //let maxX= document.body.clientWidth; let centerX=maxX/2;
    //let maxY=document.body.clientHeight; let centerY=maxY/2;
    
    //(center - currentMouse) / totalScreen = offset from center as % of total screen
    //this value * modifier = how much to translate(x%,y%)

    //layer1.transform=`translate(${((centerX-x)/maxX)*modX1}%,${((centerY-y)/maxY)*modY1}%)`;
    //math optimize: (center-current)/2*center = 0.5-(current/max)
    let calcX=0.5-(x/document.body.clientWidth);
    let calcY=0.5-(y/document.body.clientHeight);
    
    layer1.transform=`translate(${calcX*mod1}%,${calcY*mod1}%)`;
    layer2.transform=`translate(${calcX*mod2}%,${calcY*mod2}%)`;
    layer3.transform=`translate(${calcX*mod3}%,${calcY*mod3}%)`;
    layer4.transform=`translate(${calcX*mod4}%,${calcY*mod4}%)`;
    layer5.transform=`translate(${calcX*mod5}%,${calcY*mod5}%)`;
  };
}
////////////////////////////////////////////////////////////////////

//MOUSE GLOW
let mouseGlow=document.querySelector(".mouse-glow");
//function mousePosition(e){}
document.onmousemove=function(e){
  mouseGlow.style.opacity=`0.25`;
  mouseGlow.style.top=`${e.clientY-3}px`;
  mouseGlow.style.left=`${e.clientX-10004}px`;
  //console.log(e);
  if (window.location.pathname.toLocaleLowerCase()==`/` || window.location.pathname.toLocaleLowerCase()==`/index.html`){
    parallax(e.clientX,e.clientY);
  }
}



/////////////////////////////////////////////////////////////////



