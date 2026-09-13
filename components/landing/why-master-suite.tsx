import { Gift, MonitorCheck, School, Sparkles } from 'lucide-react';

const reasons = [
  {
    title: 'Works Offline',
    body: 'Runs on the school computer and does not depend on constant internet.',
    icon: MonitorCheck,
    tone: 'text-[#073762] bg-[#DCEFFF]',
  },
  {
    title: 'Built for Schools',
    body: 'Designed around real school administration workflows.',
    icon: School,
    tone: 'text-[#B98600] bg-[#FFF1C8]',
  },
  {
    title: 'Simple to Use',
    body: 'Clean and familiar interface for school staff.',
    icon: Sparkles,
    tone: 'text-[#087DE2] bg-[#EAF6FF]',
  },
  {
    title: 'Free',
    body: 'MasterSuite desktop software is free to use.',
    icon: Gift,
    tone: 'text-[#0A9D69] bg-[#E8FAF2]',
  },
];

export function WhyMasterSuite() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="rounded-[18px] bg-[#EFF8FF] p-5 sm:p-7 lg:p-8">
          <p className="text-center text-sm font-extrabold uppercase text-[#1688E8]">
            Why Choose MasterSuite
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <article
                  key={reason.title}
                  className="rounded-[8px] bg-white/65 p-4"
                >
                  <span
                    className={`grid size-12 place-items-center rounded-full ${reason.tone}`}
                  >
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-3 text-base font-extrabold text-[#062B55]">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-[#526B85]">
                    {reason.body}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
