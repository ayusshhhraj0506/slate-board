import { cn } from '@/lib/utils';
import Image from 'next/image';

interface Feature {
  id: string;
  heading: string;
  label: string;
  description: string;
  image: string;
  url: string;
}

interface Feature13Props {
  title?: string;
  features?: Feature[];
  className?: string;
}

const Features = ({
  title = 'One Smart Workspace for Every Role',
  features = [
    {
      id: 'feature-1',
      heading: 'Designers Think Visually',
      label: 'FOR DESIGNERS',
      description:
        'Organize ideas, sketches, layouts, and feedback on one slate, keeping visual context, iterations, and creative decisions connected end to end.',
      image: '/images/Feature-Designer.png',
      url: 'https://shadcnblocks.com',
    },
    {
      id: 'feature-2',
      heading: 'Developers Build Clearly',
      label: 'FOR DEVELOPERS',
      description:
        'Organize logic, code notes, APIs, and architecture on one slate, keeping technical context, decisions, and documentation connected end to end.',
      image: '/images/Feature-Developer.png',
      url: 'https://shadcnblocks.com',
    },
    {
      id: 'feature-3',
      heading: 'Teachers Teach Clearly',
      label: 'FOR TUTORS / MENTORS',
      description:
        'Organize explanations, examples, diagrams, and lessons on one slate, keeping learning context, structure, and teaching flow connected end to end.',
      image: '/images/Feature-Tutor.png',
      url: 'https://shadcnblocks.com',
    },
    {
      id: 'feature-4',
      heading: 'Product Teams Align Better',
      label: 'FOR PRODUCT TEAM',
      description:
        'Organize requirements, discussions, roadmaps, and priorities on one slate, keeping product context, decisions, and execution aligned end to end.',
      image: '/images/Feature-Team.png',
      url: 'https://shadcnblocks.com',
    },
  ],
  className,
}: Feature13Props) => {
  return (
    <section className={cn('py-20 md:py-28 lg:py-32 font-mono', className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mx-auto mb-15 max-w-5xl text-center px-2">
            <h2 className="text-3xl font-medium text-pretty sm:text-4xl lg:text-5xl">
              {/* {title} */}
              One Smart Workspace for{' '}
              <span className="text-orange-600 font-bold tracking-tight">
                Every Role
              </span>
            </h2>
          </div>
        )}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="rounded-lg bg-muted overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-1 p-6 md:p-8">
                  <span className="font-mono text-xs text-orange-600">
                    {feature.label}
                  </span>
                  <a href={feature.url} className="block mt-3">
                    <h3 className="text-2xl transition-all text-neutral-900 hover:text-neutral-600 hover:opacity-80 sm:text-3xl lg:text-4xl">
                      {feature.heading}
                    </h3>
                  </a>
                </div>
                <div className="w-full md:w-1/3 shrink-0 ">
                  <a href={feature.url} className="block h-full">
                    <Image
                      src={feature.image}
                      alt={feature.heading}
                      width={500}
                      height={500}
                      className="h-44 w-full object-cover md:h-full rounded-bl-2xl border-t md:border-t-0 md:border-l border border-orange-600/50 transition-opacity"
                    />
                  </a>
                </div>
              </div>
              <p className="px-6 pb-6 md:px-8 md:pb-8 text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Features };
