const insert_schedule = document.querySelector(".insert_schedule input");
console.log(insert_schedule);
const timeHour = Number(insert_schedule[0]);
const timeMin = Number(insert_schedule[1]);
const scheduleValue = insert_schedule[2];
console.log(timeHour);
console.log(timeMin);
console.log(scheduleValue);
insert_schedule.addEventListener("change", function(){
  console.log(insert_schedlue[0].value);
});

const todaySchedule = [{
  "time": (timeHour * 60) + timeMin,
  "value": scheduleValue,
}];


// console.log(timeHour, timeMin, scheduleValue);
function DayObject(time,value){
  this.time=time;
  this.value=value;
}
const a=new DayObject(300,"eee");
const d_09_10 = [a, new DayObject(400,"fff")];
console.log(d_09_10);
schedulePrint();

// const inputChangeDB = [timeHour, timeMin, scheduleValue]
// const inputChange = document.querySelectorAll(".insert_schedule input");
// for(let i=0; i<inputChange.length; i++){
// inputChange[i].addEventListener("change", function(e){
//   console.log(inputChangeDB[i] = e.target.value);
// });
// }

function schedulePrint() {
  let scheduleLiHtml = "";
  for (let i = 0; i < d_09_10.length; i++) {
    scheduleLiHtml += `<li>`
    scheduleLiHtml += `${d_09_10[i].time} : ${d_09_10[i].value}`
    scheduleLiHtml += `<button class='delete' value='${i}' onclick='deleteSchedule(event)'>x</button>`
    scheduleLiHtml += `</li>`;
  }
  const ulSchedule = document.querySelector("#memo ul.schedule");
  ulSchedule.innerHTML = scheduleLiHtml;
}

// console.log(schedulePrint);
const insert_scheduleBtn = insert_schedule[3];

insert_scheduleBtn.addEventListener("click", function() {

  d_09_10.push(new DayObject(todaySchedule[0].time, todaySchedule[0].value));
  schedulePrint();
// console.log(e);
  // scheduleLiHtml+=`<li>${timeHour} : ${timeMin},${scheduleValue}</li>`
});

// console.log(document.querySelectorAll(".schedule li"));
// console.log(document.querySelectorAll(".dataBase li"));
// document.queryselectorAll(".dataBase_li") = [{timeHour}*60]
const dataBase_li = document.querySelectorAll(".dataBase li");
console.log(dataBase_li);

function deleteSchedule(e) {
  let deleteIndex = Number(e.target.value);
  d_09_10.splice(deleteIndex, 1);
  schedulePrint();
}
// const ulSchedule = document.querySelector("#memo ul.schedule")
// ulSchedule.append(li_node);
//스케줄 추가 버튼을 누르면 데이터 베이스 서버에 insert를 하고,다시 insert된 리스트를 출력받는다.
// => 기존의 list에 값을 추가한 것을 대신한다.
//리스트 삭제 버튼을 누르면 데이터 베이스 서버에 delete를 하고 다시 리스트를 받는다
//=;ㅣ./;p> 기존의 list에 값을 삭제하는 것으로 대신한다.
