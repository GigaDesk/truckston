import * as React from "react";
import Service1 from "./service1";
import Service2 from "./service2";
import { useState } from "react";
import Partners from "./partners";
import Insights from "./Insights";
import { Element } from "react-scroll";

export default function Main() {
  return (
    <div
      style={{ fontFamily: "Graphik" }}
      className="text-xl md:text-xxxl text-white bg-neutral-950 font-medium pt-48 px-12"
    >
      <Element name="do">
        Your trusted partner, for digital success
        <p className="text-lg pt-4 font-normal">
          Trust us to understand your unique needs. We deliver tailored,
          cutting-edge digital solutions that propel your business into the
          future. Our customer-centric approach ensures your success.
        </p>
        <Element name="platforms">
          <Service1
            name="Platforms"
            description="Transform your business with cutting-edge platforms. Our expert team designs, develops, and implements robust, scalable, and secure platforms tailored to your specific needs. From streaming services, enterprise resource planning (ERP) to customer relationship management (CRM), we deliver solutions that drive efficiency and innovation."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/m0gDeiygA8kGVT4Sx9wdl/1bffe09e8cd9a3a712c23d9ac4a47a28/4884230-uhd_3840_2160_30fps.mp4"
          />
        </Element>
        <Element name="security">
          <Service2
            name="Security"
            description="Protect your digital assets with our comprehensive security solutions. Our cybersecurity experts safeguard your systems, data, and networks from cyber threats. We offer a range of services, including threat detection, incident response, vulnerability assessment, and compliance consulting."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/2SlIFmuX3Xq2grNz2mQqAr/90eb11b1187bc8ddf3eb25d372c3f38b/6963744-hd_1920_1080_25fps.mp4"
          />
        </Element>
        <Element name="data">
          <Service1
            name="Data"
            description="Unlock the power of your data. Our data experts help you harness the value of your information assets. We provide data analytics, data engineering, and data science services to drive informed decision-making and optimize business processes."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/1pdY8vdpmhv5vyZrp3dXPk/4541049467e6e31afb1d68f11e569f32/3129671-uhd_3840_2160_30fps.mp4"
          />
        </Element>
        <Element name="seo">
          <Service2
            name="SEO"
            description="Boost your online visibility and attract more customers with our expert SEO services. Our SEO specialists optimize your website to improve search engine rankings and drive organic traffic. We help you achieve top search engine results and increase your brand's online presence."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/2rzMcrVSXZUdXGthmBdMXb/75a0eefd2745898ead347c546e1e5954/4549682-hd_1920_1080_30fps__1_.mp4"
          />
        </Element>
        <Element name="outsourcing">
          <Service1
            name="Outsourcing"
            description=" Extend your team and reduce costs with our flexible outsourcing solutions. Our skilled IT professionals provide a wide range of services, including application development, infrastructure management, and IT support. We deliver high-quality, cost-effective solutions to meet your business needs."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/57Sywu7mKtCBNbqvmROA41/5e385b9612e85fad33d4c7f17603f9cf/6804117-hd_2048_1080_25fps.mp4"
          />
        </Element>
        <Element name="cloud">
          <Service2
            name="Cloud"
            description="Embrace the power of the cloud with our comprehensive cloud solutions. Our cloud experts help you migrate to the cloud, optimize your cloud infrastructure, and leverage cloud-native technologies. We offer services for major cloud providers, including AWS, Azure, and Google Cloud Platform."
            video="https://videos.ctfassets.net/vjt7hlwnzx7i/3RhO7ZgITfsP3NBOMTXuHg/4ef76e71d15009e1d0d37d7aa8310246/1085656-hd_1920_1080_25fps.mp4"
          />
        </Element>
      </Element>
      <Element name="think">
        <div className="grid justify-items-center mt-52"> Our Insights </div>
        <Insights />
      </Element>
      <Element name="are">
        <div className="grid justify-items-center pt-20"> Our Partners </div>
        <Partners />
      </Element>
    </div>
  );
}
