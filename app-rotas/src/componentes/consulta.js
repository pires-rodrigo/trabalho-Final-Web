import { useState, useEffect } from "react"
import Card from "./card"

export default function Consultar() {
    const [cardapios, setCardapios] = useState([])

    function consultar() {
        fetch('http://localhost:8080/cardapio')
            .then(data => data.json())
            .then(response => setCardapios(response))
    }

    useEffect(consultar, [])

    return (
        <div>
            <div className="conteiner" style={{ border: '1px solid white', padding: '10px', margin: '20px'}}>
                <div className="d-flex flex-wrap ">
                    {
                        cardapios.map(ca => <Card cardapio={ca} />)
                    }
                </div>
            </div>

        </div>
    )

}