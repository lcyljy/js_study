// 데이터베이스 서버와 통신해서 9월 10일 할 일 목록을 만들었다.
//
const d_09_10 = ["aaa","bbb","ccc","ddd"];
  schedulePrint();

function schedulePrint(){
  let scheduleLiHtml="";


//+=<li>aaa</li>
//+=<li>bbb</li>
d_09_10.forEach((item, i) => {
  scheduleLiHtml+=`<li>${i}:${item}</li>`;
});
// console.log(scheduleLiHtml);
const ulSchedule = document.querySelector("#memo ul.schedule");
ulSchedule.innerHTML=scheduleLiHtml;

}
// 기본키 - 날짜 _ 시간
// console.log(document.querySelector(".insert_schedule").querySelector("#indexNum").value);
// console.log(document.querySelector(".insert_schedule")[0].value);
const insert_schedule = document.querySelector(".insert_schedule");
console.log(insert_schedule[0].value); // 시간입력값. *60 해서 저장
console.log(insert_schedule[1].value); // 분 입력값 . 그대로 저장. [0]+[1] = 시간*60+분 -> 데이터베이스에 저장. 후
// 출력은 해당 값을 다시 60으로 나누어 몫을 0에, 나머지를 분에 저장
console.log(insert_schedule[2].value);
function schedulePrintPlus (i,e){
  d_09_10.push(e.target.value)

}
// const ulSchedule = document.querySelector("#memo ul.schedule")
// ulSchedule.append(li_node);
//스케줄 추가 버튼을 누르면 데이터 베이스 서버에 insert를 하고,다시 insert된 리스트를 출력받는다.
// => 기존의 list에 값을 추가한 것을 대신한다.
//리스트 삭제 버튼을 누르면 데이터 베이스 서버에 delete를 하고 다시 리스트를 받는다
//=;ㅣ./;p> 기존의 list에 값을 삭제하는 것으로 대신한다.
