"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardFive from '@/components/sections/feature/FeatureCardFive';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardThree from '@/components/sections/team/TeamCardThree';
import TestimonialCardFour from '@/components/sections/testimonial/TestimonialCardFour';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Grape, Wine, UserCheck, Utensils, Sparkles, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="large"
      sizing="small"
      background="dotGrid"
      cardStyle="gradient-bordered"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="solid"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          brandName="Wine Tours"
          navItems={[
            { name: "Home", id: "hero" },
            { name: "Tours", id: "tours" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners 
          title="Discover the World of Fine Wine"
          description="Experience guided excursions through prestigious vineyards and wine regions with expert sommeliers. Taste exceptional wines and immerse yourself in the art of winemaking."
          tag="Premium Wine Tours"
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/vineyard-landscape-wine-grapes-1764603007396-f4d80939.jpg", imageAlt: "vineyard landscape wine grapes" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wine-tasting-cellar-barrel-1764603008906-7c5f277a.jpg", imageAlt: "wine tasting cellar barrel" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wine-harvest-workers-vineyard-1764603010471-5553a999.jpg", imageAlt: "wine harvest workers vineyard" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wine-glass-sunset-vineyard-1764603011979-0cf398e8.jpg", imageAlt: "wine glass sunset vineyard" }
          ]}
          buttons={[
            { text: "Explore Tours", href: "tours" },
            { text: "Book Now", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout 
          title="We craft unforgettable wine experiences through passion, expertise, and a deep appreciation for the vineyard traditions that define exceptional wines worldwide."
          buttons={[
            { text: "Learn Our Story", href: "#" },
            { text: "Join a Tour", href: "contact" }
          ]}
        />
      </div>

      <div id="tours" data-section="tours">
        <FeatureCardFive 
          title="Featured Wine Experiences"
          description="Each tour is carefully curated to showcase the finest wineries and educational wine tasting experiences"
          tag="Tour Categories"
          features={[
            { title: "Vineyard Tours", icon: Grape },
            { title: "Wine Tasting", icon: Wine },
            { title: "Sommelier Guidance", icon: UserCheck },
            { title: "Food Pairings", icon: Utensils }
          ]}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="four-items-2x2-equal-grid"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree 
          title="Wine Tour Packages"
          description="Choose the perfect wine experience for your level of expertise and interests"
          tag="Pricing"
          plans={[
            {
              id: "1",
              price: "$150",
              name: "Introductory Tasting",
              buttons: [
                { text: "Book Now" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Half-day tour",
                "3-4 wineries",
                "Basic wine education",
                "Light snacks included"
              ]
            },
            {
              id: "2",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$320",
              name: "Classic Wine Tour",
              buttons: [
                { text: "Book Now" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Full-day experience",
                "5-6 premium wineries",
                "Expert sommelier guide",
                "Gourmet lunch included",
                "Wine education workshop"
              ]
            },
            {
              id: "3",
              price: "$550",
              name: "Premium Connoisseur",
              buttons: [
                { text: "Book Now" },
                { text: "Learn More", href: "#" }
              ],
              features: [
                "Two-day exclusive tour",
                "Limited-production wines",
                "Private sommelier",
                "Fine dining experiences",
                "Vineyard owner meetings",
                "Sommelier certification option"
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardThree 
          title="Meet Our Expert Guides"
          description="Passionate sommeliers and wine experts dedicated to sharing their knowledge and love for wine"
          tag="Our Team"
          members={[
            {
              id: "1",
              name: "Guillaume Marchand",
              role: "Master Sommelier",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/professional-sommelier-wine-expert-1764603016418-e9fde165.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "2",
              name: "Elena Rossi",
              role: "Wine Expert & Educator",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wine-guide-expert-sommelier-1764603017927-386cc982.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "3",
              name: "François Durand",
              role: "Winemaker & Historian",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wine-tour-guide-professional-1764603019508-83d874eb.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            },
            {
              id: "4",
              name: "Isabella Moretti",
              role: "Tour Guide & Connoisseur",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/winemaker-wine-expert-1764603021014-df440968.jpg",
              socialLinks: [
                { icon: Linkedin, url: "https://linkedin.com" }
              ]
            }
          ]}
          textboxLayout="default"
          animationType="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFour 
          title="What Wine Enthusiasts Say"
          description="Hear from guests who have experienced our premium wine tours"
          tag="Client Reviews"
          testimonials={[
            {
              id: "1",
              name: "Margaret Thompson",
              role: "Wine Collector",
              company: "San Francisco, CA",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/happy-wine-tasting-customer-1764603022256-e0ff9400.jpg"
            },
            {
              id: "2",
              name: "Robert Chen",
              role: "Restaurant Owner",
              company: "New York, NY",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wine-tour-group-enjoying-1764603023745-06d504d6.jpg"
            },
            {
              id: "3",
              name: "Sophie Laurent",
              role: "Wine Blogger",
              company: "Paris, France",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wine-enthusiast-tasting-1764603025010-522817a1.jpg"
            },
            {
              id: "4",
              name: "David Martinez",
              role: "Hospitality Professional",
              company: "Barcelona, Spain",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/wine-lovers-vineyard-tour-1764603026534-fc7d4d8f.jpg"
            }
          ]}
          textboxLayout="default"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText 
          sideTitle="Wine Tour Questions"
          sideDescription="Find answers to common questions about our wine excursions and experiences"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What is included in the wine tours?",
              content: "Our tours include guided vineyard visits, professional sommelier guidance, wine tastings at multiple wineries, and meals. Premium packages also include accommodation and special winery experiences."
            },
            {
              id: "2",
              title: "Do I need wine experience to join a tour?",
              content: "Not at all. Our Introductory Tasting package is perfect for beginners. Our sommeliers teach at every level, from complete novices to experienced connoisseurs."
            },
            {
              id: "3",
              title: "What is the best season to visit?",
              content: "Each season offers unique experiences. Spring features flower blooms, summer offers harvest festivals, fall showcases foliage and harvest season, and winter provides intimate wine cave experiences."
            },
            {
              id: "4",
              title: "Can you accommodate dietary restrictions?",
              content: "Yes, we can accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please inform us when booking your tour."
            },
            {
              id: "5",
              title: "What is the group size for tours?",
              content: "Tours typically include 8-12 guests for our Classic Wine Tour and can be customized for private groups. Premium Connoisseur tours are limited to 4-6 guests."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit 
          tag="Get In Touch"
          title="Plan Your Wine Adventure"
          description="Subscribe to our newsletter for tour updates, wine recommendations, and exclusive offers from our sommelier team."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SgGlSmvaVv2SYOkECykbr8Q49/tmp/vineyard-landscape-scenic-view-1764603027952-126de27c.jpg"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase 
          logoText="Wine Tours"
          copyrightText="© 2025 Wine Tours | Premium Vineyard Experiences"
          columns={[
            {
              title: "Explore",
              items: [
                { label: "Home", href: "hero" },
                { label: "Tours", href: "tours" },
                { label: "Pricing", href: "pricing" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Our Team", href: "team" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              title: "Legal",
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}