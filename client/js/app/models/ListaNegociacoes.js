// criar modelo de lista de negociacoes para encapsular a lista no model
class ListaNegociacoes {

    constructor(armadilha) {

        this._negociacoes = [];
        this._armadilha = armadilha;
    }

    adiciona(negociacao) {
        
        this._negociacoes.push(negociacao);
        this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }

    get negociacoes() {
        
        // para blindar o array, criei no retorno um array vazio e concatenei com o existente. Consigo dar push mas só na cópia e nao na lista original
        return [].concat(this._negociacoes);

    }

    esvazia() {
        this._negociacoes = [];
        this._armadilha(this);
        //Reflect.apply(this._armadilha, this._contexto, [this]);
    }
}