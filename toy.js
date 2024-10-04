let a=[3,0,2,5,7,9,1,0,4];
let n=a.length;
let c=0;
let count=0;
function countZero(a,n){
    for(let i=0;i<n;i++){
        if(a[i]!=0){
           a[c]=a[i];
           c++;
        }
        else{
            count++;
        }
    }
    while(c < n){
        a[c]=0;
        c++;
    }
    console.log("count",count);
    return a;
}
console.log(countZero(a,n));
