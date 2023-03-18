function lovetime() {
    window.setTimeout("lovetime()", 1000);
    var seconds = 1000
    var minutes = seconds * 60
    var hours = minutes * 60
    var days = hours * 24
    var years = days * 365
    var today = new Date()  //获取当前时间
    var todayYear = today.getFullYear()  //获取当前年份
    var todayMonth = today.getMonth() + 1  //获取当前月份
    var todayDate = today.getDate()  //获取当前日期
    var todayHour = today.getHours()  //获取当前小时
    var todayMinute = today.getMinutes()  //获取当前分钟
    var todaySecond = today.getSeconds()  //获取当前秒
    // 修改这里时间即可 我的是2018.11.19
    var t1 = Date.UTC(2022, 11, 25, 19, 25, 00)  //获取指定日期的UTC时间戳
    var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond)  //获取当前时间的UTC时间戳
    var diff = t2 - t1  //计算时间差
    var diffYears = Math.floor(diff / years)  //计算差多少年
    var diffDays = Math.floor((diff / days) - diffYears * 365)  //计算差多少天
    var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours)  //计算差多少小时
    var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes)  //计算差多少分钟
    var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes *
        minutes) / seconds)  //计算差多少秒

    document.getElementById("lovetime").innerHTML = "我们已经在一起 " + diffYears + "年" + diffDays + "天" +
        diffHours + "小时" + diffMinutes + "分钟" + diffSeconds + "秒啦"

}
lovetime()