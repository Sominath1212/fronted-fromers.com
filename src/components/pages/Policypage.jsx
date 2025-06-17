import React from "react";
import banner from "../../assets/images/background1.jpg";

const Policypage = () => {
  return (
    <section className="relative bg-[#c4f254] min-h-screen">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)] z-10 overflow-y-auto px-4 sm:px-8 md:px-20 py-10">
        <div className="text-white flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
            Privacy Policy
          </h2>

          <p className="text-base sm:text-lg mb-6 text-justify">
            At <span className="font-semibold text-[#c4f254]">Formers.com</span>
            , we value the privacy of our users and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data.
          </p>

          <div className="space-y-4 sm:space-y-6">
            {/* Section 1 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#c4f254]">
                1. Information We Collect
              </h3>
              <p className="mt-1 text-sm sm:text-base text-justify">
                We may collect personal information such as your name, email
                address, phone number, address, and product preferences when you
                register or place an order.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#c4f254]">
                2. How We Use Your Information
              </h3>
              <p className="mt-1 text-sm sm:text-base">
                Your information is used to:
              </p>
              <ul className="list-disc list-inside ml-4 mt-2 text-sm sm:text-base">
                <li>Process orders and deliver products</li>
                <li>Provide customer support</li>
                <li>Send updates and promotional offers</li>
                <li>Improve our website and services</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#c4f254]">
                3. Data Protection
              </h3>
              <p className="mt-1 text-sm sm:text-base text-justify">
                We implement appropriate security measures to protect your
                personal information from unauthorized access, disclosure, or
                alteration.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#c4f254]">
                4. Sharing of Information
              </h3>
              <p className="mt-1 text-sm sm:text-base text-justify">
                We do not sell or rent your personal data to third parties. We
                may share information with trusted service providers solely for
                order fulfillment and delivery purposes.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#c4f254]">
                5. Cookies
              </h3>
              <p className="mt-1 text-sm sm:text-base text-justify">
                We use cookies to enhance your browsing experience and to
                analyze site traffic. You can disable cookies in your browser
                settings if you prefer.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#c4f254]">
                6. Your Rights
              </h3>
              <p className="mt-1 text-sm sm:text-base text-justify">
                You have the right to access, correct, or delete your personal
                data. Contact us anytime to request these changes.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-[#c4f254]">
                7. Changes to This Policy
              </h3>
              <p className="mt-1 text-sm sm:text-base text-justify">
                We may update this Privacy Policy occasionally. Any changes will
                be posted on this page with an updated effective date.
              </p>
            </div>

            {/* Section 8 */}
            <div className="mt-6">
              <h3 className="text-lg sm:text-xl font-semibold text-[#c4f254]">
                8. Contact Us
              </h3>
              <p className="mt-1 text-sm sm:text-base text-justify">
                If you have any questions regarding this Privacy Policy, please
                contact us at:
                <br />
                <span className="font-medium">Email:</span> support@formers.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Policypage;
