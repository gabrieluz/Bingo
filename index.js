function RenderBingoColumns(minRow, maxRow, Row){
    //Limpa o html contido nas variáveis || Coloca um espaço em branco
    Row.innerHTML = ' '

    function createRowBingo(item){
        let td = document.createElement('td')
        td.textContent = item
        return td
    }

    function createArrayBingo(){   
        
        let array = []
        let newArray = []
        let control = 5
        
        // Cria números aleatórios - Creates random numbers
        function getRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        }

        for (let i = 0; i <= control; i++){
            // Adiciona novos números no array - Adds new numbers to the array
            array.push(getRandom(minRow, maxRow))

            if(newArray.length < control){
                // Impede números  repetidos no newArray - Prevents repeated numbers in newArray
                newArray = array.filter((este,o)=>array.indexOf(este)==o)
                i--
            }
        }
        
        newArray.forEach(createRowBingo)
        return newArray
    }
    
    var th = document.createElement('th')
    let item = createArrayBingo()
    for(i=0;i < item.length;i++){
        let itens = item[i]
        let text = createRowBingo(itens)
        
        th.appendChild(text)
        // Row.appendChild(th);
        Row.appendChild(text)
    }

    // Devolve as colunas - Returns the columns
    return Row
}

function startCardBingo(){
    let rowOneBingo = document.querySelector('.rowOne')
    let rowTwoBingo = document.querySelector('.rowTwo')
    let rowThreeBingo = document.querySelector('.rowThree')
    let rowFourBingo = document.querySelector('.rowFour')
    let rowFiveBingo = document.querySelector('.rowFive')

    this.RenderBingoColumns(1,15, rowOneBingo)
    this.RenderBingoColumns(16,30, rowTwoBingo)
    this.RenderBingoColumns(31,45, rowThreeBingo)
    this.RenderBingoColumns(46,60, rowFourBingo)
    this.RenderBingoColumns(61,75, rowFiveBingo)
}

startCardBingo()