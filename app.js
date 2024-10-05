let boxed= document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turnO = true;
let count = 0;
let ngb = document.querySelector("#newgame");
let mgc = document.querySelector(".mssgc");
let msg = document.querySelector("#mssg");
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxed.forEach((box) => {
    box.addEventListener('click', () => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
            
        }else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;
        let isw = checkWinner();
        if( count === 9 && !isw){
            gamedraw();
        }
    });
});


const gamedraw = () =>{
    msg.innerText = ' Game Draw!';
    mgc.classList.remove("hide");
    disablebox();
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulation winner is ${winner}`;
    mgc.classList.remove("hide");
    disablebox();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let p1v = boxed[pattern[0]].innerText;  
        let p2v = boxed[pattern[1]].innerText;
        let p3v = boxed[pattern[2]].innerText; 
        if(p1v !== "" && p2v !== "" && p3v !== ""){
            if(p1v === p2v && p2v === p3v){
                alert('Congratulations winner is  :'+p1v);
                showWinner(p1v);
            }
        }  
    }
};

const disablebox = () =>{
    for(let box of boxed){
        box.disabled = true;
    }
};

const enablebox = () =>{
    for(let box of boxed){
        box.disabled = false;
        box.innerText = "";
    }
};

ngb.addEventListener('click', resetg);
resetbtn.addEventListener('click',resetg);

function resetg() {
    turnO = true;
    enablebox();
    mgc.classList.add("hide");
}

















































// let boxed= document.querySelectorAll(".box");
// let resetbtn=document.querySelector("#reset");
// let turnO = true;
// let ngb = document.querySelector("#newgame");
// let mgc = document.querySelector(".mssgc");
// let msg = document.querySelector("#mssg");
// const winPatterns = [
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]
// ];

// boxed.forEach((box) => {
//     box.addEventListener('click', () => {
//         if(turnO){
//             box.innerText = "O";
//             turnO = false;
//         }else{
//             box.innerText = "X";
//             turnO = true;
//         }
//         box.disabled = true;
//         checkWinner();
// });
// });
// const showWinner = (winner) =>{
//     msg.innerText = 'Congratulation winner is ${winner}';
//     msgc.classList.remove("hide");
//     disablebox();
// }
// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         let p1v = boxed[pattern[0]].innerText;  
//         let p2v = boxed[pattern[1]].innerText;
//         let p3v = boxed[pattern[2]].innerText; 
//         if(p1v !="" && p2v!="" && p3v!=""){
//             if(p1v === p2v && p2v === p3v){
//                 //winner
//                 alert("Player "+p1v+" wins!");
//                 showWinner(p1v);
//             }
//         }  
//     }
     
// };

// const disablebox = () =>{
//     for(let box of boxed){
//         box.disabled = true;
//     }
// }
// const enablebox = () =>{
//     for(let box of boxed){
//         box.disabled = false;
//         box.innerText = "";
//     }
// }


// ngb.addEventListener('click', resetg);
// resetbtn.addEventListener('click',resetg);


// const resetg = () =>{
//     turnO = true;
//     enablebox();
//     msgc.classList.add("hide");
// }