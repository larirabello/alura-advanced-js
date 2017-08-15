// criar modelo de lista de negociacoes para encapsular a lista no model
class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
    }

    get negociacoes() {
        
        // para blindar o array, criei no retorno um array vazio e concatenei com o existente. Consigo dar push mas só na cópia e nao na lista original
        return [].concat(this._negociacoes);

    }

    esvazia() {
        this._negociacoes = [];
    }
}