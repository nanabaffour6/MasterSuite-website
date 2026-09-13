'use client';

import * as React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from '@/components/ui/dialog';

const screenshots = [
  {
    title: 'Module Launcher',
    src: '/assets/mastersuite-module-launcher.png',
    alt: 'MasterSuite Module Launcher showing available school management modules',
    width: 1907,
    height: 841,
  },
  {
    title: 'Student Management',
    src: '/assets/mastersuite-student-management.png',
    alt: 'MasterSuite Student Management dashboard showing enrolment and class population',
    width: 1907,
    height: 966,
  },
  {
    title: 'Fees & Finance',
    src: '/assets/mastersuite-fees-finance.png',
    alt: 'MasterSuite Fees and Finance overview showing fee collection and financial management',
    width: 1902,
    height: 1006,
  },
  {
    title: 'Staff & Payroll',
    src: '/assets/mastersuite-staff-payroll.png',
    alt: 'MasterSuite Staff and Payroll overview showing payroll and staff management',
    width: 1905,
    height: 1010,
  },
];

export function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const activeScreenshot =
    activeIndex === null ? null : screenshots[activeIndex] ?? null;

  const showPrevious = React.useCallback(() => {
    setActiveIndex((index) =>
      index === null ? index : (index - 1 + screenshots.length) % screenshots.length,
    );
  }, []);

  const showNext = React.useCallback(() => {
    setActiveIndex((index) =>
      index === null ? index : (index + 1) % screenshots.length,
    );
  }, []);

  return (
    <>
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
                Explore the real MasterSuite interface used to manage students,
                finance, staff and day-to-day school administration.
              </p>
            </div>

            <Carousel
              opts={{ align: 'start' }}
              className="min-w-0"
              aria-label="MasterSuite screenshots"
            >
              <CarouselContent className="-ml-3">
                {screenshots.map((screenshot, index) => (
                  <CarouselItem
                    key={screenshot.title}
                    className="basis-[86%] pl-3 sm:basis-1/2 lg:basis-1/3"
                  >
                    <Card className="h-full rounded-[8px] border border-[#DCE8F3] bg-white py-0 shadow-[0_14px_34px_rgb(6_43_85/8%)] ring-0">
                      <CardContent className="p-3">
                        <button
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className="group grid aspect-[16/10] w-full place-items-center overflow-hidden rounded-[6px] bg-[#F8FBFF] outline-none focus-visible:ring-3 focus-visible:ring-[#1688E8]/45"
                          aria-label={`Open ${screenshot.title} screenshot`}
                        >
                          <img
                            src={screenshot.src}
                            alt={screenshot.alt}
                            loading="lazy"
                            width={screenshot.width}
                            height={screenshot.height}
                            className="h-full w-full object-contain transition duration-200 group-hover:scale-[1.02]"
                          />
                        </button>
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

      <Dialog
        open={activeIndex !== null}
        onOpenChange={(open) => {
          if (!open) setActiveIndex(null);
        }}
      >
        <DialogContent className="max-h-[calc(100vh-1.5rem)] max-w-[calc(100vw-1.5rem)] gap-3 overflow-hidden rounded-[10px] border border-white/20 bg-white p-3 shadow-[0_28px_80px_rgb(0_0_0/28%)] sm:max-w-[min(94vw,1320px)]">
          <div className="flex items-center justify-between gap-3 pr-10">
            <div>
              <DialogTitle
                data-lightbox-title
                className="text-base font-extrabold text-[#062B55] sm:text-lg"
              >
                {activeScreenshot?.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                Large MasterSuite product screenshot. Use previous and next
                buttons to inspect the gallery.
              </DialogDescription>
            </div>
          </div>

          <div className="relative grid max-h-[calc(100vh-7.5rem)] min-h-[220px] place-items-center overflow-hidden rounded-[8px] bg-[#EEF3F8]">
            {activeScreenshot ? (
              <img
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                width={activeScreenshot.width}
                height={activeScreenshot.height}
                className="max-h-[calc(100vh-7.5rem)] w-auto max-w-full object-contain"
              />
            ) : null}

            <Button
              type="button"
              size="icon-lg"
              variant="outline"
              onClick={showPrevious}
              aria-label="Show previous screenshot"
              className="absolute left-2 top-1/2 size-11 -translate-y-1/2 rounded-full border-white/80 bg-white/90 text-[#062B55] shadow-md hover:bg-white focus-visible:ring-[#1688E8]"
            >
              <ChevronLeft aria-hidden="true" />
            </Button>
            <Button
              type="button"
              size="icon-lg"
              variant="outline"
              onClick={showNext}
              aria-label="Show next screenshot"
              className="absolute right-2 top-1/2 size-11 -translate-y-1/2 rounded-full border-white/80 bg-white/90 text-[#062B55] shadow-md hover:bg-white focus-visible:ring-[#1688E8]"
            >
              <ChevronRight aria-hidden="true" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
