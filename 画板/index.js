

 var canvas = document.querySelector("canvas");//画布
 var cobj = canvas.getContext("2d");//选择边数

 var pencil= document.querySelector("#pencil");//铅笔
 var straightLine= document.querySelector("#straightLine");//直线
 var rectangle= document.querySelector("#rectangle");//矩形
 var polygon= document.querySelector("#polygon");//多边形
 var Hollow= document.querySelector("#Hollow");//空心圆
 var Eraser= document.querySelector("#Eraser");//橡皮



 var polygon=document.querySelector("#polygon"); //工具库
 var jiaodian=document.querySelector('#polygon a');
 var xuanbing=document.querySelector(".xuanbian");
 var ColorBlock=document.querySelector('.ColorBlock');
 var color = document.querySelector("#color");//选择颜色
 var mode = document.querySelector('.mode');//颜色块
 var td = document.querySelector('.tb');//调色板
 var vidio=document.querySelector('#color');//显示块
 var black=document.querySelector('.black');
 var red=document.querySelector('.red');
 var green=document.querySelector('.green');
 var blue=document.querySelector('.blue');
 var brown=document.querySelector('.brown');
 var gold=document.querySelector('.gold');
 var gray=document.querySelector('.gray');
 var orange=document.querySelector('.orange');
 var yellow=document.querySelector('.yellow');
 var wheat=document.querySelector('.wheat');
 var pink=document.querySelector('.pink');
 var white=document.querySelector('.white');
 var Violet=document.querySelector('.Violet');
 var Magenta=document.querySelector('.Magenta');
 var Cyan=document.querySelector('.Cyan');








 var width = document.querySelector("#width");//选择线宽
 var style = document.querySelector("#style");//选择方式
 var side = document.querySelector("#side");//选择边数



 var redo = document.querySelector("#redo");//撤销
 var save = document.querySelector("#save");//保存
 var qingkong = document.querySelector("#qingkong");//清空

  var data = [];
 var s = "";

 pencil.onclick=function(){
    s="pen";
 }
  straightLine.onclick=function(){
    s="line";
 }

 rectangle.onclick=function(){
    s="rect";
 }
  polygon.onclick=function(){
    s="poly";
 }
  Hollow.onclick=function(){
    s="circle2";
 }

 Eraser.onclick=function(){
    s="eraser";
 }

 shape.onchange = function() {
     s = this.value;
     console.log(this);
 };





 var c = "#000";
 ColorBlock.onmousemove=function(){
    mode.style.display='block';
 }
 // ColorBlock.onmouseup=function(){
 //    mode.style.display="none";
 // }
black.onclick=function(){
    c='#000';
    mode.style.display="none";
    vidio.style.backgroundColor="#000";

}
red.onclick=function(){
    c='red';
    mode.style.display="none";
        vidio.style.backgroundColor="red";
}
green.onclick=function(){
    c='#008000';
    mode.style.display="none";
        vidio.style.backgroundColor="#008000";
}
blue.onclick=function(){
    c='#0000FF';
    mode.style.display="none";
     vidio.style.backgroundColor="#0000FF";
}
brown.onclick=function(){
    c='#A52A2A';
    mode.style.display="none";
     vidio.style.backgroundColor="#A52A2A";
}
gold.onclick=function(){
    c='#FFD700';
    mode.style.display="none";
     vidio.style.backgroundColor="#FFD700";
}
gray.onclick=function(){
    c='#808080';
    mode.style.display="none";
     vidio.style.backgroundColor="#808080";
}
orange.onclick=function(){
    c='#FFA500';
    mode.style.display="none";
     vidio.style.backgroundColor="#FFA500";
}
yellow.onclick=function(){
    c='#FFFF00';
    mode.style.display="none";
     vidio.style.backgroundColor="#FFFF00";
}
wheat.onclick=function(){
    c='#F5DEB3';
    mode.style.display="none";
     vidio.style.backgroundColor="#F5DEB3";
}
pink.onclick=function(){
    c='#FFA500';
    mode.style.display="none";
     vidio.style.backgroundColor="#FFA500";
}
white.onclick=function(){
    c='#FFFFFF';
    mode.style.display="none";
     vidio.style.backgroundColor="#FFFFFF";
}
Violet.onclick=function(){
    c='#EE82EE';
    mode.style.display="none";
     vidio.style.backgroundColor="#EE82EE";
}
Magenta.onclick=function(){
    c='#FF00FF';
    mode.style.display="none";
     vidio.style.backgroundColor="#FF00FF";
}
Cyan.onclick=function(){
    c='#00FFFF';
    mode.style.display="none";
     vidio.style.backgroundColor="#00FFFF";
}
 color.onchange = function() {
     c = this.value;
 };
 var w = "2";
 width.onchange = function() {
     w = this.value;
 };
 var st = "stroke";
 style.onchange = function() {
     st = this.value;
 };
 var sd = "3";
 side.onchange = function() {
     sd = this.value;
 };

 canvas.onmousedown = function(e) {
     var ox = e.offsetX;
     var oy = e.offsetY;
     var draw = new Draw(cobj, {
         color: c,
         width: w,
         style: st,
         side: sd
     });
     if (s == "pen") {
         cobj.beginPath();
         cobj.moveTo(ox, oy);
     }

    
     

     canvas.onmousemove = function(e) {
         var mx = e.offsetX;
         var my = e.offsetY;
         if (s != "eraser") {
             cobj.clearRect(0, 0, 1280, 1280);
             if (data.length != 0) {
                 cobj.putImageData(data[data.length - 1], 0, 0, 0, 0, 1280, 1280); //将某个图像数据放置到画布指定的位置上  后面四个参数可省略
             }
         }
         //            cobj.strokeRect(ox,oy,mx-ox,my-oy);
         // cobj.beginPath()
         draw[s](ox, oy, mx, my, sd);
     };
     document.onmouseup = function() {
         data.push(cobj.getImageData(0, 0, 1280, 1280)); //获取画布当中指定区域当中所有的图形数据
         canvas.onmousemove = null;
         xuanbing.style.display="none";
         mode.style.display="none";

         document.onmouseup = null;
         
     }
 };
 redo.onclick = function() {
     if (data.length == 0) {
         alert("无效操作");
         return;
     }
     cobj.clearRect(0, 0, 1280, 1280);
     data.pop();
     if (data.length == 0) {
         return;
     }
     cobj.putImageData(data[data.length - 1], 0, 0, 0, 0, 1280, 1280);
 };
 save.onclick = function() {
     var r = canvas.toDataURL();
     location.assign(r)
 };
 qingkong.onclick = function() {
     cobj.clearRect(0, 0, 1280, 1280);
     data = [];
 }
 class Draw {
     constructor(cobj, option) {
         this.cobj = cobj;
         this.color = option.color;
         this.width = option.width;
         this.style = option.style;
     }
     init() { //初始化
         this.cobj.strokeStyle = this.color;
         this.cobj.fillStyle = this.color;
         this.cobj.lineWidth = this.width;
     }
     rect(ox, oy, mx, my) {
         this.init();
         this.cobj.beginPath();
         this.cobj.rect(ox, oy, mx - ox, my - oy);
         this.cobj[this.style]();

     }
     line(ox, oy, mx, my) {
         this.init();
         this.cobj.beginPath();
         this.cobj.moveTo(ox, oy);
         this.cobj.lineTo(mx, my);
         this.cobj.stroke();
     }
     circle(ox, oy, mx, my) { //内切圆
         this.init();
         this.cobj.beginPath();
         /*        var r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2))/2;
                 this.cobj.arc(ox+(mx-ox)/2,oy+(my-oy)/2,r,0,2*Math.PI);*/
         var r = Math.abs(mx - ox) > Math.abs(my - oy) ? Math.abs(my - oy) / 2 : Math.abs(mx - ox) / 2;
         this.cobj.arc(ox + (ox < mx ? r : -r), oy + (oy < my ? r : -r), r, 0, 2 * Math.PI);
         this.cobj[this.style]();
     }
     circle1(ox, oy, mx, my) { //外接圆
         this.init();
         this.cobj.beginPath();
         var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2)) / 2;
         this.cobj.arc(ox + (mx - ox) / 2, oy + (my - oy) / 2, r, 0, 2 * Math.PI);
         this.cobj[this.style]();
     }
     circle2(ox, oy, mx, my) { //中心圆
         this.init();
         this.cobj.beginPath();
         var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2));
         this.cobj.arc(ox, oy, r, 0, 2 * Math.PI);
         this.cobj[this.style]();
     }
     poly(ox, oy, mx, my, sd) {
         this.init();
         this.cobj.save();
         cobj.translate(ox, oy);
         this.cobj.rotate(Math.PI / 2);
         var angle = Math.PI / sd;
         var r = Math.sqrt(Math.pow(mx - ox, 2) + Math.pow(my - oy, 2));
         var x = Math.cos(angle) * r;
         var y = Math.sin(angle) * r;
         this.cobj.beginPath();
         this.cobj.moveTo(x, y);
         for (var i = 0; i < sd; i++) {
             this.cobj.lineTo(x, -y);
             this.cobj.rotate(-angle * 2)
         }
         this.cobj[this.style]();
         this.cobj.restore()
     }
     pen(ox, oy, mx, my) {
         this.init();
         this.cobj.lineTo(mx, my);
         this.cobj.stroke();
     }
     eraser(ox, oy, mx, my) {
         this.cobj.clearRect(mx, my, 40, 40);
     }

 }
 polygon.onmouseover=function(){
        xuanbing.style.display='block';
     }



