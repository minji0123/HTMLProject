/*ch08*/
/*버튼 0(product)을 누르면은
0. 버튼 0 버튼 1 버튼 2에 붙은 주황 하이라이트 제거 (일단 다 지워버리기)
0. 내용 0 내용 1 내용 2에 있는 내용들도 안보이게해주게 (일단 뭐 )
1. 버튼 0이 주황색으로 하이라이트 되어야 함
2. 내용 0이 보여야함*/

/*$('.tab-button')만쓰면은 전부 다 찾아짐. 그래서 (0)번째인거만 찾으려고 저렇게 씀*/
/*
$('.tab-button').eq(0).click(function () {
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(0).addClass('active');
    $('.tab-content').eq(0).addClass('show');
});
*/

/*ch09*/
var 탭개수 = $('.tab-button').length;
for (let i = 0; i < 탭개수; i++) {
    $('.tab-button').eq(i).click(function () {
        $('.tab-button').removeClass('active');
        $('.tab-content').removeClass('show');
        $('.tab-button').eq(i).addClass('active');
        $('.tab-content').eq(i).addClass('show');
    });
};

/*왜 var이 아니라 let을 사용했냐면은
var은 범위가 작음 
그냥 for과 let은 친구라고 생각
*/


/*ch10*/
//$('.black-background').click(function(){
//    $('.black-background').hide();
//});
/*이렇게 짜버리면은 이벤트 버블링때문에 모달창 온갖군데를 눌러도 창이 다 꺼저버림*/

/*해결방법 공부하기 전에, 이벤트리스너의 파라미터를 알아보쟈*/
//$('.black-background').click(function(e){
//    
//    e.target; // 지금 실제로 클릭한 요소
//    e.currentTarget; // 지금 이벤트 리스너가 달린 곳 $('.black-background').요기!!
//    $(this); 자바스크립트로 바꾸러면은 this만 적으셈// 위에거랑 같은뜻ㅇ;ㅁ!
//    e.preventDefault; // 기본동작 막기
//    제이쿼리랑 자스랑 같이쓰면 안되는거 알지??
//    
//    $('.black-background').hide();
//});

$('.black-background').click(function (e) {


    /*만약에 지금 클릭한게 검은배경일때만 모달창을 닫아주셈ㅁ여*/
    if (e.target == e.currentTarget) {
        $('.black-background').fadeOut();
    }
});

