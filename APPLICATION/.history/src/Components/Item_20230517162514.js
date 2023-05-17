
export default function Item(props) {


    return (
        <li className="border d-flex justify-content-between align-items-center  p-2 m-2">

            <div className="p-3">{props.txt}</div>

            <button className="btn btn-danger p-2 h-50"
             onClick={() => props.supItem(props.id)}
             // Evenement lors du clic , Dés qu on a des arguments à passer, on passe par une fonction anonyme
             // On va pouvoir supprimer l Id ciblé que l on souhaite grâce à la fonction delFunc 
           >Supprimer
           </button>

        </li>
    )
}

