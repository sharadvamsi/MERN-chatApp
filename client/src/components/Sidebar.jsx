import Conversations from './conversations';
import SearchInput from './SearchInput';
import { BiLogOut } from "react-icons/bi";


const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <div className='mt-auto'><BiLogOut className='w-6 h-6 text-white cursor-pointer' /></div>
        </div>
    );
};

export default Sidebar;

//starter code
/*
const Sidebar = () => {
    return (
        <div className='border-r border-slate-500 p-4 flex flex-col'>
            <SearchInput />
            <div className="divider px-3"></div>
            <Conversations />
            <div className='mt-auto'><BiLogOut className='w-6 h-6 text-white cursor-pointer' /></div>
        </div>
    );
};
*/