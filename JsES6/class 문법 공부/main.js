var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;


//10,10 좌표에 100,100 사이즈 네모 만들기
// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,100,100); 
// 근데 이렇게 하드코딩하지 않음



// 공룡 등장 좌표
var dino = {
    x:10,
    y:200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


// 장애물 등장 좌표
// 장애물은 class 생성자로 만들어보쟈
class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 30;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);        
    }
}


// 캐릭터를 움직이게 하지 말고 장애물을 움직이게 하면 됨

var timer = 0;
var 장애물들 = [];
var 점프timer = 0;
var 애니메이션;
// 공룡으로 애니메이션 만들기
// dino.x += 1;
// 라이브러리 쓰면쉬운데 일단 그냥 해보기
function 프레임마다실행할거(){
    애니메이션 = requestAnimationFrame(프레임마다실행할거);
    timer++;
    ctx.clearRect(0,0,canvas.width,canvas.height);
    // dino.x++;
    // 적당한 프레임마다 이거 실행시켜야 함
    if(timer % 250 === 0 ){
        var Cactus1 = new Cactus();
        장애물들.push(Cactus1);
    }
    장애물들.forEach((a,i,o) => {
        // x 좌표가 0 미만이면 배열에서 없애기
        if(a.x<-100){
            o.splice(i,1)
        }
        a.x--;


        충돌하냐(dino,a);

        a.draw();
    })
    // for ( x of 장애물들){
    // }
    if (점프중 == true){
        dino.y--;
        점프timer++;
    }
    if (점프중 == false){
        if(dino.y < 200){
            dino.y++;
        }
    }

    if(점프timer > 100){
        점프중 = false;
        점프timer = 0;
    }
    dino.draw();
}
프레임마다실행할거();


// 스페이스점프 구현
var 점프중 = false;
document.addEventListener('keydown',function(e){
    if(e.code === 'Space'){
        점프중 = true;
    }
})



// 충돌확인
function 충돌하냐(dino,cactus){
    var x축차이 = cactus.x - (dino.x + dino.width);
    var y축차이 = cactus.y - (dino.y + dino.height);
    if(x축차이 < 0 && y축차이 < 0){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        cancelAnimationFrame(애니메이션);
    }
}
