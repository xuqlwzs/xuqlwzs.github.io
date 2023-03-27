

window.onload = function () {
    const audo = document.getElementById("audo")
    const play = document.getElementsByClassName("play")[0]
    const left = document.getElementsByClassName("left")[0]
    const right = document.getElementsByClassName("right")[0]
    const jindutiao = document.getElementsByClassName("jindutiao")[0]
    // const yuan = document.getElementsByClassName("yaun")[0]
    const geci = document.getElementsByClassName("geci")[0]
    const jina = document.getElementsByClassName("jindu")[0]
    const zuo = document.getElementsByClassName("zuo")[0]
    const gecidiv = document.getElementsByClassName("gecidiv")
    const mz=document.getElementsByClassName("mz")[0]
    const liebiao = [{ gemin: '我不曾忘记', url: '../../bgm/music/花玲、张安琪、沐霏 - 我不曾忘记.flac', gecia: '../../bgm/music/花玲、张安琪、沐霏 - 我不曾忘记.lrc' }, { gemin: '画中游', url: '../../bgm/music/王秋实 - 画中游.flac', gecia: '../../bgm/music/王秋实 - 画中游.lrc' }]
    let jin = 0;
    let off = true
    let index = 0;
    let lyric = [];
    var scrollHeight=true
    // 播放点击事件
    play.onclick = function () {
        if (off) {
            play.src = "../../img/musicImg/pause.svg"
            const lenth = parseInt(audo.duration)
            jindu = setInterval(jindua, lenth * 10)
            audo.play()
            off = !off
        } else {
            play.src = "../../img/musicImg/play.svg"
            clearInterval(jindu)
            audo.pause()
            off = !off
        }
    }
    // 进度条
    function jindua() {
        if (jin == 100) {
            clearInterval(jindu)
            jin = 0;
            play.src = "../../img/musicImg/play.svg"
            off = !off
        } else {
            jin += 1
            jindutiao.style.width = jin + '%'
        }
    }
    // 鼠标按下事件确定位置
    jina.onmousedown = function (e) {
        jin = parseInt(e.clientX / 15.34)
        audo.currentTime = jin * (audo.duration / 100)
        if (off) {
            play.src = "../../img/musicImg/pause.svg"
            const lenth = parseInt(audo.duration)
            jindu = setInterval(jindua, lenth * 10)
            audo.play()
            off = !off
        }
    }
// 上一曲
    left.onclick = function () {
        if (index == 0) {
            index = liebiao.length - 1
            audo.src = liebiao[index].url
        } else {
            index = index - 1
            audo.src = liebiao[index].url
        }
        audo.load()
        getLyric()
        gemingx()
    }
    // 下一曲
    right.onclick = function () {
        if (index == liebiao.length - 1) {
            index = 0
            audo.src = liebiao[index].url
        } else {
            index = index + 1
            audo.src = liebiao[index].url
        }
        audo.load()
        getLyric()
        gemingx()
    }
    // 获取歌名
    function gemingx() {
        zuo.innerText = liebiao[index].gemin
        mz.innerText=liebiao[index].gemin
    }
    gemingx()
    // ajax获取本地歌词
    function getLyric() {
        var request = new XMLHttpRequest();
        request.open('GET', liebiao[index].gecia, true);
        request.responseType = 'text';
        request.onload = function () {
            lyric = parseLyric(request.response);
            geci.innerHTML = ''
            for (var i = 0, l = lyric.length; i < l; i++) {
                if(i>=1){
                    var div = document.createElement('div')
                    div.innerText = lyric[i][1]
                    div.className = 'gecidiv'
                    geci.appendChild(div)
                }
            };
        };
        request.onerror = request.onabort = function (e) {
            geci.textContent = '加载失败'
        }
        request.send();
    }
    getLyric()
    function parseLyric(text) {
        //将文本分隔成一行一行，存入数组
        var lines = text.split('\n'),
            //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
            pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
            //保存最终结果的数组
            result = [];
        //去掉不含时间的行
        while (!pattern.test(lines[0])) {
            lines = lines.slice(1);
        };
        //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
        lines[lines.length - 1].length === 0 && lines.pop();
        lines.forEach(function (v /*数组元素值*/, i /*元素索引*/, a /*数组本身*/) {
            //提取出时间[xx:xx.xx]
            var time = v.match(pattern),
                //提取歌词
                value = v.replace(pattern, '');
            //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
            time.forEach(function (v1, i1, a1) {
                //去掉时间里的中括号得到xx:xx.xx
                var t = v1.slice(1, -1).split(':');
                //将结果压入最终数组
                result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
            });
        });
        //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
        result.sort(function (a, b) {
            return a[0] - b[0];
        });
        return result;
    }
    audo.ontimeupdate = function (e) {
        for (var i = 0, l = lyric.length; i < l; i++) {
            if (audo.currentTime /*当前播放的时间*/ > lyric[i][0]) {
                //显示到页面
                gecidiv[i].style.color = 'red'
                //滚动
                if(scrollHeight){
                    setTimeout(gundon(i),3000)
                }
                if (i > 0) {
                    gecidiv[i - 1].style.color = 'black'
                }

            };
        };
    }
    // 滚动
    function gundon(i){
       if(lyric.length!=0 && gecidiv.length!=0){
        geci.scrollTop=(i-5)*40
       }
    }
}