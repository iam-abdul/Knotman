import getRoutes from "../parser";
import { useState, useEffect } from "react";

const loadPaths = async (setPaths, setLoading) => {
  setLoading(true);
  const result = await getRoutes();
  setPaths(result);
  setLoading(false);
};

function Logic() {
  // const yamlFilePath = path.resolve("./src/testFiles/ref.yaml");
  const [paths, setPaths] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadPaths(setPaths, setLoading);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {Object.keys(paths).map((el) => (
        <div key={el}>{el}</div>
      ))}{" "}
      hello
    </div>
  );
}

export default Logic;
