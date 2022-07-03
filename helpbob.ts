const util = (index, t, arr, answer, tempo, i) =>{
        tempo.push( arr[i] );
        solve( i+1, t-arr[i], arr, answer, tempo );
        tempo.pop();
}

const solve = (index, t, arr, answer, tempo ) =>{
    
    if( t == 0 ){
        answer.push( Array.from(tempo));
        return;
    }
    
    for( let i=index; i<arr.length; i++ ){
        if( i>index && arr[i]==arr[i-1] ) continue;
        if( arr[i] > t )   break;
        util(index, t, arr, answer, tempo, i);
        
    }
    
}

const saveBob = (arr, sum) => {
    
    let ans = [];
    arr.sort();
    solve( 0, sum, arr, ans, [] );
    return ans;
}

let arr = [1,2,1];
let sum = 2;
console.log(saveBob(arr, sum));