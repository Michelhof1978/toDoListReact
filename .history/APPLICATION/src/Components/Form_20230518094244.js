import {useState} from 'react'
import Item from './Item'
import { v4 as uuidv4 } from 'uuid'//Importation uuid pour pouvoir bien indexer correctement les Items avec en plus la sécurité
// -------------------------------------------------------------------------------------------------------------------------
export default function Form(){

    //State
    const [dataArray, setDataArray] = useState([//Création du state sous forme de tableau
        {txt: "Faire les courses" , id: uuidv4()}, //On execute uuid pour que les items par la suite soient bien indexés et avoir un Id unique
        {txt: "Aller chez le docteur" , id: uuidv4()},//L'Id unique sera sous forme '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
        {txt: "Avoir mon diplôme" , id: uuidv4()},
    ])

    // -------------------------------------------------------------------------------------------------------------------------

    //Création d'un nouveau state vide pour ajout éléments
    const [newStateInput, setNewStateInput] = useState();//On peut créer autant de fois de states que l on veut

    // -------------------------------------------------------------------------------------------------------------------------

    //Suppression des Items
    const supElement = id => {//On passe cette fonction en props
        // console.log(id);

        const filteredState = dataArray.filter(item => {//dataArr.filter => méthode pour filtrer un tableau, filter retourne un nouveau tableau
            return item.id !== id;//On retourne un nouveau tableau avec les id d item différents des id qu on aura cliqué
        })
        setDataArray(filteredState)// On actualise l ancien state et on le remets à jour avec un nouveau state, cela va remettre à jour le state avec ce qui reste en Items, lors du clic sur boutton pour supprimer, l item va disparaître
    }
    // -------------------------------------------------------------------------------------------------------------------------

    //Ajout élément lors du clic sur bouton envoyer
    const addTodoList = e => {
        e.preventDefault();//Pour éviter que le formulaire se mette à jour à chaque fois que l on valide le formulaire, preventDefault() s utilise uniquement qu avec des événements
        const newArray = [...dataArray] //On a creé un nouveau tableau avec tous les objects à l intérieur car, on ne peut pas recopier un tableau ou un object existant donc on va toujours utiliser le spread operator qui va récuperer tous les éléments de dataArr

        const newTodoList = {};//On crée un nouvel object
        newTodoList.txt = newStateInput;//On lui ajoute une propriété txt au nouvel object
        newTodoList.id = uuidv4();//On lui ajoute un id unique comme pour les anciens Items

        newArray.push(newTodoList);//On push le nouvel object ds le tableau que l on a recopié
        setDataArray(newArray);//On change le state avec les nouvelles données que l on aura donné ds le champ de formulaire
        
        setNewStateInput('')//On remets l input du formulaire à zéro lors du clic envoyer pour une meilleure expérience utilisateurs
    }

    const linkedEventInput = e => {//On fait appel à un événement pour que lorsque du clic envoyer, l input se vide
        setNewStateInput(e);

    }

// -------------------------------------------------------------------------------------------------------------------------
    return (

        <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">

<form onSubmit={e => addTodoList(e)} className="mb-3">

                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>

                <input 
                value={newStateInput}//Value => nouveau state
                onChange={e => linkedEventInput(e.target.value)}
                // e.target est une référence à l'objet qui a envoyé l'événement.Lorsque le gestionnaire d'événements est appelé au 
                // cours de la phase de propagation ou de la phase de capture de l'événement.
                type="text" 
                className="form-control" 
                id="todo"/>

                <button className="mt-2 btn btn-primary d-block">Envoyez</button>
            </form>
 {/* ------------------------------------------------------------------------------------------------------------------------- */}
          
            <h2>Liste des choses à daire : </h2>

            <ul className="list-group"> {/*On retourne une liste avec les Items grâce à la classe list-group de bootstrap */}
                {dataArray.map(item => {// map va retourner un nouveau tableau ,item est un paramètre de la fonction de rappel utilisée dans la méthode map()
                    return (
                        <Item //On insère les items qui sont des li ds le ul
                        txt={item.txt} 
                        key={item.id}//Une clé différente pour chaque élément item (uniquement pour react)
                        id={item.id}//Id unique grâce à uuid
                        supItem={supElement}//Création props pour pouvoir appeler la fonction supElement ds item.js lors du clic bouton supprimer
                        />
                    )
                })}
            </ul>   
        </div>

    )
}
//State (État) :
La première partie du code est consacrée à la création de l'état de l'application à l'aide du 
hook useState.
    -dataArray est le tableau qui contient les différentes tâches à faire. Chaque tâche est un objet 
contenant un texte (txt) et un identifiant unique (id) généré par la fonction uuidv4.
    -newStateInput est un autre état qui contient la valeur de l'input du formulaire. Il est 
initialisé comme vide.

Fonction supElement :
Cette fonction est utilisée pour supprimer une tâche. Elle prend en paramètre un id et filtre le
 tableau dataArray pour créer un nouveau tableau sans la tâche ayant cet identifiant. Ensuite,
  elle met à jour dataArray avec ce nouveau tableau.

Fonction addTodoList :
Cette fonction est déclenchée lorsque l'utilisateur soumet le formulaire. Elle crée un nouvel 
objet newTodoList avec le texte entré par l'utilisateur et un nouvel identifiant unique, puis l'ajoute au tableau dataArray. Ensuite, elle réinitialise newStateInput à vide.

Fonction linkedEventInput :

Cette fonction est utilisée pour mettre à jour newStateInput chaque fois que l'utilisateur tape dans l'input du formulaire.

Rendu (Render) :

Enfin, la fonction retourne le JSX (syntaxe similaire à HTML utilisée par React) à afficher à l'écran.

Il y a d'abord un formulaire où l'utilisateur peut entrer une nouvelle tâche et la soumettre.

Ensuite, il y a une liste des tâches existantes. Pour chaque objet dans dataArray, un composant Item est rendu, avec le texte de la tâche, l'identifiant, et la fonction supElement passés en props.

Le code dans son ensemble représente donc un composant React qui permet à l'utilisateur de saisir, afficher, et supprimer des tâches.





Regenerate response
