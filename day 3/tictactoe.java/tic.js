let flag = true;
let moves = 0;

let A = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]
let B = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]



const handleClick = (e) =>{
    // console.log(e);
    if(flag){
        e.target.style.backgroundColor = "red";

    }else{
        e.target.style.backgroundColor = "black";

    }
    let move = e.target.id.split(",");
    console.log(move);
    let x = Number(move[0]);
    let y = Number(move[1]);
    flag ?  A[x][y] = 1: B[x][y] = 1;
    moves++;
    console.log(A)
    console.log(moves)
    // console.log(B)

    flag = !flag;

    if(isWin(A)){
        alert("A won")
    }else if(isWin(B)){
        alert("B Won")
    }else if(moves == 9 ){
        alert("Draw")
    }



    // console.dir(e.target);
    // console.log(e.target.id)
    // console.log("==============")
}


function isWin(board) {
    // rows
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === 1 && board[i][1] === 1 && board[i][2] === 1) {
            return true;
        }
    }

    // columns
    for (let i = 0; i < 3; i++) {
        if (board[0][i] === 1 && board[1][i] === 1 && board[2][i] === 1) {
            return true;
        }
    }

    // diagonals
    if (
        (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) ||
        (board[0][2] === 1 && board[1][1] === 1 && board[2][0] === 1)
    ) {
        return true;
    }

    return false;
}


