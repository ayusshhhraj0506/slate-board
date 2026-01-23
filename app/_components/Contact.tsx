import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

import { cn } from '@/lib/utils';

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
  className?: string;
}

const Contact = ({
  title = 'Contact Us',
  description = 'Contact the support team at Shadcnblocks.',
  emailLabel = 'Email',
  emailDescription = 'I respond to all emails within 24 hours.',
  email = 'ayushraj.0506@gmail.com',
  officeLabel = 'Office',
  officeDescription = 'Drop by our place for a chat.',
  officeAddress = 'Noida, Uttar Pradesh',
  phoneLabel = 'Phone',
  phoneDescription = "I'm available Mon-Fri, 9am-5pm.",
  phone = '+91 7014-128-141',
  chatLabel = 'Live Chat',
  chatDescription = 'Get instant help from our so called one member team.',
  chatLink = 'Drop a "HI" on WhatsApp!',
  className,
}: Contact7Props) => {
  return (
    <section className={cn('bg-balck py-32 lg:px-30 font-mono p-4', className)}>
      <div className="container">
        <div className="mb-14">
          <h1 className="mt-2 mb-3 text-3xl text-orange-600 font-semibold text-balance md:text-5xl">
            {title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-neutral-800 p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-orange-600">
              <Mail className="h-6 w-auto text-white" />
            </span>
            <p className="mb-2 text-lg font-semibold">{emailLabel}</p>
            <p className="mb-3 text-muted-foreground">{emailDescription}</p>
            <a
              href={`mailto:${email}`}
              className="font-semibold text-orange-600 hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="rounded-lg bg-neutral-800 p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-orange-600">
              <MapPin className="h-6 w-auto text-white" />
            </span>
            <p className="mb-2 text-lg font-semibold">{officeLabel}</p>
            <p className="mb-3 text-muted-foreground">{officeDescription}</p>
            <a
              href="#"
              className="font-semibold text-orange-600 hover:underline"
            >
              {officeAddress}
            </a>
          </div>
          <div className="rounded-lg bg-neutral-800 p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-orange-600">
              <Phone className="h-6 w-auto text-white" />
            </span>
            <p className="mb-2 text-lg font-semibold">{phoneLabel}</p>
            <p className="mb-3 text-muted-foreground">{phoneDescription}</p>
            <a
              href={`tel:${phone}`}
              className="font-semibold text-orange-600  hover:underline"
            >
              {phone}
            </a>
          </div>
          <div className="rounded-lg bg-neutral-800 p-6">
            <span className="mb-3 flex size-12 flex-col items-center justify-center rounded-full bg-orange-600">
              <MessageCircle className="h-6 w-auto text-white" />
            </span>
            <p className="mb-2 text-lg font-semibold">{chatLabel}</p>
            <p className="mb-3 text-muted-foreground">{chatDescription}</p>
            <a
              href="#"
              className="font-semibold text-orange-600  hover:underline"
            >
              {chatLink}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
