//TEXT INPUT////////////////////////////////////////////////////////////////////////////////////////////////////
const charParent=document.querySelector(".charParent");
const emHeight=  1505; //this should NOT BE CHANGED from 1505!
let   charHeight=  50; //this can be changed, is in px

//let userInput=`Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest, of most excellent fancy: he hath borne me on his back a thousand times; and now, how abhorred in my imagination it is! My gorge rims at it. Here hung those lips that I have kissed I know not how oft. Where be your gibes now? Your gambols? Your songs? Your flashes of merriment, that were wont to set the table on a roar? Not one now, to mock your own grinning? Quite chap-fallen? Now get you to my lady's chamber, and tell her, let her paint an inch thick, to this favour she must come; make her laugh at that.`;
//let userInput=`Io ho detto, parlando in cuor mio: "Ecco io ho acquistato maggior sapienza di tutti quelli che hanno regnato prima di me in Gerusalemme"; si, il mio cuore ha posseduto molta sapienza e molta scienza. Ed ho applicato il cuore a conoscer la sapienza, e a conoscere la follia e la stoltezza, ed ho riconosciuto che anche questo e un correr dietro al vento. Poiche dov'e molta sapienza v'e molto affanno, e chi accresce la sua scienza accresce il suo dolore. -Ecclesiaste 1:16-18`;
let userInput=`"Ecco io ho acquistato maggior sapienza di tutti quelli che hanno regnato prima di me in Gerusalemme"; si, il mio cuore ha posseduto molta sapienza e molta scienza. Ed ho applicato il cuore a conoscer la sapienza, e a conoscere la follia e la stoltezza, ed ho riconosciuto che anche ...`;

//MAKING THE MAPS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const charOf=new Map([
  ["a_upper","A"],["b_upper","B"],["c_upper","C"],["d_upper","D"],["e_upper","E"],["f_upper","F"],["g_upper","G"],
  ["h_upper","H"],["i_upper","I"],["j_upper","J"],["k_upper","K"],["l_upper","L"],["m_upper","M"],["n_upper","N"],
  ["o_upper","O"],["p_upper","P"],["q_upper","Q"],["r_upper","R"],["s_upper","S"],["t_upper","T"],["u_upper","U"],
  ["v_upper","V"],["w_upper","W"],["x_upper","X"],["y_upper","Y"],["z_upper","Z"],["a_lower","a"],["b_lower","b"],
  ["c_lower","c"],["d_lower","d"],["e_lower","e"],["f_lower","f"],["g_lower","g"],["h_lower","h"],["i_lower","i"],
  ["j_lower","j"],["k_lower","k"],["l_lower","l"],["m_lower","m"],["n_lower","n"],["o_lower","o"],["p_lower","p"],
  ["q_lower","q"],["r_lower","r"],["s_lower","s"],["t_lower","t"],["u_lower","u"],["v_lower","v"],["w_lower","w"],
  ["x_lower","x"],["y_lower","y"],["z_lower","z"],["zero",   "0"],["one",    "1"],["two",    "2"],["three",  "3"],
  ["four",   "4"],["five",   "5"],["six",    "6"],["seven",  "7"],["eight",  "8"],["nine",   "9"],["excl",   "!"],
  ["quote",  `"`],["amp",    "&"],["apos",  "'"],["par_open","("],["par_close",")"],["comma", ","],["dash",   "-"],
  ["dot",    `.`],["slash",  "/"],["colon",  ":"],["semi",   ";"],["quest",  "?"],["space",  " "],
]);
const nameOf=new Map([
  ["A","a_upper"],["B","b_upper"],["C","c_upper"],["D","d_upper"],["E","e_upper"],["F","f_upper"],["G","g_upper"],
  ["H","h_upper"],["I","i_upper"],["J","j_upper"],["K","k_upper"],["L","l_upper"],["M","m_upper"],["N","n_upper"],
  ["O","o_upper"],["P","p_upper"],["Q","q_upper"],["R","r_upper"],["S","s_upper"],["T","t_upper"],["U","u_upper"],
  ["V","v_upper"],["W","w_upper"],["X","x_upper"],["Y","y_upper"],["Z","z_upper"],["a","a_lower"],["b","b_lower"],
  ["c","c_lower"],["d","d_lower"],["e","e_lower"],["f","f_lower"],["g","g_lower"],["h","h_lower"],["i","i_lower"],
  ["j","j_lower"],["k","k_lower"],["l","l_lower"],["m","m_lower"],["n","n_lower"],["o","o_lower"],["p","p_lower"],
  ["q","q_lower"],["r","r_lower"],["s","s_lower"],["t","t_lower"],["u","u_lower"],["v","v_lower"],["w","w_lower"],
  ["x","x_lower"],["y","y_lower"],["z","z_lower"],["0",   "zero"],["1",    "one"],["2",    "two"],["3",  "three"],
  ["4",   "four"],["5",   "five"],["6",    "six"],["7",  "seven"],["8",  "eight"],["9",   "nine"],["!",   "excl"],
  [`"`,  "quote"],["&",    "amp"],["'",  "apos"],["(","par_open"],[")","par_close"],[",","comma"],["-",   "dash"],
  [`.`,    "dot"],["/",  "slash"],[":",  "colon"],[";",   "semi"],["?",  "quest"],[" ",  "space"],
]);

//use: charOf.get("a_upper") --> "A"
//use: nameOf.get("A")       --> "a_upper"        (its more performant to have both maps)
/////////////////////////////////////////////////////////////////////////////////////////

let hVar=charHeight/emHeight;

const charWidth=new Map([
  ["A",hVar*1216],["B",hVar*1126],["C",hVar*1030],["D",hVar*1042],["E",hVar*1117],["F",hVar*1145],["G",hVar* 981],
  ["H",hVar*1360],["I",hVar*1187],["J",hVar*1508],["K",hVar*1623],["L",hVar*1433],["M",hVar*1654],["N",hVar*1281],
  ["O",hVar*1013],["P",hVar*1130],["Q",hVar* 969],["R",hVar*1238],["S",hVar*1220],["T",hVar*1427],["U",hVar*1157],
  ["V",hVar*1341],["W",hVar*1509],["X",hVar*1300],["Y",hVar*1216],["Z",hVar*1389],["a",hVar* 580],["b",hVar* 648],
  ["c",hVar* 448],["d",hVar* 889],["e",hVar* 490],["f",hVar* 894],["g",hVar* 910],["h",hVar* 722],["i",hVar* 527],
  ["j",hVar*1087],["k",hVar* 726],["l",hVar* 738],["m",hVar* 828],["n",hVar* 637],["o",hVar* 442],["p",hVar* 802],
  ["q",hVar* 636],["r",hVar* 630],["s",hVar* 432],["t",hVar* 606],["u",hVar* 629],["v",hVar* 579],["w",hVar* 862],
  ["x",hVar* 669],["y",hVar* 949],["z",hVar* 900],["0",hVar* 733],["1",hVar* 649],["2",hVar* 856],["3",hVar* 835],
  ["4",hVar* 744],["5",hVar* 889],["6",hVar* 642],["7",hVar* 720],["8",hVar* 842],["9",hVar* 638],["!",hVar* 694],
  [`"`,hVar* 296],["&",hVar* 982],["'",hVar* 176],["(",hVar* 797],[")",hVar* 733],[",",hVar* 215],["-",hVar* 298],
  [`.`,hVar* 122],["/",hVar* 645],[":",hVar* 294],[";",hVar* 377],["?",hVar* 672],[" ",hVar* 300],
]);
const advWidth=new Map([
  ["A",hVar* 975],["B",hVar*1017],["C",hVar* 719],["D",hVar*1017],["E",hVar* 853],["F",hVar* 877],["G",hVar* 899],
  ["H",hVar* 849],["I",hVar* 786],["J",hVar* 745],["K",hVar*1055],["L",hVar*1174],["M",hVar*1289],["N",hVar* 868],
  ["O",hVar* 960],["P",hVar* 906],["Q",hVar* 920],["R",hVar* 899],["S",hVar*1075],["T",hVar* 642],["U",hVar* 893],
  ["V",hVar* 700],["W",hVar*1171],["X",hVar* 725],["Y",hVar* 802],["Z",hVar* 787],["a",hVar* 505],["b",hVar* 438],
  ["c",hVar* 383],["d",hVar* 528],["e",hVar* 420],["f",hVar* 357],["g",hVar* 508],["h",hVar* 516],["i",hVar* 259],
  ["j",hVar* 267],["k",hVar* 499],["l",hVar* 407],["m",hVar* 695],["n",hVar* 500],["o",hVar* 467],["p",hVar* 502],
  ["q",hVar* 528],["r",hVar* 397],["s",hVar* 374],["t",hVar* 301],["u",hVar* 532],["v",hVar* 444],["w",hVar* 727],
  ["x",hVar* 522],["y",hVar* 532],["z",hVar* 527],["0",hVar* 647],["1",hVar* 400],["2",hVar* 625],["3",hVar* 695],
  ["4",hVar* 686],["5",hVar* 585],["6",hVar* 572],["7",hVar* 543],["8",hVar* 621],["9",hVar* 573],["!",hVar* 601],
  [`"`,hVar* 377],["&",hVar* 897],["'",hVar* 257],["(",hVar* 451],[")",hVar* 638],[",",hVar* 268],["-",hVar* 386],
  [`.`,hVar* 276],["/",hVar* 491],[":",hVar* 401],[";",hVar* 399],["?",hVar* 657],[" ",hVar* 300],
]);
const lbWidth=new Map([
  ["A",hVar*  66],["B",hVar* 122],["C",hVar* 118],["D",hVar*  73],["E",hVar*  69],["F",hVar* 123],["G",hVar* 119],
  ["H",hVar*  69],["I",hVar*  14],["J",hVar*-232],["K",hVar*   3],["L",hVar*  62],["M",hVar*  61],["N",hVar*  59],
  ["O",hVar* 124],["P",hVar*  73],["Q",hVar* 129],["R",hVar*  68],["S",hVar* 124],["T",hVar* 125],["U",hVar* 123],
  ["V",hVar*  74],["W",hVar*  72],["X",hVar* 103],["Y",hVar* 124],["Z",hVar*-260],["a",hVar*  30],["b",hVar*  50],
  ["c",hVar*  60],["d",hVar*  30],["e",hVar*  50],["f",hVar*-217],["g",hVar*-287],["h",hVar* -19],["i",hVar*   6],
  ["j",hVar*-582],["k",hVar* -19],["l",hVar*  50],["m",hVar* -19],["n",hVar* -30],["o",hVar*  60],["p",hVar*-250],
  ["q",hVar*   7],["r",hVar*-102],["s",hVar*  18],["t",hVar*  20],["u",hVar*  30],["v",hVar*  34],["w",hVar*  34],
  ["x",hVar*  20],["y",hVar*-279],["z",hVar*-270],["0",hVar* 122],["1",hVar*  32],["2",hVar*  21],["3",hVar*  40],
  ["4",hVar* 148],["5",hVar*  44],["6",hVar*  96],["7",hVar*  85],["8",hVar*  89],["9",hVar* 142],["!",hVar*  85],
  [`"`,hVar* 274],["&",hVar* 102],["'",hVar* 274],["(",hVar* 139],[")",hVar* -34],[",",hVar*  15],["-",hVar*  56],
  [`.`,hVar*  85],["/",hVar*  48],[":",hVar*  85],[";",hVar*  15],["?",hVar* 117],[" ",hVar*   0],
]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//spawns the appropriate count of SVG segments for each char as HTML/////////////////////
function partSpawn(char){
  let segments;
  switch (char){
    case "A" : segments=5;break; case "a" : segments=6;break; case "0" : segments=2;break;
    case "B" : segments=6;break; case "b" : segments=4;break; case "1" : segments=2;break;
    case "C" : segments=4;break; case "c" : segments=3;break; case "2" : segments=4;break;
    case "D" : segments=4;break; case "d" : segments=6;break; case "3" : segments=5;break;
    case "E" : segments=6;break; case "e" : segments=3;break; case "4" : segments=3;break;
    case "F" : segments=4;break; case "f" : segments=4;break; case "5" : segments=4;break;
    case "G" : segments=4;break; case "g" : segments=6;break; case "6" : segments=3;break;
    case "H" : segments=5;break; case "h" : segments=4;break; case "7" : segments=2;break;
    case "I" : segments=4;break; case "i" : segments=4;break; case "8" : segments=3;break;
    case "J" : segments=4;break; case "j" : segments=4;break; case "9" : segments=3;break;
    case "K" : segments=6;break; case "k" : segments=5;break; case "!" : segments=3;break;
    case "L" : segments=4;break; case "l" : segments=3;break; case `"` : segments=2;break;
    case "M" : segments=6;break; case "m" : segments=7;break; case "&" : segments=7;break;
    case "N" : segments=5;break; case "n" : segments=5;break; case "'" : segments=1;break;
    case "O" : segments=4;break; case "o" : segments=3;break; case "(" : segments=1;break;
    case "P" : segments=3;break; case "p" : segments=4;break; case ")" : segments=1;break;
    case "Q" : segments=4;break; case "q" : segments=6;break; case "," : segments=1;break;
    case "R" : segments=4;break; case "r" : segments=4;break; case "-" : segments=1;break;
    case "S" : segments=4;break; case "s" : segments=3;break; case "." : segments=1;break;
    case "T" : segments=3;break; case "t" : segments=4;break; case "/" : segments=1;break;
    case "U" : segments=5;break; case "u" : segments=5;break; case ":" : segments=2;break;
    case "V" : segments=3;break; case "v" : segments=5;break; case ";" : segments=2;break;
    case "W" : segments=5;break; case "w" : segments=6;break; case "?" : segments=5;break;
    case "X" : segments=4;break; case "x" : segments=4;break; case " " : segments=0;break;
    case "Y" : segments=4;break; case "y" : segments=5;break;
    case "Z" : segments=5;break; case "z" : segments=5;break;
  };
  let partClass=nameOf.get(char);

  if (segments===0){return `<div class="char ${partClass}"></div>`}; //if space
  if (typeof segments===undefined){return};                //if unsupported char

  let i=1; let stringMiddle=""; //normal behavior
  while (i<=segments){
    stringMiddle+=`<img class="${partClass}_${i}" src="/typing/${partClass}_${i}.svg">`; //PATH
    i++;
  };
  return `<div class="char ${partClass}">${stringMiddle}</div>`;
}
//partSpawn(char) will return STRING like this for each char:
//
// <div class="char a_lower">
//  <img class="a_lower_1" src="/typing/a_lower_1.svg">
//  <img class="a_lower_2" src="/typing/a_lower_2.svg">
//  <img class="a_lower_3" src="/typing/a_lower_3.svg">
//  <img class="a_lower_4" src="/typing/a_lower_4.svg">
//  <img class="a_lower_5" src="/typing/a_lower_5.svg">
//  <img class="a_lower_6" src="/typing/a_lower_6.svg">
// </div>
//
// (segment count depents on char)
//////////////////////////////////////////////////////////////////////////////////////////

//HTML POPULATE///////////////////////////////

function populateHTML(string){
  let output=``;
  for (let i=0;i<string.length;i++){
    output+=partSpawn(string[i]);
  };
  return output;
};

charParent.innerHTML=populateHTML(userInput);
//////////////////////////////////////////////

//AFTER POPULATE, SET WIDTH & HEIGHT OF DIVS///////////////////////////////////////////

//sets height/////////////////////////////////////////////////
const charDivs=Array.from(document.querySelectorAll(".char"));

charDivs.forEach(x=>x.style.height=`${charHeight*0.6}px`);
//currently at 0.5*charHeight
//does not determine char size
//////////////////////////////////////////////////////////////

//sets width//////////////////////////////////////////////////////////////////////////////////////

function setWidth(node,char){
  Array.from(node).forEach((element)=>element.style.width=`${charWidth.get(char)}px`);
}

function setWidthAll(){
const a_upper=document.querySelectorAll(".a_upper");    setWidth(a_upper,"A");
const b_upper=document.querySelectorAll(".b_upper");    setWidth(b_upper,"B");
const c_upper=document.querySelectorAll(".c_upper");    setWidth(c_upper,"C");
const d_upper=document.querySelectorAll(".d_upper");    setWidth(d_upper,"D");
const e_upper=document.querySelectorAll(".e_upper");    setWidth(e_upper,"E");
const f_upper=document.querySelectorAll(".f_upper");    setWidth(f_upper,"F");
const g_upper=document.querySelectorAll(".g_upper");    setWidth(g_upper,"G");
const h_upper=document.querySelectorAll(".h_upper");    setWidth(h_upper,"H");
const i_upper=document.querySelectorAll(".i_upper");    setWidth(i_upper,"I");
const j_upper=document.querySelectorAll(".j_upper");    setWidth(j_upper,"J");
const k_upper=document.querySelectorAll(".k_upper");    setWidth(k_upper,"K");
const l_upper=document.querySelectorAll(".l_upper");    setWidth(l_upper,"L");
const m_upper=document.querySelectorAll(".m_upper");    setWidth(m_upper,"M");
const n_upper=document.querySelectorAll(".n_upper");    setWidth(n_upper,"N");
const o_upper=document.querySelectorAll(".o_upper");    setWidth(o_upper,"O");
const p_upper=document.querySelectorAll(".p_upper");    setWidth(p_upper,"P");
const q_upper=document.querySelectorAll(".q_upper");    setWidth(q_upper,"Q");
const r_upper=document.querySelectorAll(".r_upper");    setWidth(r_upper,"R");
const s_upper=document.querySelectorAll(".s_upper");    setWidth(s_upper,"S");
const t_upper=document.querySelectorAll(".t_upper");    setWidth(t_upper,"T");
const u_upper=document.querySelectorAll(".u_upper");    setWidth(u_upper,"U");
const v_upper=document.querySelectorAll(".v_upper");    setWidth(v_upper,"V");
const w_upper=document.querySelectorAll(".w_upper");    setWidth(w_upper,"W");
const x_upper=document.querySelectorAll(".x_upper");    setWidth(x_upper,"X");
const y_upper=document.querySelectorAll(".y_upper");    setWidth(y_upper,"Y");
const z_upper=document.querySelectorAll(".z_upper");    setWidth(z_upper,"Z");

const a_lower=document.querySelectorAll(".a_lower");    setWidth(a_lower,"a");
const b_lower=document.querySelectorAll(".b_lower");    setWidth(b_lower,"b");
const c_lower=document.querySelectorAll(".c_lower");    setWidth(c_lower,"c");
const d_lower=document.querySelectorAll(".d_lower");    setWidth(d_lower,"d");
const e_lower=document.querySelectorAll(".e_lower");    setWidth(e_lower,"e");
const f_lower=document.querySelectorAll(".f_lower");    setWidth(f_lower,"f");
const g_lower=document.querySelectorAll(".g_lower");    setWidth(g_lower,"g");
const h_lower=document.querySelectorAll(".h_lower");    setWidth(h_lower,"h");
const i_lower=document.querySelectorAll(".i_lower");    setWidth(i_lower,"i");
const j_lower=document.querySelectorAll(".j_lower");    setWidth(j_lower,"j");
const k_lower=document.querySelectorAll(".k_lower");    setWidth(k_lower,"k");
const l_lower=document.querySelectorAll(".l_lower");    setWidth(l_lower,"l");
const m_lower=document.querySelectorAll(".m_lower");    setWidth(m_lower,"m");
const n_lower=document.querySelectorAll(".n_lower");    setWidth(n_lower,"n");
const o_lower=document.querySelectorAll(".o_lower");    setWidth(o_lower,"o");
const p_lower=document.querySelectorAll(".p_lower");    setWidth(p_lower,"p");
const q_lower=document.querySelectorAll(".q_lower");    setWidth(q_lower,"q");
const r_lower=document.querySelectorAll(".r_lower");    setWidth(r_lower,"r");
const s_lower=document.querySelectorAll(".s_lower");    setWidth(s_lower,"s");
const t_lower=document.querySelectorAll(".t_lower");    setWidth(t_lower,"t");
const u_lower=document.querySelectorAll(".u_lower");    setWidth(u_lower,"u");
const v_lower=document.querySelectorAll(".v_lower");    setWidth(v_lower,"v");
const w_lower=document.querySelectorAll(".w_lower");    setWidth(w_lower,"w");
const x_lower=document.querySelectorAll(".x_lower");    setWidth(x_lower,"x");
const y_lower=document.querySelectorAll(".y_lower");    setWidth(y_lower,"y");
const z_lower=document.querySelectorAll(".z_lower");    setWidth(z_lower,"z");

const zero=document.querySelectorAll   (".zero");       setWidth(zero,"0");
const one=document.querySelectorAll    (".one");        setWidth(one,"1");
const two=document.querySelectorAll    (".two");        setWidth(two,"2");
const three=document.querySelectorAll  (".three");      setWidth(three,"3");
const four=document.querySelectorAll   (".four");       setWidth(four,"4");
const five=document.querySelectorAll   (".five");       setWidth(five,"5");
const six=document.querySelectorAll    (".six");        setWidth(six,"6");
const seven=document.querySelectorAll  (".seven");      setWidth(seven,"7");
const eight=document.querySelectorAll  (".eight");      setWidth(eight,"8");
const nine=document.querySelectorAll   (".nine");       setWidth(nine,"9");
const excl=document.querySelectorAll   (".excl");       setWidth(excl,"!");
const quote=document.querySelectorAll  (".quote");      setWidth(quote,`"`);
const amp=document.querySelectorAll    (".amp");        setWidth(amp,"&");
const apos=document.querySelectorAll   (".apos");       setWidth(apos,"'");
const par_open=document.querySelectorAll(".par_open");  setWidth(par_open,"(");
const par_close=document.querySelectorAll(".par_close");setWidth(par_close,")");
const comma=document.querySelectorAll  (".comma");      setWidth(comma,",");
const dash=document.querySelectorAll   (".dash");       setWidth(dash,"-");
const dot=document.querySelectorAll    (".dot");        setWidth(dot,".");
const slash=document.querySelectorAll  (".slash");      setWidth(slash,"/");
const colon=document.querySelectorAll  (".colon");      setWidth(colon,":");
const semi=document.querySelectorAll   (".semi");       setWidth(semi,";");
const quest=document.querySelectorAll  (".quest");      setWidth(quest,"?");
const space=document.querySelectorAll  (".space");      setWidth(space," ");
}
setWidthAll();
//////////////////////////////////////////////////////////////////////////////////////////////////

//AFTER POPULATE & GIVE WIDTH, SET TAIL (CSS 'style.right' OFFSET, ie spaces between each character)////////////////////////////////////////////////////////////////////////////

function setTail(array){
  let tailSum=0;
  
  let widthTracker=0; //after flex makes a new line, need to track it & need to set 'style.right' back to 0
  
  //let maxW=Array.from(window.getComputedStyle(charParent).maxWidth);maxW.pop();maxW.pop();maxW=maxW.join("");
  let maxW=document.body.clientWidth*0.98; //0.98 because CSS .charParent max-width=98vw;
  //maxW='max-width' of the flex div, after which it automatically generates new line

  let currentDiv={};let currentClass=``;let currentChar=``;
  let W=0;let AW=0;let LW=0;let ownTail=0;

  for (let i=0;i<array.length;i++){
    currentDiv=   array[i];
    currentClass= currentDiv.classList[1];  //this is a STRING! like "a_upper"
    currentChar=  charOf.get(currentClass); //find char of class
    //console.log(`tailSum=${tailSum},i=${i}`);

    W= charWidth.get(currentChar);
    AW=  advWidth.get(currentChar);
    LW=   lbWidth.get(currentChar);
    
    widthTracker+=W;

    if (widthTracker>maxW){tailSum=0;widthTracker=W;};//account for new LINES by resetting tailSum
    
    ownTail= W-AW;                    //find ownTail of char
    if (LW<0){ownTail+= LW;tailSum+=-LW}; //if LB is negative, need to account for it
    if (LW>0){ownTail+=-LW};

    //if (ownTail>W){console.log(`"${currentChar}" ownTail=${ownTail} greater than width=${W}!`)}
    //kerning

    if (ownTail<0){ownTail=0;/*console.log(`"${currentChar}" ownTail was below 0! turned to ${ownTail}`)*/};
    //kerning for ownTail below 0
     
    currentDiv.style.right=`${tailSum}px`;  //apply final tail from tailSum
    if (currentChar==="'"){currentDiv.style.right=`${tailSum-LW}px`}; //edge case for character 'apos'
    if (currentChar===`"`){currentDiv.style.right=`${tailSum-LW}px`};

    tailSum+=ownTail; //add ownTail to tailSum for next calc
  };
};
const charCount=charParent.children;
setTail(charCount); //initializing tails
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ANIMATING THE HTML AFTER DOING EVERYTHING ELSE/////////////////////////////////////////////////////////////////
//ANIMATION TIMINGS FOR EACH SEGMENT//////////////////////////////////////////////////////////////////////
let animationSpeed=1; //change this to draw segments faster. does not work accurately but w/e

async function animateHTML(parent){
  array=Array.from(parent.children);
  let time=0; //initializes time for animDelay() to 0
  let fraction=(1/animationSpeed);

  function animDelay() {return new Promise(resolve => {setTimeout( () => {resolve(1)},time*fraction)}) }

  for (let child of array){
    for(i=0;i<=child.children.length-1;i++){
      await animDelay();
      let read=child.children[i].classList[0];
      read+=`_draw`;
      child.children[i].classList.add(read);
      //console.log(`Added ${read}.`);
      
      //SYNCING ANIMATION
      //finding animation length and setting 'time' to it. 'time' is used for 'await animDelay()', which uses 'animDelay()'
      let element=document.querySelector(`.${child.children[i].classList[1]}`); //query selects latest '_draw' CSS class
      let timeString=Array.from(window.getComputedStyle(element).getPropertyValue("animation-duration")); //gets its animation length
      timeString.pop();//removes 's' from time
      time=timeString.join("")*1000; //converts to milliseconds
    };
  };
};
animateHTML(charParent);


//NEED TO DO?
//implement \n
//tweak some animation segment lengths

//ORDER OF EXECUTIONS:

// charParent.innerHTML=populateHTML(userInput);
// charDivs.forEach(x=>x.style.height=`${charHeight*0.6}px`);
// setWidthAll();
// setTail(charCount);
// animateHTML(charParent);
