
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const initialState = {
  name: "",
  email: "",
  company: "",
  role: "",
  details: ""
};

export default function CoverLetterForm() {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Placeholder for API request. We'll call the backend here later.
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Cover letter generation coming soon!",
        description:
          "Your personalized cover letter will be generated here after we connect our backend.",
      });
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-10 flex flex-col gap-6 border border-gray-100"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="block text-base text-gray-800 font-medium">
          Full Name
        </label>
        <Input
          autoFocus
          name="name"
          id="name"
          placeholder="e.g. Jane Doe"
          value={form.name}
          onChange={handleChange}
          className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition text-[16px] py-3 px-4 rounded-lg"
          required
          maxLength={50}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="block text-base text-gray-800 font-medium">
          Email Address
        </label>
        <Input
          name="email"
          id="email"
          type="email"
          placeholder="e.g. jane.doe@email.com"
          value={form.email}
          onChange={handleChange}
          className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition text-[16px] py-3 px-4 rounded-lg"
          required
          maxLength={100}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="company" className="block text-base text-gray-800 font-medium">
          Company
        </label>
        <Input
          name="company"
          id="company"
          placeholder="e.g. OpenAI"
          value={form.company}
          onChange={handleChange}
          className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition text-[16px] py-3 px-4 rounded-lg"
          required
          maxLength={50}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="role" className="block text-base text-gray-800 font-medium">
          Role or Job Title
        </label>
        <Input
          name="role"
          id="role"
          placeholder="e.g. Product Manager"
          value={form.role}
          onChange={handleChange}
          className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition text-[16px] py-3 px-4 rounded-lg"
          required
          maxLength={60}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="details" className="block text-base text-gray-800 font-medium">
          Additional Details <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <Textarea
          name="details"
          id="details"
          placeholder="Anything you'd like us to know, your experience, or job requirements..."
          value={form.details}
          onChange={handleChange}
          className="bg-gray-50 border-2 border-gray-200 focus:border-primary focus:bg-white transition resize-none text-[16px] py-3 px-4 rounded-lg min-h-[90px]"
          maxLength={300}
          rows={3}
        />
      </div>
      <Button
        type="submit"
        className="mt-4 w-full py-4 text-lg rounded-xl bg-primary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
        disabled={loading}
      >
        {loading ? (
          <>
            <Loader2 className="animate-spin" size={22}/>
            Generating...
          </>
        ) : "Generate my cover letter"}
      </Button>
    </form>
  );
}
