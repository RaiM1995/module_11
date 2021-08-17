

let minValue,maxValue;

function logSubmit(event) {
   
    minValue=  parseInt(event.target['my-input'].value);
    maxValue=parseInt(event.target['my-input2'].value);
    log.textContent = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;


    event.preventDefault();


    


//check value is not NaN
if(isNaN(maxValue) ||isNaN(minValue)){
    maxValue=100;
    minValue=0;
}

//min and max value
(minValue<-999)?minValue=-999:minValue;
(maxValue>999)?maxValue=999:maxValue;


let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

// number in text form
let answerNumberText='';
let hundrets = {"1":"сто", "2":"двести", "3": "триста","4":"четыреста","5":"пятьсот", "6":"шестьсот", "7":"семьсот","8":"восемьсот", "9":"девятьсот"};
let nums = {"1":"один","2":"два","3":"три","4":"четыре","5":"пять","6":"шесть","7":"семь","8":"восемь","9":"девять","10":"десять","11":"одинадцать","12":"двенадцать","13":"тринадцать","14":"четырнадцать","15":"пятнадцать","16":"шестнадцать","17":"семнадцать","18":"восемнадцать","19":"девятнадцать"};
let decimals = {"2":"двадцать", "3":"тридцать","4":"сорок","5":"пятьдесять","6":"шестьдесять","7":"семьдесять","8":"восемдесять ","9":"девяносто"};
// if number has - sign 
if(answerNumber<0){
    answerNumberText = 'минус ';
}

//numb between 20-99
if(Math.abs(answerNumber)<=99&&Math.abs(answerNumber)>=20){

    if((answerNumber+'')[1]==0){
        answerNumberText =answerNumberText+ decimals[(Math.abs(answerNumber)+'')[0]];
    }
    else{
    answerNumberText =answerNumberText+ decimals[(Math.abs(answerNumber)+'')[0]]+' '+nums[(Math.abs(answerNumber)+'')[1]];
    }
}
//numb between 1-20
if(Math.abs(answerNumber)>=1&&Math.abs(answerNumber)<20){

        answerNumberText =answerNumberText+ nums[(Math.abs(answerNumber)+'')];
    
  
}
//numb between 100-999
if(Math.abs(answerNumber)>=100&&Math.abs(answerNumber)<=999){

    if((answerNumber+'')[1]==0&&(answerNumber+'')[2]==0){
        answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]];
   }
    else if ((answerNumber+'')[1]==0&&(answerNumber+'')[2]!==0)
    {
    answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+nums[(Math.abs(answerNumber)+'')[2]];
    }

    else if ((answerNumber+'')[1]!==0&&(answerNumber+'')[2]==0)
    {
    answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+decimals[(Math.abs(answerNumber)+'')[1]];
    }
    else if ((Math.abs(answerNumber)+'')[1]!==0&&(Math.abs(answerNumber)+'')[2]!==0){

        answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+decimals[(Math.abs(answerNumber)+'')[1]]+' '+nums[(Math.abs(answerNumber)+'')[2]];

    }

}

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
// text form less/more than 20 symbols
(answerNumberText.length<20)?answerField.innerText = `Вы загадали число ${answerNumberText }?`:answerField.innerText = `Вы загадали число ${answerNumber }?`;



document.getElementById('btnRetry').addEventListener('click', function () {
   
     minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
 maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
 answerNumber  = Math.floor((minValue + maxValue) / 2);
 let answerNumberText='';
 if(answerNumber<0){
        answerNumberText = 'минус ';
    }
    
    if(Math.abs(answerNumber)<=99&&Math.abs(answerNumber)>=20){
    
        if((answerNumber+'')[1]==0){
            answerNumberText =answerNumberText+ decimals[(Math.abs(answerNumber)+'')[0]];
        }
        else{
        answerNumberText =answerNumberText+ decimals[(Math.abs(answerNumber)+'')[0]]+' '+nums[(Math.abs(answerNumber)+'')[1]];
        }
    }
    if(Math.abs(answerNumber)>=1&&Math.abs(answerNumber)<20){
    
            answerNumberText =answerNumberText+ nums[(Math.abs(answerNumber)+'')];
        
      
    }
    if(Math.abs(answerNumber)>=100&&Math.abs(answerNumber)<=999){
    
        if((answerNumber+'')[1]==0&&(answerNumber+'')[2]==0){
            answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]];
       }
        else if ((answerNumber+'')[1]==0&&(answerNumber+'')[2]!==0)
        {
        answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+nums[(Math.abs(answerNumber)+'')[2]];
        }
    
        else if ((answerNumber+'')[1]!==0&&(answerNumber+'')[2]==0)
        {
        answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+decimals[(Math.abs(answerNumber)+'')[1]];
        }
        else if ((Math.abs(answerNumber)+'')[1]!==0&&(Math.abs(answerNumber)+'')[2]!==0){
    
            answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+decimals[(Math.abs(answerNumber)+'')[1]]+' '+nums[(Math.abs(answerNumber)+'')[2]];
    
        }
    
    }
    
   
 orderNumber = 1;
 gameRun = true;
 (answerNumberText.length<20)?answerField.innerText = `Вы загадали число ${answerNumberText }?`:answerField.innerText = `Вы загадали число ${answerNumber }?`;
 orderNumberField.innerText = orderNumber;

})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){

            const phraseRandom = Math.floor( Math.random()*3);

            if(phraseRandom===0){
    
                const answerPhrase=`Вы загадали неправильное число!\n\u{1F914}`;
               }
            if(phraseRandom===1){
    
                const  answerPhrase=`Я сдаюсь..\n\u{1F92F}`;
            }
            if(phraseRandom===2){
    
                const  answerPhrase=`Не получилось..\n\u{1F92F}`;
            }
           

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.floor( Math.random()*3);

            let answerNumberText='';
            if(answerNumber<0){
                answerNumberText = 'минус ';
            }
            
            if(Math.abs(answerNumber)<=99&&Math.abs(answerNumber)>=20){
            
                if((answerNumber+'')[1]==0){
                    answerNumberText =answerNumberText+ decimals[(Math.abs(answerNumber)+'')[0]];
                }
                else{
                answerNumberText =answerNumberText+ decimals[(Math.abs(answerNumber)+'')[0]]+' '+nums[(Math.abs(answerNumber)+'')[1]];
                }
            }
            if(Math.abs(answerNumber)>=1&&Math.abs(answerNumber)<20){
            
                    answerNumberText =answerNumberText+ nums[(Math.abs(answerNumber)+'')];
                
              
            }
            if(Math.abs(answerNumber)>=100&&Math.abs(answerNumber)<=999){
            
                if((answerNumber+'')[1]==0&&(answerNumber+'')[2]==0){
                    answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]];
               }
                else if ((Math.abs(answerNumber)+'')[1]==0&&(Math.abs(answerNumber)+'')[2]!==0)
                {
                answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+nums[(Math.abs(answerNumber)+'')[2]];
                }
            
                else if ((Math.abs(answerNumber)+'')[1]!==0&&(Math.abs(answerNumber)+'')[2]==0)
                {
                answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+decimals[(Math.abs(answerNumber)+'')[1]];
                }
            else if ((Math.abs(answerNumber)+'')[1]!==0&&(Math.abs(answerNumber)+'')[2]!==0){
            
                    answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+decimals[(Math.abs(answerNumber)+'')[1]]+' '+nums[(Math.abs(answerNumber)+'')[2]];
            
                }
            
            }

           if(phraseRandom===0){
                (answerNumberText.length<20)?answerField.innerText = `Да это легко! Ты загадал ${answerNumberText }?`:answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;

               }
            if(phraseRandom===1){
                (answerNumberText.length<20)?answerField.innerText = `Наверное, это число ${answerNumberText }?`:answerField.innerText = `Наверное, это число ${answerNumber }?`;

            }
            if(phraseRandom===2){
                (answerNumberText.length<20)?answerField.innerText = `получилось число ${answerNumberText }?`:answerField.innerText = `получилось число ${answerNumber }?`;
                
            }
           // answerField.innerText = `Да это легко! Ты загадал ${answerNumberText }?`;

            
        }
    }
})



document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
       if (minValue === maxValue){

        const phraseRandom = Math.floor( Math.random()*3);

       

           if(phraseRandom===0){

            answerField.innerText=`Вы загадали неправильное число!\n\u{1F914}`;
           }

           if(phraseRandom===1){

            answerField.innerText=`Я сдаюсь..\n\u{1F92F}`;
        }
        if(phraseRandom===2){

            answerField.innerText=`Не получилось..\n\u{1F92F} `;
        }
       
       
       
        gameRun = false;
        
              
            
        
        } else {
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
           
        const phraseRandom = Math.floor( Math.random()*3);

        let answerNumberText='';
        if(answerNumber<0){
            answerNumberText = 'минус ';
        }
        
        if(Math.abs(answerNumber)<=99&&Math.abs(answerNumber)>=20){
        
            if((answerNumber+'')[1]==0){
                answerNumberText =answerNumberText+ decimals[(Math.abs(answerNumber)+'')[0]];
            }
            else{
            answerNumberText =answerNumberText+ decimals[(Math.abs(answerNumber)+'')[0]]+' '+nums[(Math.abs(answerNumber)+'')[1]];
            }
        }
        if(Math.abs(answerNumber)>=1&&Math.abs(answerNumber)<20){
        
                answerNumberText =answerNumberText+ nums[(Math.abs(answerNumber)+'')];
            
          
        }
        if(Math.abs(answerNumber)>=100&&Math.abs(answerNumber)<=999){
        
            if((answerNumber+'')[1]==0&&(answerNumber+'')[2]==0){
                answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]];
           }
            else if ((Math.abs(answerNumber)+'')[1]==0&&(Math.abs(answerNumber)+'')[2]!==0)
            {
            answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+nums[(Math.abs(answerNumber)+'')[2]];
            }
        
            else if ((Math.abs(answerNumber)+'')[1]!==0&&(Math.abs(answerNumber)+'')[2]==0)
            {
            answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+decimals[(Math.abs(answerNumber)+'')[1]];
            }
            else if ((Math.abs(answerNumber)+'')[1]!==0&&(Math.abs(answerNumber)+'')[2]!==0){
        
                answerNumberText =answerNumberText+ hundrets[(Math.abs(answerNumber)+'')[0]]+' '+decimals[(Math.abs(answerNumber)+'')[1]]+' '+nums[(Math.abs(answerNumber)+'')[2]];
        
            }
        
        }



        if(phraseRandom===0){

            (answerNumberText.length<20)?answerField.innerText = `Да это легко! Ты загадал ${answerNumberText }?`:answerField.innerText = `Да это легко! Ты загадал ${answerNumber }?`;
        }
        if(phraseRandom===1){

            (answerNumberText.length<20)?answerField.innerText = `Наверное, это число ${answerNumberText }?`:answerField.innerText = `Наверное, это число ${answerNumber }?`;
        }    if(phraseRandom===2){

                (answerNumberText.length<20)?answerField.innerText = `получилось число ${answerNumberText }?`:answerField.innerText = `получилось число ${answerNumber }?`;
        }

       
        
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){

        const phraseRandom = Math.floor( Math.random()*3);

        if(phraseRandom===0){

             answerField.innerText=`Я всегда угадываю\n\u{1F60E} `;
           }
        if(phraseRandom===1){

              answerField.innerText=`Я никогда не ошибаюсь\n\u{1F60E}  `;}
        if(phraseRandom===2){

             answerField.innerText=`Я попал в яблочко \n\u{1F60E}`;
        }

        
        gameRun = false;
    }
})












    
}
const form = document.getElementById('form');
const log = document.getElementById('log');
form.addEventListener('submit', logSubmit);






