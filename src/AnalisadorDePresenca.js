import React from 'react'

export default class AnalisandoDePresencaClass extends React.Component {
    constructor(props) {
        super(props);
        this.atas = props;
    }

    colaboradoresQueViram2WorkshopsSeguidos() {
        let ultimaLista = [];
        let colaboradores = [];

        for (index in this.atas) {
            let cadaColaborador = this.atas[index].split(" ");
            // Filtrando os caloboradores que estavam na ultima seção e que também estão na atual
            let colaboradoresIguais = cadaColaborador.filter(colaborador => ultimaLista.includes(colaborador));
            colaboradoresIguais.forEach(colaborador => {
                // Inserindo os colaboradores que vinheram a 2 eventos consecultivos mas que ainda não estão na lista
                if (!colaboradores.includes(colaborador)) {
                    colaboradores.push(colaborador);
                }
            });
            // Definindo a lista dos colaboradores do ultimo evento
            ultimaLista = cadaColaborador;
        }
        //Ordenando
        colaboradores = colaboradores.sort();
        return colaboradores;
    }
}
