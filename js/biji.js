

window.onload=()=>{
    axios({
        url:'/biji.json',
        method:'get',
    }).then(function(res){
        const data=res.data.data
        const jquery=data.jQuery
        const biji=[jquery.youshi,jquery.xuanzeqi,jquery.duixiang,
            jquery.curd,jquery.huoquyuansu,jquery.bianli,jquery.suoyin,jquery.shuxinxzq]
        let idArray = window.location.search.split('=');
        // 获取路由的参数
        let Id = idArray[1];
        if(Id==0){
        // 按钮数量及渲染页面维护
        for(var i=0;i<8;i++){
          var root=document.getElementById("root")
          var div=document.createElement("div")
          div.className="jq"
          root.appendChild(div)
          var divfahter=document.getElementsByClassName("jq")
          for(var j=0;j<biji[i].length;j++){
            var div=document.createElement("div")
            div.innerText=biji[i][j]
            div.className="jqyou"
            divfahter[i].appendChild(div)
            }
        }
        }
    })
}