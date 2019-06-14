$(function () {
    /*
    *  fn selector
    *
    * */
    let box = $('.box');
    let flag =true;
    let black = {}; black.name="黑棋";
    let white={}; white.name="白棋";
    for(let i=0;i<15;i++){
        for(let j=0 ; j<15; j++){
            $('<div>').addClass('chess').attr('id',i+'_'+j).appendTo(box);
            // box.append('<div>')
        }
    }

    box.on('click','.chess',function () {
        let _this =$(this);
        //落子
        if(_this.hasClass('black')||_this.is('.white')){
            return ;
        }
        //开关
        flag = !flag;
        let coords =_this.attr('id');
        if(flag){
            black[coords]=true;
            $(this).addClass('black');
            // isSuccess(black,coords);
            if(isSuccess(black,coords)){
                console.log('black-success');
                box.off('click');
            }
        }else{
            white[coords]=true;
            $(this).addClass('white');
            // isSuccess(white,coords);
            if(isSuccess(white,coords)){
                console.log('white-success');
                box.off('click');
            }
        }
    });

    function isSuccess(obj,coords) {
        let sp=1,cz=1,yx=1,zx=1;
        let [x,y]=coords.split('_');
        let i = x * 1;
        let j = y * 1;


        //横坐标
        while (obj[i+'_'+(++j)]){
            sp++;
        }
        j = y * 1;
        while (obj[i+'_'+(--j)]){
            sp++;
        }
        //纵坐标
        j = y * 1;
        while (obj[++i+'_'+j]){
            cz++;
        }
        i = x * 1;
        while (obj[--i+'_'+j]){
            cz++;
        }
        i = x * 1;
        j = y * 1;
        while (obj[++i+'_'+(++j)]){
            yx++;
        }
        i = x * 1;
        j = y * 1;
        while (obj[--i+'_'+(--j)]){
            yx++;
        }
        i = x * 1;
        j = y * 1;
        while (obj[++i+'_'+(--j)]){
            zx++;
        }
        i = x * 1;
        j = y * 1;
        while (obj[--i+'_'+(++j)]){
            zx++;
        }

        if(sp>=5||cz>=5||yx>=5||zx>=5){
            alert(obj.name+'胜！');
            box.off('click','.chess');
        }


    }



});