import { createContext, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ConfigUser } from "./pages/ConfigUser";
import { Dashboard } from "./pages/Dashboard";

import { DashboardSearch } from "./pages/DashboardSearch";
import { Home } from './pages/Home';

type UserYouTubeType = {
  userCode: string,
  setUserCode: any
}

export const UserYouTube = createContext({} as UserYouTubeType);

function App() {
  const [userCode, setUserCode] = useState<any>();

  return (
   <BrowserRouter>
      <AuthContextProvider>
        <Route path="/" component={Home} exact/>
        <UserYouTube.Provider value={{userCode, setUserCode}}>
          <Route path="/dashboard-search" component={DashboardSearch} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/config" component={ConfigUser} />
        </UserYouTube.Provider>
      </AuthContextProvider>
   </BrowserRouter>
  );
}

export default App;
