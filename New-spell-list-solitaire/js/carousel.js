/**
 * Created by jf on 2016/11/11.
 */
window.onload = function () {
    //����
    var wrap = document.getElementById("swiper3dWrap");
    var slide = document.getElementById("swiper3dSlide");
    var ul = slide.children[0];
    var lis = ul.children;//���е�li
    var arrow = document.getElementById("swiper3dArrow");
    var arrLeft = document.getElementById("swiper3dArrLeft");
    var arrRight = document.getElementById("swiper3dArrRight");
    var screenWidth = parseInt( document.documentElement.clientWidth );
    var swiperImg = document.getElementsByClassName('swiper3dSlideList')[0];
//  document.getElementsByClassName('swiper3dSlideList')[3].style.width = "2000px"
    for( let i = 0 ; i < 10 ; i++ ){
    	document.getElementsByClassName('swiper3dSlideList')[3].style.width = "180px"
    }
    
    console.log( screenWidth );
    var ImgWidth = parseInt( getStyle( swiperImg,"width" ) );
    var ImgCenter = parseInt ( screenWidth / 4 );
    var ImgRight = parseInt( screenWidth - ImgWidth );
    console.log( ImgWidth );
    
    //1.��꾭����� �ü�ͷ��������ʾ �뿪����������
    wrap.onmouseover = function () {
        //�ü�ͷ��������ʾ
        animate(arrow, {"opacity": 1});
    };
    wrap.onmouseout = function () {
        //�ü�ͷ����������
        animate(arrow, {"opacity": 0});
    };

    var config = [
        {
            "width": 180,
            "top": 0,
            "left": ImgCenter,
            "opacity": 1,
            "zIndex": 2
        },//0
        {
            "width": 180,
            "top": 0,
            "left": ImgRight,
            "opacity": 1,
            "zIndex": 3
        },//1
        {
            "width": 200,
            "top": 0,
            "left": ImgCenter,
            "opacity": 1,
            "zIndex": 2
        }//2
        
    ];//��ʵ����һ�����õ� �涨��ÿ��ͼƬ�Ĵ�Сλ�ò㼶͸����

    //2.�����õ��е����� ������ø�ÿһ��li
    function assign() {
        for (var i = 0; i < lis.length; i++) {
            animate(lis[i], config[i], function () {
                flag = true;//����ִ����ɺ� ���´򿪷���
            });
        }
    }

    assign();

    //3.�����ͷ ��ת ͼƬ
    arrRight.onclick = function () {
        if (flag) {//����ŵĴ򿪵� �Ϳ���ִ�ж���
            flag = false;//���һ�κ� �������Źر�
            config.push(config.shift());//�ѵ�һ���ŵ����
            assign();//��������ɵ����õ� ���·���λ��
        }

    };
    arrLeft.onclick = function () {
        if (flag) {
            flag = false;
            config.unshift(config.pop());//�����ķŵ���ǰ
            assign();//��������ɵ����õ� ���·���λ��
        }
    };

    //4.��ӽ�����
    var flag = true;//���������Ǵ򿪵�

};