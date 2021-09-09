// const tdList = document.getElementById("calendarTable").getElementsByTagName("td");
const tdList = document.querySelectorAll("#calendarTable td");
const thList = document.querySelectorAll("#calendarTable th");
console.log(tdList);
console.log(thList);
thList[0].classList.add("sun");
thList[6].classList.add("sat");

const preDate = document.querySelector("#preDate");
const nextDate = document.querySelector("#nextDate");
console.log(preDate);


//hover 이벤트로 변경
// tdList.forEach(function(td) {
//   console.log(td.querySelector(".schedule"))
// });

// tdList.forEach((td) => {
//   td.onclick = () => {
//     let schedule = td.querySelector(".schedule");
//     if (schedule.style.display == "none") {
//       schedule.style.display = "block";
//     } else {
//       schedule.style.display = "none";
//     }
//   }
// });

for(td of tdList){
  td.onmouseenter=(event) => {
    // if(event.target.querySelector(".schedule").style.visibility=="hidden"){
    // console.log(this);
    // this는 블럭 안의 요소 또는 이벤트가 발생한 대상 요소
    // 화살표 함수는 this를 자바스크립트 최상위 부모인 window로 받는다.(쁠럭을 무시)
    // console.log(td)
    // console.log(event.target)
    // if ()
    event.target.querySelector(".schedule").style.visibility="visible";
  // } else {
  //   event.target.querySelector(".schedule").style.visibility="hidden";
  // }
}; td.addEventListener("mouseleave", function(event) {
    event.target.querySelector(".schedule").style.visibility="hidden";
  });
}

// mouseover : 하위(자식) 요소(element)에 이벤트를 전달한다.
// mouseenter : 이벤트 전달을 하지 않는다.
const today = new Date();

console.log(document.querySelector("#toDate input").value);
// let lastDay = new Date(2021,9,0).getDate();
// // console.log(lastDay);
//
// // 9월의 시작하는 요일 구하기 요일 0~6(일~토)
// let firstDay = new Date(2021,8,1).getDay();
// let d =1 ;
// for(let i=firstDay; i<lastDay+firstDay; i++) {
//   tdList[i].querySelector(".day").innerText= d++;
// }
// for(let l =1; l<firstDay+1; l++){
// tdList[firstDay-l].querySelector(".day").innerText = new Date(2021,8,-l).getDate();
// }
let i=0;


for (i=0; i<tdList.length; i++){
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
  // nextDate.innerText =  Number(toDateInput.value)+1+"월";
  // if(toDateInput.value == "0"){
  //   toYear.value = Number(toYear.value)-1;
  // } else {
  // preDate.innerText =  Number(toDateInput.value)-1+"월";
  // }

};

preDate.addEventListener("click", function(){
// if(toDateInput.value !=="1"){
// }
cPreDate();
printCalendar();
});


function cNextDate(){
  toDateInput.value = Number(toDateInput.value)+1;
//   preDate.innerText =  Number(toDateInput.value)-1+"월"
//   if( toDateInput.value == "13") {
//     nextDate.innerText ="1";
//   } else {
//   nextDate.innerText =  Number(toDateInput.value)+1+"월";
// }
};


nextDate.addEventListener("click", function(){
  // if(toDateInput.value !=="12"){
  //
  // }
cNextDate();
printCalendar();
});
// function testA(){
//   if (nextDate. = 12)
// }
// console.log(nextDate.innerText.includes("12"));


document.querySelector("#toDate input").addEventListener("change", printCalendar);


function printCalendar(){
  let m = toDateInput.value;
  let y = toYear.value;
  console.log(m,y);
if(Number(m)>13) {
  m = Number(toDateInput.value)%12;
  y = Number(toYear.value)+parseInt(Number(m)/12);
} // 만약 13보다 큰값 입력시. 12로 나누어 나머지값을 m에, 몫을 y+? 값에...  m =m%12, y = Number(y)+m//12
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
// 만약 0보다 작은값 입력시. 12로 나누어 나머지값 m에, 몫을 y+? 값에...
// todateInput.value 에 입력한 값을 Number로 숫자로 인식되도록 바꾸어서 12로 나누어 나머지값이 m에 (나머지값이 0일때, m="12"), 몫을 Number(y)+(몫)
// let m = Number(toDateInput.value)%12;
// let y = toYear.value;
//
// if (m < 0) {
//   y = toYear.value -1 + parseInt(Number(m)/12)
// } else {
//  y = Number(toYear.value)+parseInt(Number(m)/12)
// };
// if (m == 0) {
//   m ="12";
//   y = Number(toYear.value)+parseInt(Number(m)/12)
// }
// m이 0일때 혹은 0이 마이너스일 때. if(m=="0") m="12"
// m
// if( m == "0") {m="12"}
  // m월의 마지막 일 구하기
  lastDay = new Date(Number(y),Number(m),0).getDate();
  // console.log(lastDay);

  // m월의 시작하는 요일 구하기 요일 0~6(일~토)
  firstDay = new Date(Number(y),Number(m)-1,1).getDay();
  // console.log(firstDay);
  // console.log(firstDay)
  let d =1 ;
  // for(let l =0; l<firstDay; l++){
  // tdList[firstDay-1-l].querySelector(".day").innerText = new Date(2021,Number(m),Number(lastDay)-l).getDate();
  // }


  lastMonthLastDay = new Date(Number(y),Number(m)-1,0).getDate();
 // m-1달 표기
  for(i=firstDay-1; i>=0; i--){
    tdList[i].querySelector(".day").innerText= lastMonthLastDay--;
    tdList[i].classList.add("disabled");
  };
 // 'm' 달 표기
  for( i=firstDay; i<lastDay+firstDay; i++) {
    tdList[i].querySelector(".day").innerText= d++;
    tdList[i].classList.remove("disabled");
  };
  // m+1달 표기
    for( i=lastDay+firstDay,d=1; i<tdList.length;i++){
    tdList[i].querySelector(".day").innerText = d++  ;
    tdList[i].classList.add("disabled");
  }
//   if(m>1){
//   preDate.innerText = Number(m)-1+"월";
//   nextDate.innerText = Number(m)+1+"월";
// } else if (m=12) {
//   nextDate.innerText = "2022년 1월";
// } else if (m=1){
//   preDate.innerText = "2021년 12월";
// }
// ///////////////////////////////////////////
//  if else 문을 삼항연산자로 변환
// if( m=="1") {
//   preDate.innerText = (Number(y)-1)+"년 12월";
// } else {
// preDate.innerText = Number(y)+"년"+ (Number(m)-1)+"월";
// }
// if( m=="12" ){
//   nextDate.innerText = Number(y)+1+"년 1월"
// } else {
// nextDate.innerText =  Number(y)+"년" +(Number(m)+1)+"월";
// }
 (m=="1") ? preDate.innerText = (Number(y)-1)+"년 12월" : preDate.innerText = Number(y)+"년"+ (Number(m)-1)+"월";
 (m=="12") ? nextDate.innerText = Number(y)+1+"년 1월" : nextDate.innerText =  Number(y)+"년" +(Number(m)+1)+"월";
 ////////////////////////////////////////////////////////
toYear.value = y;
toDateInput.value = m;

console.log(m+"월");
console.log(y+"년");
};


// let m = document.querySelector("#toDate input").value;

// preDate.addEventListener("click", function(){
//   m = Number(m-1);
// });
// nextDate.addEventListener("click", function(){
//   m = Number(m+1);
// });


const modal = document.querySelector('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');

btnOpenPopup.addEventListener('click', () => {modla.style.display= 'block'})




// document.write(document.getElementById("todayCalendar") .);

// date를 받아와서 1부터 30까지 출력
// 수목금토, 조건식?
