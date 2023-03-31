//TEXT INPUT//////////////////////////////////////////////
const charParent=document.querySelector(".charParent");
const emHeight=1505; //this should NOT BE CHANGED from 1505!
let charHeight= 50; //this can be changed, is in px
//let textToDraw=`Alas, poor Yorick! I knew him, Horatio: a fellow of infinite jest, of most excellent fancy: he hath borne me on his back a thousand times; and now, how abhorred in my imagination it is! My gorge rims at it. Here hung those lips that I have kissed I know not how oft. Where be your gibes now? Your gambols? Your songs? Your flashes of merriment, that were wont to set the table on a roar? Not one now, to mock your own grinning? Quite chap-fallen? Now get you to my lady's chamber, and tell her, let her paint an inch thick, to this favour she must come; make her laugh at that.`;
let textToDraw=`Io ho detto, parlando in cuor mio: "Ecco io ho acquistato maggior sapienza di tutti quelli che hanno regnato prima di me in Gerusalemme"; si, il mio cuore ha posseduto molta sapienza e molta scienza. Ed ho applicato il cuore a conoscer la sapienza, e a conoscere la follia e la stoltezza, ed ho riconosciuto che anche questo e un correr dietro al vento. Poiche dov'e molta sapienza v'e molto affanno, e chi accresce la sua scienza accresce il suo dolore. -Ecclesiaste 1:16-18`;
//let textToDraw=`The bad programmer writes messy spaghetti code!`;


//////////////////////////////////////////////////////////

//MAKING THE MAPS///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//function to reverse key-value of CharOf//////////////////////////////////////
function classOf(char){
  return (Array.from(charOf.keys())[Array.from(charOf.values()).indexOf(char)])
}
//use: charOf.get("a_upper") --> "A"
//use: classOf("A")  --> "a_upper"
///////////////////////////////////////////////////////////////////////////////
const charOf=new Map();

charOf.set("a_upper","A");charOf.set("a_lower","a");charOf.set("zero","0");
charOf.set("b_upper","B");charOf.set("b_lower","b");charOf.set("one","1");
charOf.set("c_upper","C");charOf.set("c_lower","c");charOf.set("two","2");
charOf.set("d_upper","D");charOf.set("d_lower","d");charOf.set("three","3");
charOf.set("e_upper","E");charOf.set("e_lower","e");charOf.set("four","4");
charOf.set("f_upper","F");charOf.set("f_lower","f");charOf.set("five","5");
charOf.set("g_upper","G");charOf.set("g_lower","g");charOf.set("six","6");
charOf.set("h_upper","H");charOf.set("h_lower","h");charOf.set("seven","7");
charOf.set("i_upper","I");charOf.set("i_lower","i");charOf.set("eight","8");
charOf.set("j_upper","J");charOf.set("j_lower","j");charOf.set("nine","9");
charOf.set("k_upper","K");charOf.set("k_lower","k");charOf.set("excl","!");
charOf.set("l_upper","L");charOf.set("l_lower","l");charOf.set("quote",`"`);
charOf.set("m_upper","M");charOf.set("m_lower","m");charOf.set("amp","&");
charOf.set("n_upper","N");charOf.set("n_lower","n");charOf.set("apos","'");
charOf.set("o_upper","O");charOf.set("o_lower","o");charOf.set("par_open","(");
charOf.set("p_upper","P");charOf.set("p_lower","p");charOf.set("par_close",")");
charOf.set("q_upper","Q");charOf.set("q_lower","q");charOf.set("comma",",");
charOf.set("r_upper","R");charOf.set("r_lower","r");charOf.set("dash","-");
charOf.set("s_upper","S");charOf.set("s_lower","s");charOf.set("dot",".");
charOf.set("t_upper","T");charOf.set("t_lower","t");charOf.set("slash","/");
charOf.set("u_upper","U");charOf.set("u_lower","u");charOf.set("colon",":");
charOf.set("v_upper","V");charOf.set("v_lower","v");charOf.set("semi",";");
charOf.set("w_upper","W");charOf.set("w_lower","w");charOf.set("quest","?");
charOf.set("x_upper","X");charOf.set("x_lower","x");charOf.set("space"," ");
charOf.set("y_upper","Y");charOf.set("y_lower","y");
charOf.set("z_upper","Z");charOf.set("z_lower","z");


const charWidth=new Map();                      const advWidth=new Map();                     const lbWidth=new Map();
//get with charWidth.get("A")                   get with advWidth.get("A")                    get with lbWidth.get("A")
charWidth.set('A',(charHeight*1216/emHeight));  advWidth.set('A',(charHeight* 975/emHeight)); lbWidth.set('A',(charHeight*  66/emHeight));
charWidth.set('B',(charHeight*1126/emHeight));  advWidth.set('B',(charHeight*1017/emHeight)); lbWidth.set('B',(charHeight* 122/emHeight));
charWidth.set('C',(charHeight*1030/emHeight));  advWidth.set('C',(charHeight* 719/emHeight)); lbWidth.set('C',(charHeight* 118/emHeight));
charWidth.set('D',(charHeight*1042/emHeight));  advWidth.set('D',(charHeight*1017/emHeight)); lbWidth.set('D',(charHeight*  73/emHeight));
charWidth.set('E',(charHeight*1117/emHeight));  advWidth.set('E',(charHeight* 835/emHeight)); lbWidth.set('E',(charHeight*  69/emHeight));
charWidth.set('F',(charHeight*1145/emHeight));  advWidth.set('F',(charHeight* 877/emHeight)); lbWidth.set('F',(charHeight* 123/emHeight));
charWidth.set('G',(charHeight* 981/emHeight));  advWidth.set('G',(charHeight* 899/emHeight)); lbWidth.set('G',(charHeight* 119/emHeight));
charWidth.set('H',(charHeight*1360/emHeight));  advWidth.set('H',(charHeight* 849/emHeight)); lbWidth.set('H',(charHeight*  69/emHeight));
charWidth.set('I',(charHeight*1187/emHeight));  advWidth.set('I',(charHeight* 786/emHeight)); lbWidth.set('I',(charHeight*  14/emHeight));
charWidth.set('J',(charHeight*1508/emHeight));  advWidth.set('J',(charHeight* 745/emHeight)); lbWidth.set('J',(charHeight*-232/emHeight));
charWidth.set('K',(charHeight*1623/emHeight));  advWidth.set('K',(charHeight*1055/emHeight)); lbWidth.set('K',(charHeight*   3/emHeight));
charWidth.set('L',(charHeight*1433/emHeight));  advWidth.set('L',(charHeight*1174/emHeight)); lbWidth.set('L',(charHeight*  62/emHeight));
charWidth.set('M',(charHeight*1654/emHeight));  advWidth.set('M',(charHeight*1289/emHeight)); lbWidth.set('M',(charHeight*  61/emHeight));
charWidth.set('N',(charHeight*1281/emHeight));  advWidth.set('N',(charHeight* 868/emHeight)); lbWidth.set('N',(charHeight*  59/emHeight));
charWidth.set('O',(charHeight*1013/emHeight));  advWidth.set('O',(charHeight* 960/emHeight)); lbWidth.set('O',(charHeight* 124/emHeight));
charWidth.set('P',(charHeight*1130/emHeight));  advWidth.set('P',(charHeight* 906/emHeight)); lbWidth.set('P',(charHeight*  73/emHeight));
charWidth.set('Q',(charHeight* 969/emHeight));  advWidth.set('Q',(charHeight* 920/emHeight)); lbWidth.set('Q',(charHeight* 129/emHeight));
charWidth.set('R',(charHeight*1238/emHeight));  advWidth.set('R',(charHeight* 899/emHeight)); lbWidth.set('R',(charHeight*  68/emHeight));
charWidth.set('S',(charHeight*1220/emHeight));  advWidth.set('S',(charHeight*1075/emHeight)); lbWidth.set('S',(charHeight* 124/emHeight));
charWidth.set('T',(charHeight*1427/emHeight));  advWidth.set('T',(charHeight* 642/emHeight)); lbWidth.set('T',(charHeight* 125/emHeight));
charWidth.set('U',(charHeight*1157/emHeight));  advWidth.set('U',(charHeight* 893/emHeight)); lbWidth.set('U',(charHeight* 123/emHeight));
charWidth.set('V',(charHeight*1341/emHeight));  advWidth.set('V',(charHeight* 700/emHeight)); lbWidth.set('V',(charHeight*  74/emHeight));
charWidth.set('W',(charHeight*1509/emHeight));  advWidth.set('W',(charHeight*1171/emHeight)); lbWidth.set('W',(charHeight*  72/emHeight));
charWidth.set('X',(charHeight*1300/emHeight));  advWidth.set('X',(charHeight* 725/emHeight)); lbWidth.set('X',(charHeight* 103/emHeight));
charWidth.set('Y',(charHeight*1216/emHeight));  advWidth.set('Y',(charHeight* 802/emHeight)); lbWidth.set('Y',(charHeight* 124/emHeight));
charWidth.set('Z',(charHeight*1389/emHeight));  advWidth.set('Z',(charHeight* 787/emHeight)); lbWidth.set('Z',(charHeight*-260/emHeight));

charWidth.set('a',(charHeight* 580/emHeight));  advWidth.set('a',(charHeight* 505/emHeight)); lbWidth.set('a',(charHeight*  30/emHeight));
charWidth.set('b',(charHeight* 648/emHeight));  advWidth.set('b',(charHeight* 438/emHeight)); lbWidth.set('b',(charHeight*  50/emHeight));
charWidth.set('c',(charHeight* 448/emHeight));  advWidth.set('c',(charHeight* 383/emHeight)); lbWidth.set('c',(charHeight*  60/emHeight));
charWidth.set('d',(charHeight* 889/emHeight));  advWidth.set('d',(charHeight* 528/emHeight)); lbWidth.set('d',(charHeight*  30/emHeight));
charWidth.set('e',(charHeight* 490/emHeight));  advWidth.set('e',(charHeight* 420/emHeight)); lbWidth.set('e',(charHeight*  50/emHeight));
charWidth.set('f',(charHeight* 894/emHeight));  advWidth.set('f',(charHeight* 357/emHeight)); lbWidth.set('f',(charHeight*-217/emHeight));
charWidth.set('g',(charHeight* 910/emHeight));  advWidth.set('g',(charHeight* 508/emHeight)); lbWidth.set('g',(charHeight*-287/emHeight));
charWidth.set('h',(charHeight* 722/emHeight));  advWidth.set('h',(charHeight* 506/emHeight)); lbWidth.set('h',(charHeight* -19/emHeight));
charWidth.set('i',(charHeight* 527/emHeight));  advWidth.set('i',(charHeight* 259/emHeight)); lbWidth.set('i',(charHeight*   6/emHeight));
charWidth.set('j',(charHeight*1087/emHeight));  advWidth.set('j',(charHeight* 267/emHeight)); lbWidth.set('j',(charHeight*-582/emHeight));
charWidth.set('k',(charHeight* 726/emHeight));  advWidth.set('k',(charHeight* 499/emHeight)); lbWidth.set('k',(charHeight* -19/emHeight));
charWidth.set('l',(charHeight* 738/emHeight));  advWidth.set('l',(charHeight* 407/emHeight)); lbWidth.set('l',(charHeight*  50/emHeight));
charWidth.set('m',(charHeight* 828/emHeight));  advWidth.set('m',(charHeight* 695/emHeight)); lbWidth.set('m',(charHeight* -19/emHeight));
charWidth.set('n',(charHeight* 637/emHeight));  advWidth.set('n',(charHeight* 500/emHeight)); lbWidth.set('n',(charHeight* -30/emHeight));
charWidth.set('o',(charHeight* 442/emHeight));  advWidth.set('o',(charHeight* 467/emHeight)); lbWidth.set('o',(charHeight*  60/emHeight));
charWidth.set('p',(charHeight* 802/emHeight));  advWidth.set('p',(charHeight* 502/emHeight)); lbWidth.set('p',(charHeight*-250/emHeight));
charWidth.set('q',(charHeight* 636/emHeight));  advWidth.set('q',(charHeight* 528/emHeight)); lbWidth.set('q',(charHeight*   7/emHeight));
charWidth.set('r',(charHeight* 630/emHeight));  advWidth.set('r',(charHeight* 397/emHeight)); lbWidth.set('r',(charHeight*-102/emHeight));
charWidth.set('s',(charHeight* 432/emHeight));  advWidth.set('s',(charHeight* 374/emHeight)); lbWidth.set('s',(charHeight*  18/emHeight));
charWidth.set('t',(charHeight* 606/emHeight));  advWidth.set('t',(charHeight* 301/emHeight)); lbWidth.set('t',(charHeight*  20/emHeight));
charWidth.set('u',(charHeight* 629/emHeight));  advWidth.set('u',(charHeight* 532/emHeight)); lbWidth.set('u',(charHeight*  30/emHeight));
charWidth.set('v',(charHeight* 579/emHeight));  advWidth.set('v',(charHeight* 444/emHeight)); lbWidth.set('v',(charHeight*  34/emHeight));
charWidth.set('w',(charHeight* 862/emHeight));  advWidth.set('w',(charHeight* 727/emHeight)); lbWidth.set('w',(charHeight*  34/emHeight));
charWidth.set('x',(charHeight* 669/emHeight));  advWidth.set('x',(charHeight* 522/emHeight)); lbWidth.set('x',(charHeight*  20/emHeight));
charWidth.set('y',(charHeight* 949/emHeight));  advWidth.set('y',(charHeight* 532/emHeight)); lbWidth.set('y',(charHeight*-279/emHeight));
charWidth.set('z',(charHeight* 900/emHeight));  advWidth.set('z',(charHeight* 527/emHeight)); lbWidth.set('z',(charHeight*-270/emHeight));

charWidth.set('0',(charHeight* 733/emHeight));  advWidth.set('0',(charHeight* 647/emHeight)); lbWidth.set('0',(charHeight* 122/emHeight));
charWidth.set('1',(charHeight* 649/emHeight));  advWidth.set('1',(charHeight* 400/emHeight)); lbWidth.set('1',(charHeight*  32/emHeight));
charWidth.set('2',(charHeight* 856/emHeight));  advWidth.set('2',(charHeight* 625/emHeight)); lbWidth.set('2',(charHeight*  21/emHeight));
charWidth.set('3',(charHeight* 835/emHeight));  advWidth.set('3',(charHeight* 695/emHeight)); lbWidth.set('3',(charHeight*  40/emHeight));
charWidth.set('4',(charHeight* 744/emHeight));  advWidth.set('4',(charHeight* 686/emHeight)); lbWidth.set('4',(charHeight* 148/emHeight));
charWidth.set('5',(charHeight* 889/emHeight));  advWidth.set('5',(charHeight* 585/emHeight)); lbWidth.set('5',(charHeight*  44/emHeight));
charWidth.set('6',(charHeight* 642/emHeight));  advWidth.set('6',(charHeight* 572/emHeight)); lbWidth.set('6',(charHeight*  96/emHeight));
charWidth.set('7',(charHeight* 720/emHeight));  advWidth.set('7',(charHeight* 543/emHeight)); lbWidth.set('7',(charHeight*  85/emHeight));
charWidth.set('8',(charHeight* 842/emHeight));  advWidth.set('8',(charHeight* 621/emHeight)); lbWidth.set('8',(charHeight*  89/emHeight));
charWidth.set('9',(charHeight* 638/emHeight));  advWidth.set('9',(charHeight* 573/emHeight)); lbWidth.set('9',(charHeight* 142/emHeight));

charWidth.set('!',(charHeight* 694/emHeight));  advWidth.set('!',(charHeight* 601/emHeight)); lbWidth.set('!',(charHeight*  85/emHeight));
charWidth.set('"',(charHeight* 296/emHeight));  advWidth.set('"',(charHeight* 377/emHeight)); lbWidth.set('"',(charHeight* 274/emHeight));
charWidth.set('&',(charHeight* 982/emHeight));  advWidth.set('&',(charHeight* 897/emHeight)); lbWidth.set('&',(charHeight* 102/emHeight));
charWidth.set(`'`,(charHeight* 176/emHeight));  advWidth.set(`'`,(charHeight* 257/emHeight)); lbWidth.set(`'`,(charHeight* 274/emHeight));
charWidth.set('(',(charHeight* 797/emHeight));  advWidth.set('(',(charHeight* 451/emHeight)); lbWidth.set('(',(charHeight* 139/emHeight));
charWidth.set(')',(charHeight* 733/emHeight));  advWidth.set(')',(charHeight* 638/emHeight)); lbWidth.set(')',(charHeight* -34/emHeight));
charWidth.set(',',(charHeight* 215/emHeight));  advWidth.set(',',(charHeight* 268/emHeight)); lbWidth.set(',',(charHeight*  15/emHeight));
charWidth.set('-',(charHeight* 298/emHeight));  advWidth.set('-',(charHeight* 386/emHeight)); lbWidth.set('-',(charHeight*  56/emHeight));
charWidth.set('.',(charHeight* 122/emHeight));  advWidth.set('.',(charHeight* 276/emHeight)); lbWidth.set('.',(charHeight*  85/emHeight));
charWidth.set('/',(charHeight* 645/emHeight));  advWidth.set('/',(charHeight* 491/emHeight)); lbWidth.set('/',(charHeight*  48/emHeight));
charWidth.set(':',(charHeight* 294/emHeight));  advWidth.set(':',(charHeight* 401/emHeight)); lbWidth.set(':',(charHeight*  85/emHeight));
charWidth.set(';',(charHeight* 377/emHeight));  advWidth.set(';',(charHeight* 399/emHeight)); lbWidth.set(';',(charHeight*  15/emHeight));
charWidth.set('?',(charHeight* 672/emHeight));  advWidth.set('?',(charHeight* 657/emHeight)); lbWidth.set('?',(charHeight* 117/emHeight));
charWidth.set(' ',(charHeight* 300/emHeight));  advWidth.set(' ',(charHeight* 300/emHeight)); lbWidth.set(' ',(charHeight*   0/emHeight));
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//HTML POPULATE///////////////////////////////

function populateHTML(string){
  array=Array.from(string);let fin="";
  array.forEach((x)=>fin+=partSpawn(x)); //uses partSpawn()
 return fin;
}

charParent.innerHTML=populateHTML(textToDraw);
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
  Array.from(node).forEach((element)=>element.style.width=`${charWidth.get(char)/*.toFixed(1)*/}px`);
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
  let maxW=Array.from(window.getComputedStyle(charParent).maxWidth);maxW.pop();maxW.pop();maxW=maxW.join("");
  //maxW='max-width' of the flex div, after which it automatically generates new line

  for (let i=0;i<=array.length-1;i++){
    let currentDiv=   array[i];
    let currentClass= currentDiv.classList[1]; //this is a STRING! like "a_upper"
    let currentChar=  charOf.get(currentClass); //find char of class
    //console.log(`tailSum=${tailSum},i=${i}`);

    let  W= charWidth.get(currentChar);
    let AW=  advWidth.get(currentChar);
    let LW=   lbWidth.get(currentChar);
    
    widthTracker+=W;
    
    //for spaces, not working rn
    //if (currentChar===" " && widthTracker===W){console.log(`activated`);currentDiv.style.width=`0px`;widthTracker-=W};

    if (widthTracker>maxW){tailSum=0;widthTracker=W;};//account for new LINES by resetting tailSum
    


    let ownTail= W-(AW/*+LW*/);   //find ownTail of char
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
  }
} 
const charCount=charParent.children;
setTail(charCount); //initializing tails
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//ANIMATING THE HTML AFTER DOING EVERYTHING ELSE/////////////////////////////////////////////////////////////////

//spawns the appropriate count of SVG segments for each char
function partSpawn(char){
  let partCounter;
  let partClass=classOf(char);
  switch (char){
    case "A" : partCounter=5;break; case "a" : partCounter=6;break; case "0" : partCounter=2;break;
    case "B" : partCounter=6;break; case "b" : partCounter=4;break; case "1" : partCounter=2;break;
    case "C" : partCounter=4;break; case "c" : partCounter=3;break; case "2" : partCounter=4;break;
    case "D" : partCounter=4;break; case "d" : partCounter=6;break; case "3" : partCounter=5;break;
    case "E" : partCounter=6;break; case "e" : partCounter=3;break; case "4" : partCounter=3;break;
    case "F" : partCounter=4;break; case "f" : partCounter=4;break; case "5" : partCounter=4;break;
    case "G" : partCounter=4;break; case "g" : partCounter=6;break; case "6" : partCounter=3;break;
    case "H" : partCounter=5;break; case "h" : partCounter=4;break; case "7" : partCounter=2;break;
    case "I" : partCounter=4;break; case "i" : partCounter=4;break; case "8" : partCounter=3;break;
    case "J" : partCounter=4;break; case "j" : partCounter=4;break; case "9" : partCounter=3;break;
    case "K" : partCounter=6;break; case "k" : partCounter=5;break; case "!" : partCounter=3;break;
    case "L" : partCounter=4;break; case "l" : partCounter=3;break; case `"` : partCounter=2;break;
    case "M" : partCounter=6;break; case "m" : partCounter=7;break; case "&" : partCounter=7;break;
    case "N" : partCounter=5;break; case "n" : partCounter=5;break; case "'" : partCounter=1;break;
    case "O" : partCounter=4;break; case "o" : partCounter=3;break; case "(" : partCounter=1;break;
    case "P" : partCounter=3;break; case "p" : partCounter=4;break; case ")" : partCounter=1;break;
    case "Q" : partCounter=4;break; case "q" : partCounter=6;break; case "," : partCounter=1;break;
    case "R" : partCounter=4;break; case "r" : partCounter=4;break; case "-" : partCounter=1;break;
    case "S" : partCounter=4;break; case "s" : partCounter=3;break; case "." : partCounter=1;break;
    case "T" : partCounter=3;break; case "t" : partCounter=4;break; case "/" : partCounter=1;break;
    case "U" : partCounter=5;break; case "u" : partCounter=5;break; case ":" : partCounter=2;break;
    case "V" : partCounter=3;break; case "v" : partCounter=5;break; case ";" : partCounter=2;break;
    case "W" : partCounter=5;break; case "w" : partCounter=6;break; case "?" : partCounter=5;break;
    case "X" : partCounter=4;break; case "x" : partCounter=4;break; case " " : partCounter=0;break;
    case "Y" : partCounter=4;break; case "y" : partCounter=5;break;
    case "Z" : partCounter=5;break; case "z" : partCounter=5;break;
  }
  let stringOpen=`<div class="char ${partClass}">`;
  let stringClose=`</div>`;

  if (partCounter===0){return `${stringOpen}${stringClose}`}; //if space
  if (typeof partCounter===undefined){return};                //if unsupported char

  let i=1; let stringMiddle=""; //normal behavior
  while (i<=partCounter){stringMiddle+=`<img class="${partClass}_${i}" src="/typing/${partClass}_${i}.svg">`;i++};

  return `${stringOpen}${stringMiddle}${stringClose}`;
}

/* FUNCTION partSpawn(char) will return something like this for each char:
`<div class="char a_lower">
<img class="a_lower_1" src="/typing/a_lower_1.svg">
<img class="a_lower_2" src="/typing/a_lower_2.svg">
<img class="a_lower_3" src="/typing/a_lower_3.svg">
<img class="a_lower_4" src="/typing/a_lower_4.svg">
<img class="a_lower_5" src="/typing/a_lower_5.svg">
<img class="a_lower_6" src="/typing/a_lower_6.svg">
</div>`
*/

//ANIMATION TIMINGS FOR EACH SEGMENT//////////////////////////////////////////////////////////////////////
let animationSpeed=1; //change this to draw segments faster. does not work accurately but w/e

async function animateHTML(parent){
  array=Array.from(parent.children);
  let time=0; //initializes time for animDelay() to 0
  let fraction=(1/animationSpeed);

  function animDelay() {return new Promise(resolve => {setTimeout(() => {resolve('resolved');}, time*fraction);});}

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
    }
  }
}

animateHTML(charParent);


//NEED TO DO
//implement \n
//tweak some animation segment lengths

//ORDER OF EXECUTIONS:

/*
charParent.innerHTML=populateHTML(textToDraw);
charDivs.forEach(x=>x.style.height=`${charHeight*0.6}px`);
setWidthAll();
setTail(charCount);
animateHTML(charParent);
*/