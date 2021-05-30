import {useState} from "react";
import "./style.css"

function Pessoa(){

    const [form, setform ] = useState({

    })


    const [pessoas, setPessoas] = useState([
    {nome: "Rafael", telefone: "61-9999999"},
    {nome: "Vitor",   telefone: "61-9999999"},
    {nome: "Rafael", telefone: "61-9999999"},
    {nome: "Vitor",   telefone: "61-9999999"}

    ]);

    function mudarValor(event){
         const campo = event.target.name;

         setform({...form, [campo]: event.target.value })
    }

    function adicionarPessoa() {
        // Cria uma nova lista para ser atualizada
        const novaLista = [...pessoas];


        //Adiciona nova pessoa na lista

        novaLista.push(form);

        setform({nome: '', telefone: ''})

        //Atualiza lista de Pessoas
        setPessoas(novaLista);
    }

    return(
        <div className={'conteudo'}>

            <h4>Lista Pessoa</h4>
            <table>
            <tr>
                    <th>Nome</th>
                    <th>Telefone</th>
            </tr>

                {pessoas.map(pessoa => (

                    <tr>
                        <td>{pessoa.nome}</td>
                        <td>{pessoa.telefone}</td>

                    </tr>


                ))}






            </table>
            <hr/>



            <input type={'text'} placeholder={'nome'} value={form.nome} name={'nome'}onChange={mudarValor}/>

            <input type={'text'} placeholder={'telefone'} value={form.telefone} name={'telefone'} onChange={mudarValor}/>

            <input type={'button'} value={'Adicionar'} className={'botaoAdicionar'} onClick={adicionarPessoa}/>

            <input type={'button'} value={'Remover'} className={'botaoRemover'} />


        </div>
    );
}

export default Pessoa;