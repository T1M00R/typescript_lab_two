let word:string = "1 2 3 4 5 ";
let option:boolean;



// 5 elements, 10 including spaces

// 1  won't count spaces
console.log(count(word, 1));

// Add option for counting spaces

function count(word, option){
    let count:number = word.length;

    if (option == 1){
        // Exclude spaces    
        for (let i = 0; i < word.length; i++){
            if(word[i] == " "){
                count--;
            }
        }
    } 
    
    return count;
}

