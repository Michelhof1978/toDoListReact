
export default function Item(props) {


    return (
        <li className="border d-flex justify-content-between align-items-center  p-2 m-2">

            <div className="p-3">{props.txt}</div>

            <button className="btn btn-danger p-2 h-50"
             onClick={() => props.supItem(props.id)}
             // Evenement lors du clic , Dés qu on a des arguments à passer, on passe par une fonction anonyme
             // On va pouvoir supprimer l Id ciblé que l on souhaite grâce à la fonction supElement déclarer en props supItem 
           >Supprimer
           </button>

        </li>
    )
}
//Ce composant est responsable du rendu d'un élément de la liste de tâches à faire. Il prend en props les attributs qui ont été passés lors de son appel dans le composant parent Form.

Explication détaillée de ce composant :

Props :
Les props (short for properties) sont des valeurs passées du composant parent (Form) à l'enfant (Item). Dans ce cas, props contient txt qui représente le texte de la tâche, id qui est l'identifiant unique de la tâche, et supItem qui est une fonction permettant de supprimer la tâche.

Rendu (Render) :
Le composant Item retourne un élément de liste (li) avec une structure spécifique :
    -À l'intérieur de l'élément li, il y a un div qui contient le texte de la tâche (props.txt).
    -Il y a aussi un bouton Supprimer. Lorsqu'on clique sur ce bouton, la fonction props.supItem
     est déclenchée avec props.id comme argument. Cette fonction est définie dans le composant parent et permet de supprimer la tâche.

En résumé, le composant Item est responsable de l'affichage d'une tâche individuelle dans la liste et offre la possibilité de la supprimer.





