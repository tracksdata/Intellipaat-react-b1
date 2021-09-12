import Box from "./components/Box";
import FoodBox from "./components/FoodBox";
import Greet from "./components/Greet";

const App = () => {
  return (
    <div class="container">
      <div className="card text-primary">
        <div className="card-header">APP Component</div>
        <div className="card-body">
          <div className="card-text">
            <h1>App Component</h1> <hr />
            
            <Box />
            
         
          </div>
        </div>
      </div>




    </div>
  );
}

export default App