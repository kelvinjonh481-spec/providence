
import Handshake from '../assets/dabas.jpg'
import { MdEmail } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import VotingFeed from './VotingFeed';
import { Link } from 'react-router-dom';


export default function VotePage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
            <div className="bg-white p-6 rounded shadow-lg text-center max-w-5xl w-full">
                <h1 className="text-xl font-bold mb-4 uppercase">
                    PLEASE, I NEED YOUR VOTE
                </h1>

                <div className="flex justify-center mb-6">
                    <img
                        src={Handshake}
                        alt="Hand reaching out"
                        className="object-cover rounded h-full w-full"
                    />
                </div>

                <div className="text-base mb-2 text-gray-600 flex items-center justify-center gap-2">
                    <input type="radio" checked={true} onChange={(e) => e.preventDefault()} style={{ color: 'dodgerblue' }}></input> Total votes: <strong>4678</strong> out of <strong>5688</strong>
                </div>

                <div className="relative w-full h-full bg-gray-200 rounded overflow-hidden mb-3">
                    <div style={{ background: 'dodgerblue', width: (4678 / 5688) * 100 + '%', height: '6.5px' }}></div>
                </div>

                <div className="text-lg font-bold text-gray-700 mb-4 flex items-center justify-center gap-2">
                    <FaCheck /> Total votes for victory: <strong>1010</strong>
                </div>

                <Link to={'/login'} className="bg-red-500 w-fit mx-auto hover:bg-red-600 text-white px-4 py-2 rounded transition mb-6 flex items-center justify-center gap-2">
                    Vote together <MdEmail />
                </Link>
            </div>

            <VotingFeed />
        </div>
    );
}
