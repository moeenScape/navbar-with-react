import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* NavBar Start */}
      
     <div className="container">
      <div className="container2">
        <img src={require('./image/logo192.png')}/>
        <p className=''>React</p>
      </div>
      
      <div className="container3">
      <p className="paragraph-conatiner">Docs</p>
      <p className="paragraph-conatiner">Tutorial</p>
      <p className="paragraph-conatiner" >Blogs</p>
      <p className="paragraph-conatiner">Community</p>
      
      </div>
      <div className="container4">
        <input className="Nav-Sarach" type="text"
        placeholder="Search"
        ></input>
      </div>
      
     </div>
     {/* Nav End */}
  
    
    <div className="container-flex">
      <div className="half-with">
      <div className="first-part">
     <h1 id="getting-start">Getting Start</h1>
     <p id="secound-getting">This page is an overview of the React documentation and related resources.</p>
      <p class="text-deco"> <b>React</b> a JavaScript library for building user interfaces. Learn what React is all
         about on our <a id="list" href="">homepage</a>  or in the <a id="list" href="">tutorial</a> tutorial.</p>
      <div id="list1"><li><a id="list" href="#">Try React</a></li></div>
      <div id="list1"><li><a id="list" href="#">Learn React</a></li></div>
      <div id="list1"><li><a id="list" href="#">Stay informed</a></li></div>
      <div id="list1"><li><a id="list" href="#">Versioned Documentation</a></li></div>
      <div id="list1"><li><a id="list" href="#">Something Missing?</a></li></div>
      

     </div>
     <div>
     <h2 id="article-one">Try React</h2>
        <p class="text-deco">React has been designed from the start for gradual adoption, and <b>you can use as little or as
           much  React as you need</b>. Whether you want to get a taste of React, add some interactivity to 
           a simple HTML page, or start a complex React-powered app, the links in this section will help 
           you get started</p> 

     </div>
     <div>
     <h2 id="article-one">Try React</h2>
        <p class="text-deco">React has been designed from the start for gradual adoption, and <b>you can use as little or as
           much  React as you need</b>. Whether you want to get a taste of React, add some interactivity to 
           a simple HTML page, or start a complex React-powered app, the links in this section will help 
           you get started</p> 

     </div>
     <div>
     <h2 id="article-one">Learn React</h2>
        <p class="text-deco">React has been designed from the start for gradual adoption, and <b>you can use as little or as
           much  React as you need</b>. Whether you want to get a taste of React, add some interactivity to 
           a simple HTML page, or start a complex React-powered app, the links in this section will help 
           you get started</p> 

     </div>
     <div>
     <h2 id="article-one">Why we should learn</h2>
        <p class="text-deco">React has been designed from the start for gradual adoption, and <b>you can use as little or as
           much  React as you need</b>. Whether you want to get a taste of React, add some interactivity to 
           a simple HTML page, or start a complex React-powered app, the links in this section will help 
           you get started</p> 

     </div>
     
       
     
      </div>
      <div class="second-half" id="container-pos">
    <div class="side-bar">
      <div class="side-bar">
       <p class="text-deco">INSTAATINON</p>
      </div>
      
    </div>
    <div class="side-bar">
      <p class="text-deco">MAIN CONCEPTS</p>
    </div>
    <div class="side-bar">
      <p class="text-deco">ADVANCED GUIDES</p>
    </div>
    <div class="side-bar">
      <p class="text-deco">API REFERENCE</p>
    </div>
    <div class="side-bar">
      <p class="text-deco">HOOKS</p>
    </div>
    <div class="side-bar">
      <p class="text-deco">TESTING</p>
    </div>
    <div class="side-bar">
    <p class="text-deco">CONTRIBUTING</p>
  </div>
  <div class="side-bar">
    <p class="text-deco">FAQ</p>
  </div>
  </div>
    </div>
    
     
    </div>
  );
}

export default App;
