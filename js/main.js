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
for( i=0; i<tdList.length; i+=7) {
   tdList[i].classList.add("sun");
 }
 for (i=6; i<tdList.length; i+=7) {
   tdList[i].classList.add("sat");
 }

const toDateInput = document.querySelector("#toDate input");

toDateInput.value = today.getMonth()+1;



preDate.addEventListener("click", cPreDate);
function cPreDate(){
  toDateInput.value = Number(toDateInput.value)-1;
  preDate.innerText =  Number(toDateInput.value)-1+"월";
};

nextDate.addEventListener("click", cNextDate);
function cNextDate(){
  toDateInput.value = Number(toDateInput.value)+1;
  nextDate.innerText =  Number(toDateInput.value)+1+"월";
};
document.querySelector("#toDate input").addEventListener("change", function(){
let k = document.querySelector("#toDate input").value;


  // k월의 마지막 일 구하기
  lastDay = new Date(2021,Number(k),0).getDate();
  // console.log(lastDay);

  // k월의 시작하는 요일 구하기 요일 0~6(일~토)
  firstDay = new Date(2021,Number(k)-1,1).getDay();
  // console.log(firstDay);
  // console.log(firstDay)
  let d =1 ;
  // for(let l =0; l<firstDay; l++){
  // tdList[firstDay-1-l].querySelector(".day").innerText = new Date(2021,Number(k),Number(lastDay)-l).getDate();
  // }


  lastMonthLastDay = new Date(2021,Number(k)-1,0).getDate();
  for(i=firstDay-1; i>=0; i--){
    tdList[i].querySelector(".day").innerText= lastMonthLastDay--;
    tdList[i].classList.add("disabled");
  };
  for( i=firstDay; i<lastDay+firstDay; i++) {
    tdList[i].querySelector(".day").innerText= d++;
    tdList[i].classList.remove("disabled");
  };
    for( i=lastDay+firstDay,d=1; i<tdList.length;i++){
    tdList[i].querySelector(".day").innerText = d++  ;
    tdList[i].classList.add("disabled");
  }
//   if(k>1){
//   preDate.innerText = Number(k)-1+"월";
//   nextDate.innerText = Number(k)+1+"월";
// } else if (k=12) {
//   nextDate.innerText = "2022년 1월";
// } else if (k=1){
//   preDate.innerText = "2021년 12월";
// }
preDate.innerText =  Number(toDateInput.value)-1+"월";
nextDate.innerText =  Number(toDateInput.value)+1+"월";
});
// let k = document.querySelector("#toDate input").value;

// preDate.addEventListener("click", function(){
//   k = Number(k-1);
// });
// nextDate.addEventListener("click", function(){
//   k = Number(k+1);
// });







// document.write(document.getElementById("todayCalendar") .);

// date를 받아와서 1부터 30까지 출력
// 수목금토, 조건식?
