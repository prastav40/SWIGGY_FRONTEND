import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import logo from "./assets/logoh.png"; // Import the logo image

function App() {


  return (
    <>
      <div className="flex flex-col gap-6">
        <Header />
        <Body />
        <Footer logo={logo} />
      </div>
    </>
  );
}

export default App;