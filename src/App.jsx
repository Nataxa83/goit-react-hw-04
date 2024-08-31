import axios from "axios";

import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect, useState } from "react";

const App = () => {
  const [images, setImages] = useState(null);

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
