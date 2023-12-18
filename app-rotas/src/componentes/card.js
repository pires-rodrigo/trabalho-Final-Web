import { useState } from "react";
import { Link } from "react-router-dom"

export default function Card(props) {
    const [prato] = useState('')
    const [categoria] = useState('')
    const [descricao] = useState('')
    const [preco] = useState('')
    const [imagem] = useState('')

    let obj = { prato, categoria, descricao, preco, imagem }

    function excluir() {
        fetch(`http://localhost:8080/cardapio/${props.cardapio.id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            })
            .then(x => alert('Prato excluído do cardápio!'))

        console.log(props.cardapio.id)
    }

    function descricaoCategoria(categoria) {
        switch (categoria) {
            case 1:
                return 'Entrada';
            case 2:
                return 'Prato Principal';
            case 3:
                return 'Acompanhamento';
            case 4:
                return 'Sobremesa';
            case 5:
                return 'Bebida';
            default:
                return '';
        }
    }

    return (

        <div className="card m-3 col-sm-4 col-md-2" style={{ backgroundColor: 'papayawhip'}}>

            <img src={props.cardapio.imagem} className="card-img-top" alt={'Não possui imagem'}></img>
            <div className="card-body" style={{ textAlign: 'left', backgroundColor: 'cornflowerblue'}}>
                <div>
                    <span className="fw-bold">Prato: </span>
                    <span className="text">{props.cardapio.prato}</span>
                </div>

                <div>
                    <span className="fw-bold">Categoria: </span>
                    <span className="text" >{descricaoCategoria(props.cardapio.categoria)}</span>
                </div>

                <div>
                    <span className="fw-bold">Descrição: </span>
                    <span className="text">{props.cardapio.descricao}</span>
                </div>

                <div>
                    <span className="fw-bold">Preco: </span>
                    <span className="number-danger">{props.cardapio.preco}</span>
                </div>

            </div>

            <div className="m-2 d-flex justify-content-between">
                <Link to={`/cardapio/editar/${props.cardapio.id}`}><button className="btn btn-primary">Editar</button></Link>

                <button onClick={excluir} className="btn btn-danger">Excluir</button>
            </div>
        </div>

    )
}