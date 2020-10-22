var arr =[1,2,3,4,5]
let x = Number(prompt('Nhập giá trị x: '))
for (i = 0; i<arr.length; i++){
    for (j = 0; j<i ; j++){
        if (arr[i] + arr[j] == x) {
            console.log(`${i},${j}`);
        }
    }
}