import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <section className="py-20 md:py-32 px-4 max-w-4xl mx-auto">
                <h1 className="font-heading font-bold text-4xl mb-8">Terms of Service</h1>
                <p className="text-gray-500 mb-8">Last Updated: February 2026</p>

                <div className="prose prose-lg text-gray-700">
                    <p>
                        Welcome to CON/FORM. By accessing our website or purchasing tickets, you agree to comply with and be bound by the following Terms of Service.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">1. Ticket Purchases</h3>
                    <ul className="list-disc pl-5 space-y-2 mb-6">
                        <li>All ticket sales are final and non-refundable, except in the case of event cancellation.</li>
                        <li>Tickets are transferable. Please contact support to transfer your ticket to another attendee.</li>
                        <li>Loom Rooms reserves the right to refuse entry to any attendee violating our code of conduct.</li>
                    </ul>

                    <h3 className="font-bold text-xl mt-8 mb-4">2. Event Conduct</h3>
                    <p>
                        CON/FORM is a safe space for creativity and expression. We have a zero-tolerance policy for harassment, discrimination, or violence of any kind. Attendees found violating this policy will be removed from the venue without refund.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">3. Limitation of Liability</h3>
                    <p>
                        Loom Rooms and its organizers are not liable for any personal injury, loss, or damage to personal property occurring during the event, unless caused by our gross negligence.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">4. Intellectual Property</h3>
                    <p>
                        All content on this website, including logos, text, and images, is the property of Loom Rooms and may not be used without prior written permission.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">5. Governing Law</h3>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
                    </p>

                    <h3 className="font-bold text-xl mt-8 mb-4">6. Changes to Terms</h3>
                    <p>
                        We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
                    </p>
                </div>
            </section>

            <Footer />
        </main>
    );
}
