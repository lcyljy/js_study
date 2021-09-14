const tdList = document.querySelectorAll("#calendarTable td");
const thList = document.querySelectorAll("#calendarTable th");
console.log(tdList);
console.log(thList);
thList[0].classList.add("sun");
thList[6].classList.add("sat");

const preDate = document.querySelector("#preDate");
const nextDate = document.querySelector("#nextDate");
console.log(preDate);

for(td of tdList){
  td.onmouseenter=(event) => {

      event.target.querySelector(".schedule").style.visibility="visible";

};

td.addEventListener("mouseleave", function(event) {
  if(event.target.querySelector(".schedule li").innerText == ""){
    event.target.querySelector(".schedule").style.visibility="hidden";
   }
});
}
const today = new Date();

console.log(document.querySelector("#toDate input").value);

let i=0;
for ( i=0; i<tdList.length; i++){
  tdList[i].addEventListener("click", function(){
  })
}
for( i=0; i<tdList.length; i+=7) {
   tdList[i].classList.add("sun");
}
 for (i=6; i<tdList.length; i+=7) {
   tdList[i].classList.add("sat");
}

const toDateInput = document.querySelector("#toDate input");
const toYear = document.querySelector("#toYear");
toYear.value = today.getFullYear();
toDateInput.value = today.getMonth()+1;
printCalendar();

function cPreDate(){
  toDateInput.value = Number(toDateInput.value)-1;
};

preDate.addEventListener("click", function(){
  cPreDate();
  printCalendar();
});


function cNextDate(){
  toDateInput.value = Number(toDateInput.value)+1;
};


nextDate.addEventListener("click", function(){
cNextDate();
printCalendar();
});
document.querySelector("#toDate input").addEventListener("change", printCalendar);

function printCalendar(){
  let m = toDateInput.value;
  let y = toYear.value;
  console.log(m,y);
if(Number(m)>13) {
  m = Number(toDateInput.value)%12;
  y = Number(toYear.value)+parseInt(Number(m)/12);
}

if(Number(m)==13) {
  m="1";
  y=Number(y)+1;
}
if(Number(m)==0) {
  m = "12";
  y = Number(y)-1;
}
if(Number(m)<0) {
  y = Number(y) - 1 -parseInt(Number(m)/12);
  m = Number(m) - Number(toDateInput.value)%12;
  if(Number(m)==0) {
    m = "12";
  }
}
  lastDay = new Date(Number(y),Number(m),0).getDate();
  firstDay = new Date(Number(y),Number(m)-1,1).getDay();
  let d =1 ;

  lastMonthLastDay = new Date(Number(y),Number(m)-1,0).getDate();
 // m-1달 표기
  for(i=firstDay-1; i>=0; i--){
    tdList[i].querySelector(".day").innerText= lastMonthLastDay--;
    tdList[i].classList.add("disabled");
  };
 // 'm' 달 표기
  for( i=firstDay; i<lastDay+firstDay; i++) {
    tdList[i].classList.add(`m${m}_day${d}`)
    tdList[i].querySelector(".day").innerText= d++;
    tdList[i].classList.remove("disabled");
  };
  // m+1달 표기
    for( i=lastDay+firstDay,d=1; i<tdList.length;i++){
    tdList[i].querySelector(".day").innerText = d++  ;
    tdList[i].classList.add("disabled");
  }
 (m=="1") ? preDate.innerText = (Number(y)-1)+"년 12월" : preDate.innerText = Number(y)+"년"+ (Number(m)-1)+"월";
 (m=="12") ? nextDate.innerText = Number(y)+1+"년 1월" : nextDate.innerText =  Number(y)+"년" +(Number(m)+1)+"월";
 ////////////////////////////////////////////////////////
toYear.value = y;
toDateInput.value = m;

console.log(m+"월");
console.log(y+"년");
};

// const modal = document.querySelector('.modal');
// const btnOpenPopup = document.querySelector('.btn-open-popup');
//
// btnOpenPopup.addEventListener('click', () => {modla.style.display= 'block'})

console.log(document.querySelectorAll(".m9_day13 li")[0]);


const saveBtn = document.querySelector(".saveBtn");

saveBtn.addEventListener("click", function(){
const dayLi = document.querySelectorAll(`#memo > div > ul >li`);
console.log(dayLi[0]);
for(i=0; i<dayLi.length; i++){
document.querySelectorAll(".m9_day13 li")[i].innerHTML = dayLi[i].querySelector('b').innerHTML+dayLi[i].querySelector('span').innerHTML;
}
});
// console.log(dayLi[i].innerHTML);
// console.log(dayLi[i].querySelector(`b`),dayLi[i].querySelector(`span`));
