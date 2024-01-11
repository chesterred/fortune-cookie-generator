"use client"

import CanvasWithText from "@/components/CanvasWithText";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { useState } from "react";

export default function Custom() {
    const [customText, setCustomText] = useState(""); // 新增状态用于存储用户输入
    const handleCustomTextChange = (e) => {
        setCustomText(e.target.value);
    }

    return (
        <div>
            <div className='format lg:format-lg  mx-auto mt-10 mb-5'>
                <h1 className='text-center'>Custom Fortune Cookie </h1>
            </div>
            <div className="flex flex-col items-center gap-2 not-format">
                <input
                    type="text"
                    value={customText}
                    onChange={handleCustomTextChange}
                    placeholder="Enter your custom message here"
                    className=" not-format mt-4 block w-full sm:w-1/5 outline-none rounded-lg border-0 py-2 pl-4  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 "
                />
                <div className="max-w-md">
                    <CanvasWithText backgroundImage="/opened-fortune-cookie.png" text={customText} width={1000} height={1000} />
                </div>
                <div className="flex flex-col  gap-2 ">

                    <Link href="/">
                        <button type="button" className="text-white bg-gray-600 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center me-2 mb-2"
                        >Back to generator
                        </button>
                    </Link>

                </div>
            </div>

            {/* 介绍 */}
            <div className='format mx-auto block mt-10  p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'>
                <h2 className='text-center'>Introduction</h2>
                <p>Welcome to <strong>Fortune Cookie Generator</strong>, your go-to destination for personalized, fun, and insightful fortune cookies! In this digital age, we are thrilled to present you with a unique and engaging experience that combines the charm of traditional fortune cookies with the wonders of modern technology.</p>
                <h3>What is a Fortune Cookie?</h3>
                <p>Fortune cookies are a delightful aspect of Chinese-American cuisine and have become a beloved symbol of good luck, wisdom, and anticipation. These crisp, golden cookies often hold a hidden message or prediction inside, providing a touch of mystery and intrigue to any meal. Whether you&#39;re enjoying them at your favorite Chinese restaurant or sharing them with friends and family, fortune cookies have a special place in our hearts.</p>
                <h3>What is Fortune Cookie Generator?</h3>
                <p>Fortune Cookie Generator takes this beloved tradition to the next level by offering you the opportunity to create your very own fortune cookies. We understand that everyone&#39;s journey in life is unique, and that&#39;s why our website is designed to generate personalized fortune cookies tailored to your specific fortune and destiny.</p>
                <h3>How Does Fortune Cookie Generator Work?</h3>
                <p>Fortune Cookie Generator is incredibly user-friendly. All you need to do is provide us with a few details, such as your name and birthdate. Based on this information, our advanced algorithm will analyze your fortune and generate a special message just for you. But that&#39;s not all! Each fortune cookie will also include a lucky number and an accompanying image to enhance the overall experience.</p>
                <h3>Why Is This Website Fun and Worth Visiting?</h3>
                <ol  >
                    <li><strong>Personalized Fortune Cookies</strong>: Our website offers a one-of-a-kind experience by creating fortune cookies that are uniquely yours. No more generic, mass-produced messages – your fortune cookie will reflect your individuality and personality.</li>
                    <li><strong>Insightful Predictions</strong>: We take fortune-telling seriously, and our algorithm is designed to provide you with insightful and thought-provoking predictions. Whether you&#39;re seeking advice, inspiration, or a simple smile, our fortune cookies have you covered.</li>
                    <li><strong>Entertainment and Fun</strong>: Fortune Cookie Generator is not just about predictions; it&#39;s also about having fun. Share your personalized fortune cookies with friends and family, and enjoy the laughter and conversation they bring.</li>
                    <li><strong>Positive Vibes and Luck</strong>: Who couldn&#39;t use a little extra luck and positivity in their lives? Our lucky numbers and uplifting messages are here to provide a dose of optimism and good fortune.</li>
                    <li><strong>Cultural Connection</strong>: Embrace the cultural richness of fortune cookies and learn more about their origins and significance. It&#39;s a wonderful way to appreciate Chinese-American heritage and traditions.</li>
                    <li><strong>User-Friendly Interface</strong>: We&#39;ve designed Fortune Cookie Generator with you in mind. Navigating our website is a breeze, and you&#39;ll have your personalized fortune cookie in no time.</li>
                    <li><strong>Shareable Content</strong>: Spread the joy by sharing your custom fortune cookies on social media, sending them as messages, or printing them out for special occasions.</li>

                </ol>
                <p>In conclusion, Fortune Cookie Generator is a unique and entertaining website that brings the joy of fortune cookies to the digital world. With personalized messages, insightful predictions, and a touch of luck, it offers a delightful and fun experience for users of all backgrounds. Whether you&#39;re seeking guidance or simply looking to brighten your day, we invite you to explore our website and discover the magic of personalized fortune cookies. Your destiny awaits – let&#39;s generate some fortune!</p>
                <h2 className='text-white bg-blue-700  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600  dark:focus:ring-blue-800'>Features and Benefits</h2>
                <h3>How Does the Website Work?</h3>
                <p>Our website operates on a unique and innovative premise that revolves around your individual fortune. Using cutting-edge Canvas API technology, our platform generates personalized Fortune Cookies right in your web browser, ensuring your data remains completely private. Unlike many other websites, we don&#39;t require you to upload any personal information, guaranteeing the utmost protection of your privacy.</p>
                <h3>Customize Your Fortune Cookie Messages</h3>
                <p>One of the standout features of our website is the ability to tailor your Fortune Cookie&#39;s message to suit your preferences. With our user-friendly interface, you can craft a custom message that resonates with your mood, needs, or desires. Once you&#39;re satisfied with your personalized message, our platform generates a visually appealing image that incorporates your text. This unique image can be easily downloaded in PNG format for your convenience.</p>
                <h3>Why Choose Our Website?</h3>
                <p>Here are some compelling reasons to make our website your go-to destination for Fortune Cookies:</p>
                <h4>1. Privacy First</h4>
                <p>Your privacy is our top priority. Unlike other platforms that may request personal information, we operate solely within your web browser, ensuring that no data is uploaded or stored. You can enjoy your personalized Fortune Cookies without any concerns about your privacy being compromised.</p>
                <h4>2. Easy Customization</h4>
                <p>Our intuitive interface allows you to create Fortune Cookie messages that resonate with you. Whether you&#39;re seeking inspiration, motivation, or a touch of humor, our customization options make it effortless to craft the perfect message for your Fortune Cookie.</p>
                <h4>3. Instant Gratification</h4>
                <p>Our website offers you the convenience of instant gratification, allowing you to get your personalized Fortune Cookie within moments of generating it.</p>
                <h4>4. Fun and Entertainment</h4>
                <p>Our platform adds an element of fun and entertainment to your online experience. It&#39;s not just about reading your fortune; it&#39;s about actively participating in the creation of your unique Fortune Cookie message and image.</p>
                <h4>5. Download and Share</h4>
                <p>Once you&#39;ve crafted your custom Fortune Cookie message and image, you can easily download it as a high-quality PNG file. This means you can save it for future reference, share it on social media, or send it to friends and family for a dose of inspiration or amusement.</p>
                <h4>6. No Account Required</h4>
                <p>We understand that not everyone wants to create an account or go through lengthy registration processes. That&#39;s why we&#39;ve designed our website to be accessible without any mandatory account creation. You can jump right in and start generating your personalized Fortune Cookies hassle-free.</p>
                <p>In conclusion, our website offers a unique and enjoyable experience, blending modern technology with traditional fortune-telling fun. With a focus on privacy, customization, and instant gratification, we&#39;re confident that you&#39;ll find our platform to be a delightful addition to your online repertoire. So why wait? Start creating your personalized Fortune Cookies today!</p>
                <h2 className='text-white bg-blue-700  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600  dark:focus:ring-blue-800'>User Experience and Interactivity</h2>
                <h3>How Do Users Interact with Our Website?</h3>
                <p>At our website, we prioritize delivering an engaging and interactive user experience. Whether you&#39;re a newcomer or a returning visitor, our platform offers a seamless and enjoyable journey. Let&#39;s explore the key components of your interaction with our website.</p>
                <h4>Fortune Cookie Generator Functionality:</h4>
                <ol  >
                    <li><strong>Open the Website:</strong> To begin your fortune-telling adventure, simply navigate to our website&#39;s homepage. Our user-friendly design ensures easy access for everyone.</li>
                    <li><strong>Click &quot;Generate Your Fortune Cookie&quot;:</strong> Once on the homepage, you&#39;ll find a prominent button labeled &quot;Generate Your Fortune Cookie.&quot; Clicking this button is your ticket to uncovering your personalized fortune.</li>
                    <li><strong>Instant Fortune Cookie:</strong> Immediately upon clicking, your Fortune Cookie will appear on the screen. It will feature a unique Fortune Cookie message and a string of six two-digit lucky numbers. Each message is carefully crafted to provide insight, inspiration, or simply a moment of delight.</li>
                    <li><strong>Generate Another:</strong> Our platform is all about variety and entertainment. If you&#39;d like to try your luck again or see different fortunes, simply click &quot;Generate Another.&quot; It&#39;s that easy to keep the fun going!</li>

                </ol>
                <h4>Custom Fortune Cookie Message Functionality:</h4>
                <ol  >
                    <li><strong>Access the Website:</strong> Just like with the Fortune Cookie Generator, you can access our website effortlessly.</li>
                    <li><strong>Click &quot;Custom Fortune Cookie Message&quot;:</strong> For those who seek a more personalized touch, click on the &quot;Custom Fortune Cookie Message&quot; button. This feature allows you to infuse your own words and lucky numbers into your Fortune Cookie.</li>
                    <li><strong>Input Your Text and Lucky Numbers:</strong> In the provided input fields, type in your chosen message and the lucky numbers you hold dear. This step gives you complete control over the content of your Fortune Cookie.</li>
                    <li><strong>Real-time Customization:</strong> As you input your text and numbers, watch in real-time as your custom Fortune Cookie image takes shape. The visual representation of your personalized message will appear instantly.</li>

                </ol>
                <h3>Why Choose Our Interactive Website?</h3>
                <p>Our website&#39;s emphasis on user experience and interactivity sets us apart. Here&#39;s why choosing our platform is a decision you won&#39;t regret:</p>
                <h4>1. Engaging and Entertaining</h4>
                <p>Our website is designed to entertain and engage users of all ages. Whether you&#39;re seeking guidance or simply a dose of amusement, our Fortune Cookie Generator and Custom Message features ensure there&#39;s never a dull moment.</p>
                <h4>2. Instant Gratification</h4>
                <p>With just a few clicks, you can access your personalized Fortune Cookie or craft a custom message. No waiting, no hassle—just instant gratification at your fingertips.</p>
                <h4>3. Endless Possibilities</h4>
                <p>Our website encourages exploration and experimentation. With the &quot;Generate Another&quot; option and the ability to create countless custom messages, the possibilities are endless. You can come back again and again to discover new insights and messages.</p>
                <h4>4. Personalization</h4>
                <p>We understand the value of personalization. Whether you prefer traditional fortunes or messages that reflect your own thoughts and feelings, our platform lets you tailor your experience to your liking.</p>
                <h4>5. User-Friendly</h4>
                <p>Navigating our website is a breeze. Our intuitive design ensures that users of all technical backgrounds can easily access and enjoy our features.</p>
                <p>In conclusion, our interactive website offers a delightful and personalized fortune-telling experience. With user-friendly navigation, real-time customization, and a variety of options, we&#39;re committed to bringing you moments of joy, inspiration, and entertainment. Join us on this exciting journey of discovery and create your personalized Fortune Cookie today!</p>
                <h2 className='text-white bg-blue-700  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600  dark:focus:ring-blue-800'>Unique Website Experience</h2>
                <h3>Experience the Uniqueness of Our Website</h3>
                <p>Welcome to our exceptional website, where we offer a truly one-of-a-kind experience that is simple, user-friendly, and lightning-fast. Our platform is designed with you in mind, providing an instant and accessible way to enjoy the world of Fortune Cookies. Let&#39;s delve into the extraordinary features and benefits that set us apart.</p>
                <h4>Simplicity and User-Friendliness</h4>
                <p>Our website&#39;s primary goal is to make your experience as straightforward and enjoyable as possible. We have created an intuitive interface that anyone, regardless of technical expertise, can navigate effortlessly. Whether you&#39;re a tech-savvy user or just starting your online journey, our platform welcomes you with open arms.</p>
                <h4>Real-time Fortune Cookie Generation</h4>
                <p>Imagine the excitement of receiving a Fortune Cookie with a personalized message and lucky numbers instantly. With our website, there&#39;s no need to wait or go through a cumbersome process. We have harnessed the power of modern technology to provide real-time Fortune Cookie generation. As soon as you visit our website, your Fortune Cookie is just a click away, ready to reveal its wisdom or whimsy.</p>
                <h4>Accessibility Across Devices</h4>
                <p>We understand that convenience is key in today&#39;s fast-paced world. That&#39;s why our website is accessible on a wide range of devices, including computers, laptops, tablets, and smartphones. Whether you prefer to explore your fortunes from the comfort of your home or while on the go, our platform is ready to accompany you. No matter the device, you can count on a seamless experience.</p>
                <h2 className='text-white bg-blue-700  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600  dark:focus:ring-blue-800'>Inspiration and Creative Background</h2>
                <h3>The Spark Behind This Website</h3>
                <p>Have you ever experienced a moment of unexpected inspiration that led to the creation of something truly unique? That&#39;s exactly how our website came into existence. Let&#39;s delve into the story of the inspiration behind this project and how it all began.</p>
                <h4>A Chance Encounter with a Lucky Fortune Cookie</h4>
                <p>It all started one evening at a Chinese restaurant when I received a Fortune Cookie at the end of my meal. As I cracked it open and read the message inside, something extraordinary happened. The words seemed to resonate with my current circumstances, offering a glimmer of hope and positivity. It was a simple message, but its impact was profound.</p>
                <h4>The Birth of an Idea</h4>
                <p>That chance encounter with a Fortune Cookie got me thinking—what if there was a way to share such moments of inspiration and luck with the world? What if I could create a platform that allows anyone to access personalized Fortune Cookies filled with messages that uplift and motivate?</p>
                <h2 className='text-white bg-blue-700  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600  dark:focus:ring-blue-800'>Fortune Cookie Generator: Frequently Asked Questions</h2>
                <h3>Common Questions</h3>
                <h4>What is Fortune Cookie Generator?</h4>
                <p>Fortune Cookie Generator is an innovative online tool that allows you to instantly generate personalized Fortune Cookies. It provides an enjoyable way to access customized Fortune Cookie messages and lucky numbers, delivering moments of inspiration, positivity, and fun at your fingertips.</p>
                <h4>How Do I Use It to Generate Fortune Cookies?</h4>
                <p>Using Fortune Cookie Generator is a simple and quick process:</p>
                <ol  >
                    <li><p><strong>Visit the Website:</strong> Start by going to the Fortune Cookie Generator website on any device with a web browser, whether it&#39;s your computer, laptop, tablet, or smartphone.</p>
                    </li>
                    <li><p><strong>Explore the Options:</strong> On the website, you&#39;ll find user-friendly options for generating your Fortune Cookies. You can either create a standard Fortune Cookie message or customize your own.</p>
                    </li>
                    <li><p><strong>Standard Fortune Cookie:</strong></p>
                        <ul>
                            <li>Click the &quot;Generate Your Fortune Cookie&quot; button.</li>
                            <li>Instantly, your personalized Fortune Cookie will appear on the screen, complete with a unique message and a set of lucky numbers.</li>
                            <li>If you want to generate another Fortune Cookie or see different fortunes, just click &quot;Generate Another.&quot;</li>

                        </ul>
                    </li>
                    <li><p><strong>Customized Fortune Cookie:</strong></p>
                        <ul>
                            <li>Click the &quot;Custom Fortune Cookie Message&quot; button.</li>
                            <li>In the input fields provided, type in your desired message and lucky numbers.</li>
                            <li>As you enter your text and numbers, watch in real-time as your custom Fortune Cookie image takes shape.</li>
                            <li>Your personalized Fortune Cookie, featuring your custom message, will be displayed instantly.</li>

                        </ul>
                    </li>

                </ol>
                <h3>How to Maximize Your Website Experience?</h3>
                <p>Wondering how to make the most of your visit to our website? Here are some tips to ensure you have a fantastic experience:</p>
                <ol  >
                    <li><strong>Explore Customization:</strong> Take advantage of our customization options. Whether you want to create a unique Fortune Cookie message or experiment with different lucky numbers, personalization adds a special touch to your experience.</li>
                    <li><strong>Generate Multiple Fortune Cookies:</strong> Don&#39;t stop at just one! Feel free to generate as many Fortune Cookies as you like. Each click reveals a new message, providing endless inspiration and entertainment.</li>
                    <li><strong>Share the Fun:</strong> Sharing is caring. Spread positivity by sharing your personalized Fortune Cookies with friends and family. It&#39;s a great way to brighten their day and create memorable moments.</li>

                </ol>
                <h3>Access and Support</h3>
                <h4>How to Access and Use the Website</h4>
                <p>Accessing and using our website is straightforward:</p>
                <ol  >
                    <li><strong>Visit the Website:</strong> Simply open your web browser on any device—be it your computer, laptop, tablet, or smartphone—and type in our website&#39;s address. You&#39;re just a click away from the world of Fortune Cookies.</li>

                </ol>
                <h4>How to Get Technical Support or Assistance</h4>
                <p>If you ever need technical support or assistance while using our website, here&#39;s what to do:</p>
                <ol  >
                    <li><strong>Check Help Documentation:</strong> Begin by exploring our comprehensive help documentation. It provides answers to common questions and offers guidance on using our platform effectively.</li>
                    <li><strong>Contact Us:</strong> If you still have questions or require further assistance, don&#39;t hesitate to reach out. You can contact us through the information provided on the contact page. We&#39;re here to help and ensure your experience is as delightful as possible.</li>

                </ol>
                <h2 className='text-white bg-blue-700  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600  dark:focus:ring-blue-800'>Future Development</h2>
                <h3>Planned New Features and Improvements</h3>
                <p>We are committed to enhancing your experience on our website. Here&#39;s what you can expect in our future development:</p>
                <ul>
                    <li><strong>Diverse Fortune Cookie Image Templates:</strong> We plan to expand our collection of Fortune Cookie image templates, offering you even more creative options to customize your Fortune Cookies. Get ready for a wider variety of designs to suit every occasion.</li>

                </ul>
                <h3>How User Feedback Shapes Our Future</h3>
                <p>Your feedback is invaluable to us. We take your suggestions seriously and use them to steer the future development of our website. Your input directly influences our efforts to optimize the site, introduce new features, and address any shortcomings.</p>
                <h2 className='text-white bg-blue-700  focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600  dark:focus:ring-blue-800'>Conclusion</h2>
                <h3>Potential Impact on Users&#39; Daily Life</h3>
                <p>Our website holds the potential to significantly impact your daily life in several meaningful ways:</p>
                <ul>
                    <li><strong>Instant Access to Fortune Cookies and Good Luck:</strong> We offer a quick and convenient way for users to access Fortune Cookies and good fortune. It&#39;s not just entertainment; it&#39;s a boost of positivity and inspiration.</li>
                    <li><strong>Encouragement of Positive and Optimistic Thinking:</strong> By engaging with our platform, you&#39;re encouraged to embrace a more positive and optimistic mindset. Fortune Cookies have a unique way of brightening your day and motivating you to face challenges with a smile.</li>

                </ul>
                <p>&nbsp;</p>

            </div>

        </div>

    )
}