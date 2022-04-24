/* Now, the component Header will take in "props" as a parameter. If I do a console.log of props, we will see that its an object. So, in order to use whats being brought in by the props variable, we have to do {props.text} */
function Header(props) {
  // console.log(props)
  return (
    <header>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  )
}


export default Header