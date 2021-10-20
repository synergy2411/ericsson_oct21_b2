import { useState } from 'react';
import './App.css';
import ClassBasedComp from './components/demo/ClassBasedComp';
import Notes from './components/Notes/Notes';

function App() {

  let title = "The title"
  const [showComp, setShowComp] = useState(false);

  return (
    <div>
      <button onClick={() => { setShowComp(!showComp)}}>Toggle Comp</button>
      { showComp && <ClassBasedComp title={title}/>}
      <br /> <hr />
      <Notes />
    </div>
  );
}

export default App;
