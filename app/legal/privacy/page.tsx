import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="py-20 md:py-32 px-4 max-w-4xl mx-auto">
                <h1 className="font-heading font-bold text-4xl mb-8">Privacy Policy</h1>
                <p className="text-gray-500 mb-8">Last Updated: February 2026</p>

                <div className="prose prose-lg text-gray-700">
                    <p>
                        At CON/FORM, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you visit our website or purchase tickets for our event.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">1. Information We Collect</h3>
                    <p>
                        We may collect personal information such as your name, email address, phone number, and payment details when you purchase tickets or sign up for our newsletter. We also collect non-personal information such as browser type and IP address for analytics purposes.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">2. How We Use Your Information</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                        <li>To process ticket purchases and send event confirmations.</li>
                        <li>To communicate important event updates and schedules.</li>
                        <li>To improve our website and user experience.</li>
                        <li>To send promotional emails (only if you have opted in).</li>
                    </ul>

                    <h3 className="font-bold text-xl mt-8 mb-4">3. Data Sharing</h3>
                    <p>
                        We do not sell or rent your personal information to third parties. We may share your data with trusted service providers (such as ticketing platforms and payment processors) solely for the purpose of facilitating the event.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">4. Photography & Media</h3>
                    <p>
                        By attending CON/FORM, you consent to being photographed and filmed. These materials may be used for marketing and promotional purposes by Loom Rooms and our partners.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">5. Contact Us</h3>
                    <p>
                        If you have any questions about this Privacy Policy, please contact us at <a href="mailto:hello@conform.ng" className="text-primary font-bold">hello@conform.ng</a>.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
