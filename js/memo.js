// 데이터베이스 서버와 통신해서 9월 10일 할 일 목록을 만들었다.
//
// const d_09_10 = ["aaa","bbb","ccc","ddd"];
//   schedulePrint();
//
//
// function schedulePrint(){
//   let scheduleLiHtml="";
// //+=<li>aaa</li>
// //+=<li>bbb</li>
// d_09_10.forEach((item, i) => {
//   scheduleLiHtml+=`<li>${i}:${item}</li>`;
// });
// // console.log(scheduleLiHtml);
// const ulSchedule = document.querySelector("#memo ul.schedule");
// ulSchedule.innerHTML=scheduleLiHtml;
// }
// 기본키 - 날짜 _ 시간
// console.log(document.querySelector(".insert_schedule").querySelector("#indexNum").value);
// console.log(document.querySelector(".insert_schedule")[0].value);


  const insert_schedule = document.querySelector(".insert_schedule");
  console.log(insert_schedule[0].value); // 시간입력값. *60 해서 저장
  console.log(insert_schedule[1].value); // 분 입력값 . 그대로 저장. [0]+[1] = 시간*60+분 -> 데이터베이스에 저장. 후
  // 출력은 해당 값을 다시 60으로 나누어 몫을 0에, 나머지를 분에 저장
  console.log(insert_schedule[2].value);
  // function schedulePrintPlus (i,e){
  //   d_09_10.push(e.target.value)
  //
  // }
  const timeHour = Number(insert_schedule[0].value);
  const timeMin = Number(insert_schedule[1].value);
  const scheduleValue = insert_schedule[2].value;
  const todaySchedule = [
    {
   "time": (timeHour*60)+timeMin,
  "value": scheduleValue,
}] // 시간과 값... json형태로 만들기
console.log(todaySchedule[0]); // 해당 위치값 확인
console.log(todaySchedule[0].time); // 시간위치확인
console.log(todaySchedule[0].value); // 스케줄 추가값 위치 확인

console.log(timeHour, timeMin, scheduleValue);
const d_09_10 = [{"time": 300, "value": "test"},{"time": 400, "value":"text2"}];
console.log(d_09_10);
schedulePrint();

function schedulePrint(){
let scheduleLiHtml="";
  for( i=0; i<d_09_10.length; i++){
    scheduleLiHtml += `<li>`
    scheduleLiHtml+=`${d_09_10[i].time} : ${d_09_10[i].value}`
    scheduleLiHtml+= `<button class='delete' value='${i}' onclick='deleteSchedule(event)'>x</button>`
    scheduleLiHtml+=`</li>`;

  }

  const ulSchedule = document.querySelector("#memo ul.schedule");
  ulSchedule.innerHTML=scheduleLiHtml;
}
console.log(schedulePrint);
// console.log(insert_schedule[3]);
const insert_scheduleBtn = insert_schedule[3];
console.log(insert_scheduleBtn);

insert_scheduleBtn.addEventListener("click", function(){
// console.log(e);
document.querySelector("#memo ul.schedule").innerHTML+=`<li>${timeHour} : ${timeMin},${scheduleValue}<button class='delete' value='${i}' onclick='deleteSchedule(event)'>x</button></li>`
   // scheduleLiHtml+=`<li>${timeHour} : ${timeMin},${scheduleValue}</li>`
});

console.log(document.querySelectorAll(".schedule li"));
// console.log(document.querySelectorAll(".dataBase li"));
// document.queryselectorAll(".dataBase_li") = [{timeHour}*60]
const dataBase_li = document.querySelectorAll(".dataBase li");
console.log(dataBase_li);

function deleteSchedule(e){
  let deleteIndex = Number(e.target.value);
  d_09_10.splice(deleteIndex,1);
  schedulePrint()
}
// const ulSchedule = document.querySelector("#memo ul.schedule")
// ulSchedule.append(li_node);
//스케줄 추가 버튼을 누르면 데이터 베이스 서버에 insert를 하고,다시 insert된 리스트를 출력받는다.
// => 기존의 list에 값을 추가한 것을 대신한다.
//리스트 삭제 버튼을 누르면 데이터 베이스 서버에 delete를 하고 다시 리스트를 받는다
//=;ㅣ./;p> 기존의 list에 값을 삭제하는 것으로 대신한다.
