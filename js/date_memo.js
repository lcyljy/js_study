// 데이터베이스에서 받아온 데이터베이스
//시간은 => 분, 07:10 => 60*7 + 10 = 430
// const d_09 =
//   {
//     13:{
//       430:"기상",
//       450:"학원",
//       1080:"퇴근",
//       1170:"집 도착",
//       1320:"취침"
//     },
//     14:{
//       430:"기상",
//       450:"학원",
//       1080:"퇴근",
//       1170:"집 도착",
//       1320:"취침"
//     }
//   }
const d_0913 =
  {
    430:"기상",
    450:"학원",
    1080:"퇴근",
    1170:"집 도착",
    1320:"취침"
  }
// 430 in d_0913  in은 key가 오브젝트에 있는지 검사 true
let li_html="";

function li_print(){
  for(key in d_0913){
    li_html += `<li>`;
    li_html += `${key} : ${d_0913[key]}`;
    li_html += `</li>`;
    console.log(key);
  }
}

li_print();
const ulschedule = document.querySelector("#memo ul.schedule");
ulschedule.innerHTML = li_html;

document.getElementById('scbtn').addEventListener('click', ()=>{
  const input_text_val = document.querySelector('input[name=text]'); //내용
  const timeVal = document.querySelector('input[type=time]'); //시간
  (timeVal.value.split(':')[0]*60 == 00)
  ? console.log(12*60+Number(timeVal.value.split(':')[1]))
  : console.log(Number(timeVal.value.split(':')[0]*60)+Number(timeVal.value.split(':')[1]))//시간 값

  d_0913 [timeVal.value.split(':')[0]*60] = input_text_val.value;

  console.log(input_text_val.value);//내용 값 출력
  console.log(d_0913);
  li_print();
})
