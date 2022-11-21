var header2 = document.querySelector(".header2")
var headerVideo2 = document.querySelector('.header-video2')
var headerFrontImg2 = document.querySelector('.header-front-img2')
// 鼠标进入时的位置横坐标
var posX2

// 鼠标进入时
header2.onmouseover = function(e) {
    posX2 = e.clientX
    headerVideo2.style.transition = "none"
    headerFrontImg2.style.transition = "none"
}
// 鼠标移动时，头部跟随
header2.onmousemove = function(e) {
    // 模板字符串（不是单引号，是键盘数字1的左边按钮）
    headerVideo2.style.transform = `translateX(${(e.clientX - posX2) / 25}px)`
    headerFrontImg2.style.transform = `translateX(${(e.clientX - posX2) / 16}px)`
}
// 鼠标离开时头部回正（前景、背景的回正速度不一样）
header2.onmouseout = function(e) {
    headerVideo2.style.transition = ".6s"
    headerFrontImg2.style.transition = "1.2s"
    headerVide2.style.transform = `translateX(0px)`
    headerFrontImg2.style.transform = `translateX(0px)`
}