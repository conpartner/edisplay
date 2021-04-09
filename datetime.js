function datetime(){
  var currentDate = new Date();
  var clock = document.getElementById("clock");
  // var year = date.getFullYear(); // 연도를 받아옵니다
  var month = currentDate.getMonth(); // 달을 받아옵니다
  var clockDate = currentDate.getDate(); // 몇일인지 받아옵니다
  var day = currentDate.getDay(); // 요일을 받아옵니다.
  var week = ['일', '월', '화', '수', '목', '금', '토']; // 요일은 숫자형태로 리턴되기때문에 미리 배열을 만듭니다.
  var hours = currentDate.getHours(); // 시간을 받아오고
  var minutes = currentDate.getMinutes(); // 분도 받아옵니다.
  var seconds = currentDate.getSeconds(); // 초까지 받아온 후

  var apm = currentDate.getHours();
  if(apm<12){
    apm="am";
    }
    else{
    apm="pm";
    }
  if(hours>12){
    hours=hours-12;
    }
    else{
    hours=hours;
    }

  var msg = (month+1) + "월" + " " + clockDate + "일" + "(" + week[day] + ")" + " " + "\n" +
            apm + " " + hours + "시";
  msg += " " + currentDate.getMinutes() + "분";
  // msg += " " + currentDate.getSeconds() + "초";

  clock.innerText=msg;

  setTimeout(datetime,1000);
  }
window.onload=datetime; // <body onload="datetime()"> 대용!
