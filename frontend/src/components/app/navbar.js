import "./navbar.css"
// import NavLoggedIn from "./navLoggedIn"
// import NavPublic from "./navPublic"

// const Navbar = () => {
//   //let token = window.localStorage.getItem("token");
//   // console.log(token)
//   let token = null
//   return (
//     <>
//       { token === null ? <NavPublic /> : <NavLoggedIn /> }  
//     </>
//   );
// };

// export default Navbar;



export default function Navbar() {
 
  return (
    <nav className="nav">
      <a href="/" className="site-title">GrumbleBook</a>
      <ul>
        
        <li>
            <a href="/signup">Signup</a>
        </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
          <a href="/">Profile</a>
        </li>
        <li>
            <a href="/posts">GrumbleFeed</a>
        </li>
        <li>
          <a href="/login">Logout</a>
        </li>
        
      </ul>
    </nav>
  )
}

