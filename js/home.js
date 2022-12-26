



const dcv=[]
function bb(){
    axios({
        url:'/biji.json',
        method:'get',//'GET'
        // data:paramsdataa,//post保留
        // params:paramsdataa,//get保留
    }).then(function (res) {
        var text=res.data.data
        var ag=text.home
        var c=document.getElementsByClassName("home_ce_nei")[0]
        var d=document.getElementsByClassName("home_neio")[0]
        for(i=0;i<ag.ce.length;i++){
           var div=document.createElement('div')
           div.innerText=ag.ce[i]
           div.className="ce_nei"
           d.style.display="block"
           dcv.push(div)
           dcv[i].onclick=function(){
             
           }
           c.appendChild(div)
        }
    });
}
bb()

// 监控窗口缩小隐藏log
function ck(){
    var aa=document.getElementsByClassName('home_top_img')[0]
    if(window.innerWidth<600){
        aa.style.display="none"
    }
    if(window.innerWidth>600){
        aa.style.display="block"
    }
    if(window.innerWidth<800){
        var a=document.getElementsByClassName("home_ce")[0]
        var b=document.getElementsByClassName("home_nei")[0]
        a.style.display="none"
        b.style.width="100%"
    }else{
        var a=document.getElementsByClassName("home_ce")[0]
        var b=document.getElementsByClassName("home_nei")[0]
        a.style.display="block"
        b.style.width="85%"
    }
    
}
window.addEventListener('resize',ck)

// 开关移动
let kaiguan=true
function swith(){
if(kaiguan==true){
    for(i=0;i<8;i++){
    requestAnimationFrame(yd)
    }
    kaiguan=false
}else{
    for(j=0;j<8;j++){
        requestAnimationFrame(ad)
        }
        kaiguan=true
}
} 
function yd(){
    var a=document.getElementsByClassName("home_hei")[0]
    var c=document.getElementsByClassName("home_yue")[0]
    var d=document.getElementsByClassName("home_tai")[0]
    var e=document.getElementsByClassName("home_switch")[0]
    var g=document.getElementsByClassName("home_ce")[0]
    var o=document.getElementsByClassName("home")[0]
    var p=document.getElementsByClassName("home_nei")[0]
    var r=document.getElementsByClassName("home_top")[0]
    var m=document.getElementById("sou")
    var b=a.offsetLeft
    var f=b-114
    a.style.marginLeft=f+6+'px'
    if(b>=160){
        c.style.display="none"
        d.style.display="block"
        a.style.backgroundColor="black"
        e.style.backgroundColor="rgb(84, 85, 85)"
        g.style.backgroundColor="rgb(232, 226, 226)"
        o.style.color="rgb(84, 85, 85)"
        p.style.backgroundColor="rgb(232, 226, 226)"
        r.style.backgroundColor="rgb(7, 192, 192)"
        m.style.backgroundColor="rgb(7, 192, 192)"
    }
}

function ad(){
    var a=document.getElementsByClassName("home_hei")[0]
    var c=document.getElementsByClassName("home_yue")[0]
    var d=document.getElementsByClassName("home_tai")[0]
    var e=document.getElementsByClassName("home_switch")[0]
    var g=document.getElementsByClassName("home_ce")[0]
    var o=document.getElementsByClassName("home")[0]
    var p=document.getElementsByClassName("home_nei")[0]
    var r=document.getElementsByClassName("home_top")[0]
    var m=document.getElementById("sou")
    var b=a.offsetLeft
    var f=b-114
    a.style.marginLeft=f-6+'px'
    if(b<=160){
        c.style.display="block"
        d.style.display="none"
        a.style.backgroundColor="rgb(42, 120, 165)"
        e.style.backgroundColor="black"
        g.style.backgroundColor="rgb(84, 85, 85)"
        o.style.color="rgb(232, 226, 226)"
        p.style.backgroundColor="rgb(84, 85, 85)"
        r.style.backgroundColor="rgb(69, 19, 19)"
        m.style.backgroundColor="rgb(69, 19, 19)"
    }
}

