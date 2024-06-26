import Layout from "./components/general/Layout";
import { RouterProvider } from "react-router-dom";
import { Routes } from "./routes/Routes";
import { ToastContainer } from 'react-toastify';
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import { Backdrop } from "@mui/material";

export default function App() {
  const loading=useSelector(state=>state.global.loading);
  return (
    <>
    <ToastContainer pauseOnHover={false} pauseOnFocusLoss={false}/>
    <RouterProvider router={Routes}>
      <Layout/>
    </RouterProvider>
    {
      loading && 
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="success"/>
        <p className='px-3'>Loading...</p>
      </Backdrop>
    }
    </>
  )
}
