'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { submitArtistApplication } from '@/lib/utils/form-submission';
import { countWords, validateWordCount } from '@/lib/utils/text-helpers';

type FormData = {
    // Step 1: Personal Information
    fullName: string;
    artistName: string;
    dateOfBirth: string;
    primaryPhone: string;
    secondaryPhone: string;
    email: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    instagram: string;
    twitter: string;
    facebook: string;
    youtube: string;
    tiktok: string;
    website: string;
    otherSocial: string;
    emergencyName: string;
    emergencyRelationship: string;
    emergencyPhone: string;

    // Step 2: Artist Profile
    primaryCategory: string;
    discipline: string[];
    otherDisciplines: string;
    yearsExperience: string;
    monthsExperience: string;
    professionalStatus: string[];

    // Step 3: About Your Work
    artistBio: string;
    artistStatement: string;
    achievements: string;
    reference1Name: string;
    reference1Relationship: string;
    reference1Contact: string;
    reference2Name: string;
    reference2Relationship: string;
    reference2Contact: string;

    // Step 4: Presentation
    presentationTitle: string;
    presentationDescription: string;
    presentationDuration: string;
    whyThisPiece: string;
    presentationType: string;

    // Step 5: Technical Requirements
    audioNeeds: string[];
    visualNeeds: string[];
    spaceNeeds: string[];
    powerNeeds: string[];
    otherNeeds: string[];
    bringingEquipment: string;
    specialSetup: string;
    backupPlan: string;

    // Step 6: Materials & Availability
    submissionMaterials: string[];
    uploadLink: string;
    backupEmail: string;
    backupPhone: string;
    attendanceDays: string;
    technicalRehearsal: string;
    dressRehearsal: string;
    loadInDay: string;
    meetingAvailability: string;
    schedulingConflicts: string;
    transportation: string;

    // Step 7: Final Details
    howHeard: string;
    pastEvents: string;
    accessibilityNeeds: string;
    collaboration: string;
    collaboratorName: string;
    additionalInfo: string;
    promotionalConsent: string[];
    tagHandles: string;
    agreements: string[];
    signature: string;
};

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

export default function RegisterForm() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({} as FormData);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [portfolioFiles, setPortfolioFiles] = useState<File[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);
    const [submitError, setSubmitError] = useState('');
    const totalSteps = 7;

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('conformRegistration');
        if (saved) {
            setFormData(JSON.parse(saved));
        }
    }, []);

    // Save to localStorage on change
    useEffect(() => {
        localStorage.setItem('conformRegistration', JSON.stringify(formData));
    }, [formData]);

    const updateField = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: '' }));
        }
    };

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (step === 1) {
            if (!formData.fullName) newErrors.fullName = 'Full name is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!formData.primaryPhone) newErrors.primaryPhone = 'Phone number is required';
            if (!formData.emergencyName) newErrors.emergencyName = 'Emergency contact is required';
        } else if (step === 2) {
            if (!formData.primaryCategory) newErrors.primaryCategory = 'Please select a category';
            if (!formData.discipline || formData.discipline.length === 0) {
                newErrors.discipline = 'Please select at least one discipline';
            }
        } else if (step === 3) {
            if (!formData.artistBio || formData.artistBio.length < 200) {
                newErrors.artistBio = 'Artist bio must be 200-300 words';
            }
            if (!formData.artistStatement || formData.artistStatement.length < 200) {
                newErrors.artistStatement = 'Artist statement must be 200-300 words';
            }
        } else if (step === 4) {
            if (!formData.presentationTitle) newErrors.presentationTitle = 'Presentation title is required';
            if (!formData.presentationDescription || formData.presentationDescription.length < 300) {
                newErrors.presentationDescription = 'Description must be 300-500 words';
            }
            if (!formData.presentationDuration) newErrors.presentationDuration = 'Duration is required';
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
        if (validateStep(currentStep)) {
            setIsSubmitting(true);
            setSubmitError('');

            const result = await submitArtistApplication(formData, portfolioFiles);

            setIsSubmitting(false);

            if (result.success) {
                setSubmitSuccess(true);
                setFormData({} as FormData);
                setPortfolioFiles([]);
                setCurrentStep(1);
            } else {
                setSubmitError(result.error || 'Failed to submit application. Please try again.');
            }
        }
    };
    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={formData} updateField={updateField} errors={errors} />;
            case 2:
                return <Step2 formData={formData} updateField={updateField} errors={errors} />;
            case 3:
                return <Step3 formData={formData} updateField={updateField} errors={errors} />;
            case 4:
                return <Step4 formData={formData} updateField={updateField} errors={errors} />;
            case 5:
                return <Step5 formData={formData} updateField={updateField} errors={errors} />;
            case 6:
                return <Step6 formData={formData} updateField={updateField} errors={errors} />;
            case 7:
                return <Step7 formData={formData} updateField={updateField} errors={errors} />;
            default:
                return null;
        }
    };

    return (
        <div className="w-full">
            {/* Progress Bar */}
            <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                    <span className="font-heading text-lg">Step {currentStep} of {totalSteps}</span>
                    <span className="text-sm text-gray-500">{Math.round((currentStep / totalSteps) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <motion.div
                        className="bg-primary h-3 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </div>

            {/* Success Message */}
            {submitSuccess && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-6 bg-green-50 border-2 border-green-500 rounded"
                >
                    <h3 className="font-heading text-2xl text-green-800 mb-2">✅ Application Submitted!</h3>
                    <p className="text-green-700">Thank you! We'll review your application and get back to you soon.</p>
                    <button
                        onClick={() => setSubmitSuccess(false)}
                        className="mt-4 px-6 py-2 bg-green-600 text-white font-bold hover:bg-green-700"
                    >
                        Submit Another Application
                    </button>
                </motion.div>
            )}

            {/* Error Message */}
            {submitError && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-50 border-2 border-red-500 rounded"
                >
                    <p className="text-red-700 font-bold">❌ {submitError}</p>
                    <button
                        onClick={() => setSubmitError('')}
                        className="mt-2 text-red-600 underline text-sm"
                    >
                        Dismiss
                    </button>
                </motion.div>
            )}

            {/* Form Steps */}
            {!submitSuccess && (
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        {renderStep()}
                    </motion.div>
                </AnimatePresence>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t">
                <button
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
                >
                    Previous
                </button>

                {currentStep < totalSteps ? (
                    <button
                        onClick={nextStep}
                        className="px-8 py-3 bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
                    >
                        Next Step
                    </button>
                ) : (
                    <button
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        className="px-8 py-3 bg-green-600 text-white font-bold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Application'}
                    </button>
                )}
            </div>
        </div>
    );
}

// Step 1: Personal Information
function Step1({ formData, updateField, errors }: any) {
    return (
        <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Personal Information</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block font-bold mb-2">Full Legal Name *</label>
                    <input
                        type="text"
                        value={formData.fullName || ''}
                        onChange={(e) => updateField('fullName', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                    {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName}</p>}
                </div>

                <div>
                    <label className="block font-bold mb-2">Artist / Stage Name</label>
                    <input
                        type="text"
                        value={formData.artistName || ''}
                        onChange={(e) => updateField('artistName', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div>
                    <label className="block font-bold mb-2">Date of Birth</label>
                    <input
                        type="date"
                        value={formData.dateOfBirth || ''}
                        onChange={(e) => updateField('dateOfBirth', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                </div>

                <div>
                    <label className="block font-bold mb-2">Primary Phone *</label>
                    <input
                        type="tel"
                        value={formData.primaryPhone || ''}
                        onChange={(e) => updateField('primaryPhone', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                    {errors.primaryPhone && <p className="text-red-600 text-sm mt-1">{errors.primaryPhone}</p>}
                </div>

                <div>
                    <label className="block font-bold mb-2">Secondary Phone</label>
                    <input
                        type="tel"
                        value={formData.secondaryPhone || ''}
                        onChange={(e) => updateField('secondaryPhone', e.target.value)}
                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                </div>
            </div>

            <div>
                <label className="block font-bold mb-2">Email Address *</label>
                <input
                    type="email"
                    value={formData.email || ''}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
                <label className="block font-bold mb-2">Mailing Address</label>
                <input
                    type="text"
                    placeholder="Street"
                    value={formData.address || ''}
                    onChange={(e) => updateField('address', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none mb-3"
                />
                <div className="grid md:grid-cols-3 gap-3">
                    <input
                        type="text"
                        placeholder="City"
                        value={formData.city || ''}
                        onChange={(e) => updateField('city', e.target.value)}
                        className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="State"
                        value={formData.state || ''}
                        onChange={(e) => updateField('state', e.target.value)}
                        className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Postal Code"
                        value={formData.postalCode || ''}
                        onChange={(e) => updateField('postalCode', e.target.value)}
                        className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                </div>
            </div>

            <div>
                <h3 className="font-heading text-2xl mb-4">Social Media</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="Instagram @username"
                        value={formData.instagram || ''}
                        onChange={(e) => updateField('instagram', e.target.value)}
                        className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Twitter @username"
                        value={formData.twitter || ''}
                        onChange={(e) => updateField('twitter', e.target.value)}
                        className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="YouTube"
                        value={formData.youtube || ''}
                        onChange={(e) => updateField('youtube', e.target.value)}
                        className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                    <input
                        type="text"
                        placeholder="TikTok @username"
                        value={formData.tiktok || ''}
                        onChange={(e) => updateField('tiktok', e.target.value)}
                        className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                    />
                </div>
                <input
                    type="url"
                    placeholder="Website / Portfolio Link"
                    value={formData.website || ''}
                    onChange={(e) => updateField('website', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none mt-4"
                />
            </div>

            <div>
                <h3 className="font-heading text-2xl mb-4">Emergency Contact *</h3>
                <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <label className="block font-bold mb-2">Name</label>
                        <input
                            type="text"
                            value={formData.emergencyName || ''}
                            onChange={(e) => updateField('emergencyName', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                        />
                        {errors.emergencyName && <p className="text-red-600 text-sm mt-1">{errors.emergencyName}</p>}
                    </div>
                    <div>
                        <label className="block font-bold mb-2">Relationship</label>
                        <input
                            type="text"
                            value={formData.emergencyRelationship || ''}
                            onChange={(e) => updateField('emergencyRelationship', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block font-bold mb-2">Phone</label>
                        <input
                            type="tel"
                            value={formData.emergencyPhone || ''}
                            onChange={(e) => updateField('emergencyPhone', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

// Step 2: Artist Profile
function Step2({ formData, updateField, errors }: any) {
    const [selectedCategory, setSelectedCategory] = useState(formData.primaryCategory || '');

    const handleCategoryChange = (category: string) => {
        setSelectedCategory(category);
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

    return (
        <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Artist Profile</h2>

            <div>
                <label className="block font-bold mb-4">Primary Category *</label>
                <div className="space-y-3">
                    {CATEGORIES.map((cat) => (
                        <label key={cat.name} className="flex items-center space-x-3 p-4 border-2 border-gray-300 cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="category"
                                checked={selectedCategory === cat.name}
                                onChange={() => handleCategoryChange(cat.name)}
                                className="w-5 h-5"
                            />
                            <span className="font-bold">{cat.name}</span>
                        </label>
                    ))}
                </div>
                {errors.primaryCategory && <p className="text-red-600 text-sm mt-2">{errors.primaryCategory}</p>}
            </div>

            {selectedCategory && (
                <div>
                    <label className="block font-bold mb-4">Specific Discipline(s) *</label>
                    <div className="grid md:grid-cols-2 gap-3">
                        {CATEGORIES.find(c => c.name === selectedCategory)?.disciplines.map((disc) => (
                            <label key={disc} className="flex items-center space-x-3 p-3 border-2 border-gray-300 cursor-pointer hover:bg-gray-50">
                                <input
                                    type="checkbox"
                                    checked={(formData.discipline || []).includes(disc)}
                                    onChange={() => toggleDiscipline(disc)}
                                    className="w-5 h-5"
                                />
                                <span>{disc}</span>
                            </label>
                        ))}
                    </div>
                    {errors.discipline && <p className="text-red-600 text-sm mt-2">{errors.discipline}</p>}
                </div>
            )}

            <div>
                <label className="block font-bold mb-2">Years of Active Experience</label>
                <div className="flex gap-4">
                    <div className="flex-1">
                        <input
                            type="number"
                            placeholder="Years"
                            value={formData.yearsExperience || ''}
                            onChange={(e) => updateField('yearsExperience', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div className="flex-1">
                        <input
                            type="number"
                            placeholder="Months"
                            value={formData.monthsExperience || ''}
                            onChange={(e) => updateField('monthsExperience', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div>
                <label className="block font-bold mb-4">Professional Status (select all that apply)</label>
                <div className="space-y-2">
                    {['Full-time professional artist', 'Part-time artist', 'Student', 'Emerging artist', 'Hobbyist transitioning'].map((status) => (
                        <label key={status} className="flex items-center space-x-3 p-3 border border-gray-300 cursor-pointer hover:bg-gray-50">
                            <input
                                type="checkbox"
                                checked={(formData.professionalStatus || []).includes(status)}
                                onChange={() => {
                                    const current = formData.professionalStatus || [];
                                    updateField('professionalStatus', current.includes(status)
                                        ? current.filter((s: string) => s !== status)
                                        : [...current, status]
                                    );
                                }}
                                className="w-5 h-5"
                            />
                            <span>{status}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Step 3: About Your Work
function Step3({ formData, updateField, errors }: any) {
    return (
        <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">About Your Work</h2>

            <div>
                <label className="block font-bold mb-2">Artist Bio (100-200 words) *</label>
                <p className="text-sm text-gray-600 mb-2">
                    Tell us about yourself as an artist. What drives your work? What makes your perspective unique?
                </p>
                <textarea
                    value={formData.artistBio || ''}
                    onChange={(e) => updateField('artistBio', e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
                <div className="flex justify-between text-sm mt-1">
                    {errors.artistBio && <p className="text-red-600">{errors.artistBio}</p>}
                    <p className="text-gray-500 ml-auto">{countWords(formData.artistBio || '')} / 100-200 words</p>
                </div>
            </div>

            <div>
                <label className="block font-bold mb-2">Artist Statement (100-200 words) *</label>
                <p className="text-sm text-gray-600 mb-2">
                    Describe your artistic vision, philosophy, or approach. What themes do you explore?
                </p>
                <textarea
                    value={formData.artistStatement || ''}
                    onChange={(e) => updateField('artistStatement', e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
                <div className="flex justify-between text-sm mt-1">
                    {errors.artistStatement && <p className="text-red-600">{errors.artistStatement}</p>}
                    <p className="text-gray-500 ml-auto">{countWords(formData.artistStatement || '')} / 100-200 words</p>
                </div>
            </div>

            <div>
                <label className="block font-bold mb-2">Notable Achievements</label>
                <p className="text-sm text-gray-600 mb-2">
                    Exhibitions, performances, publications, awards, competitions, grants, etc.
                </p>
                <textarea
                    value={formData.achievements || ''}
                    onChange={(e) => updateField('achievements', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <h3 className="font-heading text-2xl mb-4">Professional References (Optional)</h3>
                <div className="space-y-6">
                    <div>
                        <p className="font-bold mb-3">Reference 1</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.reference1Name || ''}
                                onChange={(e) => updateField('reference1Name', e.target.value)}
                                className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Relationship"
                                value={formData.reference1Relationship || ''}
                                onChange={(e) => updateField('reference1Relationship', e.target.value)}
                                className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Contact"
                                value={formData.reference1Contact || ''}
                                onChange={(e) => updateField('reference1Contact', e.target.value)}
                                className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                            />
                        </div>
                    </div>

                    <div>
                        <p className="font-bold mb-3">Reference 2</p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={formData.reference2Name || ''}
                                onChange={(e) => updateField('reference2Name', e.target.value)}
                                className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Relationship"
                                value={formData.reference2Relationship || ''}
                                onChange={(e) => updateField('reference2Relationship', e.target.value)}
                                className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Contact"
                                value={formData.reference2Contact || ''}
                                onChange={(e) => updateField('reference2Contact', e.target.value)}
                                className="px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Step 4: Your Presentation
function Step4({ formData, updateField, errors }: any) {
    return (
        <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Your Presentation</h2>

            <div>
                <label className="block font-bold mb-2">Presentation Title *</label>
                <input
                    type="text"
                    value={formData.presentationTitle || ''}
                    onChange={(e) => updateField('presentationTitle', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
                {errors.presentationTitle && <p className="text-red-600 text-sm mt-1">{errors.presentationTitle}</p>}
            </div>

            <div>
                <label className="block font-bold mb-2">Detailed Description (100-200 words) *</label>
                <p className="text-sm text-gray-600 mb-2">
                    What EXACTLY will you be presenting? What will the audience experience?
                </p>
                <textarea
                    value={formData.presentationDescription || ''}
                    onChange={(e) => updateField('presentationDescription', e.target.value)}
                    rows={8}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
                <div className="flex justify-between text-sm mt-1">
                    {errors.presentationDescription && <p className="text-red-600">{errors.presentationDescription}</p>}
                    <p className="text-gray-500 ml-auto">{countWords(formData.presentationDescription || '')} / 100-200 words</p>
                </div>
            </div>

            <div>
                <label className="block font-bold mb-2">Duration (minutes) *</label>
                <input
                    type="number"
                    placeholder="Most slots are 5-15 minutes"
                    value={formData.presentationDuration || ''}
                    onChange={(e) => updateField('presentationDuration', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
                {errors.presentationDuration && <p className="text-red-600 text-sm mt-1">{errors.presentationDuration}</p>}
            </div>

            <div>
                <label className="block font-bold mb-2">Why This Specific Piece? (100-200 words)</label>
                <textarea
                    value={formData.whyThisPiece || ''}
                    onChange={(e) => updateField('whyThisPiece', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <label className="block font-bold mb-4">This will be:</label>
                <div className="space-y-2">
                    {['A premiere / first time presentation', 'Previously performed/shown work', 'A work in progress', 'Other'].map((type) => (
                        <label key={type} className="flex items-center space-x-3 p-3 border-2 border-gray-300 cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="presentationType"
                                checked={formData.presentationType === type}
                                onChange={() => updateField('presentationType', type)}
                                className="w-5 h-5"
                            />
                            <span>{type}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Step 5: Technical Requirements  
function Step5({ formData, updateField, errors }: any) {
    return (
        <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Technical Requirements</h2>

            <div>
                <label className="block font-bold mb-2">Equipment You'll Bring</label>
                <textarea
                    placeholder="List everything you'll provide yourself"
                    value={formData.bringingEquipment || ''}
                    onChange={(e) => updateField('bringingEquipment', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <label className="block font-bold mb-2">Special Setup Requirements</label>
                <textarea
                    placeholder="Setup time, positioning, load-in requirements, fragile items, etc."
                    value={formData.specialSetup || ''}
                    onChange={(e) => updateField('specialSetup', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <label className="block font-bold mb-2">Backup Plan</label>
                <p className="text-sm text-gray-600 mb-2">
                    What happens if there&apos;s a technical failure? This shows professionalism.
                </p>
                <textarea
                    value={formData.backupPlan || ''}
                    onChange={(e) => updateField('backupPlan', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <p className="text-sm text-gray-600 italic">
                For detailed equipment needs (audio, visual, space, power), please specify in your special setup requirements above.
            </p>
        </div>
    );
}

// Step 6: Materials & Availability
function Step6({ formData, updateField, errors }: any) {
    return (
        <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Materials & Availability</h2>

            <div>
                <label className="block font-bold mb-2">Upload Link for All Submission Materials *</label>
                <p className="text-sm text-gray-600 mb-2">
                    Upload ALL materials to Google Drive, Dropbox, WeTransfer, etc. Make the link PUBLIC.
                </p>
                <input
                    type="url"
                    placeholder="https://..."
                    value={formData.uploadLink || ''}
                    onChange={(e) => updateField('uploadLink', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <label className="block font-bold mb-4">Can you attend BOTH days (March 20-21, 2026)? *</label>
                <div className="space-y-2">
                    {['Yes, both days', 'Only March 20', 'Only March 21', 'Flexible - coordinate with me'].map((opt) => (
                        <label key={opt} className="flex items-center space-x-3 p-3 border-2 border-gray-300 cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="attendance"
                                checked={formData.attendanceDays === opt}
                                onChange={() => updateField('attendanceDays', opt)}
                                className="w-5 h-5"
                            />
                            <span>{opt}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block font-bold mb-4">Rehearsal Availability</label>
                <div className="space-y-3">
                    <div>
                        <p className="font-semibold mb-2">Technical Rehearsal - Feb 24, 2026, 6-9 PM</p>
                        <select
                            value={formData.technicalRehearsal || ''}
                            onChange={(e) => updateField('technicalRehearsal', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                        >
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Maybe">Maybe</option>
                        </select>
                    </div>

                    <div>
                        <p className="font-semibold mb-2">Dress Rehearsal - March 5, 2026, 2-6 PM</p>
                        <select
                            value={formData.dressRehearsal || ''}
                            onChange={(e) => updateField('dressRehearsal', e.target.value)}
                            className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                        >
                            <option value="">Select...</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                            <option value="Maybe">Maybe</option>
                        </select>
                    </div>
                </div>
            </div>

            <div>
                <label className="block font-bold mb-4">Transportation</label>
                <div className="space-y-2">
                    {['I have personal transportation', 'I will use public transportation', 'I need assistance', 'Other'].map((opt) => (
                        <label key={opt} className="flex items-center space-x-3 p-3 border border-gray-300 cursor-pointer hover:bg-gray-50">
                            <input
                                type="radio"
                                name="transportation"
                                checked={formData.transportation === opt}
                                onChange={() => updateField('transportation', opt)}
                                className="w-5 h-5"
                            />
                            <span>{opt}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>
    );
}

// Step 7: Final Details & Consent
function Step7({ formData, updateField, errors }: any) {
    return (
        <div className="space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl mb-6">Final Details</h2>

            <div>
                <label className="block font-bold mb-2">How did you hear about CON/FORM?</label>
                <input
                    type="text"
                    placeholder="Instagram, friend referral, poster, etc."
                    value={formData.howHeard || ''}
                    onChange={(e) => updateField('howHeard', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <label className="block font-bold mb-2">Past Event Experience</label>
                <textarea
                    placeholder="List 2-3 similar events you've participated in"
                    value={formData.pastEvents || ''}
                    onChange={(e) => updateField('pastEvents', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <label className="block font-bold mb-2">Accessibility Needs</label>
                <textarea
                    placeholder="Wheelchair access, dietary restrictions, visual/hearing accommodations, etc."
                    value={formData.accessibilityNeeds || ''}
                    onChange={(e) => updateField('accessibilityNeeds', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <label className="block font-bold mb-2">Collaborating with Other Artists?</label>
                <input
                    type="text"
                    placeholder="Name of collaborator(s)"
                    value={formData.collaboratorName || ''}
                    onChange={(e) => updateField('collaboratorName', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div>
                <label className="block font-bold mb-2">Anything Else We Should Know?</label>
                <textarea
                    placeholder="Special circumstances, concerns, ideas, requests..."
                    value={formData.additionalInfo || ''}
                    onChange={(e) => updateField('additionalInfo', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>

            <div className="border-t pt-6">
                <h3 className="font-heading text-2xl mb-4">Artist Agreement & Consent *</h3>
                <div className="space-y-3">
                    {[
                        'All information provided is accurate and truthful',
                        'I own all rights to the work I will present',
                        'I am available on the dates indicated',
                        'I commit to professional conduct and punctuality',
                        'I allow CON/FORM to use photos/videos for promotion (with credit)',
                        'I understand artist slots are limited and competitive',
                        'I will respond promptly to coordination emails',
                        'I understand this is a community event, not a paid gig'
                    ].map((agreement) => (
                        <label key={agreement} className="flex items-start space-x-3 p-3 border border-gray-300 cursor-pointer hover:bg-gray-50">
                            <input
                                type="checkbox"
                                checked={(formData.agreements || []).includes(agreement)}
                                onChange={() => {
                                    const current = formData.agreements || [];
                                    updateField('agreements', current.includes(agreement)
                                        ? current.filter((a: string) => a !== agreement)
                                        : [...current, agreement]
                                    );
                                }}
                                className="w-5 h-5 mt-1"
                            />
                            <span className="text-sm">{agreement}</span>
                        </label>
                    ))}
                </div>
            </div>

            <div>
                <label className="block font-bold mb-2">Digital Signature *</label>
                <input
                    type="text"
                    placeholder="Type your full name as signature"
                    value={formData.signature || ''}
                    onChange={(e) => updateField('signature', e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary focus:outline-none"
                />
            </div>
        </div>
    );
}
