(async () => {
    let products = await fetch('/js/data.json').then(res => res.json()).then(data => data);
    
    const galery = document.querySelector('.galeria');

    function clear(){
        galery.innerHTML = ""
    }
    function render(x) {
        x.forEach((product) => {
            const productContainer = document.createElement('div');
            productContainer.classList.add('container');

            const real = product.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

            productContainer.innerHTML = `
            <div name="imagem" id="imagem">
                <img src="layout/imagens/img_${product.imagem}.png" />
            </div>
            <div class="item" name="item" id="item" style="text-aling: center;">
                <p style="text-align-center">
                    ${product.nome}
                </p>
                <p style="margin-top:5PX">
                    <b>${real}</b>
                </p> 
                <p style="margin-bottom:5PX">
                    até ${product.divisao}x de R$ ${(product.valor / product.divisao).toFixed(2)}
                </p>
            </div>
            <input type="submit" id="btncomprar" value="Comprar" style="text-align: center;"/>`

            galery.appendChild(productContainer);
        });
        productContainer = ''
    };
    render(products);

    /*filtros Ordem*/
    let result
    $( ".filRecentes" ).click(function() {
        location.reload()
    })
    $( ".filMenorV" ).click(function() {
        result = products.sort(function(a, b) {
            return a.valor - b.valor;
        });
        clear()
        render(result)  
    })
    $( ".filMaiorV" ).click(function() {
        result = products.sort(function(a, b) {
            return b.valor - a.valor;
        });    
     
        clear()
        render(result)  
    })


    /*Filtro de Cores */
    $( "#amarelo" ).click(function() { 
        let filtroAmarelo = []  
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'amarelo'){
                    filtroAmarelo.push(products[i])
                }
            }
        }
        
        clear()
        render(filtroAmarelo)
    })
    $( "#azul" ).click(function() {  
        let filtroAzul = []         
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'azul'){
                    filtroAzul.push(products[i])
                }
            }
        }
        
        clear()
        render(filtroAzul)
    })
    $( "#branco" ).click(function() { 
        let filtroBranco = [] 
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'branco'){
                    filtroBranco.push(products[i])
                }
            }
        }        
        clear()
        render(filtroBranco)
    })
    $( "#cinza" ).click(function() { 
        let filtroCinza = [] 
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'cinza'){
                    filtroCinza.push(products[i])
                }
            }
        }
        
        clear()
        render(filtroCinza)
    })
    $( "#laranja" ).click(function() {  
        let filtroLaranja = []  
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'laranja'){
                    filtroLaranja.push(products[i])
                }
            }
        }
        
        clear()
        render(filtroLaranja)
    })
    $( "#laranja" ).click(function() {  
        let filtroLaranja = []  
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'laranja'){
                    filtroLaranja.push(products[i])
                }
            }
        }
        
        clear()
        render(filtroLaranja)
    })
    $( "#verde" ).click(function() {  
        let filtroverde = []  
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'verde'){
                    filtroverde.push(products[i])
                }
            }
        }
        
        clear()
        render(filtroverde)
    })
    $( "#vermelho" ).click(function() {  
        let filtrovermelho = []  
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'vermelho'){
                    filtrovermelho.push(products[i])
                }
            }
        }
        
        clear()
        render(filtrovermelho)
    })
    $( "#preto" ).click(function() {  
        let filtropreto = []  
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'preto'){
                    filtropreto.push(products[i])
                }
            }
        }
        
        clear()
        render(filtropreto)
    })
    $( "#rosa" ).click(function() {  
        let filtrorosa = []  
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'rosa'){
                    filtrorosa.push(products[i])
                }
            }
        }
        
        clear()
        render(filtrorosa)
    })
    $( "#vinho" ).click(function() {  
        let filtrovinho = []  
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == 'vinho'){
                    filtrovinho.push(products[i])
                }
            }
        }
        
        clear()
        render(filtrovinho)
    })
})();