import github from "../../assets/github.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ItemRepo } from "../../components/ItemRepo";
import { Container } from "./styles";

function App() {
  return (
    <Container>
      <img
        src={github}
        width={72}
        height={72}
        alt='github logo'
      />
      <Input />
      <Button />
      <ItemRepo />
    </Container>
  );
}

export default App;
