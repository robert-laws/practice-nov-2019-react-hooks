import React, { useState, createContext } from 'react';
import './App.scss';

// import Instruction from './components/Instruction/instruction.component';
import News from './components/News/news.component';
import Locations from './components/Locations/locations.component';

const UserContext = createContext();
export const UserConsumer = UserContext.Consumer;

const App = () => {
  const user = {
    firstName: 'Bob',
    lastName: 'Cobb',
    data: 'This is a human'
  }
  
  const [myNews, setMyNews] = useState({
    type: 'everything',
    query: 'domains=techcrunch.com&language=en'
  });

  return (
    <div className="App">
      <h1>React Hooks - Examples</h1>
      {/* <Instruction /> */}
      <Locations />
      <hr />
      <UserContext.Provider value={user}>

        <News myNews={myNews} />
      </UserContext.Provider>
    </div>
  );
}

export default App;