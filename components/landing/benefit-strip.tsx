import { Gift, School, UsersRound, WifiOff } from 'lucide-react';

import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    title: 'Free to Use',
    body: 'Full features at no cost. No hidden software fees.',
    icon: Gift,
    tone: 'text-[#073762] bg-[#DCEFFF]',
  },
  {
    title: 'Works Offline',
    body: 'Runs on your local computer. No constant internet required.',
    icon: WifiOff,
    tone: 'text-[#073762] bg-[#DCEFFF]',
  },
  {
    title: 'Multi-User',
    body: 'Create accounts for staff with role-based access.',
    icon: UsersRound,
    tone: 'text-[#073762] bg-[#DCEFFF]',
  },
  {
    title: 'Built for Schools',
    body: 'Designed specifically for real school administration.',
    icon: School,
    tone: 'text-[#B98600] bg-[#FFF1C8]',
  },
];

export function BenefitStrip() {
  return (
    <section aria-label="MasterSuite quick benefits" className="bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-4 pb-8 sm:px-6 lg:px-8">
        <div className="grid gap-px overflow-hidden rounded-[8px] border border-[#DCE8F3] bg-[#DCE8F3] shadow-[0_16px_36px_rgb(6_43_85/7%)] sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={benefit.title}
                className="rounded-none border-0 bg-[#F5FAFF] py-0 ring-0"
              >
                <CardContent className="flex min-h-32 items-center gap-4 p-5">
                  <span
                    className={`grid size-14 shrink-0 place-items-center rounded-full ${benefit.tone}`}
                  >
                    <Icon aria-hidden="true" className="size-7" />
                  </span>
                  <div>
                    <h2 className="text-base font-extrabold text-[#062B55]">
                      {benefit.title}
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-[#526B85]">
                      {benefit.body}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
