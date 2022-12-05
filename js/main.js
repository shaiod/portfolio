// main.js
// 윈도우 높이값을 가져와서 #container > div 높이값으로 지정
// 윈도우 resize가 되도 동일하게 적용

let devHeight = window.innerHeight;

window.addEventListener("resize", () => {
    devHeight = window.innerHeight;
})

let contents = document.querySelectorAll("#container>div");
for (let i=0; i<contents.length; i++){
    contents[i].style.height = devHeight + "px";
}

var mHtml = $("html");
var page = 1;

mHtml.animate({scrollTop : 0},10);

$(window).on("wheel", function(e) {
  if(mHtml.is(":animated")) return;
  if(e.originalEvent.deltaY > 0) {
      if(page == 7) return;
      page++;
  } else if(e.originalEvent.deltaY < 0) {
      if(page == 1) return;
      page--;
  }
  var posTop =(page-1) * $(window).height();
  mHtml.animate({scrollTop : posTop},800);
})



const content = "웹 개발자와 디자이너를 꿈꾸는 강유진입니다.";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
    }
}
setInterval(typing, 200)

//메뉴 안보였다가 보이게 하기
$(document).ready(function(){

    var navHeight = $("#quick").height(); 
    //quick 의 높이를 구하기

    $(".quick").hide();
    //스크롤시 나타날 객체 미리 숨기기

    $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
        var rollIt = $(this).scrollTop() >= navHeight; 
// 스크롤의 정도가 navHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 navHeight 의 높이와 같거나 크다

/*
scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
*/

    if(rollIt){ 
		//윈도우 스크롤 기능의 값이 navHeight 의 높이와 같거나 크면
            $(".quick").show().css({"position":"fixed"});
        }
        else{
            $(".quick").hide();
        }
    });
    
});

// click on 라벨 추가 모달 열기
$(document).on('click', '#modal_btn', function (e) {
    console.log("click event");
    $('#modal').addClass('show');
  
  });
  
  // 모달 닫기
  $(document).on('click', '#close_btn', function (e) {
    console.log("click event");
    $('#modal').removeClass('show');
  
  });

  $(document).on('click', '#modal_btn2', function (e) {
    console.log("click event");
    $('#modal2').addClass('show');
  
  });
  
  // 모달 닫기
  $(document).on('click', '#close_btn2', function (e) {
    console.log("click event");
    $('#modal2').removeClass('show');
  
  });

  $(document).on('click', '#modal_btn3', function (e) {
    console.log("click event");
    $('#modal3').addClass('show');
  
  });
  
  // 모달 닫기
  $(document).on('click', '#close_btn3', function (e) {
    console.log("click event");
    $('#modal3').removeClass('show');
  
  });
 
 
