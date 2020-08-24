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
    var filtroCores = []
    var cor
    function acrescentarCor(cor){
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 3; j++){
                if (products[i].cores[j] == cor){
                    filtroCores.push(products[i])
                    filtroCores = filtroCores.filter(function (a) {
                        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
                    },
                    Object.create(null))

                    console.log(filtroCores)
                }
            }
        }
    }
    $(document).ready(function(){
        $(".cor").find("input[type='checkbox']").click(function(){
           cor = $(this).attr("id");
           acrescentarCor(cor)

           if (document.querySelector(`#${cor}`).checked) {
            
            clear()
            render(filtroCores)
        } else {
            clear()
            render(products)
        }
        });
    });



    /*Filtro de Tamanhos */
    var filtroTamanho = []
    var tamanho
    function acrescentarTamanho(tam){
        for (var i = 0; i < 9; i++){
            for (var j = 0; j < 10; j++){
                if (products[i].tamanhos[j] == tam){
                    filtroTamanho.push(products[i])
                    filtroTamanho = filtroTamanho.filter(function (a) {
                        return !this[JSON.stringify(a)] && (this[JSON.stringify(a)] = true);
                    },
                    Object.create(null))

                    console.log(filtroTamanho)
                }
            }
        }
    }
    $(document).ready(function(){
        $(".secTamanhos").find("input[type='checkbox']").click(function(){
           tamanho = $(this).attr("name");
           acrescentarTamanho(tamanho)
            console.log(tamanho)
            if (document.querySelector(`#tam${tamanho}`).checked) {
                clear()
                render(filtroTamanho)
            } else {
                clear()
                render(products)
            }
        });
    });

})();