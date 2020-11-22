function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

let jumpLine = 0
function cardsBingo(item){
    jumpLine += 1
    var html = '<span id="span">' + item + '</span>'          
    if(jumpLine == 5){
        jumpLine = 0
        html += '<br>'
    }   
    return document.body.innerHTML += html;
}
function rowBingo(minRow, maxRow){   
    let array = []
    let newArray = []
    let control = 15
    
    for (let i = 0 ; i < control; i++){
        array.push(getRandom(minRow, maxRow))
        if(newArray.length < 5){
            newArray = array.filter((este,o)=>array.indexOf(este)==o)
        }
    }
    newArray.forEach(cardsBingo)
    //console.log(newArray)
}

function startCardsBingo(){
    this.rowBingo(1,15)
    this.rowBingo(16,30)
    this.rowBingo(31,45)
    this.rowBingo(46,60)
    this.rowBingo(61,75)/**/
}
startCardsBingo()

function reset(){
    let controlReset = 25
    for(let i =0;i<controlReset;i++)
        $( "#span" ).remove()
}