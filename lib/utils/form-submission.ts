'use server';

import { createClient } from '@/lib/supabase/client';
import { createAdminClient } from '@/lib/supabase/admin';
import type { ArtistApplicationInsert } from '@/lib/types/database.types';
import { getCurrentUser } from '@/lib/auth/auth-helpers';

export interface FormSubmissionResult {
    success: boolean;
    error?: string;
    applicationId?: string;
}

/**
 * Upload files to Supabase Storage
 */
export async function uploadPortfolioFiles(
    files: File[],
    userId: string
): Promise<{ success: boolean; urls?: string[]; error?: string }> {
    try {
        const supabase = createAdminClient();
        const uploadedUrls: string[] = [];

        for (const file of files) {
            const fileExt = file.name.split('.').pop();
            const fileName = `${userId}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

            const { data, error } = await supabase.storage
                .from('artist-portfolios')
                .upload(fileName, file, {
                    cacheControl: '3600',
                    upsert: false,
                });

            if (error) {
                console.error('Upload error:', error);
                return { success: false, error: `Failed to upload ${file.name}: ${error.message}` };
            }

            // Get public URL
            const { data: { publicUrl } } = supabase.storage
                .from('artist-portfolios')
                .getPublicUrl(fileName);

            uploadedUrls.push(publicUrl);
        }

        return { success: true, urls: uploadedUrls };
    } catch (error: any) {
        console.error('Upload error:', error);
        return { success: false, error: error?.message || 'Failed to upload files' };
    }
}

/**
 * Submit artist application to Supabase
 */
export async function submitArtistApplication(
    formData: any,
    portfolioFiles?: File[]
): Promise<FormSubmissionResult> {
    try {
        // Get current user optionally
        const user = await getCurrentUser().catch(() => null);

        const supabase = createAdminClient();
        let portfolioFileUrls: string[] = [];

        // Upload portfolio files if any
        if (portfolioFiles && portfolioFiles.length > 0) {
            const uploadUserId = user ? user.id : `anonymous-${Date.now()}`;
            const uploadResult = await uploadPortfolioFiles(portfolioFiles, uploadUserId);
            if (!uploadResult.success) {
                return { success: false, error: uploadResult.error };
            }
            portfolioFileUrls = uploadResult.urls || [];
        }

        // Prepare application data
        const applicationData: ArtistApplicationInsert = {
            user_id: user ? user.id : null,
            // Step 1: Personal Information
            full_name: formData.fullName || '',
            artist_name: formData.artistName || formData.fullName || '',
            date_of_birth: formData.dateOfBirth || '',
            primary_phone: formData.primaryPhone || '',
            secondary_phone: formData.secondaryPhone || null,
            email: formData.email || '',
            address: formData.address || '',
            city: formData.city || '',
            state: formData.state || '',
            postal_code: formData.postalCode || '',
            // Social Media
            instagram: formData.instagram || null,
            twitter: formData.twitter || null,
            tiktok: formData.tiktok || null,
            youtube: formData.youtube || null,
            website: formData.website || null,
            // Step 2: Artist Profile
            primary_category: formData.primaryCategory || 'Unspecified',
            disciplines: formData.discipline || [],
            years_active: parseInt(formData.yearsExperience || '0', 10),
            // Step 3: About Your Work
            artistic_statement: formData.artistStatement || formData.artistBio,
            themes: formData.themes || '',
            influences: formData.influences || '',
            past_work_description: formData.achievements || '',
            // Step 4: Your Presentation
            presentation_format: formData.presentationType || 'Other',
            presentation_duration: formData.presentationDuration || null,
            proposed_piece_title: formData.presentationTitle || 'Untitled',
            proposed_piece_description: formData.presentationDescription || '',
            portfolio_urls: formData.portfolioUrls || null,
            portfolio_files: portfolioFileUrls.length > 0 ? portfolioFileUrls : null,
            // Step 5: Technical Requirements
            space_requirements: formData.specialSetup || 'Standard setup',
            equipment_needed: formData.bringingEquipment || 'None specified',
            setup_time: formData.setupTime || 'Standard',
            tech_support_needed: formData.backupPlan || 'None required',
            // Step 6: Materials & Availability
            materials_list: formData.uploadLink || 'See portfolio',
            budget_estimate: formData.budgetEstimate || 'TBD',
            availability_dates: [formData.attendanceDays || ''].filter(Boolean),
            // Step 7: Final Details & Consent
            how_heard: formData.howHeard || 'Unknown',
            past_events: formData.pastEvents || null,
            accessibility_needs: formData.accessibilityNeeds || null,
            collaboration: !!formData.collaboratorName,
            collaborator_name: formData.collaboratorName || null,
            additional_info: JSON.stringify({
                userProvidedAdditionalInfo: formData.additionalInfo || null,
                emergencyName: formData.emergencyName || null,
                emergencyRelationship: formData.emergencyRelationship || null,
                emergencyPhone: formData.emergencyPhone || null,
                facebook: formData.facebook || null,
                otherSocial: formData.otherSocial || null,
                otherDisciplines: formData.otherDisciplines || null,
                monthsExperience: formData.monthsExperience || null,
                professionalStatus: formData.professionalStatus || null,
                reference1Name: formData.reference1Name || null,
                reference1Relationship: formData.reference1Relationship || null,
                reference1Contact: formData.reference1Contact || null,
                reference2Name: formData.reference2Name || null,
                reference2Relationship: formData.reference2Relationship || null,
                reference2Contact: formData.reference2Contact || null,
                whyThisPiece: formData.whyThisPiece || null,
                audioNeeds: formData.audioNeeds || null,
                visualNeeds: formData.visualNeeds || null,
                spaceNeeds: formData.spaceNeeds || null,
                powerNeeds: formData.powerNeeds || null,
                otherNeeds: formData.otherNeeds || null,
                submissionMaterials: formData.submissionMaterials || null,
                backupEmail: formData.backupEmail || null,
                backupPhone: formData.backupPhone || null,
                technicalRehearsal: formData.technicalRehearsal || null,
                dressRehearsal: formData.dressRehearsal || null,
                loadInDay: formData.loadInDay || null,
                meetingAvailability: formData.meetingAvailability || null,
                schedulingConflicts: formData.schedulingConflicts || null,
                transportation: formData.transportation || null
            }),
            promotional_consent: formData.promotionalConsent || [],
            tag_handles: formData.tagHandles || null,
            agreements: formData.agreements || [],
            signature: formData.signature || '',
            signature_date: new Date().toISOString().split('T')[0],
        };

        // Insert into database
        const { data, error } = await supabase
            .from('artist_applications')
            .insert([applicationData])
            .select()
            .single();

        if (error) {
            console.error('Database error:', error);
            return { success: false, error: `Failed to submit application: ${error.message}` };
        }

        // Clear localStorage on successful submission
        localStorage.removeItem('conformRegistration');

        return { success: true, applicationId: data.id };
    } catch (error: any) {
        console.error('Submission error:', error);
        return { success: false, error: error?.message || 'An unexpected error occurred' };
    }
}


