import { ActionButtons } from '@/components/landing/action-buttons';
import {
  CurrentReleaseCard,
  UpgradeNotice,
} from '@/components/landing/release-info';

export function FinalCTA() {
  return (
    <section
      id="download"
      className="scroll-mt-24 overflow-hidden bg-[#062B55] py-14 text-white sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
          MasterSuite Desktop Is 100% Free
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#DCEFFF] sm:text-lg">
          Run your school on Windows and connect authorised Android users with
          MasterSuite Companion. Choose your download below.
        </p>
        <CurrentReleaseCard />
        <ActionButtons
          tone="dark"
          className="mx-auto mt-7 max-w-xl items-center [&>div]:justify-center"
        />
        <p className="mt-4 text-sm leading-6 text-[#DCEFFF]">
          Android APK · Preview/testing release · Compatible school Host
          required
        </p>
        <UpgradeNotice />
      </div>
    </section>
  );
}
