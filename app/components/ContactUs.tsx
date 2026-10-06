"use client";

import Button from "@/components/Button";
import Select from "@/components/Select";
import TextArea from "@/components/TextArea";
import TextField from "@/components/TextField";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="mt-14 lg:mt-38.5 py-14 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-y-11"
    >
      <div className="space-y-6">
        <h2
          className="font-medium text-[46px] lg:text-[84px] leading-[120%] tracking-[-4%] text-white"
          data-reveal
        >
          What are you thinking?
        </h2>
        <p className="max-w-120 text-base lg:text-lg text-white" data-reveal>
          Tell us what you want to create, improve or figure out. Let&apos;s
          explore it together.
        </p>
        <a
          href="mailto:info@r8code.co.za"
          target="_blank"
          className="block w-fit font-medium text-[22px] lg:text-[26px] leading-[120%] underline text-white"
          data-reveal
        >
          info@r8code.co.za
        </a>
        <span className="text-sm leading-[145%] text-white" data-reveal>
          Centurion, South Africa
          <br />
          <a href="tel:+27120010495">+27 120 010 495</a>
        </span>
      </div>

      <form
        className="shrink-0 max-w-150 w-full space-y-5.5"
        onSubmit={(e) => e.preventDefault()}
        data-reveal
      >
        <TextField
          label="Your name"
          id="name"
          name="full_name"
          placeholder="Full name"
          required
        />
        <TextField
          type="email"
          label="Email address"
          id="email"
          name="email"
          placeholder="you@company.com"
          required
        />
        <Select
          options={[]}
          label="What can we help with?"
          id="email"
          name="email"
          placeholder="Select a service"
          required
        />
        <TextArea
          label="Tell us about your project"
          id="email"
          name="email"
          placeholder="A little about your idea, goals or challenge…"
          required
        />

        <Button className="w-full lg:w-47.5 mt-5.5 px-4.5 py-4.5 bg-white text-[15px] font-medium text-btn-secondary-text">
          Send Message
        </Button>
      </form>
    </section>
  );
}
