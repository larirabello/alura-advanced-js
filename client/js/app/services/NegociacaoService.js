class NegociacaoService {


    obterNegociacoesDaSemana(cb) {

        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'negociacoes/semana');
        xhr.onreadystatechange = () => {
        
            /* ESTADOS:
            0: Req. nao iniciada
            1: conexao c servidor estabelecida
            2: req. recebida
            3: processando req.
            4: req. concluida e a resposta está pronta
            */
            if(xhr.readyState == 4) {

                if(xhr.status == 200) {
                    cb(null, JSON.parse(xhr.responseText).map(objeto => new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)));
                    
                } else {
                    console.log(xhr.responseText);
                    cb('Nao foi possivel obter as negociacoes');
                }
            }
        };
        xhr.send();
    }
}