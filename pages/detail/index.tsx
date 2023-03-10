import { FC, useContext } from "react";
import ModalBase from "@/components/modal/modal";
import ImageLogoSVG from "@/public/imageLogo";
import Head from "next/head";
import { useState } from "react";
import DateLogo from "@/public/dateLogo";
import TimeLogo from "@/public/time";
import LocationLogon from "@/public/locationLogo";
import CostLogo from "@/public/costLogo";
import CapacityLogo from "@/public/capacityLogo";
import { PrivacyData, TagData, listBanner } from "@/utils/mockUp_data";
import valid from "@/utils/valid/valid";
import { DataContext } from "@/utils/store/golobalState";
import { postData } from "@/utils/service";

interface Iprops {
  props: any;
}

const DetailSocial: FC<Iprops> = (props: any) => {
  return (
    <div className="home_page">
      <Head>
        <title>Create Social</title>
      </Head>

      <section className="row text-secondary my-4">
        {/* Social left */}
        <div className="col-md-5">
          {/* Social left head*/}
          <div className="container-social-left">
            <div className="container-detai-textleft mb-5">
              <p className="container-detail-text">
                <span>Web3 Founders & Designers Mixer + fireside</span>
                <span>
                  chat with Coinbase Senior Designer & Airfoil founder
                </span>
              </p>
            </div>

            {/* startAt */}
            <div className="row mb-1">
              <div className="col">
                <div className="social-date-time">
                  <DateLogo />
                  <p className="detai-text-datetime">October 11, Web</p>
                </div>
              </div>

              <div className="col">
                <div className="social-date-time">
                  <TimeLogo />
                  <p className="detai-text-datetime">7 PM</p>
                </div>
              </div>
            </div>

            {/* venue */}
            <div className="row">
              <div className="col">
                <div className="social-date-time">
                  <LocationLogon />
                  <p className="detai-text-vanue">
                    Chelsea Market (163 W 20nd Street). Manhattan, NYC
                  </p>
                </div>
              </div>
            </div>

            {/* capacity */}
            <div className="row">
              <div className="col">
                <div className="social-date-time mb-3">
                  <CapacityLogo />
                  <p className="detai-text-vanue">50 people</p>
                </div>
              </div>

              {/* price */}
              <div className="col">
                <div className="social-date-time mb-3">
                  <CostLogo />
                  <p className="detai-text-vanue">$30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social left bottom*/}
          <div className="row mt-5">
            {/* description */}
            <div className="container-detai-decription">
              <div className="mb-3">
                <p>
                  Calling all web3 founders and designers for an exciting night
                  of exchanging ideas and making new friends! Come make friends
                  with fellow designers and founders in web3. There will also be
                  lots of insights to be gained through an intimate chat +Q&A
                  with two giants in the industry:
                </p>
                <p>
                  Phil Hedayatnia, Founder & CEO of Airfoil, a growth design
                  studio that has designed and built products in web3, the
                  creator economy, the future of work, and much more for 80+
                  startups since 2018
                </p>
                <p>
                  Jihoon Suh, Senior Product Designer at Coinbase, who was
                  previously Senior Product Designer for Messenger for Meta.
                  This will be a curated group with limited spots, so do sign up
                  early!
                </p>
                <p>
                  Airfoil Studio is the design, branding, and engineering team
                  helping web3 take flight. As one of crypto’s first large-scale
                  design firms, our mission is to design a friendlier financial
                  layer for the internet. We’re a team of 85+ creatives, working
                  from Airfoil’s hubs in Toronto, Singapore, and Seoul, who’ve
                  worked on 100+ projects since 2018, including Solana Pay,
                  Drift Protocol, Bonfida Solana Name Service, Utopia Labs,
                  Planetarium, Layer3.xyz, MarginFi, Hyperspace, VBA Game, and
                  more.
                </p>
                <p>Learn more about Airfoil and our work at airfoil.studio.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social right */}
        <div className="col-md-7 mb-5">
            <img
              className="container-detail-banner"
              src={listBanner[0]?.url}
              alt={listBanner[0]?.url}
            />
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps() {
  // server side rendering
  return {
    props: {
      listBanner: listBanner,
    }, // will be passed to the page component as props
  };
}

export default DetailSocial;
