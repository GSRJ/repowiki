import { useState } from "react";
import github from "../../assets/github.png";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { ItemRepo } from "../../components/ItemRepo";
import { api } from "../../services/api";
import { Container } from "./styles";

function App() {
  const [repos, setRepos] = useState([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepos = async () => {
    try {
      const { data } = await api.get(`repos/${currentRepo}`);
      const isExist = repos.find((repo) => repo.id === data.id);
      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    } catch (err) {
      if (err.response.status === 404) {
        alert("Repositório não encontrado!", err.response);
      } else {
        console.log(err);
      }
    }
  };

  const handleRemoveRepo = (id) => {
    const foundRepo = repos.filter((repo) => repo.id !== id);
    setRepos(foundRepo);
  };

  return (
    <Container>
      <img
        src={github}
        width={72}
        height={72}
        alt='github logo'
      />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepos} />
      {repos.map((repo) => (
        <ItemRepo
          key={repo.id}
          repo={repo}
          remove={handleRemoveRepo}
        />
      ))}
    </Container>
  );
}

export default App;
