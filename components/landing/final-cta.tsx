import { ActionButtons } from '@/components/landing/action-buttons';

export function FinalCTA() {
  return (
    <section
      id="download"
      className="scroll-mt-24 overflow-hidden bg-[#062B55] py-14 text-white sm:py-16"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
          Get MasterSuite Today — It&apos;s 100% Free!
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-[#DCEFFF] sm:text-lg">
          Give your school a complete management system for students, fees,
          attendance, reports, payroll, timetables and more.
        </p>
        <ActionButtons
          tone="dark"
          className="mx-auto mt-7 justify-center"
          downloadLabel="Download MasterSuite"
        />
      </div>
    </section>
  );
}
