import {useState} from 'react'
//COMPONENTS
import Item from './Item'

export default function Form()  {


    return (
      <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
        <form className="mb-3">
          <label htmlFor="todo" className="form-label mt-3">
            Chose à faire
          </label>
          <input type="text" className="form-control" id="todo" />
          {/* input est relié à label */}

          <button className="mt-2 btn btn-primary d-block">Envoyez</button>
        </form>

        <h2>Liste des choses à faire : </h2>
        <ul className="list-group">
          <Item />
          <Item />
          <Item />
          <Item />
        </ul>
      </div>
    );
}