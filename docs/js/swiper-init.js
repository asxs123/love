var swiper = new Swiper('.swiper-container-lovewmh1', {
    pagination: '.swiper-pagination-lovewmh1',
    paginationClickable: true,  //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
    spaceBetween: 30,  //指定了每个滑动页面之间的间距（单位是像素）3。
});

var swiper = new Swiper('.swiper-container-lovewmh2', {
    pagination: '.swiper-pagination-lovewmh2',
    effect: 'coverflow',  //指定切换效果的类型
    grabCursor: true,  //指定是否在鼠标悬停时改变光标样式
    centeredSlides: true,  //指定是否居中显示当前页面
    slidesPerView: 'auto',  //指定每个页面显示多少个slide
    coverflow: {  //指定了coverflow效果的参数
        rotate: 50,  //slide做3d旋转时Y轴的旋转角度
        stretch: 0,  //每个slide之间的拉伸值
        depth: 100,  //slide的位置深度
        modifier: 1,  //影响透视效果和slide缩放
        slideShadows: true  //是否启用slide阴影
    }
});