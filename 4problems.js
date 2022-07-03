// const nullify = (N) => {
//     let table = new Array (N + 1).fill(1e9);
//     table[ 0 ] = 0;
//     for ( let i = 0; i <= N; i++) {
//         let str = i.toString ( );
//         for (let c = 0; c < str.length; c++){
//             let x0 = i - parseInt (str [c]);
//             table[i] = Math.min(table[i], table[xo] + 1 );
//         }
//     }
// }

// const solve = (table, i ) => {
//     let mini = table[i - 1];
//     if (i % 2 == 0);{
//         mini = Math.min(mini, table[i/2]);
//     }
//     if ( i % 3 ==0){
//         mini = Math.min(mini, table[i/3]);
//     }
//     table[i] = mini + 1;
// }
// const unify = (N) => {
//     let table = new Array (N + 1).fill(0);
//     table[1] = 0;
//     for (let i = 2; i <=N; i++) {
//         solve(table, i);
//     }
//     return table[N];
// }
// console.log(unify(10));

// const solve = (table,i)  => {
//     let mini = table[i-1];
//     if (i % 2 ==0);{
//         mini = Math.min(mini, table[i/2])
//     }
//     if ( i % 3 == 0){
//         mini = Math.min(mini, table[i/3]);
//     }
//     table[i] = mini + 1;
// }
// const unify = (N) =>{
//     let table = new Array (N +1).fill(0);
//     table[i] = 0;
//     for(let i = 2; i <= N; i++);{
//         solve(table, i);
//     }
//     return table[N];
// }
// console.log(ubify(10));

// const util = (index, t, arr, answer, tempo, i) =>{
//     tempo.push( arr[i] );
//     solve( i+1, t-arr[i], arr, answer, tempo );
//     tempo.pop();
//     }
//     const solve = (index, t, arr, answer, tempo ) =>{
//     if( t == 0 ){
//     answer.push( Array.from(tempo));
//     return;
//     }
//     for( let i=index; i<arr.length; i++ ){
//         if( i>index && arr[i]==arr[i-1] ) continue;
//         if( arr[i] > t ) break;
//         util(index, t, arr, answer, tempo, i);
//         }
//         }
//         const saveBob = (arr, sum) => {
//         let ans = [];
//         arr.sort();
//         solve( 0, sum, arr, ans, [] );
//         return ans;
//         }
//         let arr = [1,2,1];
//         let sum = 2;
//         console.log(saveBob(arr, sum));