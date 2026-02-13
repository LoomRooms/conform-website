// Database type definitions for Supabase tables

export interface Database {
    public: {
        Tables: {
            profiles: {
                Row: {
                    id: string;
                    email: string;
                    full_name: string | null;
                    avatar_url: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id: string;
                    email: string;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    email?: string;
                    full_name?: string | null;
                    avatar_url?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
            artist_applications: {
                Row: {
                    id: string;
                    user_id: string | null;
                    // Step 1: Personal Information
                    full_name: string;
                    artist_name: string;
                    date_of_birth: string;
                    primary_phone: string;
                    secondary_phone: string | null;
                    email: string;
                    address: string;
                    city: string;
                    state: string;
                    postal_code: string;
                    // Social Media
                    instagram: string | null;
                    twitter: string | null;
                    tiktok: string | null;
                    youtube: string | null;
                    website: string | null;
                    // Step 2: Artist Profile
                    primary_category: string;
                    disciplines: string[];
                    years_active: number;
                    // Step 3: About Your Work
                    artistic_statement: string;
                    themes: string;
                    influences: string;
                    past_work_description: string;
                    // Step 4: Your Presentation
                    presentation_format: string;
                    presentation_duration: string | null;
                    proposed_piece_title: string;
                    proposed_piece_description: string;
                    portfolio_urls: string[] | null;
                    portfolio_files: string[] | null;
                    // Step 5: Technical Requirements
                    space_requirements: string;
                    equipment_needed: string;
                    setup_time: string;
                    tech_support_needed: string;
                    // Step 6: Materials & Availability
                    materials_list: string;
                    budget_estimate: string;
                    availability_dates: string[];
                    // Step 7: Final Details & Consent
                    how_heard: string;
                    past_events: string | null;
                    accessibility_needs: string | null;
                    collaboration: boolean;
                    collaborator_name: string | null;
                    additional_info: string | null;
                    promotional_consent: string[];
                    tag_handles: string | null;
                    agreements: string[];
                    signature: string;
                    signature_date: string;
                    // Metadata
                    status: string;
                    submitted_at: string;
                    reviewed_at: string | null;
                    admin_notes: string | null;
                    created_at: string;
                    updated_at: string;
                };
                Insert: {
                    id?: string;
                    user_id?: string | null;
                    full_name: string;
                    artist_name: string;
                    date_of_birth: string;
                    primary_phone: string;
                    secondary_phone?: string | null;
                    email: string;
                    address: string;
                    city: string;
                    state: string;
                    postal_code: string;
                    instagram?: string | null;
                    twitter?: string | null;
                    tiktok?: string | null;
                    youtube?: string | null;
                    website?: string | null;
                    primary_category: string;
                    disciplines: string[];
                    years_active: number;
                    artistic_statement: string;
                    themes: string;
                    influences: string;
                    past_work_description: string;
                    presentation_format: string;
                    presentation_duration?: string | null;
                    proposed_piece_title: string;
                    proposed_piece_description: string;
                    portfolio_urls?: string[] | null;
                    portfolio_files?: string[] | null;
                    space_requirements: string;
                    equipment_needed: string;
                    setup_time: string;
                    tech_support_needed: string;
                    materials_list: string;
                    budget_estimate: string;
                    availability_dates: string[];
                    how_heard: string;
                    past_events?: string | null;
                    accessibility_needs?: string | null;
                    collaboration: boolean;
                    collaborator_name?: string | null;
                    additional_info?: string | null;
                    promotional_consent: string[];
                    tag_handles?: string | null;
                    agreements: string[];
                    signature: string;
                    signature_date?: string;
                    status?: string;
                    submitted_at?: string;
                    reviewed_at?: string | null;
                    admin_notes?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
                Update: {
                    id?: string;
                    user_id?: string | null;
                    full_name?: string;
                    artist_name?: string;
                    date_of_birth?: string;
                    primary_phone?: string;
                    secondary_phone?: string | null;
                    email?: string;
                    address?: string;
                    city?: string;
                    state?: string;
                    postal_code?: string;
                    instagram?: string | null;
                    twitter?: string | null;
                    tiktok?: string | null;
                    youtube?: string | null;
                    website?: string | null;
                    primary_category?: string;
                    disciplines?: string[];
                    years_active?: number;
                    artistic_statement?: string;
                    themes?: string;
                    influences?: string;
                    past_work_description?: string;
                    presentation_format?: string;
                    presentation_duration?: string | null;
                    proposed_piece_title?: string;
                    proposed_piece_description?: string;
                    portfolio_urls?: string[] | null;
                    portfolio_files?: string[] | null;
                    space_requirements?: string;
                    equipment_needed?: string;
                    setup_time?: string;
                    tech_support_needed?: string;
                    materials_list?: string;
                    budget_estimate?: string;
                    availability_dates?: string[];
                    how_heard?: string;
                    past_events?: string | null;
                    accessibility_needs?: string | null;
                    collaboration?: boolean;
                    collaborator_name?: string | null;
                    additional_info?: string | null;
                    promotional_consent?: string[];
                    tag_handles?: string | null;
                    agreements?: string[];
                    signature?: string;
                    signature_date?: string;
                    status?: string;
                    submitted_at?: string;
                    reviewed_at?: string | null;
                    admin_notes?: string | null;
                    created_at?: string;
                    updated_at?: string;
                };
            };
        };
    };
}

// Helper types
export type Profile = Database['public']['Tables']['profiles']['Row'];
export type ArtistApplication = Database['public']['Tables']['artist_applications']['Row'];
export type ArtistApplicationInsert = Database['public']['Tables']['artist_applications']['Insert'];
