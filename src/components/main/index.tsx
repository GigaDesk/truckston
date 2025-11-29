import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";
import { Element } from "react-scroll";
import Carousel from "./carousel";
import { Link } from "gatsby";
import Hero from "./hero";
import Faq from "./faq";

export default function Main() {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className="text-xl md:text-xxxl font-medium"
    >
      <Hero />
      <div className="mt-20 px-12">
        <Element name="do">
          What We Do
          <p className="text-lg pt-4 pb-8 font-normal">
            Royal Kings Transporters offers reliable translocation services of
            goods. We offer reliable, timely, secure and stress-free
            translocation services for your production line, industrial
            material, construction and household and office removals among other
            goods.
          </p>
          Our Services
          <Element name="platforms">
            <Service1
              name="Royal Full Load: Transportation of a single full capacity load"
              description="Your exclusive journey begins now. Dedicated truck capacity means a direct route with zero stops or transfers. Enjoy faster transit, maximum security, and minimal handling risk for your critical, high-volume cargo.
"
              video="https://videos.ctfassets.net/vjt7hlwnzx7i/4K7ewySPlPXYP972Bn0pYR/9a3a2122e1cb251877449b695b9bab61/6170064-uhd_3840_2160_25fps.mp4"
            />
          </Element>
          <Element name="security">
            <Service2
              name="Royal Consolidation: Co-transportation of goods from multiple clients to different destinations"
              description="Because more often most goods are small in size and cannot fill our trucks, we consolidate. Here, goods from different clients are co-transported to their respective destinations. Consequently, turnaround time would take a few more hours. To minimise this, and with our experience, we appropriately schedule to optimise our route plans.
Alternatively, if your goods will fill a truck i.e. a full load, with the remainder not able to fill another truck, we have a solution for you. The remainder can be consolidated and transported.
"
              video="https://videos.ctfassets.net/vjt7hlwnzx7i/4ueNmjMenmQeln7HPXpJpg/127464c2a42b779fde46204d88d8b5a9/5054381-uhd_2160_3840_30fps.mp4"
            />
          </Element>
          <Element name="data">
            <Service1
              name="Royal Express"
              description="Royal Express offers dedicated, direct transportation for a single client’s cargo, ensuring swift and secure delivery from one location to another. This premium service is ideal for full-capacity loads, as well as for specialized goods that cannot be consolidated with other shipments. We also provide this service for time-sensitive, non-full-capacity loads that require urgent delivery."
              video="https://videos.ctfassets.net/vjt7hlwnzx7i/4Nsl6YTeoeAo1KqB6p1u1S/18bffc9426f509228f542df1f52f111b/6169121-uhd_3840_2160_25fps.mp4"
            />
          </Element>
        </Element>
        <Element name="cargo">
          <Service2
            name="Royal Special"
            description="Royal Special is our custom solution for complex cargo. Trust our expertise to move your saloon cars, delicate glass, and heavy machinery with unrivaled security and tailored, white-glove logistics. Our customized transportation service provides the exact solution and equipment for your sensitive, high-value, and unique products. 
"
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/43flYOSniOEnN49553zhjG/a46fcef9b794d4a0401b29ee3cf4849e/6169614-uhd_3840_2160_25fps.mp4"
          />
        </Element>
        <Element name="">
          <div className="grid justify-items-center mt-52 mb-12">
            Cargo Transported
          </div>
          <div className="md:px-16 lg:px-32">
            <Carousel />
          </div>
        </Element>
        <Element name="think">
          <div className="grid justify-items-center mt-52 mb-12">
            {" "}
            Our Blog{" "}
          </div>
          <p className="text-base font-normal">
            Thinking about moving? Relocating your belongings, whether it's a
            few cherished items or an entire household, is a big step. The
            process can seem overwhelming, with so many things to consider—from
            keeping your items safe to making sure they arrive on time and
            without breaking the bank. We've put together a comprehensive guide
            to help you navigate the world of transportation. We'll walk you
            through the key factors to consider so you can make informed
            decisions, avoid common pitfalls, and ensure a smooth, worry-free
            move.{" "}
            <Link to="/blog">
              <span className="text-blue-700">Read More.</span>
            </Link>
          </p>
        </Element>
        <Element name="faq">
          <div className="pt-20"> Frequently Asked Questions</div>
          <Faq
            question="My items cannot fill a truck, what service is appropriate?"
            answer="If your items cannot fill a truck, items from different clients are consolidated for co-
transportation to the various destinations. Therefore, the appropriate service is Royal
Consolidation."
          />
          <Faq
            question="What is the cost of transporting my items?"
            answer="The cost of transportation services is determined by several interconnected factors, including the Volume (the physical space the items occupy) and Weight (due to truck limitations on gross and axle loads), as these impact truck capacity; the Distance between collection and delivery points, which dictates the fundamental operational costs; the Nature of Items, as special goods like glass or machinery may require non-stackable arrangements or specialized services; and the Logistics of collection and delivery, where multiple, dispersed stops increase route complexity and overall transit time and fuel usage."
          />
          <Faq
            question="How long will it take to deliver my items?"
            answer="For trans-country transportation which we are strong in, items will be delivered within 12 to
72 hours from collection. This turnaround time is however dictated by service sought, with
Royal consolidation taking longer as compared to Royal Special. Other factors such as
traffic jam may also delay delivery time."
          />
          <Faq
            question="Who is involved in packaging and/or loading?"
            answer="We prefer clients to package their items, though we can offer such services at a fee.
Further, our crew load our trucks for household items. For other goods like construction
materials amongst others, are loaded by the vendor but under guidance of our crew."
          />
          <Faq
            question="How should I package my items?"
            answer="We prefer you package your items accordingly, with fragile items well secured and all
clearly labeled. These could be in boxes, plastic containers and/or suitable packagings."
          />
          <Faq
            question="Who will collect the items?"
            answer="We collect items from your door step. Delivery to our yard can also be arranged."
          />
          <Faq
            question="Will you deliver to my destination?"
            answer="Our services are door-to-door delivery subject to road accessibility. If accessibility is
limited, together with the client we need an alternative delivery point and/or means for final
delivery. This cost should be incurred by the client."
          />
        </Element>
        <Element name="are">
          <div className="grid justify-items-center pt-20"> Who We Are </div>
          <p className="text-lg pt-4 font-normal">
            Royal Kings Transporters is a SmartCarrier involved in
            transportation of cargo within Kenya.
          </p>
          <div className="grid justify-items-center pt-20">Regions Covered</div>
          <p className="text-lg pt-4 font-normal">
            At present we are offering transportation services between Nairobi,
            Nakuru and Naivasha to Western Kenya including Kisumu, Homabay,
            Migori, Siaya, Kakamega, Busia, Vihiga and Bungoma counties.
          </p>
          <div className="grid justify-items-center pt-20">Why Choose Us</div>
          <p className="text-lg pt-4 font-normal">
            We understand the value of your cargo and time. And therefore we
            endeavour to preserve this by being:
            <ul className="list-disc pl-6">
              <li>Reliable</li>
              <li>Honest</li>
              <li>Timely</li>
              <li>Secure</li>
              <li>Customer Centered</li>
              <li>Innovative</li>
              <li>Together</li>
            </ul>
          </p>
        </Element>
      </div>
    </div>
  );
}
