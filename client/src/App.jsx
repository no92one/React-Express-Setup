import { GlobalProvider } from "./GlobalContext.jsx";
import Router from "./Router.jsx";

export default function App() {
  return <>
    <GlobalProvider>
      <Router />
    </GlobalProvider>
  </>
}