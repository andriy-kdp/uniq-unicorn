import { Wrap } from "./components/wrap/wrap.component";

const App = () => {
  return (
    <div>
      <h1>Header level 1</h1>``
      <h2>Header level 2</h2>
      <h3>Header level 3</h3>
      <h4>Header level 4</h4>
      <h5>Header level 5</h5>
      <h6>Header level 6</h6>
      <p>Paragraph</p>
      <Wrap
        sx={{
          padding: "2rem",
          margin: "0 auto",
          textAlign: "center",
          width: "100%",
          background: "red",
        }}
      >
        <div>hello worlds</div>
      </Wrap>
    </div>
  );
};

export default App;
