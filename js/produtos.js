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
        /*var filcor = [];
        
        products.forEach((filcor) => {
            if(products.cores == "amarelo") {
                filcor.push(products)
            }
        })
        clear()
        render(filcor) 
        console.log(filcor)*/

        /*products.forEach(function(el){
            if(el.cores === "amarelo") {
                alert ("achou!")
            }
        });*/

        let re = []
        products.filters(function(a) {
            return re.push(a.cores == "Amarelo");
        });
        
        console.log(re)
        clear()
        render(re) 
    })
})();