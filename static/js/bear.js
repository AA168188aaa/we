

$(function(){
  // 首页轮播图
  swiper(".swiperWrap .layout",".swiper li",".swiperWrap .pagination span","active","6000")
})

// 轮播图
function swiper(wrap, box, circle, changecss, time) {
  $(circle).eq(0).addClass(changecss).siblings().removeClass(changecss);
  $(box).eq(0).stop().css({ display: "block" }).siblings(box).stop().css({ display: "none" });
    // 轮播图
    var imgNum = $(box).size();
    var idx = 0;
    var timer = setInterval(move, time);
    function move(left) {
      if (left) {
        //向左移动
        idx--;
        if (idx == -1) {
          idx = imgNum - 1;
        }
      } else {
        idx++;
        if (idx == imgNum) {
          idx = 0;
        }
      }
      $(circle).eq(idx).addClass(changecss).siblings().removeClass(changecss);
      $(box).eq(idx).stop().css({ display: "block" }).siblings(box).stop().css({ display: "none" });
    }
    $(".swiperWrap .next").click(function(){
      move();
    })
    $(".swiperWrap .prev").click(function(){
      idx--;
      if (idx == -1) {
        idx = imgNum - 1;
      }
      $(circle).eq(idx).addClass(changecss).siblings().removeClass(changecss);
      $(box).eq(idx).stop().css({ display: "block" }).siblings(box).stop().css({ display: "none" });
    })
    //图片获取焦点时，停止自动轮播
    $(wrap).hover(
      function () {
        clearInterval(timer);
      },
      function () {
        timer = setInterval(move, time);
      }
    );
    //数字浮标的焦点事件
    $(circle).mousemove(function () {
      if (!$(this).hasClass(changecss)) {
        $(this).addClass(changecss).siblings().removeClass(changecss);
        idx = $(this).index();
        $(box).eq(idx).stop().css({ display: "block" }).siblings(box).stop().css({ display: "none" });
      }
    });
}

