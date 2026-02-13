import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — SlowRead',
  description: 'SlowRead Privacy Policy. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <>
      <Header lang="en" />

      <main className="legal container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: February 10, 2026</p>

        <p>SlowRead (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the App&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Account Information:</strong> When you create an account, we collect your email address and display name. If you sign in with Apple or Google, we receive the information you authorize those services to share.</li>
          <li><strong>Reading Data:</strong> We store your reading progress, bookmarks, reading streaks, and preferences to provide a personalized experience.</li>
          <li><strong>Device Information:</strong> We collect basic device information (device type, operating system version, app version) for troubleshooting and improving the App.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and personalize your reading experience</li>
          <li>To track and display your reading streaks and progress</li>
          <li>To send push notifications (daily reading reminders), if you opt in</li>
          <li>To improve the App and fix issues</li>
        </ul>

        <h2>3. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Supabase:</strong> Cloud database and authentication infrastructure. Your data is stored securely on Supabase servers.</li>
          <li><strong>Apple Sign In / Google Sign In:</strong> Authentication providers. We only receive the information you choose to share through these services.</li>
          <li><strong>Expo / React Native:</strong> App framework. Expo may collect anonymous crash reports and diagnostics.</li>
        </ul>

        <h2>4. Data Retention and Deletion</h2>
        <p>We retain your data for as long as your account is active. You may request deletion of your account and all associated data at any time by contacting us at <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a>. We will process deletion requests within 30 days.</p>

        <h2>5. Data Security</h2>
        <p>We implement industry-standard security measures to protect your data, including encryption in transit (TLS) and at rest. However, no method of electronic storage is 100% secure.</p>

        <h2>6. Children&rsquo;s Privacy</h2>
        <p>The App is not directed at children under the age of 13. We do not knowingly collect personal information from children under 13.</p>

        <h2>7. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of material changes by posting the updated policy within the App or on this page.</p>

        <h2>8. Contact Us</h2>
        <p>If you have questions about this Privacy Policy or your data, please contact us at:</p>
        <p><a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a></p>
      </main>

      <Footer lang="en" />
    </>
  );
}
