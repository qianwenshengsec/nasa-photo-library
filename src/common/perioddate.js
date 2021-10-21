export default function(minus_days){

  function formatDate(timestamp_ms) {
    var date = new Date(timestamp_ms);
    var YY = date.getFullYear() + "-";
    var MM =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    var DD = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
    var hh =
      (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) + ":";
    var mm =
      (date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()) +
      ":";
    var ss =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    // return YY + MM + DD + " " + hh + mm + ss;
    return YY + MM + DD;
  }

  var timestamp_ms=new Date().getTime()


  // 美国时间 延迟一天
  let currentYYYYMMDD = formatDate(timestamp_ms-86400000)

  function lateDate(minus_days) {
    let timestamp_ms = new Date().getTime();
    let latenow = timestamp_ms - 86400000 * minus_days;
    return formatDate(latenow);
  }

  let lateYYYYMMDD = lateDate(minus_days)

  return [lateYYYYMMDD,currentYYYYMMDD]

}




