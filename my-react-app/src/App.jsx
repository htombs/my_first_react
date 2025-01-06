import "./index.css"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import img_1 from "./assets/img_1.png"
import Button from "./Button/Button.jsx"

function App() {
  return (
    <>
      <img src={img_1} alt="profile_image_1" style={{ width: '200px', height: '200px' }}/>
      <Header/>
      <Button/>
      <Footer/>
    </>
  );
}
export default App
