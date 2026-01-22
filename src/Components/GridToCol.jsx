
import { HiOutlineViewGrid, HiOutlineViewList } from "react-icons/hi";
const GridToCol = ({ isGrid, setIsGrid }) => {
  return (
    <div className='flex items-center gap-2 bg-gray-200 px-2 py-1 rounded-'>
      <button
        onClick={() => setIsGrid(true)}
        className={`text-xl p-1 rounded-sm hover:text-[#2d5016]
        ${isGrid ? "bg-white" : "bg-transprent"}
        `}>
        <HiOutlineViewGrid />
      </button>
      <button
        onClick={() => setIsGrid(false)}
        className={`text-xl p-1 rounded-sm hover:text-[#2d5016]
        ${!isGrid ? "bg-white" : "bg-transparent"}
        `}>
        <HiOutlineViewList />
      </button>
    </div>
  )
}

export default GridToCol