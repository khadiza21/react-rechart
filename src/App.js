import './App.css';
import MylineChart from './components/Mylinechart/MylineChart';
import SpecialChart from './components/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {
  const [flip, set] = useState(false)
  const props = useSpring({ 
    to: { opacity: 1 },
     from: { opacity: 0 } ,
     reset: true,
     reverse: flip,
     delay: 200,
     onRest: () => set(!flip),
    })
  return (
    <div className="App">
  <MylineChart></MylineChart>

  <animated.div style={props}>I will fade in animated</animated.div> 
  <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
