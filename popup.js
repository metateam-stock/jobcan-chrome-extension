document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // デフォルトのフォーム送信をキャンセル

  var inputDate = document.getElementById('myDateInput').value;
  var formattedDate = formatDate(inputDate); // 指定された形式で日付を整形

  var baseUrl = 'https://ssl.jobcan.jp/m/work/accessrecord';
  var newUrl = baseUrl + '?recordDay=' + formattedDate; // 日付をクエリパラメータとして追加

  openNewTab(newUrl);
});

// 日付を指定された形式で整形する関数
function formatDate(dateString) {
  var date = new Date(dateString);
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0');
  var day = date.getDate().toString().padStart(2, '0');
  return year + month + day;
}

// 新しいタブでページを開く関数
function openNewTab(url) {
  chrome.tabs.create({ active: true, url });
}