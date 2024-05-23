import CarSelection from "./components/CarSelection";
import NavBar from "./components/NavBar";

export default function App() {

  return (
    <div className='bg-[#FFFFFF] dark:bg-[#141414] w-full h-screen'>
      <NavBar/>
      <CarSelection/>
    </div>
  )
}
