import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';


const items = [
  {label: 'Tab 1', content: 'Tab 1 Content', callBack: ( ) => console.log('clicked on first tab')},
  {label: 'Tab 2', content: 'Tab 2 Content', callBack: ( ) => console.log('clicked on second tab')},
  {label: 'Tab 3', content: 'Tab 3 Content', callBack: ( ) => console.log('clicked on third tab')},
  
]
function App() {
  return (
    <Tabs items={items} />
  );
}

export default App;
