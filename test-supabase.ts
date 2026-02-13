// Quick test script to verify Supabase connection
import { createClient } from '@/lib/supabase/client';

async function testSupabaseConnection() {
    console.log('🔍 Testing Supabase connection...\n');

    const supabase = createClient();

    // Test 1: Check tables exist
    console.log('1️⃣ Checking if tables exist...');
    const { data: profiles, error: profilesError } = await supabase
        .from('profiles')
        .select('count')
        .limit(1);

    if (!profilesError) {
        console.log('✅ profiles table accessible');
    } else {
        console.error('❌ profiles table error:', profilesError.message);
    }

    const { data: applications, error: applicationsError } = await supabase
        .from('artist_applications')
        .select('count')
        .limit(1);

    if (!applicationsError) {
        console.log('✅ artist_applications table accessible');
    } else {
        console.error('❌ artist_applications table error:', applicationsError.message);
    }

    // Test 2: Check storage bucket
    console.log('\n2️⃣ Checking storage bucket...');
    const { data: buckets, error: bucketsError } = await supabase
        .storage
        .listBuckets();

    if (!bucketsError) {
        const portfolioBucket = buckets?.find(b => b.name === 'artist-portfolios');
        if (portfolioBucket) {
            console.log('✅ artist-portfolios bucket exists');
        } else {
            console.error('❌ artist-portfolios bucket not found');
        }
    } else {
        console.error('❌ Storage error:', bucketsError.message);
    }

    // Test 3: Check auth configuration
    console.log('\n3️⃣ Checking auth configuration...');
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();

    if (!sessionError) {
        console.log('✅ Auth configured correctly');
        console.log('   Current session:', session ? '✅ Logged in' : 'ℹ️ Not logged in (expected)');
    } else {
        console.error('❌ Auth error:', sessionError.message);
    }

    console.log('\n✨ Connection test complete!');
}

// Run the test
testSupabaseConnection().catch(console.error);
