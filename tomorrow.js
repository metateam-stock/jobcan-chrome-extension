// 翌営業日の日付を計算する関数
function getNextBusinessDay() {
  var currentDate = new Date();
  var nextDay = new Date(currentDate);
  nextDay.setDate(currentDate.getDate() + 1);

  // 翌日が土曜日または日曜日の場合、月曜日にする
  if (nextDay.getDay() === 6) { // 土曜日
    nextDay.setDate(nextDay.getDate() + 2);
  } else if (nextDay.getDay() === 0) { // 日曜日
    nextDay.setDate(nextDay.getDate() + 1);
  }

  var formattedDate = nextDay.toISOString().split('T')[0];
  return formattedDate;
}

// ページの読み込みが完了した時に実行する処理
document.addEventListener('DOMContentLoaded', function() {
  // <input> 要素に初期値を設定
  document.getElementById('myDateInput').value = getNextBusinessDay();
});
