let $output = document.getElementById('output');


function count_task(string){
    let my_result = string.replace(/\s/g,"");
    try{
        my_result = eval(my_result);
    }
    catch(e){
        alert("Please, rewrite you task. It's not correct!" + "\n" + e);
        my_result = 0;
    }
    return(my_result);
}

function add_symbol(string, symbol){
    let my_result = string;
    if(symbol == 'C'){
        my_result = '0';
        return(my_result);
    }
    if(symbol == 'B'){
        if(my_result.length == 1){
            my_result = '0';
            return(my_result);
        }
        else {
            my_result = my_result.slice(0, -1);
            return(my_result);
        }
    }
    if (string == 0){
        if (symbol != 0) {
            my_result = symbol;
        }
        
    }
    else{
        if(symbol == '/' || symbol == '*' || symbol == '-' || symbol == '+'){
            my_result += " " + symbol + " ";
        }
        else {
            my_result += symbol;
        }
    }
    return(my_result);
}


document.querySelector('.card-body').addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-primary')) {
        if(event.target.innerHTML == '='){
            $output.innerHTML = count_task($output.innerHTML);
        }
        else{
            $output.innerHTML = add_symbol($output.innerHTML, event.target.innerHTML);
        }
    }
});