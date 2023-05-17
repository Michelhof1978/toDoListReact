import {useState} from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid'//Importation uuid pour pouvoir bien indexer correctement les Items

export default function Form(){

    //State
    const [dataArr, setDataArr] = useState([//Création du state sous forme de tableau
        {txt: "Promener le chien" , id: uuidv4()}, //On execute uuid pour que les items par la suite soient bien indexés et avoir un Id unique
        {txt: "Sport" , id: uuidv4()},//L'Id unique sera sous forme '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        {txt: "Coder avec React" , id: uuidv4()},
    ])

    //Suppression des Items
    const deleteElement = id => {//On passe cette fonction en props
        // console.log(id);
        const filteredState = dataArr.filter(item => {//dataArr.filter => méthode pour filtrer un tableau
            return item.id !== id;//On retourne un nouveau tableau avec les id d item
        })
        setDataArr(filteredState)
    }

    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input type="text" className="form-control" id="todo"/>

                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>

            <h2>Liste des choses à daire : </h2>
            <ul className="list-group"> {/*On retourne une liste avec les Items */}
                {dataArr.map((item) => {// map va retourner un nouveau tableau ,item est un paramètre de la fonction de rappel utilisée dans la méthode map()
                    return (
                        <Item //On insère les items qui sont des li ds le ul
                        txt={item.txt} 
                        key={item.id}//Une clé différente pour chaque élément item (uniquement pour react)
                        id={item.id}//Id unique grâce à uuid
                        delFunc={deleteElement}
                        />
                    )
                })}
            </ul>   
        </div>

    )
}