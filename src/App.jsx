import { UAParser } from "ua-parser-js";

function App() {

  const ua = UAParser().ua;

  return (
    <>
<pre>{ua}</pre>
    </>
  )
}

export default App
