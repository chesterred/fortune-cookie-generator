import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Terms() {
    return (
        <div>
            <div className="format mx-auto my-10">
                <h1>Terms of Use</h1>
                <p>Last Updated: January 9, 2024</p>

                <h2>1. Acceptance of Terms</h2>
                <p>By accessing or using the Fortune Cookie Generator (FCG) website at <Link href="https://fortunecookiegenerator.com">https://fortunecookiegenerator.com</Link>, you agree to be bound by these Terms of Use (&quot;Terms&quot;).</p>

                <h2>2. Service Description</h2>
                <p>FCG provides a platform for generating personalized fortune cookie messages. These services include, but are not limited to, custom message generation and sharing of fortune cookie messages.</p>

                <h2>3. Ownership of Generated Content</h2>
                <p>The ownership of messages generated on FCG belongs to the creator of the message. FCG reserves the right to use these messages for promotional or operational purposes.</p>

                <h2>4. Collection of User Data</h2>
                <p>We collect personal data such as name, email address, and preferences for the provision of our services. For detailed information, refer to our Privacy Policy at <a href="https://fortunecookiegenerator.com/privacy">https://fortunecookiegenerator.com/privacy</a>.</p>

                <h2>5. Non-Personal Data Collection</h2>
                <p>FCG uses web cookies for functionality and analytics purposes. These cookies do not collect personal information.</p>

                <h2>6. Governing Law</h2>
                <p>These Terms are governed by the laws of the country where FCG operates.</p>

                <h2>7. Updates to the Terms</h2>
                <p>FCG reserves the right to modify these Terms. Users will be notified of any changes via the website or email.</p>

                <h2>8. Contact Information</h2>
                <p>For inquiries or assistance, please contact us at <a href="mailto:hello@fortunecookiegenerator.com">hello@fortunecookiegenerator.com</a>.</p>

                <h2>9. Acknowledgment</h2>
                <p>Your use of the FCG website constitutes your acknowledgment and acceptance of these Terms.</p>

            </div>

        </div>
    )
}