import React, { useState } from 'react';
import { FaFilter, FaSearch } from 'react-icons/fa';

function Status() {
    const [searchTerm, setSearchTerm] = useState('');

    const data = [
        {
            id: "#REQ-1024",
            title: "Lab PC Hardware Issue",
            type: "Hardware",
            typeBg: "bg-blue-100",
            typeText: "text-blue-600",
            status: "Open",
            statusBg: "bg-green-100",
            statusText: "text-green-600",
            date: "Oct 24, 2023",
            final_status: "Open"
        },
        {
            id: "#REQ-1025",
            title: "Software License Renewal",
            type: "Software",
            typeBg: "bg-purple-100",
            typeText: "text-purple-600",
            status: "Pending",
            statusBg: "bg-yellow-100",
            statusText: "text-yellow-600",
            date: "Oct 22, 2023",
            final_status: "Close",


        },
        {
            id: "#REQ-1020",
            title: "Projector Bulb Replacement",
            type: "Hardware",
            typeBg: "bg-blue-100",
            typeText: "text-blue-600",
            status: "Open",
            statusBg: "bg-green-100",
            statusText: "text-green-600",
            date: "Oct 18, 2023",
            final_status: "Close"
        }

    ]

    const filteredData = data.filter(
        item =>
            item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className='w-full bg-white rounded-3xl shadow-md flex items-center justify-between p-4'>
                {/* LEFT GROUP */}
                <div className='flex items-center gap-3'>
                    <div className="flex items-center gap-2 border-2 border-gray-300 rounded-full px-4 py-2 w-64 focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-200 transition">
                        <FaSearch className="text-teal-400" />
                        <input
                            type="text"
                            placeholder='Search by ID, Title'
                            className="w-full outline-none text-sm text-gray-700 placeholder-gray-400 focus:text-teal-700 caret-teal-500"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Apply Button */}
                    <div className='flex items-center gap-2 border rounded-full px-4 py-2 text-sm text-gray-700 cursor-pointer hover:border-teal-400 transition'>
                        <span>All Status</span>
                        <svg
                            className="w-4 h-4 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* RIGHT: Status Dropdown */}
                <button className='flex items-center gap-2 bg-teal-400 hover:bg-teal-500 text-black font-medium px-6 py-2 rounded-full transition'>
                    <FaFilter />
                    Apply Filters
                </button>
            </div>

            <div className='bg-white rounded-3xl shadow-md p-6 w-full mt-5'>
                {/* Header */}
                <div className='grid grid-cols-6 text-sm text-teal-600 font-semibold pb-4 border-b'>
                    <div>REQUEST NO</div>
                    <div>TITLE</div>
                    <div>TYPE</div>
                    <div>STATUS</div>
                    <div>DATE</div>
                    <div>FINAL STATUS</div>
                </div>

                {/* Rows */}
                {filteredData.map((item, index) => (
                    <div key={index} className='grid grid-cols-6 items-center py-4 border-b last:border-none hover:bg-gray-50 transition'>
                        <div className='font-medium text-gray-800'>{item.id}</div>
                        <div>
                            <p className="font-semibold text-gray-900">{item.title}</p>
                        </div>
                        <div>
                            <span className={`px-3 py-1 text-sm rounded-full ${item.typeBg} ${item.typeText}`}>{item.type}</span>
                        </div>
                        <div>
                            <span className={`px-3 py-1 text-sm rounded-full ${item.statusBg} ${item.statusText}`}>{item.status}</span>
                        </div>
                        <div className="text-gray-600">{item.date}</div>
                        <div className={`px-3 w-14 py-1 text-sm rounded-full ${item.final_status === 'Open' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-700'
                            }`}>{item.final_status}</div>
                    </div>
                ))}
            </div>

        </>
    );
}

export default Status;
