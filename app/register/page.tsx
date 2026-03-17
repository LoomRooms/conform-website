import Navbar from '@/components/Navbar';
import AttendeeRegisterForm from '@/components/AttendeeRegisterForm';
import { Suspense } from 'react';

export default function RegisterPage() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen relative bg-white">
                {/* Hero section Full-Screen */}
                <section className="relative bg-transparent">
                    <div className="relative bg-primary text-white py-24 px-4 overflow-hidden text-center">
                        <div className="absolute inset-0 bg-african-pattern opacity-20 mix-blend-overlay z-0"></div>
                        <div className="cinematic-bottom-blur" />
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <h1 className="font-heading text-5xl md:text-7xl mb-4 text-white">
                                Register for CON/FORM
                            </h1>
                            <p className="text-xl md:text-2xl text-secondary font-light">
                                CON/FORM 1.0 • March 20 &amp; April 6, 2026
                            </p>
                            <p className="mt-4 text-lg text-white/80">
                                Quick registration — only 3 steps
                            </p>
                        </div>
                    </div>
                </section>

                {/* Form Section */}
                <section className="py-12 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                            <Suspense fallback={<div className="text-center py-12 text-gray-400">Loading...</div>}>
                                <AttendeeRegisterForm />
                            </Suspense>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
