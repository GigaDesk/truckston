import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";
import { Element } from "react-scroll";

export default function Main() {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className="text-xl md:text-xxxl text-white bg-neutral-950 font-medium pt-48 px-12"
    >
      <Element name="do">
        What We Do
        <p className="text-lg pt-4 pb-8 font-normal">
          Royal Kings Transporters offers reliable translocation services of
          goods. We offer reliable, timely, secure and stress-free translocation
          services for your production line, industrial material, construction
          and household and office removals among other goods.
        </p>
        How We Do It
        <p className="text-lg pt-4 pb-8 font-normal">
          As a SmartCarrier, were are dedicated to ensuring timely, damage-free
          and safe delivery of your goods. We collect and deliver safely your
          cargo to the destinations as instructed.
        </p>
        Our Services
        <Element name="platforms">
          <Service1
            name="RKT Translocation"
            description="RKT offers timely and efficient door-to-door transportation of general goods and middle size machines.

Transportation of General Goods including household goods, furniture, stationary, hardware, fabricated steel structures, farm produce and in puts amongst others.

Translocation of light machineries such as compressors, generators and construction mixers among others.

Flatbed Towing of middle sized vehicles - the service is for long distance translocations of small and mid sized vehicles.
"
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/m0gDeiygA8kGVT4Sx9wdl/1bffe09e8cd9a3a712c23d9ac4a47a28/4884230-uhd_3840_2160_30fps.mp4"
          />
        </Element>
        <Element name="security">
          <Service2
            name="RKT Consolidation"
            description="Because more often most goods are small in size and cannot fill our trucks, we consolidate. Here, goods from different clients are co-transported to their respective destinations. Consequently, turnaround time would take a few more hours. To minimise this, and with our experience, we appropriately schedule to optimise our route plans.
Alternatively, if your goods will fill a truck i.e. a full load, with the remainder not able to fill another truck, we have a solution for you. The remainder can be consolidated and transported.
"
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/2SlIFmuX3Xq2grNz2mQqAr/90eb11b1187bc8ddf3eb25d372c3f38b/6963744-hd_1920_1080_25fps.mp4"
          />
        </Element>
        <Element name="data">
          <Service1
            name="Royal Express"
            description="Royal express is an express translocation of single clients’ cargo from one location to another. The service is available for full capacity load, specialised goods that cannot be consolidates and in case of non full capacity loads that require urgent delivery."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/1pdY8vdpmhv5vyZrp3dXPk/4541049467e6e31afb1d68f11e569f32/3129671-uhd_3840_2160_30fps.mp4"
          />
        </Element>
      </Element>
      <Element name="think">
        <div className="grid justify-items-center mt-52 mb-12"> Our Blog </div>
        <p className="text-base font-normal">
          Thinking about moving? Relocating your belongings, whether it's a few
          cherished items or an entire household, is a big step. The process can
          seem overwhelming, with so many things to consider—from keeping your
          items safe to making sure they arrive on time and without breaking the
          bank. We've put together a comprehensive guide to help you navigate
          the world of transportation. We'll walk you through the key factors to
          consider so you can make informed decisions, avoid common pitfalls,
          and ensure a smooth, worry-free move. Read More.
        </p>
      </Element>
      <Element name="are">
        <div className="grid justify-items-center pt-20"> Who We Are </div>
        <p className="text-lg pt-4 font-normal">
          Royal Kings Transporters is a SmartCarrier involved in transportation
          of cargo within Kenya.
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
  );
}
