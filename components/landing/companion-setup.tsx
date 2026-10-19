import { Monitor, Smartphone, QrCode, LogIn, ShieldCheck } from 'lucide-react';

const steps = [
  {
    title: 'Install the Desktop Host',
    icon: Monitor,
    body: 'Install the approved MasterSuite Desktop release on the school’s authorised Windows computer. Back up existing school data before upgrading.',
  },
  {
    title: 'Install the Android APK',
    icon: Smartphone,
    body: 'Download MasterSuite Companion using the official Android link and open the APK on your phone. A compatible MasterSuite Desktop Host is required.',
  },
  {
    title: 'Pair with your school',
    icon: QrCode,
    body: 'An authorised administrator opens MasterSuite Companion on Desktop and selects Pair New Device. On the phone, choose Scan QR Code. If scanning is unavailable, choose Enter Pairing Code and use the connection details supplied privately by your administrator.',
  },
  {
    title: 'Sign in to your account',
    icon: LogIn,
    body: 'Use the account assigned by your school. Keep the phone connected to the authorised school network while pairing and signing in.',
  },
  {
    title: 'Use your permitted features',
    icon: ShieldCheck,
    body: 'Sync the information your account is allowed to access. Check Sync Status and resolve pending changes or conflicts when reconnecting to the Host.',
  },
] as const;

export function CompanionSetup() {
  return (
    <section
      id="companion-setup"
      aria-labelledby="companion-setup-heading"
      className="scroll-mt-24 bg-white py-14 sm:py-18"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold uppercase text-[#35516F]">
            Getting Connected
          </p>
          <h2
            id="companion-setup-heading"
            className="mt-3 text-3xl font-black leading-tight text-[#062B55] sm:text-4xl"
          >
            Install. Pair. Sign in.
          </h2>
          <p className="mt-3 text-base leading-7 text-[#526B85]">
            Your school administrator controls Host access and device pairing.
          </p>
        </div>
        <ol className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ title, icon: Icon, body }, index) => (
            <li key={title} className="border-t border-[#DCE8F3] pt-5">
              <div className="flex items-center gap-3 text-[#35516F]">
                <Icon aria-hidden="true" className="size-5" />
                <span className="text-sm font-extrabold">Step {index + 1}</span>
              </div>
              <h3 className="mt-3 text-base font-extrabold text-[#062B55]">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#526B85]">{body}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 border-l-4 border-[#F5BC24] bg-[#F5FAFF] px-5 py-4">
          <h3 className="text-base font-extrabold text-[#062B55]">
            Installing an APK safely
          </h3>
          <p className="mt-2 text-sm leading-7 text-[#526B85]">
            If Android asks, allow APK installation only for the browser or
            Files app you used for this download, then turn that permission off
            afterward. Keep Play Protect and other security protections enabled.
            If Android reports a security concern, stop and contact support.
          </p>
        </div>
      </div>
    </section>
  );
}
