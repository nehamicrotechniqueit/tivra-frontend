import './globals.css';
import { AuthProvider } from '@/context/AuthContext';

export const metadata = {
  title: 'TIVRA CRM - AI Dashboard Node',
  description: 'Connect Engage Perform',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F8FAFC] antialiased">
        {/* Provider must be placed here at the root level */}
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}