import logo from '../image/logo192.png';
function NavBar()
{
    return(
        <div className="container">
      <div className="container2">
        <img src={logo}/>
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
    )
    
}
export default NavBar;