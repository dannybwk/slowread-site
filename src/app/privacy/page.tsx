import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'SlowRead Privacy Policy. Learn how we collect, use, and protect your data.',
  alternates: {
    canonical: 'https://slowread.xyz/privacy',
    languages: { 'zh-Hant': 'https://slowread.xyz/zh/privacy', ja: 'https://slowread.xyz/ja/privacy' },
  },
  openGraph: {
    title: 'Privacy Policy — SlowRead',
    description: 'Learn how SlowRead collects, uses, and protects your data.',
    url: 'https://slowread.xyz/privacy',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function PrivacyPage() {
  return (
    <>
      <Header lang="en" />

      <main className="legal container">
        <h1>Privacy Policy</h1>
        <p className="last-updated">Last updated: May 8, 2026</p>

        <p>SlowRead (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;the App&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use our mobile application.</p>

        <h2>1. Information We Collect</h2>
        <p>We collect the following types of information:</p>
        <ul>
          <li><strong>Account Information:</strong> When you create an account, we collect your email address and display name. If you sign in with Apple or Google, we receive the information you authorize those services to share.</li>
          <li><strong>Reading Data:</strong> We store your reading progress, bookmarks, reading streaks, and preferences to provide a personalized experience.</li>
          <li><strong>Device Information:</strong> We collect basic device information (device type, operating system version, app version) for troubleshooting and improving the App.</li>
          <li><strong>Purchase Information:</strong> If you subscribe to SlowRead Pro, we receive notification of your purchase, renewal, and cancellation events from Apple App Store, Google Play Store, and RevenueCat. We do not receive or store your payment card information &mdash; that is handled entirely by Apple, Google, and the underlying payment processors. We store only the subscription status (active, expired, cancelled), the purchase date, and the renewal date so the App can show you the correct content tier.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <ul>
          <li>To provide and personalize your reading experience</li>
          <li>To track and display your reading streaks and progress</li>
          <li>To send push notifications (daily reading reminders), if you opt in</li>
          <li>To generate AI reading aids (story recap, character map, cultural context) when you request them</li>
          <li>To process subscriptions and keep your Pro entitlement in sync across devices</li>
          <li>To diagnose crashes and fix issues</li>
          <li>To understand which features are used so we can improve the App</li>
        </ul>

        <h2>3. Third-Party Services</h2>
        <p>We use the following third-party services:</p>
        <ul>
          <li><strong>Supabase:</strong> Cloud database and authentication infrastructure. Stores your account, reading progress, and preferences.</li>
          <li><strong>Apple Sign In / Google Sign In:</strong> Authentication providers. We only receive the information you choose to share through these services.</li>
          <li><strong>Anthropic (Claude):</strong> AI companion content generation. When you request AI-generated reading aids (story recap, character map, cultural context), we send the relevant passage text to Anthropic&rsquo;s API. We do not send your name, email, reading history, or any account identifier &mdash; passages are sent anonymously, keyed only by an opaque cache identifier.</li>
          <li><strong>RevenueCat:</strong> Subscription and in-app purchase management. Receives an anonymous user identifier and purchase events to keep your Pro entitlement in sync across devices. Does not receive your email or display name.</li>
          <li><strong>Sentry:</strong> Error tracking. Collects anonymous crash reports, error stack traces, and device metadata (model, OS version, app version) when something goes wrong, so we can fix it. Does not collect personal information by default.</li>
          <li><strong>PostHog:</strong> Anonymous usage analytics. Collects feature usage events keyed by an anonymous installation ID &mdash; no email, no display name. We use it to understand which screens are popular and where users get stuck.</li>
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
