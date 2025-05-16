import React from 'react';
import Container from './ui/Container';
import { BackgroundLines } from './ui/background-lines';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';

const links = [
  {
    icon: IconMail,
    text: 'ronaldocreis7@gmail.com',
    link: 'mailto:ronaldocreis7@gmail.com',
  },
  {
    icon: IconPhone,
    text: '+55 11 94329-8766',
    link: 'https://wa.me/5511943298766',
  },
  {
    icon: IconBrandLinkedin,
    text: 'in/ronaldocreis',
    link: 'https://www.linkedin.com/in/ronaldocreis',
  },
  {
    icon: IconBrandGithub,
    text: 'ronaldocreis',
    link: 'https://www.github.com/ronaldocreis',
  },
];

const Contact = () => {
  return (
    <section className="pb-40">
      <Container>
        <h2 className="text-4xl mt-60 font-semibold opacity-95 text-center">
          Get in Touch
        </h2>
        <h3 className="text-xl opacity-75 text-center mb-4">
          Let me know how I can help you
        </h3>
        <ul className="flex flex-col gap-4 items-stretch max-w-sm mx-auto">
          {links.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-200 hover:-translate-y-1 transition-transform"
            >
              <li
                key={link.text}
                className="bg-neutral-900 rounded-lg border border-neutral-800 opacity-90 p-4 flex gap-2 justify-center"
              >
                <link.icon />

                {link.text}
              </li>
            </a>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Contact;
