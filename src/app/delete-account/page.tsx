import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Delete Account & Data',
  description: 'How to delete your SlowRead account and all associated data.',
  alternates: {
    canonical: 'https://slowread.xyz/delete-account',
    languages: {
      'zh-Hant': 'https://slowread.xyz/zh/delete-account',
      ja: 'https://slowread.xyz/ja/delete-account',
    },
  },
  openGraph: {
    title: 'Delete Account & Data — SlowRead',
    description: 'How to delete your SlowRead account and all associated data.',
    url: 'https://slowread.xyz/delete-account',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header lang="en" />

      <main className="legal container">
        <h1>Delete Your Account &amp; Data</h1>
        <p className="last-updated">Last updated: May 3, 2026</p>

        <p>
          SlowRead respects your right to control your data. You can delete your account and all
          associated data at any time, directly from within the app.
        </p>

        <h2>How to Delete Your Account In-App</h2>
        <ol>
          <li>Open the SlowRead app on your device.</li>
          <li>
            Go to the <strong>Profile</strong> tab.
          </li>
          <li>
            Tap <strong>Delete Account</strong>.
          </li>
          <li>Confirm the deletion when prompted.</li>
        </ol>

        <h2>What Gets Deleted</h2>
        <p>When you delete your account, the following data is permanently removed:</p>
        <ul>
          <li>Your profile information (email, display name, preferences)</li>
          <li>All reading progress, bookmarks, and reading history</li>
          <li>Your reading streaks and statistics</li>
          <li>AI reading companion conversation history</li>
          <li>Any notes, highlights, or saved passages</li>
          <li>Subscription records (excluding what we are required to retain for tax or legal compliance)</li>
        </ul>

        <h2>Retention Period</h2>
        <p>
          Most data is deleted immediately. Encrypted backups are purged within 30 days. Records we
          are legally required to retain (such as transaction records for tax purposes) are kept
          only for the period required by law.
        </p>

        <h2>Can&rsquo;t Access the App?</h2>
        <p>
          If you are unable to access the app to delete your account yourself, please email us at{' '}
          <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a> from the email address
          associated with your account. We will process your request within 30 days.
        </p>

        <h2>Questions</h2>
        <p>
          For any questions about data deletion, see our{' '}
          <a href="/privacy">Privacy Policy</a> or contact{' '}
          <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a>.
        </p>
      </main>

      <Footer lang="en" />
    </>
  );
}
