function renderRowBingo(minRow, maxRow, Row){
    
    function arrayBingo(){   
        
        let newArray = []
        let array = []
        let control = 5
        
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        for (let i = 0; i <= control; i++){
            array.push(getRandom(minRow, maxRow))
            if(newArray.length < control){
                newArray = array.filter((este,o)=>array.indexOf(este)==o)
                i--
            }
        }
        
        newArray.forEach(createRowBingo)
        return newArray
    }
    function createRowBingo(item){
        let td = document.createElement('td')
        // console.log(th)
        td.textContent = item

        return td
    }
    
    //Limpa o html contido nas variáveis || Coloca um espaço em branco
    Row.innerHTML = ' '
    
    let th = document.createElement('tr')
    
    let item = arrayBingo()
    for(i=0;i < item.length;i++){
        let itens = item[i]
        let text = createRowBingo(itens)
        
        th.appendChild(text)
    }
    Row.appendChild(th)
}

function startCardBingo(){
    let rowOneBingo = document.querySelector('.rowOne')
    let rowTwoBingo = document.querySelector('.rowTwo')
    let rowThreeBingo = document.querySelector('.rowThree')
    let rowFourBingo = document.querySelector('.rowFour')
    let rowFiveBingo = document.querySelector('.rowFive')

    this.renderRowBingo(1,15, rowOneBingo)
    this.renderRowBingo(16,30, rowTwoBingo)
    this.renderRowBingo(31,45, rowThreeBingo)
    this.renderRowBingo(46,60, rowFourBingo)
    this.renderRowBingo(61,75, rowFiveBingo)
}

startCardBingo()