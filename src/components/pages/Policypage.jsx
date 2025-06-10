import React from "react";

const Policypage = () => {
  return (
    <section className="bg-black py-12 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#c4f254] mb-6 text-center">
          Privacy Policy
        </h2>

        <p className="text-white mb-6">
          At <span className="font-semibold text-[#c4f254]">Formers.com</span>,
          we value the privacy of our users and are committed to protecting your
          personal information. This Privacy Policy explains how we collect,
          use, and safeguard your data.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-[#c4f254]">
              1. Information We Collect
            </h3>
            <p className="text-white mt-1">
              We may collect personal information such as your name, email
              address, phone number, address, and product preferences when you
              register or place an order.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#c4f254]">
              2. How We Use Your Information
            </h3>
            <p className="text-white mt-1">Your information is used to:</p>
            <ul className="list-disc list-inside text-white ml-4 mt-2">
              <li>Process orders and deliver products</li>
              <li>Provide customer support</li>
              <li>Send updates and promotional offers</li>
              <li>Improve our website and services</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#c4f254]">
              3. Data Protection
            </h3>
            <p className="text-white mt-1">
              We implement appropriate security measures to protect your
              personal information from unauthorized access, disclosure, or
              alteration.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#c4f254]">
              4. Sharing of Information
            </h3>
            <p className="text-white mt-1">
              We do not sell or rent your personal data to third parties. We may
              share information with trusted service providers solely for order
              fulfillment and delivery purposes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#c4f254]">5. Cookies</h3>
            <p className="text-white mt-1">
              We use cookies to enhance your browsing experience and to analyze
              site traffic. You can disable cookies in your browser settings if
              you prefer.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#c4f254]">
              6. Your Rights
            </h3>
            <p className="text-white mt-1">
              You have the right to access, correct, or delete your personal
              data. Contact us anytime to request these changes.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-[#c4f254]">
              7. Changes to This Policy
            </h3>
            <p className="text-white mt-1">
              We may update this Privacy Policy occasionally. Any changes will
              be posted on this page with an updated effective date.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold text-[#c4f254]">
              8. Contact Us
            </h3>
            <p className="text-white mt-1">
              If you have any questions regarding this Privacy Policy, please
              contact us at:
              <br />
              <span className="font-medium">Email:</span> support@formers.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policypage;
