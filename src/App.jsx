import React from 'react';
import People from './People/People';

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

                <div className='w-[50%] p-2 absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2 justify-between items-center'>
{                    people.map((person) => (
                        <People name={person.name} age={person.age} />
                    ))}
                </div>
            </div>
            <div className="w-screen h-[45vh] bg-blue-50"></div>
        </>
    );
};

export default App;
