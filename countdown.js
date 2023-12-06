// 目標日時を指定（年, 月（0-11）, 日, 時, 分, 秒）
const targetDate = new Date( 2024, 2, 11, 9, 0, 0 );

// カウントダウンタイマー
const ele = document.getElementById( 'countdown' );

// カウントダウン処理
const countdown = () => {
  // 現在日時
const now = new Date();
  // 時差
const distance = targetDate - now;

if ( distance < 0 ) {
    ele.innerHTML = "カウントダウン終了！";

} else {
    const days = Math.floor( distance / ( 1000 * 60 * 60 * 24 ) );
    const hours = Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
    const minutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );
    const seconds = Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 );
    const miliseconds = distance < 0 ? 0 : Math.floor( distance % 1000 );

    // カウントダウンタイマーのHTML更新
    ele.innerHTML = `<span>受験まで</span><br>残り<span class="days">${days}</span>日と<span class="hours">${ String( hours ).padStart( 2, '0' ) }</span>時間<span class="minutes">${ String( minutes ).padStart( 2, '0' ) }</span>分<span class="seconds">${ String( seconds ).padStart( 2, '0' ) }</span>.<span>${ String( miliseconds ).padStart( 3, '0' ) }</span>秒`;

    // 再度タイマー更新の実行
    window.requestAnimationFrame( countdown );
}
}

// カウントダウンタイマーの起動
window.requestAnimationFrame( countdown );