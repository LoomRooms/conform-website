import { createClient } from '@/lib/supabase/client';
import type { Database } from '@/lib/types/database.types';

export type AuthError = {
    message: string;
    status?: number;
};

export type AuthResult = {
    success: boolean;
    error?: AuthError;
    user?: any;
};

/**
 * Sign up a new user with email and password
 */
export async function signUp(
    email: string,
    password: string,
    fullName?: string
): Promise<AuthResult> {
    try {
        const supabase = createClient();

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    full_name: fullName,
                },
            },
        });

        if (error) {
            return {
                success: false,
                error: {
                    message: error.message,
                    status: error.status,
                },
            };
        }

        return {
            success: true,
            user: data.user,
        };
    } catch (error: any) {
        return {
            success: false,
            error: {
                message: error?.message || 'An unexpected error occurred',
            },
        };
    }
}

/**
 * Sign in with email and password
 */
export async function signIn(
    email: string,
    password: string
): Promise<AuthResult> {
    try {
        const supabase = createClient();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            return {
                success: false,
                error: {
                    message: error.message,
                    status: error.status,
                },
            };
        }

        return {
            success: true,
            user: data.user,
        };
    } catch (error: any) {
        return {
            success: false,
            error: {
                message: error?.message || 'An unexpected error occurred',
            },
        };
    }
}

/**
 * Sign out the current user
 */
export async function signOut(): Promise<AuthResult> {
    try {
        const supabase = createClient();

        const { error } = await supabase.auth.signOut();

        if (error) {
            return {
                success: false,
                error: {
                    message: error.message,
                    status: error.status,
                },
            };
        }

        return {
            success: true,
        };
    } catch (error: any) {
        return {
            success: false,
            error: {
                message: error?.message || 'An unexpected error occurred',
            },
        };
    }
}

/**
 * Get the current user session
 */
export async function getSession() {
    const supabase = createClient();
    const { data: { session }, error } = await supabase.auth.getSession();

    if (error) {
        console.error('Error getting session:', error);
        return null;
    }

    return session;
}

/**
 * Get the current user
 */
export async function getCurrentUser() {
    const supabase = createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        console.error('Error getting user:', error);
        return null;
    }

    return user;
}

/**
 * Check if a user is authenticated
 */
export async function isAuthenticated(): Promise<boolean> {
    const session = await getSession();
    return !!session;
}
