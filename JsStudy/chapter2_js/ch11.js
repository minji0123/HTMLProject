/*ch10*/
$('.black-background').click(function (e) {
    /*만약에 지금 클릭한게 검은배경일때만 모달창을 닫아주셈ㅁ여*/
    if (e.target == e.currentTarget) {
        $('.black-background').fadeOut();
    }
});


/*ch09에서 했던거를 함수로 축약해볼거임*/
//var 탭개수 = $('.tab-button').length;
//for (let i = 0; i < 탭개수; i++) {
//    탭열기(i);
//    });
//};


//function 탭열기(i) {
//    $('.tab-button').removeClass('active');
//    $('.tab-content').removeClass('show');
//    $('.tab-button').eq(i).addClass('active');
//    $('.tab-content').eq(i).addClass('show');
//}

/*일단 for문말고 딴거로 개발해볼거임
왜냐면 저렇게 for문 돌리면 이벤트리스너를 여러개 써야하는데,
이벤트리스너 하나 만들때마다 램을 잡아먹음 그래서 메모리낭비됨

그래서 역으로 이벤트버블링을 활용해서 탭 열어볼거임*/




//$('.list').click(function (e) {
//    /*만약에 내가 실제 누른 요소가 버튼0이면 탭0번째 열어주셈*/
//    if (e.target == document.querySelectorAll('.tab-button')[0]) {
//        탭열기(0);
//    }
//    /*여기서 문제점!! 탭 3개니까 if문 세번써야하고 탭 늘어나면 하드코딩해야됨
//    그래서 반복문이 어쩔수없이 또 들어가서 코드가 복잡해짐
//    
//    html에 몰래 정보심으셈 */
//    
//    /*심은 정보를 꺼내려면은 이케하셈
//    셀렉터.dataset.id
//    그럼 위에있는 if문 안쓰고도 가능함*/
//    
//});

$('.list').click(function (e) {

    // 탭열기(내가누른버튼에 숨겨져 있던 숫자);
    탭열기(e.target.dataset.id);
});


function 탭열기(i) {
    $('.tab-button').removeClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-button').eq(i).addClass('active');
    $('.tab-content').eq(i).addClass('show');
}
