/*导航*/
$(function(){
   $("#nav li").hover(function(){
        $(this).find(".jnNav").show();
    },function(){
        $(this).find(".jnNav").hide();
    });
});

/*消失提示*/
$(function(){
    $(".box_time").click(function(){
        $(".box").hide(1000);
    })
})
/*分类热销*/
$(function(){
    $(".shopinfo .promoted").append('<s class="hot"></s>');
})
/* 首页大屏广告效果 */
$(function(){
    var $imgrolls = $("#Imageroll div a");
    $imgrolls.css("opacity","0.7");
    var len  = $imgrolls.length;
    var index = 0;
    var adTimer = null;
    $imgrolls.mouseover(function(){
        index = $imgrolls.index(this);
        showImg(index);
    }).eq(0).mouseover();
    //滑入 停止动画，滑出开始动画.
    $('#Imageroll').hover(function(){
            if(adTimer){
                clearInterval(adTimer);
            }
         },function(){
            adTimer = setInterval(function(){
                showImg(index);
                index++;
                if(index==len){index=0;}
            } , 4000);
    }).trigger("mouseleave");
})
//显示不同的幻灯片
function showImg(index){
    var $rollobj = $("#Imageroll");
    var $rolllist = $rollobj.find("div a");
    var newhref = $rolllist.eq(index).attr("href");
    $("#imgWrap").attr("href",newhref)
             .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
    $rolllist.removeClass("chos").css("opacity","0.7")
             .eq(index).addClass("chos").css("opacity","1");
}
/* 品牌活动模块横向滚动 */
$(function(){
    $("#jnBrandTab li a").click(function(){
        $(this).parent().addClass("chos").siblings().removeClass("chos");
        var idx = $("#jnBrandTab li a").index(this);
        showBrandList(idx);
        return false;
   }).eq(0).click();
});
//显示不同的模块
function showBrandList(index){
    var $rollobj = $("#jnBrandList");
    var rollWidth = $rollobj.find("li").outerWidth();
    rollWidth = rollWidth * 4; //一个版面的宽度
    $rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}
/* 滑过图片出现放大镜效果 */
$(function(){
    $("#jnBrandList li").each(function(index){
        var $img = $(this).find("img");
        var img_w = $img.width();
        var img_h = $img.height();
        var spanHtml = '<span style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'+img_h+'px;" class="imageMask"></span>';
        $(spanHtml).appendTo(this);
    })
    $("#jnBrandList").delegate(".imageMask", "hover", function(){
        $(this).toggleClass("imageOver");
    });

    /*
    $("#jnBrandList").find(".imageMask").live("hover", function(){
        $(this).toggleClass("imageOver");
    });
    */

})