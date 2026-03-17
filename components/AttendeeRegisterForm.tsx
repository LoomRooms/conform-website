'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitArtistApplication } from '@/lib/utils/form-submission';
import { countWords } from '@/lib/utils/text-helpers';
import KeyButton from '@/components/ui/KeyButton';
import { useSearchParams } from 'next/navigation';

const CATEGORIES = [
    {
        name: 'Visual Arts & Design',
        disciplines: ['Painter', 'Sculptor', 'Illustrator', 'Graphic Designer', 'Fashion Designer', 'Photographer']
    },
    {
        name: 'Performing Arts',
        disciplines: ['Actor', 'Dancer', 'Musician', 'Singer-Songwriter', 'Theater Director', 'Choreographer']
    },
    {
        name: 'Film & Media',
        disciplines: ['Filmmaker', 'Producer', 'Content Creator']
    },
    {
        name: 'Digital & Interactive',
        disciplines: ['UX/UI Designer', 'Game Designer', 'Web Developer', 'VR/AR Creator']
    },
    {
        name: 'Literary & Written Arts',
        disciplines: ['Author', 'Journalist', 'Copywriter', 'Scriptwriter', 'Poet']
    }
];

type AttendeeFormData = {
    // Step 1: Basic Info
    fullName: string;
    email: string;
    primaryPhone: string;
    city: string;
    state: string;
    // Step 2: About You
    primaryCategory: string;
    discipline: string[];
    artistBio: string;
    // Step 3: Final Details
    instagram: string;
    howHeard: string;
    consent: boolean;
};

const TIXTANGO_URL = 'https://www.tixtango.com/spotlight/conform-performance';

// Shared input style for sleek rounded look
const inputClass = 'w-full px-5 py-3.5 bg-gray-50 border border-gray-200 rounded-2xl text-[15px] text-gray-900 placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/10 focus:bg-white focus:outline-none transition-all duration-200';
const labelClass = 'block text-sm font-semibold text-gray-700 mb-1.5';
const errorClass = 'text-red-500 text-xs mt-1 font-medium';

export default function AttendeeRegisterForm() {
    const searchParams = useSearchParams();
    const fromTickets = searchParams.get('from') === 'tickets';

    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<AttendeeFormData>({
        fullName: '',
        email: '',
        primaryPhone: '',
        city: '',
        state: '',
        primaryCategory: '',
        discipline: [],
        artistBio: '',
        instagram: '',
        howHeard: '',
        consent: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const totalSteps = 3;

    // Load saved progress
    useEffect(() => {
        const saved = localStorage.getItem('conformAttendeeReg');
        if (saved) {
            try {
                setFormData(JSON.parse(saved));
            } catch { /* ignore corrupt data */ }
        }
    }, []);

    // Save progress
    useEffect(() => {
        localStorage.setItem('conformAttendeeReg', JSON.stringify(formData));
    }, [formData]);

    const updateField = (field: keyof AttendeeFormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
            if (!formData.email.trim()) newErrors.email = 'Email is required';
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
            if (!formData.primaryPhone.trim()) newErrors.primaryPhone = 'Phone number is required';
        } else if (step === 2) {
            if (!formData.primaryCategory) newErrors.primaryCategory = 'Please select a category';
            if (!formData.discipline || formData.discipline.length === 0) {
                newErrors.discipline = 'Please select at least one discipline';
            }
            const bioWords = countWords(formData.artistBio || '');
            if (bioWords < 20) newErrors.artistBio = `Bio needs at least 20 words (currently ${bioWords})`;
            if (bioWords > 50) newErrors.artistBio = `Bio must be 50 words or less (currently ${bioWords})`;
        } else if (step === 3) {
            if (!formData.consent) newErrors.consent = 'You must agree to proceed';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep(prev => Math.min(prev + 1, totalSteps));
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const prevStep = () => {
        setCurrentStep(prev => Math.max(prev - 1, 1));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubmit = async () => {
        if (!validateStep(currentStep)) return;

        setIsSubmitting(true);
        setSubmitError('');

        // Map attendee form data to the artist application format (backend unchanged)
        const mappedData = {
            fullName: formData.fullName,
            artistName: formData.fullName, // use same name
            dateOfBirth: '',
            primaryPhone: formData.primaryPhone,
            secondaryPhone: '',
            email: formData.email,
            address: '',
            city: formData.city || '',
            state: formData.state || '',
            postalCode: '',
            instagram: formData.instagram || '',
            twitter: '',
            facebook: '',
            youtube: '',
            tiktok: '',
            website: '',
            otherSocial: '',
            emergencyName: 'N/A',
            emergencyRelationship: 'N/A',
            emergencyPhone: 'N/A',
            primaryCategory: formData.primaryCategory || 'Unspecified',
            discipline: formData.discipline || [],
            otherDisciplines: '',
            yearsExperience: '0',
            monthsExperience: '0',
            professionalStatus: [],
            artistBio: formData.artistBio || '',
            artistStatement: formData.artistBio || '', // re-use bio
            achievements: '',
            reference1Name: '',
            reference1Relationship: '',
            reference1Contact: '',
            reference2Name: '',
            reference2Relationship: '',
            reference2Contact: '',
            presentationTitle: 'Attendee Registration',
            presentationDescription: 'Attendee registration — no presentation',
            presentationDuration: '0',
            whyThisPiece: '',
            presentationType: 'Other',
            audioNeeds: [],
            visualNeeds: [],
            spaceNeeds: [],
            powerNeeds: [],
            otherNeeds: [],
            bringingEquipment: '',
            specialSetup: '',
            backupPlan: '',
            submissionMaterials: [],
            uploadLink: '',
            backupEmail: '',
            backupPhone: '',
            attendanceDays: '',
            technicalRehearsal: '',
            dressRehearsal: '',
            loadInDay: '',
            meetingAvailability: '',
            schedulingConflicts: '',
            transportation: '',
            howHeard: formData.howHeard || '',
            pastEvents: '',
            accessibilityNeeds: '',
            collaboration: '',
            collaboratorName: '',
            additionalInfo: JSON.stringify({ registrationType: 'attendee', consent: formData.consent }),
            promotionalConsent: formData.consent ? ['Yes'] : [],
            tagHandles: formData.instagram || '',
            agreements: formData.consent ? ['All information provided is accurate and truthful'] : [],
            signature: formData.fullName,
        };

        try {
            const result = await submitArtistApplication(mappedData, []);
            
            if (result.success) {
                setSubmitSuccess(true);
                localStorage.setItem('conformRegistered', 'true');
                localStorage.removeItem('conformAttendeeReg');
            } else {
                setSubmitError(result.error || 'Something went wrong. Please try again.');
            }
        } catch (err: any) {
            console.error('Submission error:', err);
            setSubmitError('Connection failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const stepLabels = ['Basic Info', 'About You', 'Final Details'];

    if (submitSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center py-8"
            >
                <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl mb-3">You&apos;re Registered! 🎉</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
                    Welcome to CON/FORM. Now secure your spot with a ticket.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <a
                        href={TIXTANGO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group relative overflow-hidden rounded-2xl border-2 border-green-500 bg-green-50 px-6 py-5 text-center transition-all duration-300 hover:bg-green-100 hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-0.5"
                    >
                        <div className="text-xs font-bold uppercase tracking-[0.15em] text-green-600 mb-1">Free</div>
                        <div className="font-heading text-lg font-bold text-green-800">Buy Student Pass</div>
                        <div className="text-xs text-green-600 mt-1 opacity-70">Opens TixTango →</div>
                    </a>

                    <a
                        href={TIXTANGO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 group relative overflow-hidden rounded-2xl border-2 border-primary bg-primary/5 px-6 py-5 text-center transition-all duration-300 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5"
                    >
                        <div className="text-xs font-bold uppercase tracking-[0.15em] text-primary mb-1">₦3,000</div>
                        <div className="font-heading text-lg font-bold text-gray-900">Purchase Paid Access</div>
                        <div className="text-xs text-primary mt-1 opacity-70">Opens TixTango →</div>
                    </a>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                    You can also purchase tickets from the <a href="/tickets" className="text-primary underline">Tickets page</a>.
                </p>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            {/* Context message when coming from tickets page */}
            {fromTickets && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-primary/5 border border-primary/20 rounded-2xl text-center"
                >
                    <p className="text-sm font-medium text-primary">
                        🎫 Register first to get your tickets — it only takes a minute!
                    </p>
                </motion.div>
            )}

            {/* Step indicator */}
            <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                    {stepLabels.map((label, idx) => {
                        const step = idx + 1;
                        const isActive = currentStep === step;
                        const isCompleted = currentStep > step;
                        return (
                            <div key={label} className="flex items-center flex-1">
                                <div className="flex flex-col items-center flex-1">
                                    <div className={`
                                        w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                                        ${isCompleted ? 'bg-green-500 text-white' : isActive ? 'bg-primary text-white shadow-lg shadow-primary/30' : 'bg-gray-100 text-gray-400'}
                                    `}>
                                        {isCompleted ? (
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                            </svg>
                                        ) : step}
                                    </div>
                                    <span className={`text-[11px] mt-1.5 font-medium transition-colors duration-300 ${isActive ? 'text-primary' : isCompleted ? 'text-green-600' : 'text-gray-400'}`}>
                                        {label}
                                    </span>
                                </div>
                                {idx < stepLabels.length - 1 && (
                                    <div className={`h-[2px] flex-1 mx-1 mb-5 rounded-full transition-colors duration-300 ${currentStep > step ? 'bg-green-400' : 'bg-gray-100'}`} />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Error Message */}
            {submitError && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl"
                >
                    <p className="text-red-600 text-sm font-medium">❌ {submitError}</p>
                    <button onClick={() => setSubmitError('')} className="mt-1 text-red-400 underline text-xs">Dismiss</button>
                </motion.div>
            )}

            {/* Form Steps */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.25 }}
                >
                    {currentStep === 1 && <Step1 formData={formData} updateField={updateField} errors={errors} />}
                    {currentStep === 2 && <Step2 formData={formData} updateField={updateField} errors={errors} />}
                    {currentStep === 3 && <Step3 formData={formData} updateField={updateField} errors={errors} />}
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-100">
                <button
                    onClick={prevStep}
                    className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 
                        ${currentStep === 1 ? 'opacity-0 pointer-events-none' : 'text-gray-600 bg-gray-100 hover:bg-gray-200'}`}
                >
                    ← Back
                </button>

                {currentStep < totalSteps ? (
                    <button
                        onClick={nextStep}
                        className="px-8 py-3 rounded-2xl text-sm font-bold bg-primary text-white hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                        Continue →
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-2xl text-sm font-bold bg-black text-white hover:bg-gray-900 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                </svg>
                                Registering...
                            </span>
                        ) : 'Complete Registration'}
                    </button>
                )}
            </div>
        </div>
    );
}

// ─── Step 1: Basic Info ──────────────────────────────────
function Step1({ formData, updateField, errors }: any) {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="font-heading text-2xl md:text-3xl mb-1">Let&apos;s get started</h2>
                <p className="text-sm text-gray-500">Tell us who you are.</p>
            </div>

            <div>
                <label className={labelClass}>Full Name *</label>
                <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className={inputClass}
                />
                {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
            </div>

            <div>
                <label className={labelClass}>Email Address *</label>
                <input
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={inputClass}
                />
                {errors.email && <p className={errorClass}>{errors.email}</p>}
            </div>

            <div>
                <label className={labelClass}>Phone Number *</label>
                <input
                    type="tel"
                    placeholder="+234..."
                    value={formData.primaryPhone}
                    onChange={(e) => updateField('primaryPhone', e.target.value)}
                    className={inputClass}
                />
                {errors.primaryPhone && <p className={errorClass}>{errors.primaryPhone}</p>}
            </div>

            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className={labelClass}>City</label>
                    <input
                        type="text"
                        placeholder="Lagos"
                        value={formData.city}
                        onChange={(e) => updateField('city', e.target.value)}
                        className={inputClass}
                    />
                </div>
                <div>
                    <label className={labelClass}>State</label>
                    <input
                        type="text"
                        placeholder="Lagos"
                        value={formData.state}
                        onChange={(e) => updateField('state', e.target.value)}
                        className={inputClass}
                    />
                </div>
            </div>
        </div>
    );
}

// ─── Step 2: About You ──────────────────────────────────
function Step2({ formData, updateField, errors }: any) {
    const selectedCategory = formData.primaryCategory;

    const handleCategoryChange = (category: string) => {
        updateField('primaryCategory', category);
        updateField('discipline', []);
    };

    const toggleDiscipline = (disc: string) => {
        const current = formData.discipline || [];
        if (current.includes(disc)) {
            updateField('discipline', current.filter((d: string) => d !== disc));
        } else {
            updateField('discipline', [...current, disc]);
        }
    };

    const bioWordCount = countWords(formData.artistBio || '');

    return (
        <div className="space-y-5">
            <div>
                <h2 className="font-heading text-2xl md:text-3xl mb-1">Tell us about you</h2>
                <p className="text-sm text-gray-500">What&apos;s your creative vibe?</p>
            </div>

            {/* Category Selection */}
            <div>
                <label className={labelClass}>Creative Category *</label>
                <div className="grid grid-cols-1 gap-2">
                    {CATEGORIES.map((cat) => (
                        <div
                            key={cat.name}
                            onClick={() => handleCategoryChange(cat.name)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-2xl border cursor-pointer transition-all duration-200 ${
                                selectedCategory === cat.name
                                    ? 'border-primary bg-primary/5 shadow-sm'
                                    : 'border-gray-200 bg-gray-50 hover:bg-gray-100 hover:border-gray-300'
                            }`}
                        >
                            <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                                selectedCategory === cat.name ? 'border-primary' : 'border-gray-300'
                            }`}>
                                {selectedCategory === cat.name && <div className="w-2 h-2 rounded-full bg-primary" />}
                            </div>
                            <span className={`text-sm font-medium ${selectedCategory === cat.name ? 'text-primary' : 'text-gray-700'}`}>
                                {cat.name}
                            </span>
                        </div>
                    ))}
                </div>
                {errors.primaryCategory && <p className={errorClass}>{errors.primaryCategory}</p>}
            </div>

            {/* Disciplines */}
            {selectedCategory && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }}>
                    <label className={labelClass}>Your Discipline(s) *</label>
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.find(c => c.name === selectedCategory)?.disciplines.map((disc) => {
                            const isSelected = (formData.discipline || []).includes(disc);
                            return (
                                <button
                                    key={disc}
                                    type="button"
                                    onClick={() => toggleDiscipline(disc)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                                        isSelected
                                            ? 'bg-primary text-white border-primary shadow-sm'
                                            : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                                    }`}
                                >
                                    {isSelected && '✓ '}{disc}
                                </button>
                            );
                        })}
                    </div>
                    {errors.discipline && <p className={errorClass}>{errors.discipline}</p>}
                </motion.div>
            )}

            {/* Short Bio */}
            <div>
                <label className={labelClass}>Short Bio (20–50 words) *</label>
                <p className="text-xs text-gray-400 mb-2">A quick intro — think Twitter bio length.</p>
                <textarea
                    placeholder="I'm a Lagos-based visual artist exploring identity through mixed media..."
                    value={formData.artistBio}
                    onChange={(e) => updateField('artistBio', e.target.value)}
                    rows={3}
                    className={`${inputClass} resize-none`}
                />
                <div className="flex justify-between items-center mt-1.5">
                    {errors.artistBio && <p className={errorClass}>{errors.artistBio}</p>}
                    <p className={`text-xs ml-auto ${bioWordCount >= 20 && bioWordCount <= 50 ? 'text-green-500' : bioWordCount > 50 ? 'text-red-500' : 'text-gray-400'}`}>
                        {bioWordCount}/50 words
                    </p>
                </div>
            </div>
        </div>
    );
}

// ─── Step 3: Final Details ──────────────────────────────────
function Step3({ formData, updateField, errors }: any) {
    return (
        <div className="space-y-5">
            <div>
                <h2 className="font-heading text-2xl md:text-3xl mb-1">Almost done!</h2>
                <p className="text-sm text-gray-500">Just a couple more things.</p>
            </div>

            <div>
                <label className={labelClass}>Instagram Handle</label>
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm">@</span>
                    <input
                        type="text"
                        placeholder="username"
                        value={formData.instagram}
                        onChange={(e) => updateField('instagram', e.target.value)}
                        className={`${inputClass} pl-9`}
                    />
                </div>
            </div>

            <div>
                <label className={labelClass}>How did you hear about CON/FORM?</label>
                <input
                    type="text"
                    placeholder="Instagram, friend, poster, etc."
                    value={formData.howHeard}
                    onChange={(e) => updateField('howHeard', e.target.value)}
                    className={inputClass}
                />
            </div>

            <div>
                <label
                    className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all duration-200 ${
                        formData.consent
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    }`}
                >
                    <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => updateField('consent', e.target.checked)}
                        className="w-5 h-5 rounded-md mt-0.5 accent-primary"
                    />
                    <span className="text-sm text-gray-700 leading-relaxed">
                        I confirm that my information is accurate and I consent to CON/FORM using it for event coordination and updates.
                    </span>
                </label>
                {errors.consent && <p className={errorClass}>{errors.consent}</p>}
            </div>
        </div>
    );
}
