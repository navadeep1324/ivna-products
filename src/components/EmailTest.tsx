import { useState } from "react";
import emailjs from "@emailjs/browser";

const EmailTest = () => {
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendTestEmail = async () => {
    setIsSending(true);
    setStatus("");
    
    try {
      // EmailJS credentials
      const serviceId = "service_tbpfice";
      const templateId = "template_aqh02hz";
      const publicKey = "UePQCdV_XSDHOPjoO";
      
      // Prepare test email template parameters
      const templateParams = {
        from_name: "Test User",
        from_email: "test@example.com",
        phone: "+1234567890",
        company: "Test Company",
        message: "This is a test email from the contact form.",
        schedule_demo: "No demo scheduled",
        to_email: "sodham@kleza.io"
      };
      
      const response = await emailjs.send(serviceId, templateId, templateParams);
      console.log("Test email sent successfully!", response.status, response.text);
      setStatus("Test email sent successfully!");
    } catch (error) {
      console.error("Failed to send test email:", error);
      setStatus("Failed to send test email. Check console for details.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Email Functionality Test</h3>
      <p className="mb-4">Click the button below to send a test email.</p>
      <button
        onClick={sendTestEmail}
        disabled={isSending}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {isSending ? "Sending..." : "Send Test Email"}
      </button>
      {status && <p className="mt-2 text-sm">{status}</p>}
    </div>
  );
};

export default EmailTest;