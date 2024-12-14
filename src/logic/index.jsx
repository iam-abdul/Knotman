import getResolvedPaths from "../parser";

function Logic() {
  // const yamlFilePath = path.resolve("./src/testFiles/ref.yaml");
  const paths = getResolvedPaths();

  console.log("the paths", paths);
  return <div>Nice</div>;
}

export default Logic;
