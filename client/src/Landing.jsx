import AllLocations from "./components/AllLocations";
import Container from "./components/Container";
import Logo from "./components/Logo";
import "./index.css";

function Landing() {
  return (
    <Container>
      <div>
        <Logo 
          firstWord="Location"
          secondWord="Service."
        />
      </div>
      <AllLocations />
    </Container>
  );
}

export default Landing;
