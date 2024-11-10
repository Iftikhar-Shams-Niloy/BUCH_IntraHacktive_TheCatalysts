import React, { useState } from 'react';

const OcaDash = () => {
    const [events, setEvents] = useState([
        { id: 1, title: 'Robotics Club Workshop', date: '12.01.2024', details: 'Join us for an introductory robotics workshop covering fundamentals of automation and AI.' },
        { id: 2, title: 'Cultural Club - Annual Drama Night', date: '20.01.2024', details: 'An evening of performances highlighting the diversity of culture at BRACU. Don’t miss it!' },
        { id: 3, title: 'Adventure Club - Weekend Hiking', date: '22.01.2024', details: 'Get ready for a thrilling hike in the mountains. Bring your gear and adventurous spirit!' },
        { id: 4, title: 'Computer Club - 24-Hour Hackathon', date: '25.01.2024', details: 'Participate in a hackathon, solve real-world problems, and collaborate with fellow students.' },
        { id: 5, title: 'Robotics Club - AI and Robotics Talk', date: '28.01.2024', details: 'Join us for a tech talk featuring AI experts discussing future trends in robotics.' }
    ]);

    const [rooms, setRooms] = useState([
        { id: 1, title: 'Room 301 - Robotics Workshop Booking', date: '12.01.2024', details: 'Reserved for Robotics Club’s introductory workshop.' },
        { id: 2, title: 'Auditorium - Cultural Drama Night', date: '20.01.2024', details: 'Booked for Cultural Club’s annual drama performance night.' },
        { id: 3, title: 'Room 402 - Adventure Club Briefing', date: '21.01.2024', details: 'A pre-trip briefing session for Adventure Club members before the hiking trip.' },
        { id: 4, title: 'Room 503 - Hackathon Workspace', date: '25.01.2024', details: 'Reserved for Computer Club’s 24-hour hackathon event. Set up workspace here.' },
        { id: 5, title: 'Room 305 - Robotics Guest Talk', date: '28.01.2024', details: 'Reserved for Robotics Club’s guest lecture on AI advancements.' }
    ]);

    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleEventAction = (id, action) => {
        setEvents(events.filter(event => event.id !== id));
        setModalMessage(`Event ${action === 'accept' ? 'approved' : 'rejected'} successfully.`);
        setShowModal(true);
    };

    const handleRoomAction = (id, action) => {
        setRooms(rooms.filter(room => room.id !== id));
        setModalMessage(`Room ${action === 'accept' ? 'approved' : 'rejected'} successfully.`);
        setShowModal(true);
    };

    return (
        <div>
            <div className='bg-gray-400 py-3'>
                <div className='flex items-center gap-80 px-48 '>
                    <img className='w-36 h-36 ' src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg" alt="" />
                    <div>
                        <h1 className='pt-2 text-5xl text-blue-100'>BRACU OCA Dashboard</h1>
                    </div>
                    <div className='btn bg-orange-300'>Logout</div>
                </div>
            </div>

            <div className='m-5 mx-10 flex gap-10'> {/* Horizontal layout for the two sections */}
                {/* Event Requests */}
                <div className='bg-gray-200 w-96 p-5 h-[500px] overflow-y-scroll'>
                    <h2 className='text-3xl text-blue-50 bg-gray-400 text-center py-2 mb-4'>Club Event Requests</h2>
                    {events.map(event => (
                        <div key={event.id} className="bg-gray-500 text-lg p-2 my-2">
                            <p>Title: {event.title}</p>
                            <h1>Date: {event.date}</h1>
                            <p>Details: {event.details}</p>
                            <div className='flex justify-evenly'>
                                <button className='btn btn-accent' onClick={() => handleEventAction(event.id, 'accept')}>Accept</button>
                                <button className='btn btn-error' onClick={() => handleEventAction(event.id, 'reject')}>Reject</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Room Booking Requests */}
                <div className='bg-gray-200 w-96 p-5 h-[500px] overflow-y-scroll'>
                    <h2 className='text-3xl text-blue-50 bg-gray-400 text-center py-2 mb-4'>Room Booking Requests</h2>
                    {rooms.map(room => (
                        <div key={room.id} className="bg-gray-500 text-lg p-2 my-2">
                            <p>Title: {room.title}</p>
                            <h1>Date: {room.date}</h1>
                            <p>Details: {room.details}</p>
                            <div className='flex justify-evenly'>
                                <button className='btn btn-accent' onClick={() => handleRoomAction(room.id, 'accept')}>Accept</button>
                                <button className='btn btn-error' onClick={() => handleRoomAction(room.id, 'reject')}>Reject</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full md:w-96'>
    <h2 className='bg-blue-700 text-white text-center text-xl py-2'>Posters Details</h2>
    <table className='min-w-full bg-white text-gray-700'>
        <thead>
            <tr>
                <th className='px-4 py-2 text-left bg-gray-200'>Location</th>
                <th className='px-4 py-2 text-left bg-gray-300'>Club</th>
                <th className='px-4 py-2 text-left bg-gray-200'>Status</th>
                <th className='px-4 py-2 text-left bg-gray-300'>Duration</th>
            </tr>
        </thead>
        <tbody>
            <tr className='bg-gray-100'>
                <td className='border px-4 py-2'>Front Gate</td>
                <td className='border px-4 py-2'>BUCC</td>
                <td className='border px-4 py-2'>Booked</td>
                <td className='border px-4 py-2'>01/01/2024 - 15/01/2024</td>
            </tr>
            <tr>
                <td className='border px-4 py-2'>Back Gate</td>
                <td className='border px-4 py-2'>BUCUC</td>
                <td className='border px-4 py-2'>Booked</td>
                <td className='border px-4 py-2'>10/01/2024 - 20/01/2024</td>
            </tr>
            <tr className='bg-gray-100'>
                <td className='border px-4 py-2'>Near Escalator</td>
                <td className='border px-4 py-2'>BUDTF</td>
                <td className='border px-4 py-2'>Booked</td>
                <td className='border px-4 py-2'>05/01/2024 - 18/01/2024</td>
            </tr>
            <tr>
                <td className='border px-4 py-2'>Near Auditorium</td>
                <td className='border px-4 py-2'>ROBU</td>
                <td className='border px-4 py-2'>Engaged</td>
                <td className='border px-4  py-2'>08/01/2024 - 22/01/2024</td>
            </tr>
            <tr className='bg-gray-100'>
                <td className='border px-4 py-2'>Library Entrance</td>
                <td className='border px-4 py-2'>BUAC</td>
                <td className='border px-4 py-2'>Booked</td>
                <td className='border px-4 py-2'>12/01/2024 - 25/01/2024</td>
            </tr>
            <tr>
                <td className='border px-4 py-2'>Cafeteria</td>
                <td className='border px-4 py-2'>Bizz Bee</td>
                <td className='border px-4 py-2'>Free</td>
                <td className='border px-4 py-2'>--</td>
            </tr>
        </tbody>
    </table>
                </div>


            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded shadow-lg text-center">
                        <h3 className="font-bold text-lg">{modalMessage}</h3>
                        <button className="mt-4 btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OcaDash;