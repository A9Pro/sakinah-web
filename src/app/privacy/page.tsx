import Link from 'next/link'

export default function Privacy() {
  return (
    <main className="min-h-screen py-20 px-6" style={{ background: '#0D0F1E' }}>
      <div className="max-w-2xl mx-auto">

        <Link href="/" className="text-sm tracking-widest uppercase mb-12 block"
          style={{ color: 'rgba(201,168,74,0.6)' }}>
          ← Back to Sakinah
        </Link>

        <div className="text-center mb-16">
          <div className="text-6xl mb-2" style={{ color: '#C9A84A', fontFamily: 'serif' }}>سكينة</div>
          <div className="text-xs tracking-widest uppercase mb-2" style={{ color: 'rgba(232,213,183,0.5)' }}>Sakinah</div>
          <div className="text-xs tracking-widest uppercase" style={{ color: 'rgba(201,168,74,0.5)' }}>Privacy Policy</div>
        </div>

        <div className="p-6 rounded-2xl mb-8" style={{ background: 'rgba(201,168,74,0.06)', border: '1px solid rgba(201,168,74,0.2)' }}>
          <p style={{ color: 'rgba(232,213,183,0.8)', fontSize: '15px', lineHeight: '1.8' }}>
            <strong style={{ color: '#C9A84A' }}>Summary:</strong> Sakinah does not collect, store,
            or share any personal data on external servers. Everything stays on your device.
          </p>
        </div>

        {[
          {
            title: '1. Introduction',
            content: 'Sakinah is a dhikr counter and prayer reminder application for Android. This Privacy Policy explains how we handle information when you use our App. By using Sakinah, you agree to the practices described in this policy.'
          },
          {
            title: '2. Information We Collect',
            content: 'Sakinah does not collect any personal information. We do not collect your name, email, device identifiers, usage analytics, or any data transmitted over the internet.'
          },
          {
            title: '3. Location Data',
            content: 'Sakinah requests access to your device location solely to calculate accurate prayer times. Location data is processed entirely on your device, never transmitted to any server, and stored only locally as coordinates. You may choose to manually enter your city instead.'
          },
          {
            title: '4. Data Stored Locally',
            content: 'The following is stored only on your device: selected dhikr and goal settings, prayer time reminder preferences, location coordinates, and dhikr session history. This data is deleted when you uninstall the app.'
          },
          {
            title: '5. Third-Party Services',
            content: 'Sakinah does not integrate any third-party analytics, advertising, or tracking services. No SDKs that collect data are included.'
          },
          {
            title: '6. Children\'s Privacy',
            content: 'Sakinah does not knowingly collect any information from children under 13. The app contains no user accounts, no data collection, and no online features.'
          },
          {
            title: '7. Contact',
            content: 'If you have questions about this Privacy Policy, contact us at: sakinahapp@gmail.com'
          },
        ].map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="text-xs tracking-widest uppercase mb-4" style={{ color: '#C9A84A' }}>
              {section.title}
            </h2>
            <p style={{ color: 'rgba(232,213,183,0.7)', fontSize: '15px', lineHeight: '1.8' }}>
              {section.content}
            </p>
          </div>
        ))}

        <div className="text-center mt-16 pt-8" style={{ borderTop: '1px solid rgba(201,168,74,0.1)' }}>
          <p className="text-xs tracking-widest uppercase" style={{ color: 'rgba(232,213,183,0.25)' }}>
            Last updated: February 2026
          </p>
        </div>

      </div>
    </main>
  )
}