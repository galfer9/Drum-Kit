//alert("테스트")
//1. 첫번째 버튼을 클릭하면 alert메세지 '클릭됨'을 화면에 출력

const btns = document.querySelectorAll("button.drum"); //7개 버튼 컬렉션  css에서 button.drum은 버튼태그에 클래스이름에  drum 들어간것 다 선택
//모든 버튼 이벤트
for(let i = 0; i<btns.length; i++){
    btns[i].addEventListener("click",handleClick);   //event객체에 타겟을 조회한후 어떤 버튼인지 알게 됨.    
    }
//키보드 이벤트
document.addEventListener("keydown",handlekeyboard)
document.addEventListener("keydown",
     (e)=>{console.log(e)})

function handlekeyboard(e){
    let text = e.key;
    drumSound(text) 
    animation(e.key)
}

function handleClick(e){
          //console.log(e.target); //내가 선택한 버튼
        const selectBtn =  e.target
        selectBtn.style.color = 'white';  
        // var audio = new Audio("sounds/tom-2.mp3")    //foreach문으로하면 .찍고 함수써주면 됨.
        // audio.play();
        //내가 클릭한 드럼소리가 나게끔~~
        //console.log(e.target.textContent)       
        //음악 파일이름 스트링배열로 넣어서 리팩토링도 가능.
        let click =e.target.textContent;
        drumSound(click);
}


function drumSound(text) {
    if(text =='w'){
        var audio = new Audio("sounds/tom-1.mp3")    //foreach문으로하면 .찍고 함수써주면 됨.
        audio.play();
        } else if(text =='a') {
        var audio = new Audio("sounds/tom-2.mp3")    
        audio.play();
        } else if(text =='s') {
        var audio = new Audio("sounds/tom-3.mp3")    
        audio.play();
        } else if(text =='d') {
        var audio = new Audio("sounds/tom-4.mp3")    
        audio.play();
        } else if(text =='d') {
        var audio = new Audio("sounds/kick-bass.mp3")
        audio.play();
        } else if(text =='d') {
        var audio = new Audio("sounds/crash.mp3")    
        audio.play();
        } else if(text =='d') {
        var audio = new Audio("sounds/snare.mp3")    
        audio.play();
        }
}

function animation(key) {
    const btn = document.querySelector("."+key);
    btn.classList.add("pressed"); //클래스 추가
    setTimeout( ()=>{
        btn.classList.remove("pressed")
    }   ,50);   //0.2초후 누르는 애니메이션 클래스 제거   
}





// let fskC = ()=>  {    //변수함수는 호이스팅 안되므로 반드시 쓰려는 곳 위에 선언
//     alert("클릭됨!");
// } 
// btn1.addEventListener("click",fskC)
//자바스크립트로 audio play 하는 방법 검색하여 alert함수 대신에 입력하여 버튼을 
//클릭하면 드럼 소리가 나도록 한다.
//***target과 currentTarget 차이점 */

 document.querySelector("button.drum").addEventListener("click", function(e)
  {
     console.log("target:", e.target);           // 실제로 클릭된 요소
     console.log("currentTarget:", e.currentTarget); // 이벤트 리스너가 붙어 있는 요소 (여기선 "parent")
 });
