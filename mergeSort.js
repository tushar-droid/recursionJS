function mergeSort(arr){
    if(arr.length<2){
        return
    }
    var mid= Math.floor(arr.length/2);
    var leftHalf = arr.slice(0, mid);
    var rightHalf = arr.slice(mid, arr.length);
    mergeSort(leftHalf);
    mergeSort(rightHalf);
    merge(arr, leftHalf, rightHalf);
    return arr;
}   

function merge(origArray, leftHalf, rightHalf){
    var i=0;
    var j=0;
    var k=0;
    while(i<leftHalf.length && j<rightHalf.length){
        if(leftHalf[i] < rightHalf[j]){
            origArray[k] = leftHalf[i];
            i++
        }
        else{
            origArray[k] = rightHalf[j];
            j++
        }
        k++;
    }
    while(i<leftHalf.length){
        origArray[k] = leftHalf[i];
        i++;
        k++;
    }
    while(j<rightHalf.length){
        origArray[k] = rightHalf[j];
        j++;
        k++;
    }


}

var unsortArr = [432,5,121,4,45,23,65,123,90];
var res = mergeSort(unsortArr)

console.log('The sorted array is: ', res);