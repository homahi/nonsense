// 2018-07-27 沓掛T3活動 14:00~

function isJSON(){
    var string = document.forms.json.textbox.value
    var date = new Date(string)

    // 日付がJSON形式か判定
    if(date.getDate()==13 && date.getDay()==5) {
        alert("JSON")
    }

    console.log(date)
    console.log(date.getDay())
    console.log(date.getDate())

}

function translateJSON(){
    var string = document.forms.json.textbox.value
    var date = new Date(string)

    // 日付がJSON形式か判定
    if(date.getDate()==13 && date.getDay()==5) {
        alert(date)
    } else {
        date.setDate(13)
        while(date.getDay()!=5){
            date.setMonth(date.getMonth()+1)
            console.log(date)
            console.log(date.getDay())
        }
        alert(date)
    }

    console.log(date)
    console.log(date.getDay())
    console.log(date.getDate())

}