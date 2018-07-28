var element = document.getElementsByTagName("relative-time")[0]
var string = element.getAttribute("datetime")
// alert(string)

var date = new Date(string)

// alert(date)

// 日付がJSON形式か判定
if(date.getDate()==13 && date.getDay()==5) {
    // alert(date)
} else {
    date.setDate(13)
    while(date.getDay()!=5){
        date.setMonth(date.getMonth()+1)
        console.log(date)
        console.log(date.getDay())
    }
    // alert(date)
}

// console.log(date)
// console.log(date.getDay())
// console.log(date.getDate())

// ES6のリテラルが使えん・・・
// alert('aiueo ${111+222}')

element.title = date.getFullYear() + "年" + (date.getMonth()+1) + "月" + date.getDate() + "日 " 
 + date.getHours() + ":" + date.getMinutes() 
 element.textContent = date.getDate() + " " + (date.getMonth()+1) + " " + date.getFullYear()

// ${date.getDate()} ${date.getMonth()} ${date.getFullYear()}