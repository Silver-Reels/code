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
const nonreel=document.querySelector(".nonreel");                         //reel alts
const inacButton=document.querySelector(".ButtonInac")                    //inactive button

//we determine load progress based on how many images the browser has loaded
allimages.forEach((img)=> img.onload=()=>{return loadingCalc()}); //run loadingCalc() every time 1 image loads

let imgLoaded=0;                          
function loadingCalc(){ //function that sets the text of loading screen progress
  imgLoaded++;          //every time function is invoked (only by 'allimages.forEach' above), adds +1 to imgLoaded
  loadMsg.innerText=
  `${((imgLoaded/allimages.length)*100).toFixed(0)}%`; //sets text to calc of imgLoaded out of total images. eg: 23%. toFixed is amount of decimals
  loadBar.style.width=                                 //same with progress bar graphic
  `${((imgLoaded/allimages.length)*33.4)}vw`;         //these will often NOT reach 100%, as small images sometimes load faster than this JS script, so can't be iterated
}

//once <body> i.e. entire page is fully loaded
document.body.onload= ()=> {loadDiv.classList.add("loadingDivGone");           //loadingscreen goes away
descTextModular.classList.remove("desctextBGone"); //desctext B span swipes in
descTextModular.style.filter="blur(0)";            //desctext B removes blur while swiping in
reel.classList.remove("reelMovingIn");             //moves reel in onload
nonreel.classList.remove("reelMovingIn");
loadDiv.style.filter="blur(0.9vw)";                //add "motion" blur when loaddiv is to move away

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
  descTextModular.classList.add("desctextBGone");          //swipes away description text
  descTextModular.style.filter="blur(0.3vw)";
  reel.classList.add("reelMovingAway");                    //moves reel away
  nonreel.classList.add("reelMovingAway");
  inacButton.classList.remove("ButtonInac");               //moves the navbar button back down
}
)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//IMAGE VIEWER FUNCTIONALITY

const reelImg= Array.from(reel.getElementsByClassName("reelimg")); //needs "reel" const to be defined above
const viewerDivParent = document.querySelector(".viewerDivParent");
const viewer=document.querySelector(".viewer");                    //viewer class, for the image in viewer functionality
const viewertext=document.querySelector(".viewertext");

let lastImgClicked=""; //this is here so the other functions like "hide viewer" can track 'img'

reelImg.forEach((img,i)=>
img.onclick=function(){
    lastImgClicked=img; //letting 'img' be tracked elsewhere, no need to use this const here tho

    //anims for removing clicked thumbnail from view
    img.parentElement.style.left="98vw";img.parentElement.style.zIndex="2";img.parentElement.style.transform="rotate(-5deg)";
    img.parentElement.style.filter="blur(0.9vw)";

    //'src' of <img> in class=viewer is (default empty) grabbed from HTML of image clicked in 'reelimg'.
    //should have a 'vsrc' that can then be displayed by the viewer
    viewer.src="";                 //reset viewer image
    viewer.src=                    //set viewer image by finding the url in parent HTML
    vsrcGrabber(img.parentElement.getElementsByClassName("reelimg")[0].outerHTML); 
    viewertext.innerText=          //grabs reeltitle text and puts it in viewertext
    `FILE #${i+1>9? i+1: "0"+(i+1)}: ${img.parentElement.getElementsByClassName("reeltitle")[0].innerText}`;
    viewer.style.filter="blur(0)"; //for motion blur

    //adds visibility to viewerDivParent (do this last)
    viewerDivParent.classList.add("viewerDivParentVisible");
  }
)



//grabs custom 'vsrc' url from a string, usually an HTML line
//parameter should look like vsrc="url"
function vsrcGrabber(string){  
  let start=string.search(`vsrc="`)+6;
  let end=string.indexOf(`"`,start);
  
  return string.slice(start,end);
  // console.log(array);console.log(`start is ${start},end is ${end}`);
}

//const myString=`<img class="reelimg" src="imagcartel/1Thumb.webp" vsrc="imagcartel/1.png">`
//console.log(vsrcGrabber(myString));

//hide viewer
viewerDivParent.onclick=function(){hideViewer()};
document.onkeydown=function(e){if(e.key=="Escape" && viewerDivParent.className=="viewerDivParent viewerDivParentVisible"){hideViewer()}};


function hideViewer(){viewerDivParent.classList.remove("viewerDivParentVisible");
                      viewer.style.filter="blur(0.9vw)"; //for motion blur
                      lastImgClicked.parentElement.style.left="0"; //animations for the thumbnail
                      lastImgClicked.parentElement.style.filter="";
                      setTimeout(function(){lastImgClicked.parentElement.style.transform=""},150);
                      setTimeout(function(){lastImgClicked.parentElement.style.zIndex=""},500);
}
///////////////////////////////////////////////////////////////////////////////////////

//INKR

if (window.location.pathname==`/INKR.html` || window.location.pathname==`/inkr`){ //only run if we're on the correct HTML page
  console.log(`Activating external INKR`);

  const inkrForm=document.querySelector(".typeForm");
  const counter=document.querySelector(".typeCounter");

  inkrForm.onsubmit=function(e){         
    e.preventDefault();
    const inkrTextField=document.querySelector("input[type=text");

    if (inkrTextField.value.length<=40){
    const iframeDiv=document.getElementsByTagName("iframe")[0];
    const iframeWindow=iframeDiv.contentWindow;
    let charDivs=Array.from(iframeWindow.document.querySelectorAll(".char"));
    let charParent=iframeWindow.document.querySelector(".charParent");
    let charCount= iframeWindow.document.querySelector(".charParent").children;
    let charHeight=50;

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
    const inkrTextField=document.querySelector("input[type=text");
    counter.innerHTML=`<p>${40-inkrTextField.value.length}/40</p>`;
  }

  const typeInput=document.querySelector(".typeInput");
  let focused=false;
  typeInput.onclick=function(){typeInput.style.width=`42vw`;focused=true};
     window.onclick=function(){if (focused==true){focused=false} else {typeInput.style.width=`26vw`}};

}