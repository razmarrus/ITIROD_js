function task1()
{
    let price = prompt("enter price per word");
    let text = prompt("enter your text");
    let counter = 0;
    
    alert(`price would be: ${Number(text.split(/\s+/).length) * price}`); 
}


function task2()
{
    let target_lenght = prompt("enter target lenght");
    let str_replace = prompt("enter your text for replace");
    str_replace = " "+ str_replace + " ";

    let text = prompt("enter your text");
    let text_copy = text;
    let re_punct= /[,.!?;:()]/;

    let max_len = Number(text.length) * 2;

    for (let i = 0;  i < max_len; i++ )         //удаляем знаки припинания
        text = text.replace(re_punct, ' ');

    let tagList = text.split( /\s+/);   //получаем слова в виде массива
    for(key in tagList){
        if(tagList[key].length  == target_lenght){

            let junk = String("\\s+" + String(tagList[key]) + "\\s+");  //ставим запятые вокруг слова (иначе будут баги)
            let buffer = new RegExp(junk);
            //alert(buffer);

            text = text.replace(buffer, str_replace);  //удаляем
            }
    }

    alert(`text before changing ${text_copy}`)
    alert(`text after changing ${text}`)
}


function task3()
{
    let text = prompt("enter your text");
        
    let q = text.toUpperCase().replace(/([A-Z])/g, function(char) { 
    return char.charCodeAt(0) - 64;
    });
    alert(q)
}


function task4()
{
    let target_symbol = prompt("enter target symbol");
    let str_replace = prompt("enter your text for replace");
    if(target_symbol.length > 1)
    {
        alert("incorrect input");
        return
        //continue;
    }

    let text = prompt("enter your text");
    let text_copy = text;
    
    let max_len = Number(text.length);
    for (let i = 0;  i < max_len; i++ )
    {
        if(text[i] == target_symbol)
        {
            let line_begining = text.substring(0,i + 1);  //нарезаем строку на два куска - до нужного символа и после
            let line_ending = text.substring(i + 1);
            text = line_begining + str_replace + line_ending;  //склеиваем два куска, между ними вставив нужную подстроку
            max_len += str_replace.length
            i += str_replace.length
        }

    }

    alert(`text before changing ${text_copy}`)
    alert(`text after changing ${text}`)
}


function task5()
{
    let target_str = prompt("enter target symbol");
    let str_replace = prompt("enter your text for replace");

    let text = prompt("enter your text");
    let text_copy = text;

    let tagList = text.split( /\s+/);
    let counter = 0;
    for(key in tagList)
    {
        if (tagList[key].endsWith(target_str))  //если строка заканчивается на определенную подстроку
        {
            counter = counter + tagList[key].length;
            let line_begining = text.substring(0,counter );  //нарезаем строку и вставляем между ее кусоков нужную подстроку
            let line_ending = text.substring(counter  );
            text = line_begining + str_replace + line_ending;
            counter = counter +  str_replace.length + 1 ;
            continue;
        }
        counter = counter + tagList[key].length;
        counter +=1;
    }

    alert(`text before changing ${text_copy}`)
    alert(`text after changing ${text}`)
}


function task6()
{
    let target_symbol = prompt("enter target symbol");
    if(target_symbol.length > 1)
    {
        alert("incurent input");
        return;
        //continue;
    }

    let text = prompt("enter your text");
    let text_copy = text;
    let max_len = Number(text.length);
    for (let i = 0;  i < max_len; i++ )
    {
        if(text[i] == target_symbol) //если последний символ слова совпадает с заданным
        {
            let line_begining = text.substring(0,i );  //тот же принцип, что в 4 и 5 таске
            let line_ending = text.substring(i + 1);
            text = line_begining + line_ending;
            max_len -= 1;
            //i += str_replace.length
        }

    }

    alert(`text before changing ${text_copy}`)
    alert(`text after changing ${text}`)
}

function task7()
{
    let text = prompt("enter your text");//"= this is 234 som5e rand%om() te[]t@ ";
    let text_copy = text;
    
    let reg = /[^A-Za-z\s_]/; //если текст не буква или пробел
    for(let i = 0; i < text.length; i++)
        text = text.replace(reg, "");  //заменяем

    alert(`text before changing ${text_copy}`)
    alert(`text after changing ${text}`)
}


function task8()
{

    let target_lenght = prompt("enter target lenght");
    let text = prompt("enter your text");//"this q is si some  aw random text qw re so "
    let text_copy = text;

    let tagList = text.split( /\s+/);  //делим на слова
    for(key in tagList){

        if(tagList[key].length == target_lenght && /^[^AEIOYaeiouy]/.test(tagList[key])){ //если начинается не с гласной и имеет заданную длинну

            let junk = String("\\s+" + String(tagList[key]) + "\\s+");
            let buffer = new RegExp(junk);

            text = text.replace(buffer, " ");
            }
    }

    alert(`text before changing ${text_copy}`)
    alert(`text after changing ${text}`)
}


function task9()
{
    let text = prompt("enter text");

    let vowels_counter = 0, consonants_counter = 0;
    for (let i = 0;  i < text.length; i++ ){

        if( /[AEIOYaeiouy]/.test(text[i]))  //все гласные
            vowels_counter++;
        else if( /[B-DF-HJ-NP-TV-XZb-df-hj-np-tv-xz]/.test(text[i])) //все согласные
            consonants_counter++;
    }
    if(vowels_counter > consonants_counter)
        alert("There is more vowels that consonants")
    else  if(vowels_counter == consonants_counter)
        alert("There is the same number of vowels and consonants")
    else if(vowels_counter < consonants_counter)
        alert("There is less vowels that consonants")


}


function task10()
{
    let text = prompt("enter text");
    let text_copy = text;
    let re_punct= /[,.!?;:()]/; ///[,.!?;:()\s*,\s*]/ 

    let double_len = Number(text.length) * 2;

    for (let i = 0;  i < double_len; i++ )
        text = text.replace(re_punct, ' ');
    

    let shortest_arr = [], longest_arr = [];
    let max_lenght = 0, min_lenght = 10000;

    let tagList = text.split( /\s+/);
    for(key in tagList) {

        if( tagList[key].length == min_lenght)  //если слово такой же длинны как минимальное - запоминаем
            shortest_arr.push(tagList[key])
        else if ( tagList[key].length < min_lenght && tagList[key] != " " && tagList[key] != ""){
            shortest_arr.length = 0;      //опустошаем список минимальных слов
            shortest_arr.push(tagList[key]);  //добавляем новое
            min_lenght = tagList[key].length;
        }

        if( tagList[key].length == max_lenght)  //почти тоже самое, что с минимальными
            longest_arr.push(tagList[key])
        else if ( tagList[key].length > max_lenght && tagList[key] != " " && tagList[key] != ""){
            longest_arr.length = 0;
            longest_arr.push(tagList[key]);
            max_lenght = tagList[key].length;
        }
    }

    alert(`the shortest words is ${min_lenght} symbols lenght: \n${shortest_arr}`)
    alert(`the longest words is ${max_lenght} symbols lenght: \n${longest_arr}`)

}


function task11()
{
    let text = prompt("enter text");//"this q is si some  aw random text qw re so "
    let text_copy = text;
    let arr = [];

    let re_punct= /[,.!?;:()]/;
    let double_len = Number(text.length) * 2;

    for (let i = 0;  i < double_len; i++ )  //убираем знаки припинания
        text = text.replace(re_punct, ' ');

    let tagList = text.split( /\s+/);
    for(key in tagList){

        if(/^[AEIOYaeiouy]/.test(tagList[key]) && /[AEIOYaeiouy]$/.test(tagList[key]))  //если слово начинается и заканчивается глассной
            arr.push(tagList[key])
    }

    alert(`words that begin and end with vowel: ${arr}`)
}


function task12()
{
    let text = prompt("enter text");
    let char_map = {};  //создаем словарь

    for (let i = 0;  i < text.length; i++ )  //идем посимвольно
    {
        if (char_map.hasOwnProperty(text[i]))    //если символ уже встречался - увеличиваем число вхождений
            char_map[text[i]]++;
        else 
            char_map[text[i]] = 1; //если символа еще нет в словаре - добавляем
    }

    let map_values = Object.values(char_map)  //поэтому питон лучше
    let map_keys = Object.keys(char_map)
    let max_map_value = Math.max(...Object.values(char_map))

    alert(`most used character: ${ map_keys[map_values.indexOf(max_map_value)]}`)
}


function task13()
{
    let text = prompt("enter text"); 
    let words_arr = [];
    let main_chain = [];

    let re_punct= /[,.!?;:()]/;
    let double_len = Number(text.length) * 2;

    for (let i = 0;  i < double_len; i++ )  //убираем знаки припинания
        text = text.replace(re_punct, ' ');
    

    let tagList = text.split( /\s+/);
    for(key in tagList)
        words_arr.push(tagList[key])  //все слова из предложения

    let n = words_arr.length

    let words_matrix=new Array(n);
    let chain_matrix=new Array(n)
    for (var i=0; i<n; i++) {  //создаем двумерные массивы
        words_matrix[i]=new Array(n);
        chain_matrix[i]= [];
    }

    
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            let num = i + j
            while(num >= words_arr.length)
                num = num - words_arr.length    //первое слово - самое важное
            words_matrix[i][j] = words_arr[num]  //заполняем массив всеми вариантами текста (каждая строка двигается на одно слово)
        }
    }

    main_chain.push(words_arr[0])
    words_arr.shift()
    //alert(chain_matrix)
    for(let i =0; i < n; i++)
    {
        chain_matrix[i].push(words_matrix[i][0])   //первые слова в результирующий массив
        words_matrix[i].shift()
    }


    //для вариантов, начинающихся с разных слов (прогоняем все возможные варинты, созданные выше)
    for(let i = 0; i < n -1; i++)
    {
        let words_matrix_layer = words_matrix[i];   //массив всех остальных слов предложения, без первого (для конкретного i-го кейса)
        for(let k = 0; k < n -1; k++){

            for(let x = 0; x < words_matrix_layer.length; x++)  //идем по всем словам
            {
                let last_word_current_layer = chain_matrix[i][chain_matrix[i].length -1];//текущее анализируемое слове
                let current_key_word = words_matrix_layer[x];  //слово из предложения

                if(last_word_current_layer[last_word_current_layer.length -1] == current_key_word[0])  //если последняя буква анализируемого слова == первая буква слова из предложения
                {
                    chain_matrix[i].push(current_key_word)  //добавляем слово из предложения к ключевым (оно становится анализирумым теперь)
                    words_matrix_layer.splice(x, 1)  //удаляем его же массива слов для этого предложения

                    break;
                }
            }
            
        }
    
    }

    let max_chain_len = 0;
    for(let i =0; i < chain_matrix.length; i++)  //поиск максимальной цепочки
    {
        if(max_chain_len < chain_matrix[i].length)
            max_chain_len = chain_matrix[i].length;
    }    
    
    for(let i = 0; i < chain_matrix.length; i++)
    {
        if(max_chain_len == chain_matrix[i].length)  //если несколько цепочек одинаковой длинны
            alert(`chain of max len: ${chain_matrix[i]}`)
            //max_chain_len = chain_matrix[i].length;
    }    
}


function task14()
{
    let text = prompt("enter text");//= "this is some. random text this. this is great. qwe"


    let re_punct= /[,;:()]/;
    let double_len = Number(text.length) * 2;

    for (let i = 0;  i < double_len; i++ )
    {
        text = text.replace(re_punct, ' ');
    }

    let sentences = text.split( /[.!?]/);  //знаки конца предложения
    let n = sentences.length
    let sentences_map =new Array(n);      //создаем массив (он будет массивом словарей)

    for (var i=0; i<n; i++) {               //словари в массиве
        sentences_map[i] = new Map() 
    }
    
    for(let i =0; i< n; i++)  //запишем слова в словари
    {
        let tagList = sentences[i].split( /\s+/);
        for(key in tagList)
        {
            if(tagList[key] == "" || tagList[key] == " ")   
                continue;
            sentences_map[i].set(tagList[key], 0)
        }
    }


    for(let i =0; i< n; i++)  //смотрим на то, сколько раз каждое слово повторяется в других предложениях
    {
        for(let j =0; j< n; j++)
        {
            if(i == j)   //не сверяем предложение с самим собой
                continue;

            let tagList = sentences[j].split( /\s+/);
            for(key in tagList)
            {
                if(tagList[key] == "" || tagList[key] == " ")
                    continue;
                if (sentences_map[i].has(tagList[key])) 
                {
                    let old_value = Number(sentences_map[i].get(tagList[key]));
                    old_value++;
                    sentences_map[i].set(tagList[key], old_value)
                }                 
            }
        }
    }

    let result = new Array(n);
    let max = 0, max_index = 0;
    for(let i =0; i< n;i++){  //ищем предложение с наибольшим количеством повторений
        result[i] = 0; 
        for (var [key, value] of sentences_map[i]) 
        {
            result[i] += value;
        }
        if(result[i] > max)
        {
            max = result[i];
            max_index = i;
        }
    }


    if(max == 0)
        alert("there is no repeating words in text")
    else
        alert(`most popular words in sentence: ${sentences[max_index]}\nthere are ${max} repeated words`)

}


function task15()
{
    let text = prompt("enter text");
    let arr =[]

    let re_punct= /[,.!?;:()]/;
    let double_len = Number(text.length) * 2;

    for (let i = 0;  i < double_len; i++ )
        text = text.replace(re_punct, ' ');

    let tagList = text.split( /\s+/);
    for(key in tagList){
        let word = tagList[key]
        if(word[0] == word[word.length -1]){  //если у слова первая и последняя буква совпадают
            if (!arr.includes(word)) {  //и это слова еще не учли
                arr.push(word);         //запоминаем его
            }
        }
    }
    if(arr.length == 0)
        alert(`there are no words that begin and end with same letter`)
    else
        alert(`words that begin and end with same letter: ${arr}`)
}