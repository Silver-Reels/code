function classOf(char){
  return (Array.from(charOf.keys())[Array.from(charOf.values()).indexOf(char)])
}
//use: charOf.get("a_upper") --> "A"
//use: classOf("A")  --> "a_upper"

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
charOf.set("x_upper","X");charOf.set("x_lower","x");
charOf.set("y_upper","Y");charOf.set("y_lower","y");
charOf.set("z_upper","Z");charOf.set("z_lower","z");

//img docu height=1505em

//1505---100px
//1216---(charHeight*(val)/emHeight)

//"A" val=1216. so width of div "a_upper" class-> ~80.7px

const emHeight=1505; //this should NOT BE CHANGED!
let charHeight= 50; //this can be changed, is in px

const charWidth=new Map();                      const advWidth=new Map();
//get with charWidth.get("A")                   get with advWidth.get("A")
charWidth.set('A',(charHeight*1216/emHeight));  advWidth.set('A',(charHeight*1041/emHeight)); 
charWidth.set('B',(charHeight*1126/emHeight));  advWidth.set('B',(charHeight*1139/emHeight));
charWidth.set('C',(charHeight*1030 /emHeight)); advWidth.set('C',(charHeight* 837/emHeight)); 
charWidth.set('D',(charHeight*1042/emHeight));  advWidth.set('D',(charHeight*1090/emHeight));
charWidth.set('E',(charHeight*1117/emHeight));  advWidth.set('E',(charHeight* 904/emHeight));
charWidth.set('F',(charHeight*1145/emHeight));  advWidth.set('F',(charHeight*1000/emHeight));
charWidth.set('G',(charHeight* 981/emHeight));  advWidth.set('G',(charHeight*1018/emHeight));
charWidth.set('H',(charHeight*1360/emHeight));  advWidth.set('H',(charHeight* 918/emHeight));
charWidth.set('I',(charHeight*1187/emHeight));  advWidth.set('I',(charHeight* 800/emHeight));
charWidth.set('J',(charHeight*1508/emHeight));  advWidth.set('J',(charHeight* 513/emHeight));
charWidth.set('K',(charHeight*1623/emHeight));  advWidth.set('K',(charHeight*1058/emHeight));
charWidth.set('L',(charHeight*1433/emHeight));  advWidth.set('L',(charHeight*1236/emHeight));
charWidth.set('M',(charHeight*1654/emHeight));  advWidth.set('M',(charHeight*1350/emHeight));
charWidth.set('N',(charHeight*1281/emHeight));  advWidth.set('N',(charHeight* 927/emHeight));
charWidth.set('O',(charHeight*1013/emHeight));  advWidth.set('O',(charHeight*1084/emHeight));
charWidth.set('P',(charHeight*1130/emHeight));  advWidth.set('P',(charHeight* 979/emHeight));
charWidth.set('Q',(charHeight* 969/emHeight));  advWidth.set('Q',(charHeight*1049/emHeight));
charWidth.set('R',(charHeight*1238/emHeight));  advWidth.set('R',(charHeight* 967/emHeight));
charWidth.set('S',(charHeight*1220/emHeight));  advWidth.set('S',(charHeight*1199/emHeight));
charWidth.set('T',(charHeight*1427/emHeight));  advWidth.set('T',(charHeight* 767/emHeight));
charWidth.set('U',(charHeight*1157/emHeight));  advWidth.set('U',(charHeight*1016/emHeight));
charWidth.set('V',(charHeight*1341/emHeight));  advWidth.set('V',(charHeight* 774/emHeight));
charWidth.set('W',(charHeight*1509/emHeight));  advWidth.set('W',(charHeight*1243/emHeight));
charWidth.set('X',(charHeight*1300/emHeight));  advWidth.set('X',(charHeight* 828/emHeight));
charWidth.set('Y',(charHeight*1216/emHeight));  advWidth.set('Y',(charHeight* 926/emHeight));
charWidth.set('Z',(charHeight*1389/emHeight));  advWidth.set('Z',(charHeight* 787/emHeight));

charWidth.set('a',(charHeight* 580/emHeight));  advWidth.set('a',(charHeight* 535/emHeight));
charWidth.set('b',(charHeight* 648/emHeight));  advWidth.set('b',(charHeight* 488/emHeight));
charWidth.set('c',(charHeight* 448/emHeight));  advWidth.set('c',(charHeight* 443/emHeight));
charWidth.set('d',(charHeight* 889/emHeight));  advWidth.set('d',(charHeight* 558/emHeight));
charWidth.set('e',(charHeight* 490/emHeight));  advWidth.set('e',(charHeight* 470/emHeight));
charWidth.set('f',(charHeight* 894/emHeight));  advWidth.set('f',(charHeight* 140/emHeight));
charWidth.set('g',(charHeight* 652/emHeight));  advWidth.set('g',(charHeight* 221/emHeight));
charWidth.set('h',(charHeight* 722/emHeight));  advWidth.set('h',(charHeight* 487/emHeight));
charWidth.set('i',(charHeight* 527/emHeight));  advWidth.set('i',(charHeight* 265/emHeight));
charWidth.set('j',(charHeight*1087/emHeight));  advWidth.set('j',(charHeight* -315/emHeight));
charWidth.set('k',(charHeight* 726/emHeight));  advWidth.set('k',(charHeight* 480/emHeight));
charWidth.set('l',(charHeight* 738/emHeight));  advWidth.set('l',(charHeight* 457/emHeight));
charWidth.set('m',(charHeight* 828/emHeight));  advWidth.set('m',(charHeight* 676/emHeight));
charWidth.set('n',(charHeight* 637/emHeight));  advWidth.set('n',(charHeight* 470/emHeight));
charWidth.set('o',(charHeight* 442/emHeight));  advWidth.set('o',(charHeight* 527/emHeight));
charWidth.set('p',(charHeight* 802/emHeight));  advWidth.set('p',(charHeight* 252/emHeight));
charWidth.set('q',(charHeight* 636/emHeight));  advWidth.set('q',(charHeight* 535/emHeight));
charWidth.set('r',(charHeight* 538/emHeight));  advWidth.set('r',(charHeight* 295/emHeight));
charWidth.set('s',(charHeight* 432/emHeight));  advWidth.set('s',(charHeight* 392/emHeight));
charWidth.set('t',(charHeight* 606/emHeight));  advWidth.set('t',(charHeight* 321/emHeight));
charWidth.set('u',(charHeight* 629/emHeight));  advWidth.set('u',(charHeight* 562/emHeight));
charWidth.set('v',(charHeight* 579/emHeight));  advWidth.set('v',(charHeight* 478/emHeight));
charWidth.set('w',(charHeight* 862/emHeight));  advWidth.set('w',(charHeight* 761/emHeight));
charWidth.set('x',(charHeight* 669/emHeight));  advWidth.set('x',(charHeight* 542/emHeight));
charWidth.set('y',(charHeight* 681/emHeight));  advWidth.set('y',(charHeight* 252/emHeight));
charWidth.set('z',(charHeight* 900/emHeight));  advWidth.set('z',(charHeight* 257/emHeight));

charWidth.set('0',(charHeight* 733/emHeight));  advWidth.set('0',(charHeight* 769/emHeight));
charWidth.set('1',(charHeight* 649/emHeight));  advWidth.set('1',(charHeight* 432/emHeight));
charWidth.set('2',(charHeight* 856/emHeight));  advWidth.set('2',(charHeight* 646/emHeight));
charWidth.set('3',(charHeight* 835/emHeight));  advWidth.set('3',(charHeight* 735/emHeight));
charWidth.set('4',(charHeight* 744/emHeight));  advWidth.set('4',(charHeight* 834/emHeight));
charWidth.set('5',(charHeight* 889/emHeight));  advWidth.set('5',(charHeight* 629/emHeight));
charWidth.set('6',(charHeight* 642/emHeight));  advWidth.set('6',(charHeight* 668/emHeight));
charWidth.set('7',(charHeight* 720/emHeight));  advWidth.set('7',(charHeight* 628/emHeight));
charWidth.set('8',(charHeight* 842/emHeight));  advWidth.set('8',(charHeight* 710/emHeight));
charWidth.set('9',(charHeight* 638/emHeight));  advWidth.set('9',(charHeight* 715/emHeight));

charWidth.set('!',(charHeight* 694/emHeight));  advWidth.set('!',(charHeight* 686/emHeight));
charWidth.set('"',(charHeight* 296/emHeight));  advWidth.set('"',(charHeight* 651/emHeight));
charWidth.set('&',(charHeight* 982/emHeight));  advWidth.set('&',(charHeight* 999/emHeight));
charWidth.set(`'`,(charHeight* 176/emHeight));  advWidth.set(`'`,(charHeight* 531/emHeight));
charWidth.set('(',(charHeight* 797/emHeight));  advWidth.set('(',(charHeight* 590/emHeight));
charWidth.set(')',(charHeight* 733/emHeight));  advWidth.set(')',(charHeight* 604/emHeight));
charWidth.set(',',(charHeight* 215/emHeight));  advWidth.set(',',(charHeight* 283/emHeight));
charWidth.set('-',(charHeight* 298/emHeight));  advWidth.set('-',(charHeight* 442/emHeight));
charWidth.set('.',(charHeight* 122/emHeight));  advWidth.set('.',(charHeight* 361/emHeight));
charWidth.set('/',(charHeight* 645/emHeight));  advWidth.set('/',(charHeight* 539/emHeight));
charWidth.set(':',(charHeight* 294/emHeight));  advWidth.set(':',(charHeight* 486/emHeight));
charWidth.set(';',(charHeight* 377/emHeight));  advWidth.set(';',(charHeight* 414/emHeight));
charWidth.set('?',(charHeight* 672/emHeight));  advWidth.set('?',(charHeight* 774/emHeight));
charWidth.set(' ',(charHeight* 300/emHeight));  advWidth.set(' ',(charHeight* 300/emHeight));

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

const charParent=document.querySelector(".charParent");
const charDivs=Array.from(document.querySelectorAll(".char"));

charDivs.forEach(x=>x.style.height=`${charHeight*0.5}px`);
//sets height for all items with class .char, so half of charHeight const

const charCount=charParent.children; //array or node idk
//this should track charCount to be able to apply advanceWidth to each div

function setWidth(node,char){
Array.from(node).forEach((element)=>element.style.width=`${charWidth.get(char).toFixed(1)}px`);}
//seems to work

//advWidth.get("A")


//this function is responsible for setting all the spaces between character divs//////////////////////////////////

function setTail(array){ //array should be charCount, function to give advWidth to all divs
  let tailSum=[0];

  for (let i=0;i<=array.length-1;i++){
  let currentDiv=array[i]; console.log(`tailSum=[${tailSum}],i=${i}`);//Div we will apply final value to
  let currentClass=array[i].classList[1]; //this is a STRING! like "a_upper"
  let currentChar=charOf.get(currentClass); //find char of class

  let ownTail=charWidth.get(currentChar)-advWidth.get(currentChar);   //find ownTail of char
  if (ownTail>charWidth.get(currentChar)*0.12) {ownTail=charWidth.get(currentChar)*0.12;console.log(`kerning "${currentChar}"`)};
  //kerning so that max char 'style.right' shifting is 12% of previous width

  if (ownTail<0){ownTail=charWidth.get(currentChar)*0.05;console.log(`tail of "${currentChar}" was below 0, turned to ${ownTail.toFixed(1)}`)};
  

  console.log(`ownTail for ${currentChar} = ${ownTail.toFixed(1)}px,applying (tailSum) right=${tailSum.reduce((prev,curr)=>prev+curr).toFixed(1)}px`);

  currentDiv.style.right=`${tailSum.reduce((prev,curr)=>prev+curr)}px`;  //apply final tail from tailSum
  tailSum.push(ownTail); //add ownTail to tailSum for next calc
  }
  } 

/* ownTail=0
[0] ownTail=16  finalTail=0
[1] ownTail=7   finalTail=16
[2] ownTail=20  finalTail= 16+7=23
[3] ownTail=12  finalTail= 16+7+20 = 43

tail at any stage: sum all PRIOR ownTail, set that, add ownTail to sum for next

*/
setTail(charCount); //initializing tails
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//NEED TO DO
//take input from a <form>, compare string[i] to database and return a letter 'char' div, such as: if string[i]=A->'char a_lower'
//take the string length & based on it, determine setTimeout delays for each character(index * 100ms orlower


const a_upper_1=document.querySelector(".a_upper_1");
const a_upper_2=document.querySelector(".a_upper_2");
const a_upper_3=document.querySelector(".a_upper_3");
const a_upper_4=document.querySelector(".a_upper_4");
const a_upper_5=document.querySelector(".a_upper_5");

const b_upper_1=document.querySelector(".b_upper_1");
const b_upper_2=document.querySelector(".b_upper_2");
const b_upper_3=document.querySelector(".b_upper_3");
const b_upper_4=document.querySelector(".b_upper_4");
const b_upper_5=document.querySelector(".b_upper_5");
const b_upper_6=document.querySelector(".b_upper_6");

const c_upper_1=document.querySelector(".c_upper_1");
const c_upper_2=document.querySelector(".c_upper_2");
const c_upper_3=document.querySelector(".c_upper_3");
const c_upper_4=document.querySelector(".c_upper_4");

const d_upper_1=document.querySelector(".d_upper_1");
const d_upper_2=document.querySelector(".d_upper_2");
const d_upper_3=document.querySelector(".d_upper_3");
const d_upper_4=document.querySelector(".d_upper_4");

const e_upper_1=document.querySelector(".e_upper_1");
const e_upper_2=document.querySelector(".e_upper_2");
const e_upper_3=document.querySelector(".e_upper_3");
const e_upper_4=document.querySelector(".e_upper_4");
const e_upper_5=document.querySelector(".e_upper_5");
const e_upper_6=document.querySelector(".e_upper_6");

const f_upper_1=document.querySelector(".f_upper_1");
const f_upper_2=document.querySelector(".f_upper_2");
const f_upper_3=document.querySelector(".f_upper_3");
const f_upper_4=document.querySelector(".f_upper_4");

const g_upper_1=document.querySelector(".g_upper_1");
const g_upper_2=document.querySelector(".g_upper_2");
const g_upper_3=document.querySelector(".g_upper_3");
const g_upper_4=document.querySelector(".g_upper_4");

const h_upper_1=document.querySelector(".h_upper_1");
const h_upper_2=document.querySelector(".h_upper_2");
const h_upper_3=document.querySelector(".h_upper_3");
const h_upper_4=document.querySelector(".h_upper_4");
const h_upper_5=document.querySelector(".h_upper_5");

const i_upper_1=document.querySelector(".i_upper_1");
const i_upper_2=document.querySelector(".i_upper_2");
const i_upper_3=document.querySelector(".i_upper_3");
const i_upper_4=document.querySelector(".i_upper_4");

const j_upper_1=document.querySelector(".j_upper_1");
const j_upper_2=document.querySelector(".j_upper_2");
const j_upper_3=document.querySelector(".j_upper_3");
const j_upper_4=document.querySelector(".j_upper_4");

const k_upper_1=document.querySelector(".k_upper_1");
const k_upper_2=document.querySelector(".k_upper_2");
const k_upper_3=document.querySelector(".k_upper_3");
const k_upper_4=document.querySelector(".k_upper_4");
const k_upper_5=document.querySelector(".k_upper_5");
const k_upper_6=document.querySelector(".k_upper_6");

const l_upper_1=document.querySelector(".l_upper_1");
const l_upper_2=document.querySelector(".l_upper_2");
const l_upper_3=document.querySelector(".l_upper_3");
const l_upper_4=document.querySelector(".l_upper_4");

const m_upper_1=document.querySelector(".m_upper_1");
const m_upper_2=document.querySelector(".m_upper_2");
const m_upper_3=document.querySelector(".m_upper_3");
const m_upper_4=document.querySelector(".m_upper_4");
const m_upper_5=document.querySelector(".m_upper_5");
const m_upper_6=document.querySelector(".m_upper_6");

const n_upper_1=document.querySelector(".n_upper_1");
const n_upper_2=document.querySelector(".n_upper_2");
const n_upper_3=document.querySelector(".n_upper_3");
const n_upper_4=document.querySelector(".n_upper_4");
const n_upper_5=document.querySelector(".n_upper_5");

const o_upper_1=document.querySelector(".o_upper_1");
const o_upper_2=document.querySelector(".o_upper_2");
const o_upper_3=document.querySelector(".o_upper_3");
const o_upper_4=document.querySelector(".o_upper_4");

const p_upper_1=document.querySelector(".p_upper_1");
const p_upper_2=document.querySelector(".p_upper_2");
const p_upper_3=document.querySelector(".p_upper_3");

const q_upper_1=document.querySelector(".q_upper_1");
const q_upper_2=document.querySelector(".q_upper_2");
const q_upper_3=document.querySelector(".q_upper_3");
const q_upper_4=document.querySelector(".q_upper_4");

const r_upper_1=document.querySelector(".r_upper_1");
const r_upper_2=document.querySelector(".r_upper_2");
const r_upper_3=document.querySelector(".r_upper_3");
const r_upper_4=document.querySelector(".r_upper_4");

const s_upper_1=document.querySelector(".s_upper_1");
const s_upper_2=document.querySelector(".s_upper_2");
const s_upper_3=document.querySelector(".s_upper_3");
const s_upper_4=document.querySelector(".s_upper_4");

const t_upper_1=document.querySelector(".t_upper_1");
const t_upper_2=document.querySelector(".t_upper_2");
const t_upper_3=document.querySelector(".t_upper_3");

const u_upper_1=document.querySelector(".u_upper_1");
const u_upper_2=document.querySelector(".u_upper_2");
const u_upper_3=document.querySelector(".u_upper_3");
const u_upper_4=document.querySelector(".u_upper_4");
const u_upper_5=document.querySelector(".u_upper_5");

const v_upper_1=document.querySelector(".v_upper_1");
const v_upper_2=document.querySelector(".v_upper_2");
const v_upper_3=document.querySelector(".v_upper_3");

const w_upper_1=document.querySelector(".w_upper_1");
const w_upper_2=document.querySelector(".w_upper_2");
const w_upper_3=document.querySelector(".w_upper_3");
const w_upper_4=document.querySelector(".w_upper_4");
const w_upper_5=document.querySelector(".w_upper_5");

const x_upper_1=document.querySelector(".x_upper_1");
const x_upper_2=document.querySelector(".x_upper_2");
const x_upper_3=document.querySelector(".x_upper_3");
const x_upper_4=document.querySelector(".x_upper_4");

const y_upper_1=document.querySelector(".y_upper_1");
const y_upper_2=document.querySelector(".y_upper_2");
const y_upper_3=document.querySelector(".y_upper_3");
const y_upper_4=document.querySelector(".y_upper_4");

const z_upper_1=document.querySelector(".z_upper_1");
const z_upper_2=document.querySelector(".z_upper_2");
const z_upper_3=document.querySelector(".z_upper_3");
const z_upper_4=document.querySelector(".z_upper_4");
const z_upper_5=document.querySelector(".z_upper_5");

const a_lower_1=document.querySelector(".a_lower_1");
const a_lower_2=document.querySelector(".a_lower_2");
const a_lower_3=document.querySelector(".a_lower_3");
const a_lower_4=document.querySelector(".a_lower_4");
const a_lower_5=document.querySelector(".a_lower_5");
const a_lower_6=document.querySelector(".a_lower_6");

const b_lower_1=document.querySelector(".b_lower_1");
const b_lower_2=document.querySelector(".b_lower_2");
const b_lower_3=document.querySelector(".b_lower_3");
const b_lower_4=document.querySelector(".b_lower_4");

const c_lower_1=document.querySelector(".c_lower_1");
const c_lower_2=document.querySelector(".c_lower_2");
const c_lower_3=document.querySelector(".c_lower_3");

const d_lower_1=document.querySelector(".d_lower_1");
const d_lower_2=document.querySelector(".d_lower_2");
const d_lower_3=document.querySelector(".d_lower_3");
const d_lower_4=document.querySelector(".d_lower_4");
const d_lower_5=document.querySelector(".d_lower_5");
const d_lower_6=document.querySelector(".d_lower_6");

const e_lower_1=document.querySelector(".e_lower_1");
const e_lower_2=document.querySelector(".e_lower_2");
const e_lower_3=document.querySelector(".e_lower_3");

const f_lower_1=document.querySelector(".f_lower_1");
const f_lower_2=document.querySelector(".f_lower_2");
const f_lower_3=document.querySelector(".f_lower_3");
const f_lower_4=document.querySelector(".f_lower_4");

const g_lower_1=document.querySelector(".g_lower_1");
const g_lower_2=document.querySelector(".g_lower_2");
const g_lower_3=document.querySelector(".g_lower_3");
const g_lower_4=document.querySelector(".g_lower_4");
const g_lower_5=document.querySelector(".g_lower_5");
const g_lower_6=document.querySelector(".g_lower_6");

const h_lower_1=document.querySelector(".h_lower_1");
const h_lower_2=document.querySelector(".h_lower_2");
const h_lower_3=document.querySelector(".h_lower_3");
const h_lower_4=document.querySelector(".h_lower_4");

const i_lower_1=document.querySelector(".i_lower_1");
const i_lower_2=document.querySelector(".i_lower_2");
const i_lower_3=document.querySelector(".i_lower_3");
const i_lower_4=document.querySelector(".i_lower_4");

const j_lower_1=document.querySelector(".j_lower_1");
const j_lower_2=document.querySelector(".j_lower_2");
const j_lower_3=document.querySelector(".j_lower_3");
const j_lower_4=document.querySelector(".j_lower_4");

const k_lower_1=document.querySelector(".k_lower_1");
const k_lower_2=document.querySelector(".k_lower_2");
const k_lower_3=document.querySelector(".k_lower_3");
const k_lower_4=document.querySelector(".k_lower_4");
const k_lower_5=document.querySelector(".k_lower_5");

const l_lower_1=document.querySelector(".l_lower_1");
const l_lower_2=document.querySelector(".l_lower_2");
const l_lower_3=document.querySelector(".l_lower_3");

const m_lower_1=document.querySelector(".m_lower_1");
const m_lower_2=document.querySelector(".m_lower_2");
const m_lower_3=document.querySelector(".m_lower_3");
const m_lower_4=document.querySelector(".m_lower_4");
const m_lower_5=document.querySelector(".m_lower_5");
const m_lower_6=document.querySelector(".m_lower_6");
const m_lower_7=document.querySelector(".m_lower_7");

const n_lower_1=document.querySelector(".n_lower_1");
const n_lower_2=document.querySelector(".n_lower_2");
const n_lower_3=document.querySelector(".n_lower_3");
const n_lower_4=document.querySelector(".n_lower_4");
const n_lower_5=document.querySelector(".n_lower_5");

const o_lower_1=document.querySelector(".o_lower_1");
const o_lower_2=document.querySelector(".o_lower_2");
const o_lower_3=document.querySelector(".o_lower_3");

const p_lower_1=document.querySelector(".p_lower_1");
const p_lower_2=document.querySelector(".p_lower_2");
const p_lower_3=document.querySelector(".p_lower_3");
const p_lower_4=document.querySelector(".p_lower_4");

const q_lower_1=document.querySelector(".q_lower_1");
const q_lower_2=document.querySelector(".q_lower_2");
const q_lower_3=document.querySelector(".q_lower_3");
const q_lower_4=document.querySelector(".q_lower_4");
const q_lower_5=document.querySelector(".q_lower_5");
const q_lower_6=document.querySelector(".q_lower_6");

const r_lower_1=document.querySelector(".r_lower_1");
const r_lower_2=document.querySelector(".r_lower_2");
const r_lower_3=document.querySelector(".r_lower_3");
const r_lower_4=document.querySelector(".r_lower_4");

const s_lower_1=document.querySelector(".s_lower_1");
const s_lower_2=document.querySelector(".s_lower_2");
const s_lower_3=document.querySelector(".s_lower_3");

const t_lower_1=document.querySelector(".t_lower_1");
const t_lower_2=document.querySelector(".t_lower_2");
const t_lower_3=document.querySelector(".t_lower_3");
const t_lower_4=document.querySelector(".t_lower_4");

const u_lower_1=document.querySelector(".u_lower_1");
const u_lower_2=document.querySelector(".u_lower_2");
const u_lower_3=document.querySelector(".u_lower_3");
const u_lower_4=document.querySelector(".u_lower_4");
const u_lower_5=document.querySelector(".u_lower_5");

const v_lower_1=document.querySelector(".v_lower_1");
const v_lower_2=document.querySelector(".v_lower_2");
const v_lower_3=document.querySelector(".v_lower_3");
const v_lower_4=document.querySelector(".v_lower_4");
const v_lower_5=document.querySelector(".v_lower_5");

const w_lower_1=document.querySelector(".w_lower_1");
const w_lower_2=document.querySelector(".w_lower_2");
const w_lower_3=document.querySelector(".w_lower_3");
const w_lower_4=document.querySelector(".w_lower_4");
const w_lower_5=document.querySelector(".w_lower_5");
const w_lower_6=document.querySelector(".w_lower_6");

const x_lower_1=document.querySelector(".x_lower_1");
const x_lower_2=document.querySelector(".x_lower_2");
const x_lower_3=document.querySelector(".x_lower_3");
const x_lower_4=document.querySelector(".x_lower_4");

const y_lower_1=document.querySelector(".y_lower_1");
const y_lower_2=document.querySelector(".y_lower_2");
const y_lower_3=document.querySelector(".y_lower_3");
const y_lower_4=document.querySelector(".y_lower_4");
const y_lower_5=document.querySelector(".y_lower_5");

const z_lower_1=document.querySelector(".z_lower_1");
const z_lower_2=document.querySelector(".z_lower_2");
const z_lower_3=document.querySelector(".z_lower_3");
const z_lower_4=document.querySelector(".z_lower_4");
const z_lower_5=document.querySelector(".z_lower_5");




document.body.onclick=function(){
    setTimeout(function(){a_upper_1.classList.toggle("a_upper_1_draw")},0);
    setTimeout(function(){a_upper_2.classList.toggle("a_upper_2_draw")},100);
    setTimeout(function(){a_upper_3.classList.toggle("a_upper_3_draw")},200);
    setTimeout(function(){a_upper_4.classList.toggle("a_upper_4_draw")},300);
    setTimeout(function(){a_upper_5.classList.toggle("a_upper_5_draw")},400);

    setTimeout(function(){b_upper_1.classList.toggle("b_upper_1_draw")},500);
    setTimeout(function(){b_upper_2.classList.toggle("b_upper_2_draw")},600);
    setTimeout(function(){b_upper_3.classList.toggle("b_upper_3_draw")},700);
    setTimeout(function(){b_upper_4.classList.toggle("b_upper_4_draw")},800);
    setTimeout(function(){b_upper_5.classList.toggle("b_upper_5_draw")},900);
    setTimeout(function(){b_upper_6.classList.toggle("b_upper_6_draw")},1000);

    setTimeout(function(){c_upper_1.classList.toggle("c_upper_1_draw")},1100);
    setTimeout(function(){c_upper_2.classList.toggle("c_upper_2_draw")},1200);
    setTimeout(function(){c_upper_3.classList.toggle("c_upper_3_draw")},1300);
    setTimeout(function(){c_upper_4.classList.toggle("c_upper_4_draw")},1400);

    setTimeout(function(){d_upper_1.classList.toggle("d_upper_1_draw")},1500);
    setTimeout(function(){d_upper_2.classList.toggle("d_upper_2_draw")},1600);
    setTimeout(function(){d_upper_3.classList.toggle("d_upper_3_draw")},1700);
    setTimeout(function(){d_upper_4.classList.toggle("d_upper_4_draw")},1800);

    setTimeout(function(){e_upper_1.classList.toggle("e_upper_1_draw")},1900);
    setTimeout(function(){e_upper_2.classList.toggle("e_upper_2_draw")},2000);
    setTimeout(function(){e_upper_3.classList.toggle("e_upper_3_draw")},2100);
    setTimeout(function(){e_upper_4.classList.toggle("e_upper_4_draw")},2200);
    setTimeout(function(){e_upper_5.classList.toggle("e_upper_5_draw")},2300);
    setTimeout(function(){e_upper_6.classList.toggle("e_upper_6_draw")},2400);

    setTimeout(function(){f_upper_1.classList.toggle("f_upper_1_draw")},2500);
    setTimeout(function(){f_upper_2.classList.toggle("f_upper_2_draw")},2600);
    setTimeout(function(){f_upper_3.classList.toggle("f_upper_3_draw")},2700);
    setTimeout(function(){f_upper_4.classList.toggle("f_upper_4_draw")},2800);

    setTimeout(function(){g_upper_1.classList.toggle("g_upper_1_draw")},2900);
    setTimeout(function(){g_upper_2.classList.toggle("g_upper_2_draw")},3000);
    setTimeout(function(){g_upper_3.classList.toggle("g_upper_3_draw")},3100);
    setTimeout(function(){g_upper_4.classList.toggle("g_upper_4_draw")},3200);

    setTimeout(function(){h_upper_1.classList.toggle("h_upper_1_draw")},3300);
    setTimeout(function(){h_upper_2.classList.toggle("h_upper_2_draw")},3400);
    setTimeout(function(){h_upper_3.classList.toggle("h_upper_3_draw")},3500);
    setTimeout(function(){h_upper_4.classList.toggle("h_upper_4_draw")},3600);
    setTimeout(function(){h_upper_5.classList.toggle("h_upper_5_draw")},3700);

    setTimeout(function(){i_upper_1.classList.toggle("i_upper_1_draw")},3800);
    setTimeout(function(){i_upper_2.classList.toggle("i_upper_2_draw")},3900);
    setTimeout(function(){i_upper_3.classList.toggle("i_upper_3_draw")},4000);
    setTimeout(function(){i_upper_4.classList.toggle("i_upper_4_draw")},4100);

    setTimeout(function(){j_upper_1.classList.toggle("j_upper_1_draw")},4200);
    setTimeout(function(){j_upper_2.classList.toggle("j_upper_2_draw")},4300);
    setTimeout(function(){j_upper_3.classList.toggle("j_upper_3_draw")},4400);
    setTimeout(function(){j_upper_4.classList.toggle("j_upper_4_draw")},4500);

    setTimeout(function(){k_upper_1.classList.toggle("k_upper_1_draw")},4600);
    setTimeout(function(){k_upper_2.classList.toggle("k_upper_2_draw")},4700);
    setTimeout(function(){k_upper_3.classList.toggle("k_upper_3_draw")},4800);
    setTimeout(function(){k_upper_4.classList.toggle("k_upper_4_draw")},4900);
    setTimeout(function(){k_upper_5.classList.toggle("k_upper_5_draw")},5000);
    setTimeout(function(){k_upper_6.classList.toggle("k_upper_6_draw")},5100);

    setTimeout(function(){l_upper_1.classList.toggle("l_upper_1_draw")},5200);
    setTimeout(function(){l_upper_2.classList.toggle("l_upper_2_draw")},5300);
    setTimeout(function(){l_upper_3.classList.toggle("l_upper_3_draw")},5400);
    setTimeout(function(){l_upper_4.classList.toggle("l_upper_4_draw")},5500);

    setTimeout(function(){m_upper_1.classList.toggle("m_upper_1_draw")},5600);
    setTimeout(function(){m_upper_2.classList.toggle("m_upper_2_draw")},5700);
    setTimeout(function(){m_upper_3.classList.toggle("m_upper_3_draw")},5800);
    setTimeout(function(){m_upper_4.classList.toggle("m_upper_4_draw")},5900);
    setTimeout(function(){m_upper_5.classList.toggle("m_upper_5_draw")},6000);
    setTimeout(function(){m_upper_6.classList.toggle("m_upper_6_draw")},6100);

    setTimeout(function(){n_upper_1.classList.toggle("n_upper_1_draw")},6200);
    setTimeout(function(){n_upper_2.classList.toggle("n_upper_2_draw")},6300);
    setTimeout(function(){n_upper_3.classList.toggle("n_upper_3_draw")},6400);
    setTimeout(function(){n_upper_4.classList.toggle("n_upper_4_draw")},6500);
    setTimeout(function(){n_upper_5.classList.toggle("n_upper_5_draw")},6600);

    setTimeout(function(){o_upper_1.classList.toggle("o_upper_1_draw")},6700);
    setTimeout(function(){o_upper_2.classList.toggle("o_upper_2_draw")},6800);
    setTimeout(function(){o_upper_3.classList.toggle("o_upper_3_draw")},6900);
    setTimeout(function(){o_upper_4.classList.toggle("o_upper_4_draw")},7000);

    setTimeout(function(){p_upper_1.classList.toggle("p_upper_1_draw")},7100);
    setTimeout(function(){p_upper_2.classList.toggle("p_upper_2_draw")},7200);
    setTimeout(function(){p_upper_3.classList.toggle("p_upper_3_draw")},7300);

    setTimeout(function(){q_upper_1.classList.toggle("q_upper_1_draw")},7400);
    setTimeout(function(){q_upper_2.classList.toggle("q_upper_2_draw")},7500);
    setTimeout(function(){q_upper_3.classList.toggle("q_upper_3_draw")},7600);
    setTimeout(function(){q_upper_4.classList.toggle("q_upper_4_draw")},7700);

    setTimeout(function(){r_upper_1.classList.toggle("r_upper_1_draw")},7800);
    setTimeout(function(){r_upper_2.classList.toggle("r_upper_2_draw")},7900);
    setTimeout(function(){r_upper_3.classList.toggle("r_upper_3_draw")},8000);
    setTimeout(function(){r_upper_4.classList.toggle("r_upper_4_draw")},8100);

    setTimeout(function(){s_upper_1.classList.toggle("s_upper_1_draw")},8200);
    setTimeout(function(){s_upper_2.classList.toggle("s_upper_2_draw")},8300);
    setTimeout(function(){s_upper_3.classList.toggle("s_upper_3_draw")},8400);
    setTimeout(function(){s_upper_4.classList.toggle("s_upper_4_draw")},8500);

    setTimeout(function(){t_upper_1.classList.toggle("t_upper_1_draw")},8600);
    setTimeout(function(){t_upper_2.classList.toggle("t_upper_2_draw")},8700);
    setTimeout(function(){t_upper_3.classList.toggle("t_upper_3_draw")},8800);

    setTimeout(function(){u_upper_1.classList.toggle("u_upper_1_draw")},8900);
    setTimeout(function(){u_upper_2.classList.toggle("u_upper_2_draw")},9000);
    setTimeout(function(){u_upper_3.classList.toggle("u_upper_3_draw")},9100);
    setTimeout(function(){u_upper_4.classList.toggle("u_upper_4_draw")},9200);
    setTimeout(function(){u_upper_5.classList.toggle("u_upper_5_draw")},9300);

    setTimeout(function(){v_upper_1.classList.toggle("v_upper_1_draw")},9400);
    setTimeout(function(){v_upper_2.classList.toggle("v_upper_2_draw")},9500);
    setTimeout(function(){v_upper_3.classList.toggle("v_upper_3_draw")},9600);

    setTimeout(function(){w_upper_1.classList.toggle("w_upper_1_draw")},9700);
    setTimeout(function(){w_upper_2.classList.toggle("w_upper_2_draw")},9800);
    setTimeout(function(){w_upper_3.classList.toggle("w_upper_3_draw")},9900);
    setTimeout(function(){w_upper_4.classList.toggle("w_upper_4_draw")},10000);
    setTimeout(function(){w_upper_5.classList.toggle("w_upper_5_draw")},10100);

    setTimeout(function(){x_upper_1.classList.toggle("x_upper_1_draw")},10200);
    setTimeout(function(){x_upper_2.classList.toggle("x_upper_2_draw")},10300);
    setTimeout(function(){x_upper_3.classList.toggle("x_upper_3_draw")},10400);
    setTimeout(function(){x_upper_4.classList.toggle("x_upper_4_draw")},10500);
  
    setTimeout(function(){y_upper_1.classList.toggle("y_upper_1_draw")},10600);
    setTimeout(function(){y_upper_2.classList.toggle("y_upper_2_draw")},10700);
    setTimeout(function(){y_upper_3.classList.toggle("y_upper_3_draw")},10800);
    setTimeout(function(){y_upper_4.classList.toggle("y_upper_4_draw")},10900);
    
    setTimeout(function(){z_upper_1.classList.toggle("z_upper_1_draw")},11000);
    setTimeout(function(){z_upper_2.classList.toggle("z_upper_2_draw")},11100);
    setTimeout(function(){z_upper_3.classList.toggle("z_upper_3_draw")},11200);
    setTimeout(function(){z_upper_4.classList.toggle("z_upper_4_draw")},11300);
    setTimeout(function(){z_upper_5.classList.toggle("z_upper_5_draw")},11400);
}