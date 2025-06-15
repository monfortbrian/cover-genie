
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="w-full max-w-4xl mx-auto mt-20 mb-8 flex flex-col md:flex-row items-center gap-7 bg-white rounded-2xl shadow-xl px-5 md:px-12 py-10 border border-gray-100"
    >
      <img
        src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=thumb&w=380&q=80"
        alt="Job seeker illustration"
        className="w-full max-w-[200px] md:max-w-[260px] rounded-xl object-cover shadow bg-muted"
      />
      <div className="flex-1 flex flex-col items-start gap-3 md:ml-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-1 tracking-tight">
          Ready to land your dream job?
        </h2>
        <p className="text-base md:text-lg text-muted-foreground mb-2">
          Generate a personalized, professional cover letter in seconds. Stand out from the crowd and make every application count.
        </p>
        <Button
          asChild
          className="mt-2 rounded-lg px-7 py-3 text-base font-semibold bg-primary text-white hover:bg-primary/90"
        >
          <a href="#generate">Try it now</a>
        </Button>
      </div>
    </section>
  );
}
