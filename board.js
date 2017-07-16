

const Pieces = require('./pieces.js');
const vline = ' ║';

const wk = Pieces.white_king;
const wq = Pieces.white_queen;
const wb = Pieces.white_bishop;
const wh = Pieces.white_knight;
const wr = Pieces.white_rook;
const wp = Pieces.white_pawn;

const bk = Pieces.black_king;
const bq = Pieces.black_queen;
const bb = Pieces.black_bishop;
const bh = Pieces.black_knight;
const br = Pieces.black_rook;
const bp = Pieces.black_pawn;

const ee = Pieces.empty;

// Thanks to https://recessiondodgetovictory.wordpress.com/2011/01/12/ascii-chessboard/
exports.startboard = 
    `
8 ║♜♞♝♛♚♝♞♜
7 ║♟♟♟♟♟♟♟♟
6 ║… … … … … … … …
5 ║… … … … … … … …
4 ║… … … … … … … …
3 ║… … … … … … … …
2 ║♙♙♙♙♙♙♙♙
1 ║♖♘♗♕♔♗♘♖
  ╚═══════════════
   a b c d e f g h`;

let bottom =
 `  ╚═══════════════
   a b c d e f g h`;

let makeline = function(n, pieces){
    let out = (n+1) + vline;
    for ( let i = 0; i < 8; i++ ){
        out = out + pieces[i]
    }
    return out;
};

const initial_board =
 [
     [ br, bh, bb, bq, bk, bb, bh, br ],
     [ bp, bp, bp, bp, bp, bp, bp, bp ],
     [ ee, ee, ee, ee, ee, ee, ee, ee ],
     [ ee, ee, ee, ee, ee, ee, ee, ee ],
     [ ee, ee, ee, ee, ee, ee, ee, ee ],
     [ ee, ee, ee, ee, ee, ee, ee, ee ],
     [ wp, wp, wp, wp, wp, wp, wp, wp ],
     [ wr, wh, wb, wq, wk, wb, wh, wr ]
 ];


let new_board = function(){
    let out = []
    for ( let i = 0; i < 8; i++ ){
        out[i] = initial_board[i].slice(0);
    }
    return out;
}

let board = new_board();

let reset = function(){
    board = new_board();
}


let makeboard = function(){
    let out = '';
    for ( let i = 0; i < 8; i++ ){
        out = out + makeline(i, board[i]) + '\n';
    }
    out = out + bottom;
    return out;
 };

let move = function(c1, r1, c2, r2){
    board[r2][c2] = board[r1][c1];
    board[r1][c1] = ee;
}


exports.printboard = makeboard;
exports.move = move;
exports.reset = reset;







