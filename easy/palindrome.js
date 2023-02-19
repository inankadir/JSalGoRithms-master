function palindrome(str) {
    str = str.toLowerCase();
    const data = str.split('').reverse().join('');
    if (str === data){
        console.log(true);
    }else{
        console.log(false);
    }
    console.log(data);
}   
palindrome('Nevereven');
