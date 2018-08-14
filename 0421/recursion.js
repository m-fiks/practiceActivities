let counter = 0;
function recursion (){
    console.log('this is the count:', counter);
    counter++;
    if(counter < 5){
        recursion();
    }
};

recursion();