import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function Editar() {
    const [prato, setPrato] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [preco, setPreco] = useState('')

    const { idCardapio } = useParams()

    function salvar() {

        let obj = { id: idCardapio, prato, categoria, descricao, preco, imagem }

        fetch(`http://localhost:8080/cardapio/${idCardapio}`,
            {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            })
            .then(x => alert('Prato alterado e inserido ao cardápio!'))
    }

    useEffect(() => {
        fetch(`http://localhost:8080/cardapio/${idCardapio}`)
            .then(data => data.json())
            .then(response => {
                setPrato(response.prato)
                setCategoria(response.categoria)
                setDescricao(response.descricao)
                setImagem(response.imagem)
                setPreco(response.preco)
            })
    }, []);


    function limparCampos() {
        setPrato('');
        setCategoria('');
        setDescricao('');
        setImagem('');
        setPreco('');
    }

    return (
        <div className="container" style={{ textAlign: 'left', fontFamily: 'Arial Narrow Bold' }}>
            <h2 className="text-center" style={{ fontFamily: 'Arial Narrow Bold' }}>Editando {prato}</h2>

            <label className="form-label">Digite o nome do prato</label>
            <input className="form-control" type="text"
                placeholder="Nome do prato" value={prato} onChange={txt =>
                    setPrato(txt.target.value)} />


            <label className="form-label">Categoria</label>
            <select
                className="form-select"
                value={categoria}
                onChange={(txt) => setCategoria(txt.target.value)}
            >
                <option value="1">Entrada</option>
                <option value="2">Prato Principal</option>
                <option value="3">Acompanhamento</option>
                <option value="4">Sobremesa</option>
                <option value="5">Bebida</option>
            </select>

            <label className="form-label">Descrição do prato</label>
            <input className="form-control" type="text"
                placeholder="Informe a descrição" value={descricao}
                onChange={txt => setDescricao(txt.target.value)} />

            <label className="form-label">Insira o link da imagem do seu prato</label>
            <input className="form-control" type="text"
                placeholder="link da imagem" value={imagem}
                onChange={txt => setImagem(txt.target.value)}></input>

            <label className="form-label">Preço do prato</label>
            <input className="form-control" type="number"
                placeholder="Informe o preço" value={preco}
                onChange={txt => setPreco(txt.target.value)} />

            <div className="mt-3 d-flex justify-content-between">
                <button onClick={salvar}
                    className="btn btn-primary">Salvar</button>
                <button onClick={limparCampos}
                    className="btn btn-danger">Cancelar</button>
            </div>

        </div>
    )
}