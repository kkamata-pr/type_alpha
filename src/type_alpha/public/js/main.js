'use strict';
let true_cnt = 0;
let miss_cnt = 0;
let start_flg = false;

const $typeField = $('#typed');
const $untypeField = $('#untyped');
const $trueCountField = $('#true-type-count');
const $missCountField = $('#miss-type-count');

// タイピングリスト(後でDB抽出処理実装)
const strs = [
    'Apple',
    'Google',
    'Konitiha',
    'Amazon',
    'You',
    'nya',
    'momo',
    'The death game',
    'Order by',
    'sayonaraha anatakaraitta sorenanoni'
];

let typed = ''; // 入力済み文字
let untyped = strs[randomInt(strs.length)]; // 未入力文字
// $untypeField.text(untyped);

function updateTextField(typed, untyped) {
    $typeField.text(typed);
    $untypeField.text(untyped);
}

function next() {
    typed = '';
    untyped = nextString();
    updateTextField(typed, untyped);
}

function randomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function nextString() {
    const idx = randomInt(strs.length);
    return strs[idx];
}

function initTypeField() {
    typed = '';
    untyped = strs[randomInt(strs.length)];
    updateTextField(typed, untyped);
}

function gameStart() {
    $untypeField.text('3');
    setTimeout(() => {$untypeField.text('2')}, 1000);
    setTimeout(() => {$untypeField.text('1')}, 2000);
    setTimeout(showTypeWords, 3000);
}


$("#game-start-btn").click(function(){
    if( start_flg === false ) {
        start_flg = true;
    } else { return; }
    // タイマー実行
    gameStart();
})

// ゲーム終了
function gameEnd() {
    alert("終了");
    true_cnt = 0;
    miss_cnt = 0;
    $trueCountField.text(true_cnt);
    $missCountField.text(miss_cnt);
    start_flg = false;
    $typeField.text('');
    $untypeField.text('');
    $(document).off('keydown');
}

const showTypeWords = function() {
    console.log("ゲーム開始");
    let complete = 0;
    let timer = 90;
    initTypeField();
    $(document).on('keydown', function(e){
        if(e.keyCode === 27) { gameEnd(); return;} // keycode_27:escape
        if(e.key !== untyped.substring(0, 1)) {
            if (e.keyCode !== 16) { // keycode_16:Shift
                miss_cnt++;
                $missCountField.text(miss_cnt);
            }
            return;
        };

        typed += untyped.substring(0, 1);
        untyped = untyped.substring(1);
        true_cnt++;
        $trueCountField.text(true_cnt);

        updateTextField(typed, untyped);

        if (untyped === '') {
            complete++;
            if(complete == 10){
                gameEnd();
            }
            next();
        }
    });

    // 経過時間計算
    function recalc(){
        let date = new Date;
        let passed_time = timer--;
        $('#game-timer').text(passed_time);

        if ( passed_time === 0 ) {
            gameEnd();
            return;
        }
        refresh();
    }
    function refresh(){
        setTimeout(recalc, 1000);
    }
    recalc();
}

