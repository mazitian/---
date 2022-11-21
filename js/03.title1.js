var header = document.querySelector(".header1")
var headerVideo = document.querySelector('.header-video')
var headerFrontImg = document.querySelector('.header-front-img')
// 鼠标进入时的位置横坐标
var posX

// 鼠标进入时
header.onmouseover = function(e) {
    posX = e.clientX
    headerVideo.style.transition = "none"
    headerFrontImg.style.transition = "none"
}
// 鼠标移动时，头部跟随
header.onmousemove = function(e) {
    // 模板字符串（不是单引号，是键盘数字1的左边按钮）
    headerVideo.style.transform = `translateX(${(e.clientX - posX) / 25}px)`
    headerFrontImg.style.transform = `translateX(${(e.clientX - posX) / 16}px)`
}
// 鼠标离开时头部回正（前景、背景的回正速度不一样）
header.onmouseout = function(e) {
    headerVideo.style.transition = ".6s"
    headerFrontImg.style.transition = "1.2s"
    headerVideo.style.transform = `translateX(0px)`
    headerFrontImg.style.transform = `translateX(0px)`
}