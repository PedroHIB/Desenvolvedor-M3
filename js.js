var prod0 = {
    nome: 'CAMISETA MESCLA',
    valor: 28.00,
    divisao:3,
    cores: ['cinza'],
    tamanhos: ['p', 'm', 'g'],
    imagem: 2
}
var prod1 = {
    nome: 'SAIA EM COURO',
    valor: 398.00,
    divisao: 5,
    cores: ['preto', 'marrom'],
    tamanhos: ['p', 'm', 'g'],
    imagem: 3
}
var prod2 = {
    nome: 'CARDIGAN TIGRE',
    valor: 398.00,
    divisao: 5,
    cores: ['preto', 'marrom'],
    tamanhos: ['p', 'm', 'g'],
    imagem: 4
}
var prod3 = {
    nome: 'CARDIGAN OFF WHITE',
    valor: 99.90,
    divisao: 3,
    cores: ['branco', 'rosa'],
    tamanhos: ['p', 'm', 'g'],
    imagem: 5
}
var prod4 = {
    nome: 'BODY LEOPARDO',
    valor: 129.90,
    divisao: 3,
    cores: ['preto', 'marrom'],
    tamanhos: ['GG', '36', '44'],
    imagem: 6
}
var prod5 = {
    nome: 'CASACO PELOS',
    valor: 398.00,
    divisao: 5,
    cores: ['rosa', 'roxo'],
    tamanhos: ['36', '38', '40','42', '44','46'],
    imagem: 7
}
var prod6 = {
    nome: 'CROPPED STRIPES',
    valor: 120.00,
    divisao: 3,
    cores: ['azul', 'amarelo', 'laranja'],
    tamanhos: ['p', 'm', 'g','36','38','40'],
    imagem: 8
}
var prod7 = {
    nome: 'CAMISA TRANSPARENTE',
    valor: 398.00,
    divisao: 5,
    cores: ['preto','branco'],
    tamanhos: ['p', 'm', 'g','36','38','40'],
    imagem: 9
}
var prod8 = {
    nome: 'PONCHETE CLUTCH',
    valor: 99.00,
    divisao: 3,
    cores: ['preto'],
    tamanhos: ['p', 'm', 'g','gg','36','38','40','42','44','46'],
    imagem: 10
}


function render(x,y) {
    var { nome, valor,divisao, imagem } = x

    var divtxt = document.getElementsByName('item')[y]
    var divImg = document.getElementsByName('imagem')[y]

    var img = document.createElement("img")
    divtxt.style.textAlign = 'center'
    
    divImg.appendChild(img);
    divImg = img.setAttribute('src',`layout/imagens/img_${imagem}.png`)

    var real = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
    var txt = `${nome}<p style="margin-top:5PX"> <b>${real}</b></p> <p style="margin-bottom:5PX">até ${divisao}x de R$ ${(valor / divisao).toFixed(2)}</p>`
    divtxt.innerHTML = txt
}
    render(prod0,0) //1
    render(prod1,1) //2
    render(prod2,2) //3
    render(prod3,3) //4
    render(prod4,4) //5
    render(prod5,5) //6
    render(prod6,6) //7
    render(prod7,7) //8
    render(prod8,8) //9

    //dropdown filtro de ordem
    var veri = 1;
    var trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
    var menu = document.getElementById('menu-hidde');
    if (veri == 1) {
        menu.style.left = "0px";
        veri = 0;
    }else{
        menu.style.left = "-100%";
        veri = 1;
    }
    })



/*
<a href="#">
<img src="layout/imagens/img_2.png">
<p>CAMISETA MESCLA</p>
<p>R$ 28,00</p>
<p>até 3x de R$9,33</p>
<p>
    <div id="comprar">
        <div id="txtcomprar">Comprar</div>
    </div>
</p>
</a>*/