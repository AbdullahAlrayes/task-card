import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/CardList';
import { data } from './data';
function App() {
  return (
    <section className="bg-dark mt-5 ">
      <div className="container-fluid ">
        <CardList data={data} />
      </div>
    </section>
  );
}

export default App;
