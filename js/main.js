// const tdList = document.getElementById("calendarTable").getElementsByTagName("td");
const tdList = document.querySelectorAll("#calendarTable td");
console.log(tdList);
//hover 이벤트로 변경
// tdList.forEach(function(td) {
//   console.log(td.querySelector(".schedule"))
// });
tdList.forEach((td) => {
  td.onclick=() =>{
  let schedule = td.querySelector(".schedule");
  if (schedule.style.display="none"==true){
  schedule.style.display="block";
  }
  }
});

// date를 받아와서 1부터 30까지 출력
// 수목금토, 조건식?
