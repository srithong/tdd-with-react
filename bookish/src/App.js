import { Typography } from "@material-ui/core";
import BookListContainer from "./BookListContainer";
function App() {
  return (
    <div className="App">
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookListContainer />
    </div>
  );
}

export default App;
