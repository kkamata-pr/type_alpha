@extends('common/layout')
@extends('common/header') 

@section('content')
<div class="l-block">
    <label for="type-area">入力欄</label>
</div>
<div class="contents">
    <span id="typed"></span><span id="untyped"></span>
</div>

<div class="row">
    <div class="col-8">
        <div class="mirror text-center">
            <p id="type-mirror"></p>
        </div>
    </div>
</div><!-- /.row -->

<div class="true-type text-center">
    <label>true:<span id="true-type-count">0</span></label>
</div>
<div class="miss-type text-center">
    <label>miss:<span id="miss-type-count">0</span></label>
</div>

<div class="start-btn text-center">
    <input id="game-start-btn" type="button" value="開始">
</div>

<div class="game-timer text-center">
    <label>残り時間:<span id="game-timer">0</span></label>
</div>



@endsection('content')
@extends('common/footer') 