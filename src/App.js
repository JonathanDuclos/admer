import { createBrowserRouter, RouterProvider } from "react-router-dom";
import _layout from "./pages/layout/_layout";
import ErrorPage from "./pages/error/error";
import AccountPlane from "./pages/AccountPlane";
import JournalBook from "./pages/JournalBook";
import ReasonBook from "./pages/ReasonBook";
import PatrimonialBalance from "./pages/PatrimonialBalance";
import BalanceSheet from "./pages/BalanceSheet";
import Dre from './pages/Dre';

const router = createBrowserRouter([
  {path: '/', element: <_layout></_layout>, errorElement: <ErrorPage></ErrorPage>,
    children:[
      {path:'/accountcharts', element: <AccountPlane/>},
      {path:'/dre', element: <Dre/>},
      {path:'/journalbook', element: <JournalBook/>},
      {path:'/reasonbook', element: <ReasonBook/>},
      {path:'/patrimonialbalance', element: <PatrimonialBalance/>},
      {path:'/balancesheet', element: <BalanceSheet/>}
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
