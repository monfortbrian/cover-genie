import React from "react";
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
  const [generatedLetter, setGeneratedLetter] = useState("");
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setGeneratedLetter(""); // Clear previous result

    const webhookUrl = "https://lets-automate.up.railway.app/webhook/fa9800de-8e5f-4282-9b58-0d087a8553ed";

    try {
      console.log("Sending form data to webhook:", form);
      
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role,
          details: form.details,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Received response:", data);
        
        if (data.output) {
          setGeneratedLetter(data.output);
          toast({
            title: "Success!",
            description: "Your cover letter has been generated successfully!",
          });
        } else {
          toast({
            title: "Success!",
            description: "Your cover letter is being generated. You'll receive it via email shortly.",
          });
        }
        setForm(initialState); // Reset form
      } else {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-6">
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

      {/* Display Generated Cover Letter */}
      {generatedLetter && (
        <div className="w-full bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">The Cover Letter</h3>
          <div className="prose max-w-none">
            <pre className="whitespace-pre-wrap text-gray-700 leading-relaxed font-sans text-base">
              {generatedLetter}
            </pre>
          </div>
          <div className="mt-6 flex gap-4">
            <Button
              onClick={() => navigator.clipboard.writeText(generatedLetter)}
              variant="outline"
              className="flex items-center gap-2"
            >
              Copy to Clipboard
            </Button>
            <Button
              onClick={() => setGeneratedLetter("")}
              variant="outline"
              className="flex items-center gap-2"
            >
              Clear
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}