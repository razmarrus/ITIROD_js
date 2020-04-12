function task1()
{
    let first, second;
    while(true)
    {
    first = prompt("enter the first number");
    second = prompt("enter the second number");

    first = Number(first);
    second = Number(second); 

    if(isNaN(first)) {
        alert("first var is not a number");
        break;
    }
        
    if( isNaN(second) ){
        alert("second var is not a number");
        break;
    }

    if( first > second)
        alert("first number is greater than second");
    else if( first == second)
        alert("numbers are equal")
    else if( first < second)
        alert("first number is less than second")
        
    }
}

function task3()
{
    //while(true)
    {
        let n = prompt("enter index of fibonacci number");
        
        if(isNaN(Number(n))) {
            alert("your input is not a number");
            //continue;
        }
        else if (Number(n) < 1){
            alert("your input is too small");
            //continue;
        }
        
        if (n <= 2) 
        {
            alert("answer is: 1");
            //continue;
        }
        let x = 1, y = 1, answer = 0;
        for (let i = 2; i < n; i++)
        {

        try {
            answer = x + y;
        }
        catch (e) {
            alert("fibonacci number is too large");
                //continue;   
        }

            x = y;
            y = answer;
        }

        if(isNaN(Number(answer)) || !isFinite(Number(answer))) {
            alert("fibonacci number is too large");
            //continue;
        }

        alert(`answer is: ${answer}`);
    
    }
}

function task4()
{
    //while(true)
    {
        let year = 2015;
        let month = prompt('enter month number');
        let day = prompt('enter day number');

        if ((isNaN(Number(month)) || isNaN(Number(day))) || month > 12 || day > 31 ) { //|| month === undefined || day === undefined
            alert("input is incorrect");
            //continue;
        }

        let date = new Date(year, parseFloat(month) - 1, parseFloat(day));
        
        //let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
        let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        if ( days[date.getDay()] != undefined)
            alert(days[date.getDay()]);
        else  alert("input is incorrect");
        }
}