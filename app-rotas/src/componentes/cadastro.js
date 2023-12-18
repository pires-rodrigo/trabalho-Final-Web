import { useState } from "react"

export default function Cadastro() {
    const [prato, setPrato] = useState('')
    const [categoria, setCategoria] = useState('')
    const [descricao, setDescricao] = useState('')
    const [imagem, setImagem] = useState('')
    const [preco, setPreco] = useState('')



    function salvar() {

        let obj = { prato, categoria, descricao, preco, imagem }

        fetch('http://localhost:8080/cardapio',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(obj)
            })
            .then(x => alert('Prato inserido ao cardápio!'))
    }


    function limparCampos() {
        setPrato('');
        setCategoria('');
        setDescricao('');
        setImagem('');
        setPreco('');
    }


    return (
        <div className="container" style={{ textAlign: 'left', fontFamily: 'Arial Narrow Bold' }}>
            <h2 className="text-center" style={{ fontFamily: 'Arial Narrow Bold' }}>Novo prato para o cardápio</h2>

            <label className="form-label text-start" style={{ textAlign: 'left' }}>Digite o nome do prato</label>
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