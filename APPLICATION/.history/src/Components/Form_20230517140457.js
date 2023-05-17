import {useState} from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid'//Importation uuid pour pouvoir bien indexer correctement les Items

export default function Form(){

    const [dataArr, setDataArr] = useState([//Création du state sous forme de tableau
        {txt: "Promener le chien" , id: uuidv4()}, //On execute uuid 
        {txt: "Sport" , id: uuidv4()},
        {txt: "Coder avec React" , id: uuidv4()},
    ])

    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input type="text" className="form-control" id="todo"/>

                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à daire : </h2>
            <ul className="list-group"> {/*On retourne une liste avec les Items */}
                {dataArr.map((item, index) => {// map va retourner un nouveau tableau ,item et index sont des paramètres de la fonction de rappel utilisée dans la méthode map()
                    return (
                        <Item //On insère les items qui sont des li ds le ul
                        txt={item.txt} 
                        key={index}//Une clé différente pour chaque élément item
                        />
                    )
                })}
            </ul>   
        </div>

    )
}