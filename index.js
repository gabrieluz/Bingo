function renderRowBingo(minRow, maxRow){
    
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
        // console.log(newArray)
        newArray.forEach(createRowBingo)
        return newArray
    }

    function createRowBingo(item){
        let th = document.createElement('th')
        console.log(th)
        th.textContent = item

        return th
    }
    
    let item = arrayBingo()
    
    let rowOneBingo = document.querySelector('.rowOne')
    // let rowOneBingo = document.querySelector('.rowTwo')
    // let rowOneBingo = document.querySelector('.rowOne')
    // let rowOneBingo = document.querySelector('.rowOne')
    // let rowOneBingo = document.querySelector('.rowOne')
    
    let th = document.createElement('th')

    rowOneBingo.innerHTML = ' '

    for(i=0;i < item.length;i++){
        let itens = item[i]        
        if(itens[i] < 15){
            console.log('Sou menor que 15 ')
        }
        let text = createRowBingo(itens, i)
        
        th.appendChild(text)
    }
    
    rowOneBingo.appendChild(th)
}

function startRowBingo(){
    this.renderRowBingo(1,15)
}

startRowBingo()