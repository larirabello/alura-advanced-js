class HttpService {

    get(url) {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();

            xhr.open('GET', url);
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

                        resolve(JSON.parse(xhr.responseText));   
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            xhr.send();

        });
    }
}