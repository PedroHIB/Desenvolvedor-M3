var prod = [{
    nome: 'CAMISETA MESCLA',
    valor: 28.00,
    divisao:3,
    cores: ['cinza'],
    tamanhos: ['p', 'm', 'g'],
    imagem: 2
},{
    nome: 'SAIA EM COURO',
    valor: 398.00,
    divisao: 5,
    cores: ['preto', 'marrom'],
    tamanhos: ['p', 'm', 'g'],
    imagem: 3
},{
    nome: 'CARDIGAN TIGRE',
    valor: 398.00,
    divisao: 5,
    cores: ['preto', 'marrom'],
    tamanhos: ['p', 'm', 'g'],
    imagem: 4
},{
    nome: 'CARDIGAN OFF WHITE',
    valor: 99.90,
    divisao: 3,
    cores: ['branco', 'rosa'],
    tamanhos: ['p', 'm', 'g'],
    imagem: 5
},{
    nome: 'BODY LEOPARDO',
    valor: 129.90,
    divisao: 3,
    cores: ['preto', 'marrom'],
    tamanhos: ['GG', '36', '44'],
    imagem: 6
},{
    nome: 'CASACO PELOS',
    valor: 398.00,
    divisao: 5,
    cores: ['rosa', 'roxo'],
    tamanhos: ['36', '38', '40','42', '44','46'],
    imagem: 7
},{
    nome: 'CROPPED STRIPES',
    valor: 120.00,
    divisao: 3,
    cores: ['azul', 'amarelo', 'laranja'],
    tamanhos: ['p', 'm', 'g','36','38','40'],
    imagem: 8
},{
    nome: 'CAMISA TRANSPARENTE',
    valor: 398.00,
    divisao: 5,
    cores: ['preto','branco'],
    tamanhos: ['p', 'm', 'g','36','38','40'],
    imagem: 9
},{
    nome: 'PONCHETE CLUTCH',
    valor: 99.00,
    divisao: 3,
    cores: ['preto'],
    tamanhos: ['p', 'm', 'g','gg','36','38','40','42','44','46'],
    imagem: 10
}]



window.onload = render;
function render(){
    for (var i=0; i < prod.length; i++){
        var divtxt = document.getElementsByName('item')[i]
        var divImg = document.getElementsByName('imagem')[i]

        var img = document.createElement("img")
        divtxt.style.textAlign = 'center'
    
        divImg.appendChild(img);
        divImg = img.setAttribute('src',`layout/imagens/img_${prod[i].imagem}.png`)

        var real = prod[i].valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    
        var txt = `${prod[i].nome}<p style="margin-top:5PX"> <b>${real}</b></p> <p style="margin-bottom:5PX">até ${prod[i].divisao}x de R$ ${(prod[i].valor / prod[i].divisao).toFixed(2)}</p>`
        divtxt.innerHTML = txt
    }
}


/*filtros Ordem*/
/*
var result = []
$( ".filRecentes" ).click(function() {
    reder()
})

$( ".filMenorV" ).click(function() {

})
$( ".filMaiorV" ).click(function() {
    
})*/