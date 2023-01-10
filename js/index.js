var mouseoff=true
var xin=null
var xinxin=["url('../img/indexImg/刻🌤.jpg')","url('../img/indexImg/凌华.jpg')"
,"url('../img/indexImg/猫羽.jpg')","url('../img/indexImg/可莉.jpg')"
,"url('../img/indexImg/甘雨.jpg')"]

// 鼠标移动特效
document.onmousemove=function(ev){
    if(mouseoff==true){
       mouseJS(ev)
    }
    mouseoff=false
}
// 创建div事件
function mouseJS(ev){
    var suij=Math.floor(Math.random()*5)
    var xin=document.createElement('div')
    var body=document.body
    const c=document.getElementsByClassName('cs')
    const d=document.getElementsByClassName('cs')[0]
    xin.className='cs'
    x=ev.clientX
    y=ev.clientY
    if(x>1420){
        x=1420
    }
    if(x<50){
        x=50
    }
    if(y>680){
        y=650
    }
    if(y<50){
        y=50
    }
    xin.style.left=x-25+'px'
    xin.style.top=y-30+'px'
    xin.style.backgroundImage=xinxin[suij]
    body.appendChild(xin)
    if(c.length>=10){
        body.removeChild(d)
    }
}
// 计时器
setInterval(function(){
   mouseoff=true
},10)