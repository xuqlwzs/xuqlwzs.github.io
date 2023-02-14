


// 背景图
window.onload= function (){
    var canvas = document.getElementById('canvas');
    if(canvas!=null){
        var cs = canvas.getContext("2d");
        var body=document.body
        let w=1536,h=763
        this.planex=733
        this.planey=700 //fj初始位置
        let planeoffw=true //fj移动开关
        let planeoffs=true
        let planeoffa=true
        let planeoffd=true
        let planeoffzd=true
        let planevelocity=2
        let zidanvelocity=2.5
        let dijivelocity=0.5
        let zidanjihe=[]
        let dijijihe=[]
        let p=document.getElementById("p")
        let jf=0

        let beijinimg=new Image()
        beijinimg.src="../../img/gameImg/fjdz/背景.jfif"
        beijinimg.onload=()=>{
            cs.drawImage(beijinimg,0,0,w,h)
        }
        // fj图
        let planeimg=new Image()
        planeimg.src="../../img/gameImg/fjdz/thefirstpass/plan-1.png"
        planeimg.onload=()=>{
            cs.drawImage(planeimg,this.planex,this.planey,70,50)
        }
        document.onkeydown=function(e){
            //x轴移动
            if(e.key=="w" && planeoffw==true){
                 planetimew=setInterval(keyw,1/60)
                 planeoffw=false
            }
            if(e.key=="s" && planeoffs==true){
                planetimes=setInterval(keys,1/60)
                planeoffs=false
           }
            //y轴移动
            if(e.key=="d" && planeoffd==true){
                planetimed=setInterval(keyd,1/60)
                planeoffd=false
           }
           if(e.key=="a" && planeoffa==true){
            planetimea=setInterval(keya,1/60)
            planeoffa=false
       }
          if(e.key==" " && planeoffzd==true){
             planetimezd=setInterval(keyzd,60)
             planeoffzd=false
          }
        }
        document.onkeyup=function(e){
            if(e.key=="w" && planeoffw==false){
                clearInterval(planetimew)
                planeoffw=true
            }
            if(e.key=="d" && planeoffd==false){
                clearInterval(planetimed)
                planeoffd=true
            }
            if(e.key=="s" && planeoffs==false){
                clearInterval(planetimes)
                planeoffs=true
            }
            if(e.key=="a" && planeoffa==false){
                clearInterval(planetimea)
                planeoffa=true
            }
            if(e.key==" " && planeoffzd==false){
                clearInterval(planetimezd)
                planeoffzd=true
            }
        }
        //画面更新
        function flushed(){
            cs.clearRect(0,0,w,h)
            cs.drawImage(beijinimg,0,0,w,h)
            cs.drawImage(planeimg,this.planex,this.planey,70,50)
        }
        function keyw(){
            this.planey=this.planey-planevelocity<=0?0:this.planey-planevelocity
                flushed()
        }
        function keyd(){
            this.planex=this.planex+planevelocity>=1466?1466:this.planex+planevelocity
            flushed()
        }
        function keys(){
            this.planey=this.planey+planevelocity>=700?700:this.planey+planevelocity
            flushed()
        }
        function keya(){
            this.planex=this.planex-planevelocity<=0?0:this.planex-planevelocity
            flushed()
        }
        //zd
        function keyzd(){
            var div=document.createElement("div")
            div.id="zidan"
            div.style.top=this.planey-20+"px"
            div.style.left=this.planex+30+"px"
            body.appendChild(div)
            zidanjihe.push(div)
            var zd=setInterval(function(){
              div.style.top=div.offsetTop-zidanvelocity+"px"
              if(div.offsetTop<0){
                body.removeChild(div)
                zidanjihe.shift()
                clearInterval(zd)
              }
            },1/60)
        }
        //diji
     var diji=setInterval(function(){
           var div=document.createElement("div")
           var x=Math.floor(Math.random()*1536)
           div.id="dijia"
           div.style.top=0+"px"
           if(x>=1400){
            div.style.left=1400+"px"
           }
           if(x<=80){
            div.style.left=80+"px"
           }else{
            div.style.left=x+"px"
           }
           body.appendChild(div)
           dijijihe.push(div)
           var dijia=setInterval(function(){
            div.style.top=div.offsetTop+dijivelocity+"px"
            // div.style.left=div.offsetLeft+dijivelocity+"px"
            if(div.offsetLeft>=1450){
                div.style.left=1450+"px"
            }
            if(div.offsetTop>=680){
                body.removeChild(div)
                dijijihe.shift()
                clearInterval(dijia)
               }
           },1)
           if(dijijihe.length>5){
             body.removeChild(div)
             dijijihe.pop()
           }
       },1000)
       //碰撞检测
       setInterval(function(){
        for(var i=0;i<dijijihe.length;i++){
            for(var j=0;j<zidanjihe.length;j++){
                if(knock(zidanjihe[j],dijijihe[i])){
                 body.removeChild(dijijihe[i])
                 body.removeChild(zidanjihe[j])
                 dijijihe.splice(i,1)
                 zidanjihe.splice(j,1)
                 jf++
                 p.innerText=jf
                }
             }
            if(pz(dijijihe[i],this.planex,this.planey)){
                body.removeChild(dijijihe[i])
                dijijihe.splice(i,1)
                clearInterval(diji)
            }
        }
       },1/60)
       function pz(node1,node2,node3){
        var l1 = node1.offsetLeft;
        var r1 = node1.offsetLeft + node1.offsetWidth;
        var t1 = node1.offsetTop;
        var b1 = node1.offsetTop+node1.offsetHeight;
        var l2 = node2;
        var r2 = node2 + 70;
        var t2 = node3;
        var b2 = node3+50;
        if(l2>r1||r2<l1||t2>b1||b2<t1){
            return false;
        }else{
            return true;
        }
       }
       function knock(node1,node2){
        var l1 = node1.offsetLeft;
        var r1 = node1.offsetLeft + node1.offsetWidth;
        var t1 = node1.offsetTop;
        var b1 = node1.offsetTop+node1.offsetHeight;
        var l2 = node2.offsetLeft;
        var r2 = node2.offsetLeft + node2.offsetWidth;
        var t2 = node2.offsetTop;
        var b2 = node2.offsetTop+node2.offsetHeight;
        if(l2>r1||r2<l1||t2>b1||b2<t1){
            return false;
        }else{
            return true;
        }
    }
    }
}
