import Navbar from '@/components/Navbar';
import RegisterForm from '@/components/RegisterForm';

export default function RegisterPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative bg-primary text-white py-24 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-african-pattern opacity-20 mix-blend-overlay z-0"></div>
                <div className="cinematic-bottom-blur" />
                <div className="relative z-10 max-w-4xl mx-auto text-center">
                    <h1 className="font-heading text-5xl md:text-7xl mb-4">
                        Artist Application
                    </h1>
                    <p className="text-xl md:text-2xl text-secondary font-light">
                        CON/FORM 1.0 • March 20-21, 2026
                    </p>
                    <p className="mt-4 text-lg text-white/80">
                        Application Deadline: February 14, 2026
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-12 px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-8 text-center">
                        <p className="text-lg text-gray-600">
                            Complete this application to showcase your art at Lagos&apos; first system-building experience.
                        </p>
                    </div>

                    {/* Form */}
                    <div className="bg-white rounded-lg shadow-xl p-8">
                        <RegisterForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
