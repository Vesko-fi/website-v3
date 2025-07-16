import { useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";

import { Button } from "../ui/button";
import { Text } from "../ui/text";

import i18n, { type SupportedLanguages } from "@/locales/i18n.config";
import { getLocalizedPath } from "@/routes/helpers/localization";

interface WaitlistFormProps {
  className?: string;
  buttonClassName?: string;
  inputClassName?: string;
  successMessage?: string;
  errorMessage?: string;
  placeholder?: string;
  buttonText?: string;
  loadingText?: string;
}

export const WaitlistForm = ({
  className = "",
  buttonClassName = "",
  inputClassName = "",
  successMessage,
  errorMessage,
  placeholder,
  buttonText,
  loadingText,
}: WaitlistFormProps) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error" | "invalid_email">(
    "idle"
  );

  const privacyPolicyPath = getLocalizedPath("privacyPolicy", i18n.language as SupportedLanguages);

  // Use provided props or fall back to translations
  const finalSuccessMessage = successMessage ?? t("home.cta.waitlist.successMessage");
  const finalErrorMessage = errorMessage ?? t("home.cta.waitlist.errorMessage");
  const finalPlaceholder = placeholder ?? t("home.cta.waitlist.placeholder");
  const finalButtonText = buttonText ?? t("home.cta.waitlist.buttonText");
  const finalLoadingText = loadingText ?? t("home.cta.waitlist.loadingText");

  console.log("API URL:", import.meta.env.VITE_GAS_URL_WAITLIST);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log("Submitting email:", trimmedEmail);

    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      setSubmitStatus("invalid_email");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    console.log("Submitting email:", trimmedEmail);
    console.log("API URL:", import.meta.env.VITE_GAS_URL_WAITLIST);

    try {
      const response = await fetch(import.meta.env.VITE_GAS_URL_WAITLIST, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email: trimmedEmail }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");

      setTimeout(() => {
        setEmail("");
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Waitlist submission failed:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => void handleSubmit(e)}
        className={`flex flex-col gap-4 sm:flex-row sm:items-start ${className}`}
      >
        <div className='flex-1'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={finalPlaceholder}
            className={`focus:ring-accent-500 w-full rounded-lg bg-white/10 px-4 py-3 text-white placeholder-gray-400 outline-1 outline-gray-400 focus:ring-2 focus:outline-none ${inputClassName}`}
            required
            aria-label='Email address'
            disabled={isSubmitting}
            aria-invalid={submitStatus === "error"}
            aria-describedby={submitStatus === "error" ? "email-error" : undefined}
          />
          {submitStatus === "error" && (
            <p id='email-error' className='mt-2 text-sm text-red-500'>
              {finalErrorMessage}
            </p>
          )}
          {submitStatus === "success" && (
            <p className='mt-2 text-sm text-green-500'>{finalSuccessMessage}</p>
          )}
        </div>
        <Button
          type='submit'
          disabled={isSubmitting}
          containerClassName={`bg-accent-500 hover:bg-accent-600 rounded-lg px-6 py-3 whitespace-nowrap sm:flex-shrink-0 ${buttonClassName}`}
          textClassName='text-white'
        >
          {isSubmitting ? finalLoadingText : finalButtonText}
        </Button>
      </form>
      <div className='mt-4 flex flex-row items-center justify-center gap-2 text-xs'>
        <Text className='text-white/80' variant='label'>
          By joining the waitlist, you agree to our
        </Text>
        <NavLink to={privacyPolicyPath} className='whitespace-nowrap text-white/80 underline'>
          {t("footer.privacyPolicy")}
        </NavLink>
      </div>
    </div>
  );
};
