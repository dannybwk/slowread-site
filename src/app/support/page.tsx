import type { Metadata } from 'next';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Get help with SlowRead. Contact us for questions, feedback, or issues.',
  alternates: {
    canonical: 'https://slowread.xyz/support',
    languages: { 'zh-Hant': 'https://slowread.xyz/zh/support' },
  },
  openGraph: {
    title: 'Support — SlowRead',
    description: 'Get help with SlowRead. Contact us for questions, feedback, or issues.',
    url: 'https://slowread.xyz/support',
    images: [{ url: '/images/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary' },
};

export default function SupportPage() {
  return (
    <>
      <Header lang="en" />

      <main className="legal container">
        <h1>Support</h1>

        <h2>Contact Us</h2>
        <p>If you have questions, feedback, or need help with SlowRead, please reach out to us:</p>
        <p><a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a></p>
        <p>We typically respond within 1-2 business days.</p>

        <h2>Frequently Asked Questions</h2>

        <h3>How does SlowRead work?</h3>
        <p>SlowRead delivers one passage from a classic book each day. Read at your own pace, build a reading streak, and gradually complete entire works of classic literature.</p>

        <h3>How do I change the book I&rsquo;m reading?</h3>
        <p>Go to the Library tab to browse all available books. Tap on any book to start reading it. You can switch between books at any time.</p>

        <h3>What is bilingual mode?</h3>
        <p>Bilingual mode displays the original text alongside a translation, so you can enjoy the work in two languages side by side.</p>

        <h3>How do reading streaks work?</h3>
        <p>Complete your daily reading to maintain your streak. Your streak count increases for each consecutive day you read. Missing a day resets your streak to zero.</p>

        <h3>How do I delete my account?</h3>
        <p>To delete your account and all associated data, please email us at <a href="mailto:tplusstudio@gmail.com">tplusstudio@gmail.com</a>. We will process your request within 30 days.</p>

        <h3>Is SlowRead free?</h3>
        <p>SlowRead offers a free tier with daily reading access. SlowRead Pro unlocks additional features including the AI reading companion, unlimited bookmarks, and more.</p>
      </main>

      <Footer lang="en" />
    </>
  );
}
