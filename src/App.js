import logo from './logo.svg';
import './App.css';
import Navbar from './navbar'
import Body from './body';
import Card from './card';
import Footer from './footer';

function App() {
  let a=[{
    title:"Free",
    price: "$0",
    tags: {
      tag1:"10 users included",
      tag2: "2 GB of storage",
      tag3:"Email support",
      tag4: "Help center access",
    },
    button : {
      type:"btn btn-lg btn-block btn-outline-primary",
      innertext:"Sign up for free"    
    }
  },
  {
    title:"Pro",
    price: "$15",
    tags: {
      tag1:"20 users included",
      tag2: "10 GB of storage",
      tag3:"Priority email support",
      tag4: "Help center access",

    },
    button : {
      type:"btn btn-lg btn-block btn-primary",
      innertext:"Get started"    
    }

  },
  {
    title:"Enterprise",
    price: "$29",
    tags: {
      tag1:"30 users included",
      tag2: "15 GB of storage",
      tag3:"Phone and email support",
      tag4: "Help center access",
    },
    button : {
      type:"btn btn-lg btn-block btn-primary",
      innertext:"Contact us"    
    }
  }
]
  return (
  <div>
<Navbar></Navbar>
<Body></Body>
<div className='container'><div className='card-deck mb-3 text-center'>   {a.map((a) => {
            return (
              <Card name={a}></Card> 
            );
          })}</div></div>
<Footer></Footer>
</div>
  );
}

export default App;
