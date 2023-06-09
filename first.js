function solve(arr){
    let buy=arr[0];
    let profit=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]<buy){
            buy=arr[i];
        }
        if(arr[i]-buy>profit){
            profit=arr[i]-buy;
        }
    }
    return profit
}

console.log(solve([7,100,1,5,3,6,4]))