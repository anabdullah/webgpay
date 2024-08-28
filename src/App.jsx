import React from 'react';
import People from './People/People';
import QR from '../public/qr_code.png'
import Button from './Button/Button';
import QuickLinks from './Quick_links/Quick_links'
import { LuShare2 } from "react-icons/lu";
import { FiDownloadCloud } from "react-icons/fi";
import { MdOutlineQrCodeScanner } from "react-icons/md";
import { CgSearch } from "react-icons/cg";



const people = [
    { name: 'yoshi', age: 30 },
    { name: 'mario', age: 20 },
    { name: 'chun-li', age: 10 },
    { name: 'yoshi2', age: 30 },
    { name: 'mario2', age: 20 },
    { name: 'chun-li2', age: 10 },
    { name: 'yoshi3', age: 30 },
    { name: 'mario3', age: 20 },
    { name: 'chun-li3', age: 10 },
];


const App = () => {
    return (
        <>
            <div className="w-screen h-[55vh] bg-blue-600 relative">
                <div className='absolute top-3 left-1/2 -translate-x-1/2 w-[35%] flex justify-between items-center bg-white rounded-full px-3 overflow-hidden'>
                    <input type="text" className='w-[90%] h-9 px-5 outline-none border-none' placeholder='Search for a contact?'/>
                    <CgSearch/>
                </div>
                <div className='w-[50%] px-2 py-5 absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 justify-between items-center'>
                    {people.map((person) => (
                        <People name={person.name} age={person.age} />
                    ))}
                </div>
            </div>
            <div className="w-screen h-[45vh] flex justify-center items-center">
                <div className='w-[50%] h-full p-3 flex gap-0 justify-between items-center'>
                    <div className='w-[20%] flex flex-col justify-center items-center gap-3'>
                        <img draggable={false} src={QR} alt="qr_code" className='w-full bg-white rounded-2xl border-2 border-blue-600' />
                        <Button content={'oksbi@uno985'} cName={'text-center'} />
                    </div>
                    <div className='buttons w-[38%] h-full flex justify-center itenss-center gap-5 flex-col px-5'>
                        <Button content={'Share my QR'} cName={'flex items-center gap-3 py-2 rounded-full'} icon={<LuShare2 />} />
                        <Button content={'Download my QR'} cName={'flex items-center gap-3 py-2 rounded-full'} icon={<FiDownloadCloud />} />
                        <Button content={'Shcan or upload QR'} cName={'flex items-center gap-3 py-2 rounded-full'} icon={<MdOutlineQrCodeScanner />} />
                    </div>
                    <div className='quick-links w-[40%] h-full flex justify-center itenss-center gap-5 flex-col px-5'>
                        <QuickLinks content={'Balance check'} key={1} />
                        <QuickLinks content={'Transaction history'} key={2} />
                        <QuickLinks content={'My account'} key={3} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
