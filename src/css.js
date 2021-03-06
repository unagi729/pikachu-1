const string = `
*{box-sizing: border-box;margin: 0;padding: 0;}
*::before,*::after{box-sizing: border-box;}

body{
    background-color: #ffe600;
}
.skin{
    position: relative;

}
.nose{
    border:10px solid;
    border-color:black transparent transparent;
    width: 0;
    height: 0;
    position: relative;
    left: 50%;
    margin-left: -10px;
    top:200px;
    z-index: 10; /*图层最顶*/
}
.yuan{
    background-color: black;
    position: absolute;
    width: 18px;
    height: 6px;
    left: -9px;
    top: -13px;
    border-radius: 50%;
}
@keyframes wave{
    0%{
        transform: rotate(0deg);
    }
    33%{
        transform: rotate(5deg);
    }
    66%{
        transform: rotate(-5deg);
    }
    100%{
        transform: rotate(0deg);
    }
}
.nose:hover{
    transform-origin:center bottom ;
    animation: wave 300ms infinite linear;
}
.eye{
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left:50%;
    margin-left: -32px;
    top: 150px;
    border-radius: 50%;
    background: #2e2e2e;
}
.eye::before{
    content: '';
    display: block;
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #fff;
    position: relative;
    left: 8px;
}
.eye.left{
    transform: translateX(-150px); 
}
.eye.right{
    transform: translateX(150px); 
}

.mouth{
    position: absolute;
    height: 200px;
    width: 200px;
    left: 50%;
    margin-left: -100px;
    top: 200px;
}
.mouth .up{
    position: relative;
    top: 10px;
    z-index: 1;
}
.mouth .up .lip{
    position: absolute;
    border: 3px solid black;
    border-top-color: transparent;
    border-right-color:transparent;
    width: 103px;
    height: 30px;
    left: 50%;
    margin-left: -50px;
    background-color: #ffe600;
}
.mouth .up .lip.left{
    border-radius: 0 0 0 50px;
    transform:rotate(-15deg) translateX(-55px);
}
.mouth .up .lip.right{
    border-radius: 0 0 50px 0;
    transform:rotate(15deg) translateX(55px);
}
.mouth .up .lip::before{
    content: '';
    display: block;
    width: 7px;
    height: 30px;
    background-color: #ffe600;
    position: absolute;
    bottom: 0;
}
.mouth .up .lip.left::before{
    right: -3px;
}
.mouth .up .lip.right::before{
    left: -3px;
}
.mouth .down{
    position: absolute;
    width: 100%;
    height: 130px;
    overflow: hidden;
    top: 40px;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 105px/300px;
    background: #9b000a;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 200px;
    height: 250px;
    background: #ff485f;
    position: absolute;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    border-radius: 100px;
} 
.cheek{
    border: 3px solid #000;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    width: 88px;
    height: 88px;
    left: 50%;
    margin-left: -50px;
    top: 260px;
}
.cheek.left{
    transform: translateX(-190px);
}
.cheek.right{
    transform: translateX(190px);
}`

export default string