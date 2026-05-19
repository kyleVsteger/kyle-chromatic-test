import { Button } from "./components/Button";
import { Card } from "./components/Card";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <Card title="Hello" content="World!">
        <Button label="Click" onClick={() => alert("Clicked")} />
      </Card>
    </div>
  );
}

export default App;
