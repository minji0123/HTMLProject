/*자료형 정리
    1. 문자
    2. 숫자
    3. array
    4. object
    */
/*array랑 object를 사용하는 이유 : 여러가지 자료를 한 곳에 저장하고 싶을 때*/

/*array*/
var 어레이 = ['BMW', 520];
//var 어레이 = ['BMW', '520', 520, [1,2,3]];
/*배열에 숫자 문자 배열 등등 다 넣을 수 있다.*/

console.log(어레이);
console.log(어레이[0]);


/*오브젝트*/
var 오브젝트 = { brand: 'BMW', model: 520 };
//var 오브젝트  ={ brand: 'BMW', model: 520, others: [1,2,3], d: {1:1}};
/*key는 자료 이름임. 자료는 value임*/
/*오브젝트도 어레이랑 똑같이 뭐 다 넣을 수 있음*/
console.log(오브젝트);
console.log(오브젝트.brand);




/*array는 순서 개념이 있는데, object는 순서 개념이 없음*/




/*array 내의 상품 데이터를 꺼내서 html에 넣어보자
데이터 바인딩이라고 함

왜냐면은 서버가 저런 array데이터를 자주보냄*/

var 상품제목 = ['BMW', 520];
var 상품내용 = { brand: 'BMW', model: 520 };

//document.getElementById().innerHTML = 어레이 안에 있는 0번째 데이터;
//$('??').html(어레이 안에 있는 0번째 데이터);;
//뭐 대충 이렇게 짜면 됨

document.getElementById('title').innerHTML = 상품제목[0];
$('#title').html(상품제목[0]);
$('#text').html(상품내용.model);


/*조금 어려운ㄴ거ㄱㄱ*/
var 자료 = [{ brand: 'BMW'}, { model: 520}];
$('#text').html(자료[1].model);

