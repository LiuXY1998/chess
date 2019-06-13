$(function () {
    /*
    *  fn selector
    *
    * */
    let box = $('.box');
    let flag =true;
    for(let i=0;i<15;i++){
        for(let j=0 ; j<15; j++){
            $('<div>').addClass('chess').appendTo(box);
            // box.append('<div>')
        }
    }
    box.on('click','.chess',function () {
        flag=!flag;
        if(flag){
            $(this).addClass('black')
        }else{
            $(this).addClass('white')
        }
    })
    
});