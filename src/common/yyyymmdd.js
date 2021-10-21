export default function () {
  var nowDate = new Date(); //当前时间
  // console.log(nowDate)
  var year = nowDate.getFullYear(); //获取年
  var month =
    nowDate.getMonth() + 1 < 10
      ? "0" + (nowDate.getMonth() + 1)
      : nowDate.getMonth() + 1; //获取月份，两位不够补0
  var day =
    nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate(); //获取日期，两位不够补0

  var dateStr = year + "-" + month + "-" + day;

  return dateStr
}