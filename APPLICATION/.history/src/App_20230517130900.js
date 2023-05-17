import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from './Components/Form'

function App() {

  return (
    <div className="App">
        <h1 className="text-center mt-3">Todo-List</h1>
        <Form /> 
        {/* On affiche le composant form */}
    </div>
  );
}

export default App;
