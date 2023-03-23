import React,{useState,useEffect} from 'react';
import axios from 'axios';
import NewsGrid from './NewsGrid'
import Menu from './MenuContent'

function App() {
  const [items,setItems] = useState([])
  const [active,setActive] = useState(1)
  const [category,setCategory] = useState("general")
  console.log(setActive);
  useEffect(()=>{
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=8eb581fd149b4131a4ff51fc440075ee`)
    .then(response => {
        setItems(response.data.articles);
    })
    .catch(error => {
        console.log(error);
    });
  },[category])
  return (
    <>
    <div className="App">
      <div className='home-title'>
      <h1 className='title'>News Website</h1>
      </div>
      <Menu active={active} handleActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items}/>
    </div>
    </>
  );
}

export default App