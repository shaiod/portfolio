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

window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = $("#container>div").length;

$html.animate({scrollTop:0},10);

$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop},window.innerHeight); //window.innerheight 한섹션 길이로
 
});




const content = "웹 UI 개발자를 꿈꾸는 강유진입니다.";
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

// //메뉴 안보였다가 보이게 하기
// $(document).ready(function(){

//     var asideHeight = $("#quick").height(); 
//     //quick 의 높이를 구하기

//     $(".quick").hide();
//     //스크롤시 나타날 객체 미리 숨기기

//     $(window).scroll(function(){  // 윈도우 스크롤 기능 작동
//         var rollIt = $(this).scrollTop() >= asideHeight; 
// // 스크롤의 정도가 asideHeight 의 값을 넘었을 때 == 윈도우 스크롤의 값이 asideHeight 의 높이와 같거나 크다

// /*
// scrollTop 은 윈도우에서 스크롤의 위치가 가장 상위에 있다는 의미로 해석
// 스크롤의 위치가 화면 아래일수록 == scrollTop 의 값이 커짐
// */

//     if(rollIt){ 
// 		//윈도우 스크롤 기능의 값이 asideHeight 의 높이와 같거나 크면
//             $(".quick").show().css({"position":"fixed"});
//         }
//         else{
//             $(".quick").hide();
//         }
//     });
    
// });

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
 
  $(document).on('click', '#modal_btn4', function (e) {
    console.log("click event");
    $('#modal4').addClass('show');
  
  });
  
  // 모달 닫기
  $(document).on('click', '#close_btn4', function (e) {
    console.log("click event");
    $('#modal4').removeClass('show');
  
  });
 


AOS.init({
  duration: 1000,
})



// 해당 버튼을 눌렀을때 이미지 바꾸기


// 서울스테이
$(document).on('click', '.close_btn4', function(){
  $("#img1").attr("src", "./img/서울스테이 보고서_1.JPG");
});

$(document).on('click', '.on1', function(){
  $("#img1").attr("src", "./img/서울스테이-html검사.png");
});

$(document).on('click', '.on2', function(){
  $("#img1").attr("src", "./img/css검사-서울스테이.PNG");
});



// on 눌렀을때 새로고침 안되게 하기
const Img= document.querySelector("#img1");
const on1= document.querySelector(".on1");
on1.addEventListener('click', function(e) {

  e.preventDefault();
  
  });

  const on2= document.querySelector(".on2");
  on2.addEventListener('click', function(e) {
  
    e.preventDefault();
    
    });

// 메가커피
$(document).on('click', '.close_btn2', function(){
  $("#img2").attr("src", "./img/메가커피 보고서_1.jpg");
});

$(document).on('click', '.on3', function(){
  $("#img2").attr("src", "./img/메가커피-html검사.png");
});

$(document).on('click', '.on4', function(){
  $("#img2").attr("src", "./img/css검사서비스-메가커피.PNG");
});

// on 눌렀을때 새로고침 안되게 하기
const Img2= document.querySelector("#img2");
const on3= document.querySelector(".on3");
on3.addEventListener('click', function(e) {

  e.preventDefault();
  
  });

const on4= document.querySelector(".on4");
on4.addEventListener('click', function(e) {
  
    e.preventDefault();
    });

// 삼성전기
$(document).on('click', '.close_btn3', function(){
  $("#img3").attr("src", "./img/삼성전기 보고서_1.jpg");
});

$(document).on('click', '.on5', function(){
  $("#img3").attr("src", "./img/사본 -삼성전기 html 검사.png");
});

$(document).on('click', '.on6', function(){
  $("#img3").attr("src", "./img/삼성전기-css검사.PNG");
});

// on 눌렀을때 새로고침 안되게 하기
const Img3= document.querySelector("#img3");
const on5= document.querySelector(".on5");
on5.addEventListener('click', function(e) {

  e.preventDefault();
  
  });

const on6= document.querySelector(".on6");
on6.addEventListener('click', function(e) {
  
    e.preventDefault();
    });

// 스크롤 이벤트 최적화시키기
    // window.addEventListener(
    //   'scroll',
    //   toFit(onScroll, {
    //     // triggerCondition:
    //     // dismissCondition:
    //   }),
    //   { passive: true }
    // )
  
const passiveEvent = passiveEventSupported
?{capture: false, passive: true}
:false
document.addEventListener("scroll",onScroll,passiveEvent);