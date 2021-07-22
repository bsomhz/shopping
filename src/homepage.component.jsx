import React from 'react';

const HomePage = () => (
<>
    <div className="flex flex-col">
        <div className="flex flex-row justify-center">
            <div className="flex flex-1 align-center w-96 h-56 border-2 border-black m-4 items-center justify-center bg-gray-400">
                <div className="flex flex-col border-2 border-black bg-gray-100">
                    <div className="text-2xl font-semibold text-center">HATS</div>
                    <div className="text-center">SHOP NOW</div>
                </div>
            </div>
            <div className="flex flex-1 align-center w-96 h-56 border-2 border-black m-4 items-center justify-center bg-gray-400">
                <div className="flex flex-col border-2 border-black bg-gray-100">
                    <div className="text-2xl font-semibold text-center">JACKETS</div>
                    <div className="text-center">SHOP NOW</div>
                </div>
            </div>
            <div className="flex flex-1 align-center w-96 h-56 border-2 border-black m-4 items-center justify-center bg-gray-400">
                <div className="flex flex-col border-2 border-black bg-gray-100">
                    <div className="text-2xl font-semibold text-center">SNEAKERS</div>
                    <div className="text-center">SHOP NOW</div>
                </div>
            </div>
        </div>
        <div className="flex flex-row">
        <div className="flex flex-1 align-center h-72 border-2 border-black m-4 items-center justify-center bg-gray-400">
            <div className="flex flex-col border-2 border-black bg-gray-100">
                <div className="text-2xl font-semibold text-center">SNEAKERS</div>
                <div className="text-center">SHOP NOW</div>
            </div>
        </div>
        <div className="flex flex-1 align-center h-72 border-2 border-black m-4 items-center justify-center bg-gray-400">
            <div className="flex flex-col border-2 border-black bg-gray-100">
                <div className="text-2xl font-semibold text-center">SNEAKERS</div>
                <div className="text-center">SHOP NOW</div>
            </div>
        </div>
        </div>
    </div>
       
</>
)

export default HomePage;