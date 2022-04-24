import { Navigate, useNavigate, Routes, Route } from "react-router-dom";
export default function Post() {
  const status = 200;
  const navigate = useNavigate();
  const onClick = ()=>{
    console.log('hello');
    navigate('/about');
  }
  
  if(status === 404) {
    return <Navigate to='/404'/>;
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={onClick}>Take me to about page</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>}/>
      </Routes>
    </div>
  )
}
