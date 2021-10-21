import './App.css';
// import ClassBasedComp from './components/demo/ClassBasedComp';
// import EffectHook from './components/demo/EffectHook';
// import FormDemo from './components/demo/FormDemo';
import Notes from './components/Notes/Notes';
import ReducerHook from './components/demo/ReducerHook';

function App() {

  // let title = "The title"
  // const [showComp, setShowComp] = useState(false);

  return (
    <div className="container">
      <ReducerHook />

      {/* <EffectHook /> */}

      {/* <FormDemo /> */}

      {/* <button onClick={() => { setShowComp(!showComp)}}>Toggle Comp</button>
      { showComp && <ClassBasedComp title={title}/>}
      <br /> <hr />*/}
      <Notes /> 
    </div>
  );
}

export default App;
