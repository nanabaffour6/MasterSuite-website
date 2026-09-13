'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

const screenshots = [
  {
    title: 'Dashboard / Module Launcher',
    src: '/assets/screenshot-dashboard.webp',
    alt: 'MasterSuite dashboard and module launcher preview',
  },
  {
    title: 'Students',
    src: '/assets/screenshot-students.webp',
    alt: 'MasterSuite students screen preview',
  },
  {
    title: 'Fees & Finance',
    src: '/assets/screenshot-fees.webp',
    alt: 'MasterSuite fees and finance screen preview',
  },
  {
    title: 'Attendance',
    src: '/assets/screenshot-mobile-dashboard.webp',
    alt: 'MasterSuite attendance module preview from the supplied mobile reference',
    fit: 'contain',
  },
  {
    title: 'Reports',
    src: '/assets/screenshot-mobile-reports.webp',
    alt: 'MasterSuite reports module preview from the supplied mobile reference',
    fit: 'contain',
  },
  {
    title: 'Timetable',
    src: '/assets/master-suite-admin.webp',
    alt: 'MasterSuite administration tools preview from the supplied desktop reference',
  },
  {
    title: 'Administration',
    src: '/assets/master-suite-admin.webp',
    alt: 'MasterSuite administration screen preview',
  },
];

export function ScreenshotGallery() {
  return (
    <section
      id="screenshots"
      className="scroll-mt-24 overflow-hidden bg-[#EFF8FF] py-14 sm:py-18"
    >
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-extrabold uppercase text-[#1688E8]">
              See MasterSuite in Action
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#062B55] sm:text-4xl">
              A Closer Look at MasterSuite
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-[#526B85] sm:text-lg">
              A clean and familiar interface designed to help school
              administrators get things done quickly.
            </p>
          </div>

          <Carousel
            opts={{ align: 'start' }}
            className="min-w-0"
            aria-label="MasterSuite screenshots"
          >
            <CarouselContent className="-ml-3">
              {screenshots.map((screenshot) => (
                <CarouselItem
                  key={screenshot.title}
                  className="basis-[86%] pl-3 sm:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full rounded-[8px] border border-[#DCE8F3] bg-white py-0 shadow-[0_14px_34px_rgb(6_43_85/8%)] ring-0">
                    <CardContent className="p-3">
                      <div className="grid aspect-[16/10] place-items-center overflow-hidden rounded-[6px] bg-[#F8FBFF]">
                        <img
                          src={screenshot.src}
                          alt={screenshot.alt}
                          loading="lazy"
                          className={
                            screenshot.fit === 'contain'
                              ? 'h-full w-full object-contain'
                              : 'h-full w-full object-cover'
                          }
                        />
                      </div>
                      <h3 className="mt-3 text-sm font-extrabold text-[#062B55]">
                        {screenshot.title}
                      </h3>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 hidden border-[#DCE8F3] bg-white text-[#062B55] hover:bg-[#EFF8FF] lg:inline-flex" />
            <CarouselNext className="right-2 hidden border-[#DCE8F3] bg-white text-[#062B55] hover:bg-[#EFF8FF] lg:inline-flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
