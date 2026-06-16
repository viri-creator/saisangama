import svgPaths from "./svg-wjt6hpgeka";
import imgImageWithFallback from "./24e100746e02154c606e491738f5fc78d01cbc49.png";
import imgImageWithFallback1 from "./8d0623db6d6e290f1c97f541c7c8ea9376f99f56.png";
import imgImageWithFallback2 from "./0d6d6a912928681dbe7f76a5fa80fd55c2064ce7.png";
import imgContainer from "./19b6acf7664ba094f4d6d1f64c8359132f8e1f14.png";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_21_1244)" id="Icon" opacity="0.782901">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_21_1244">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-[397.4px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[0] left-0 not-italic text-[0px] text-white top-[-1.8px] whitespace-nowrap">
          <span className="leading-[24px] text-[16px]">{`Emergency Hotline: `}</span>
          <span className="font-['Inter:Bold',sans-serif] font-bold leading-[24px] text-[16px]">+91 80 2626 2626</span>
          <span className="leading-[24px] text-[16px]">{` | Available 24/7`}</span>
        </p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M12 4L4 12" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M4 4L12 12" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute left-[1122px] rounded-[13421800px] size-[24px] top-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center justify-center max-w-[inherit] relative size-full">
        <Icon />
        <Paragraph />
        <Button />
      </div>
    </div>
  );
}

function EmergencyBanner() {
  return (
    <div className="bg-gradient-to-r from-[#e7000b] relative shrink-0 to-[#c10007] w-full" data-name="EmergencyBanner">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[8px] relative size-full">
        <Container />
      </div>
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[48px] relative shrink-0 w-[181.438px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Text() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[26px] w-0" data-name="Text" />;
}

function Link() {
  return (
    <div className="h-[24px] relative shrink-0 w-[43.994px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1.8px] whitespace-nowrap">Home</p>
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[26px] w-0" data-name="Text" />;
}

function Link1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[45.056px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1.8px] whitespace-nowrap">About</p>
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[26px] w-0" data-name="Text" />;
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[58.994px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1.8px] whitespace-nowrap">Services</p>
        <Text2 />
      </div>
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[26px] w-0" data-name="Text" />;
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.719px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1.8px] whitespace-nowrap">Doctors</p>
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[26px] w-0" data-name="Text" />;
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[56.269px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[#364153] text-[16px] top-[-1.8px] whitespace-nowrap">Contact</p>
        <Text4 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-gradient-to-r from-[#00b8db] h-[44px] relative rounded-[10px] shrink-0 to-[#155dfc] w-[186.238px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[93.5px] not-italic text-[16px] text-center text-white top-[8.2px] whitespace-nowrap">Book Appointment</p>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[32px] items-center relative size-full">
        <Link />
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Button1 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[80px] relative shrink-0 w-[1178px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between px-[32px] relative size-full">
        <ImageWithFallback />
        <Navigation />
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.1)] relative shrink-0 w-full" data-name="Header">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[0.8px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.8px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[63.6px] left-0 top-[58px] w-[169.2px]" data-name="Text">
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#00b8db] leading-[60px] left-0 not-italic text-[48px] text-[transparent] to-[#155dfc] top-[-1px] whitespace-nowrap">Priority</p>
    </div>
  );
}

function InlineContent() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[60px] left-0 not-italic text-[#101828] text-[48px] top-[-3px] whitespace-nowrap">{`Your Health, Our `}</p>
        <Text5 />
      </div>
    </div>
  );
}

function Container4() {
  return <div className="bg-gradient-to-r from-[#00b8db] h-[4px] relative rounded-[13421800px] shadow-[0px_0px_7.16px_0px_#06b6d4,0px_0px_14.32px_0px_#06b6d4,0px_0px_12.959px_0px_rgba(37,99,235,0.43)] shrink-0 to-[#155dfc] w-[128px]" data-name="Container" />;
}

function ContainerMargin() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container4 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 1">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <InlineContent />
        <ContainerMargin />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[29.25px] not-italic relative shrink-0 text-[#4a5565] text-[18px] w-[533px]">Providing compassionate, world-class medical care with state-of-the-art facilities and experienced healthcare professionals dedicated to your wellbeing.</p>
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M10 10H6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p67fd620} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p18afcd00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 8V12" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18H15" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p13934880} id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p1ff3c700} id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[44px] relative shrink-0 w-[210.5px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Emergency Care</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[28px] relative shrink-0 w-[210.5px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#ecfeff] text-[14px] whitespace-nowrap">24/7 emergency services</p>
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[128.688px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-0 not-italic text-[16px] text-white top-[-1.8px] whitespace-nowrap">+91 80 2626 2626</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[4px] relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[40px] relative shrink-0 w-[210.5px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[16px] relative size-full">
        <Text6 />
        <IconMargin />
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] flex flex-col items-start left-0 p-[24px] rounded-[16px] top-[16px] w-[258.5px]" style={{ backgroundImage: "linear-gradient(141.178deg, rgb(0, 184, 219) 0%, rgb(0, 146, 184) 100%)" }} data-name="Button">
      <Container6 />
      <Heading2 />
      <Paragraph2 />
      <Container7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M8 2V6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 2V6" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p32f12c00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 10H21" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] relative rounded-[14px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[44px] relative shrink-0 w-[211px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">Online Appointment</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[28px] relative shrink-0 w-[211px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[8px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[#dbeafe] text-[14px] whitespace-nowrap">Book your visit in minutes</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[104px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[-0.02px] not-italic text-[16px] text-white top-[-1.7px] whitespace-nowrap">Schedule Now</p>
      </div>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin1() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pl-[4px] relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[40px] relative shrink-0 w-[211px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center pt-[16px] relative size-full">
        <Text7 />
        <IconMargin1 />
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch drop-shadow-[0px_20px_12.5px_rgba(0,0,0,0.1),0px_8px_5px_rgba(0,0,0,0.1)] flex flex-col items-start left-[274.25px] p-[24px] rounded-[16px] top-[16px] w-[259px]" style={{ backgroundImage: "linear-gradient(141.232deg, rgb(20, 71, 230) 0%, rgb(25, 60, 184) 100%)" }} data-name="Button">
      <Container8 />
      <Heading3 />
      <Paragraph3 />
      <Container9 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[224px] relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
    </div>
  );
}

function ContainerMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[32px] relative size-full">
        <Container5 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[533px]" data-name="Container">
      <Heading />
      <Paragraph1 />
      <ContainerMargin1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[400px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[rgba(255,255,255,0)] h-[400px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] size-full">
        <ImageWithFallback1 />
      </div>
    </div>
  );
}

function Container12() {
  return <div className="absolute bg-[#00b8db] blur-[40px] left-[453px] opacity-78 rounded-[13421800px] size-[96px] top-[-15.88px]" data-name="Container" />;
}

function Container13() {
  return <div className="absolute bg-[#00d3f3] blur-[24px] left-[-48px] opacity-10 rounded-[13421800px] size-[80px] top-[197.3px]" data-name="Container" />;
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[581px] top-[57.88px] w-[533px]" data-name="Container">
      <Container11 />
      <Container12 />
      <Container13 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[515.75px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container10 />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="h-[707.75px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(149.002deg, rgb(249, 250, 251) 0%, rgb(239, 246, 255) 100%)" }} data-name="Section">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[32px] py-[96px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[399.75px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex flex-col h-[399.75px] items-start left-0 overflow-clip rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[3.13px] w-[533px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[72.925px]" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-0 not-italic text-[#0092b8] text-[14px] top-[0.2px] tracking-[0.7px] uppercase whitespace-nowrap">About Us</p>
    </div>
  );
}

function InlineContent1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container18 />
      </div>
    </div>
  );
}

function InlineContent2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Bold',sans-serif] font-bold leading-[40px] left-0 not-italic text-[#101828] text-[36px] top-[-2px] whitespace-nowrap">Welcome to SaiSangama</p>
      </div>
    </div>
  );
}

function Container19() {
  return <div className="bg-gradient-to-r from-[#00b8db] h-[4px] relative rounded-[13421800px] shrink-0 to-[#155dfc] w-[96px]" data-name="Container" />;
}

function ContainerMargin2() {
  return (
    <div className="relative shrink-0" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <Container19 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <InlineContent2 />
        <ContainerMargin2 />
      </div>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[533px]">For over 50 years, we have been committed to providing exceptional healthcare services to our community. Our team of dedicated healthcare professionals combines cutting-edge medical technology with compassionate care to ensure the best outcomes for our patients.</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[533px]">From routine checkups to complex surgical procedures, we offer comprehensive medical services across multiple specialties, all under one roof. Your health and wellbeing are at the heart of everything we do.</p>
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M7.5 15L12.5 10L7.5 5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#1447e6] content-stretch flex gap-[8px] h-[48px] items-center left-0 px-[32px] py-[12px] rounded-[10px] top-0" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Learn More</p>
      <Icon6 />
    </div>
  );
}

function InlineContent3() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Button4 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[581px] top-0 w-[533px]" data-name="Container">
      <InlineContent1 />
      <Heading1 />
      <Paragraph4 />
      <Paragraph5 />
      <InlineContent3 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[406px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <Container15 />
      </div>
    </div>
  );
}

function Container20() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 opacity-50 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[#00b8db] w-[1178px]" data-name="Container" />;
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <Container14 />
        <Container20 />
      </div>
    </div>
  );
}

function InlineContent4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[557.41px] not-italic text-[#0092b8] text-[14px] text-center top-[0.2px] tracking-[0.7px] uppercase whitespace-nowrap">Why Choose Us</p>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[1114px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#101828] text-[36px] text-center whitespace-nowrap">Learn What is Best For U</p>
      </div>
    </div>
  );
}

function Container23() {
  return <div className="bg-gradient-to-r from-[#00b8db] h-[4px] relative rounded-[13421800px] shrink-0 to-[#155dfc] w-[1114px]" data-name="Container" />;
}

function ContainerMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <InlineContent4 />
        <Heading4 />
        <ContainerMargin3 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p2b3c4500} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p31eb3600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M32 22L36 26L44 18" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center relative rounded-[13421800px] shrink-0 size-[96px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 146, 184) 0%, rgb(20, 71, 230) 100%)" }} data-name="Container">
      <Icon7 />
    </div>
  );
}

function ContainerMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container26 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="relative shrink-0 w-[254.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[12px] pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] text-center w-[255px]">Healthcare with Human touch</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start left-0 p-[32.8px] rounded-[16px] top-0 w-[320px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ContainerMargin5 />
      <Heading5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p28f1080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d={svgPaths.p1c511500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 22H32" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 32H32" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M16 22H16.02" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M16 32H16.02" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center relative rounded-[13421800px] shrink-0 size-[96px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 146, 184) 0%, rgb(20, 71, 230) 100%)" }} data-name="Container">
      <Icon8 />
    </div>
  );
}

function ContainerMargin6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container28 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-[254.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[12px] pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] text-center w-[255px]">Expert Consultancy and Diagnostics</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col items-start left-[352px] p-[32.8px] rounded-[16px] top-0 w-[320px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ContainerMargin6 />
      <Heading6 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p1f337080} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          <path d="M24 12V24L32 28" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex items-center justify-center relative rounded-[13421800px] shrink-0 size-[96px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(0, 146, 184) 0%, rgb(20, 71, 230) 100%)" }} data-name="Container">
      <Icon9 />
    </div>
  );
}

function ContainerMargin7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <Container30 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[64px] relative shrink-0 w-[254.4px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[12px] pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] text-center whitespace-nowrap">Immediate Care facility</p>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_10px_7.5px_rgba(0,0,0,0.1),0px_4px_3px_rgba(0,0,0,0.1)] flex flex-col h-[253px] items-start left-[704px] p-[32.8px] rounded-[16px] top-[0.45px] w-[320px]" data-name="Container">
      <div aria-hidden className="absolute border-[#f3f4f6] border-[0.8px] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <ContainerMargin7 />
      <Heading7 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[253.6px] max-w-[1024px] relative shrink-0 w-[1024px]" data-name="Container">
      <Container25 />
      <Container27 />
      <Container29 />
    </div>
  );
}

function ContainerMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[64px] relative size-full">
        <Container24 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <Container22 />
        <ContainerMargin4 />
      </div>
    </div>
  );
}

function Container31() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 opacity-50 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[#2b7fff] w-[1178px]" data-name="Container" />;
}

function Section2() {
  return (
    <div className="bg-gradient-to-b from-[#f9fafb] relative shrink-0 to-white w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <Container21 />
        <Container31 />
      </div>
    </div>
  );
}

function InlineContent5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[20px] left-[557.19px] not-italic text-[#0092b8] text-[14px] text-center top-[0.2px] tracking-[0.7px] uppercase whitespace-nowrap">Our Services</p>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[56px] relative shrink-0 w-[1114px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[16px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[#101828] text-[36px] text-center whitespace-nowrap">Comprehensive Medical Care</p>
      </div>
    </div>
  );
}

function Container34() {
  return <div className="bg-gradient-to-r from-[#00b8db] h-[4px] relative rounded-[13421800px] shrink-0 to-[#155dfc] w-[1114px]" data-name="Container" />;
}

function ContainerMargin8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative size-full">
        <Container34 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <InlineContent5 />
        <Heading8 />
        <ContainerMargin8 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M11.6667 11.6667H7" id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p12cc5000} id="Vector_2" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2550cf00} id="Vector_3" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 9.33333V14" id="Vector_4" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M10.5 21H17.5" id="Vector_5" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pa689e00} id="Vector_6" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p26ea4300} id="Vector_7" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container37() {
  return (
    <div className="bg-[#cefafe] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[52px] relative shrink-0 w-[282px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">Emergency Care</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[282px]">24/7 emergency services with rapid response teams and state-of-the-art trauma care facilities.</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[34px] rounded-[16px] top-0 w-[350px]" style={{ backgroundImage: "linear-gradient(142.765deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container37 />
      <Heading9 />
      <Paragraph6 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3dc88f80} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[52px] relative shrink-0 w-[282px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">Primary Care</p>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[282px]">Comprehensive primary care services including preventive care, checkups, and chronic disease management.</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[382px] p-[34px] rounded-[16px] top-0 w-[350px]" style={{ backgroundImage: "linear-gradient(140.162deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container39 />
      <Heading10 />
      <Paragraph7 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3012a800} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[#cefafe] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[52px] relative shrink-0 w-[282px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">Cardiology</p>
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[282px]">Advanced cardiac care with leading cardiologists and cutting-edge diagnostic technology.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[764px] p-[34px] rounded-[16px] top-0 w-[350px]" style={{ backgroundImage: "linear-gradient(142.765deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container41 />
      <Heading11 />
      <Paragraph8 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M12.8333 2.33333V4.66667" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M5.83333 2.33333V4.66667" id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2f8c2cf0} id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p297aa280} id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p9404480} id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container43() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[52px] relative shrink-0 w-[282px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">General Medicine</p>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[282px]">Expert diagnosis and treatment for a wide range of medical conditions and illnesses.</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 p-[34px] rounded-[16px] top-[298px] w-[350px]" style={{ backgroundImage: "linear-gradient(142.765deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container43 />
      <Heading12 />
      <Paragraph9 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p35802300} id="Vector" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2c7af00} id="Vector_2" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 12.8333H18.6667" id="Vector_3" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 18.6667H18.6667" id="Vector_4" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 12.8333H9.345" id="Vector_5" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 18.6667H9.345" id="Vector_6" stroke="var(--stroke-0, #0092B8)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#cefafe] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[52px] relative shrink-0 w-[282px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">Laboratory</p>
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[282px]">Comprehensive diagnostic testing with rapid results and advanced laboratory equipment.</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[382px] p-[34px] rounded-[16px] top-[298px] w-[350px]" style={{ backgroundImage: "linear-gradient(142.765deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container45 />
      <Heading13 />
      <Paragraph10 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1dcc0100} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container47() {
  return (
    <div className="bg-[#dbeafe] relative rounded-[14px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[52px] relative shrink-0 w-[282px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#101828] text-[20px] whitespace-nowrap">Pediatrics</p>
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#4a5565] text-[16px] w-[282px]">Specialized care for infants, children, and adolescents with experienced pediatricians.</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[764px] p-[34px] rounded-[16px] top-[298px] w-[350px]" style={{ backgroundImage: "linear-gradient(142.765deg, rgb(255, 255, 255) 0%, rgb(249, 250, 251) 100%)" }} data-name="Container">
      <div aria-hidden className="absolute border-2 border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Container47 />
      <Heading14 />
      <Paragraph11 />
    </div>
  );
}

function Container35() {
  return (
    <div className="h-[564px] relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container38 />
      <Container40 />
      <Container42 />
      <Container44 />
      <Container46 />
    </div>
  );
}

function ContainerMargin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[64px] relative size-full">
        <Container35 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-w-[inherit] px-[32px] relative size-full">
        <Container33 />
        <ContainerMargin9 />
      </div>
    </div>
  );
}

function Container48() {
  return <div className="absolute bg-gradient-to-r from-[rgba(0,0,0,0)] h-px left-0 opacity-50 to-[rgba(0,0,0,0)] top-0 via-1/2 via-[#00b8db] w-[1178px]" data-name="Container" />;
}

function Section3() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start py-[80px] relative size-full">
        <Container32 />
        <Container48 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute h-[352px] left-0 opacity-30 top-0 w-[1178px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[17.05%] left-0 max-w-none top-0 w-[5.09%]" src={imgContainer} />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative size-full">
        <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[40px] not-italic relative shrink-0 text-[36px] text-center text-white whitespace-nowrap">Ready to Take Care of Your Health?</p>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[52px] relative shrink-0 w-[832px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pt-[24px] relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[28px] not-italic relative shrink-0 text-[#ecfeff] text-[20px] text-center whitespace-nowrap">Schedule an appointment with our expert healthcare team today</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #1447E6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[8px] h-[60px] items-center justify-center left-0 px-[32px] py-[16px] rounded-[10px] top-[-2.16px] w-[230px]" data-name="Button">
      <Icon16 />
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[#1447e6] text-[16px] text-center whitespace-nowrap">Book Appointment</p>
    </div>
  );
}

function ButtonTransform() {
  return (
    <div className="h-full relative shrink-0 w-[230px]" data-name="Button (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Button5 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-0 size-[20px] top-[-2.16px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_21_1162)" id="Icon">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_21_1162">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconTransform() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon (transform)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="h-full relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center justify-center px-[34px] py-[18px] relative size-full">
          <IconTransform />
          <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Emergency Call</p>
        </div>
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[100px] relative shrink-0 w-[832px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start justify-center pt-[40px] relative size-full">
        <ButtonTransform />
        <Button6 />
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[141px] max-w-[896px] px-[32px] top-[80px] w-[896px]" data-name="Container">
      <Heading15 />
      <Paragraph12 />
      <Container51 />
    </div>
  );
}

function Section4() {
  return (
    <div className="h-[352px] relative shrink-0 w-full" style={{ backgroundImage: "linear-gradient(163.363deg, rgb(0, 146, 184) 0%, rgb(20, 71, 230) 100%)" }} data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container49 />
        <Container50 />
      </div>
    </div>
  );
}

function Container54() {
  return <div className="absolute h-[168px] left-0 top-0 w-[242.5px]" data-name="Container" />;
}

function Container56() {
  return <div className="absolute bg-gradient-to-r from-[#00b8db] h-[2px] left-0 rounded-[13421800px] to-[#155dfc] top-[31px] w-[48px]" data-name="Container" />;
}

function InlineContent6() {
  return (
    <div className="absolute h-[57px] left-0 right-0 top-0" data-name="Inline content">
      <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-white top-[-0.8px] whitespace-nowrap">Quick Links</p>
      <Container56 />
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[24.4px] w-0" data-name="Text" />;
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[-1.8px] whitespace-nowrap">About Us</p>
        <Text8 />
      </div>
    </div>
  );
}

function Text9() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[24.4px] w-0" data-name="Text" />;
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[-1.8px] whitespace-nowrap">Our Services</p>
      <Text9 />
    </div>
  );
}

function ListItemMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ListItem1 />
      </div>
    </div>
  );
}

function Text10() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[24.4px] w-0" data-name="Text" />;
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[-1.8px] whitespace-nowrap">Find a Doctor</p>
      <Text10 />
    </div>
  );
}

function ListItemMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ListItem2 />
      </div>
    </div>
  );
}

function Text11() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[26px] w-0" data-name="Text" />;
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[69.5px] not-italic text-[#d1d5dc] text-[16px] text-center top-[-1.8px] whitespace-nowrap">Book Appointment</p>
      <Text11 />
    </div>
  );
}

function ListItemMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ListItem3 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[57px]" data-name="List">
      <ListItem />
      <ListItemMargin />
      <ListItemMargin1 />
      <ListItemMargin2 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute h-[189px] left-[391px] top-[-2.15px] w-[242.5px]" data-name="Container">
      <InlineContent6 />
      <List />
    </div>
  );
}

function Container58() {
  return <div className="absolute bg-gradient-to-r from-[#00b8db] h-[2px] left-0 rounded-[13421800px] to-[#155dfc] top-[31px] w-[48px]" data-name="Container" />;
}

function InlineContent7() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-white top-[-0.8px] whitespace-nowrap">Services</p>
        <Container58 />
      </div>
    </div>
  );
}

function Text12() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[24.4px] w-0" data-name="Text" />;
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[-1.8px] whitespace-nowrap">Emergency Care</p>
        <Text12 />
      </div>
    </div>
  );
}

function Text13() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[24.4px] w-0" data-name="Text" />;
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[-1.8px] whitespace-nowrap">Primary Care</p>
      <Text13 />
    </div>
  );
}

function ListItemMargin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ListItem5 />
      </div>
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[24.4px] w-0" data-name="Text" />;
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[-1.8px] whitespace-nowrap">Cardiology</p>
      <Text14 />
    </div>
  );
}

function ListItemMargin4() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ListItem6 />
      </div>
    </div>
  );
}

function Text15() {
  return <div className="absolute bg-gradient-to-r from-[#06b6d4] h-[2px] left-0 to-[#2563eb] top-[24.4px] w-0" data-name="Text" />;
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#d1d5dc] text-[16px] top-[-1.8px] whitespace-nowrap">Pediatrics</p>
      <Text15 />
    </div>
  );
}

function ListItemMargin5() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] relative size-full">
        <ListItem7 />
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ListItem4 />
        <ListItemMargin3 />
        <ListItemMargin4 />
        <ListItemMargin5 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[581px] top-0 w-[242.5px]" data-name="Container">
      <InlineContent7 />
      <List1 />
    </div>
  );
}

function Container60() {
  return <div className="absolute bg-gradient-to-r from-[#00b8db] h-[2px] left-0 rounded-[13421800px] to-[#155dfc] top-[31px] w-[48px]" data-name="Container" />;
}

function InlineContent8() {
  return (
    <div className="h-[57px] relative shrink-0 w-full" data-name="Inline content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[27px] left-0 not-italic text-[18px] text-white top-[-0.8px] whitespace-nowrap">Contact Us</p>
        <Container60 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1cfd5a00} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function IconMargin2() {
  return (
    <div className="relative shrink-0" data-name="Icon (margin)">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pt-[2px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Text16() {
  return (
    <div className="h-[48px] relative shrink-0 w-[210.5px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-1.8px] w-[211px]">123 Medical Center Drive, Health City, HC 12345</p>
      </div>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-start relative size-full">
        <IconMargin2 />
        <Text16 />
      </div>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_21_1172)" id="Icon">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_21_1172">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[127.594px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-1.8px] whitespace-nowrap">+91 80 2626 2626</p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[40px] relative shrink-0 w-[242.5px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[16px] relative size-full">
        <Icon19 />
        <Link5 />
      </div>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[158.887px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-1.8px] whitespace-nowrap">info@saisangama.com</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[40px] relative shrink-0 w-[242.5px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[16px] relative size-full">
        <Icon20 />
        <Link6 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_21_1175)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #00D3F2)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_21_1175">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[175.175px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#99a1af] text-[16px] top-[-1.8px] whitespace-nowrap">24/7 Emergency Services</p>
      </div>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[40px] relative shrink-0 w-[242.5px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center pt-[16px] relative size-full">
        <Icon21 />
        <Text17 />
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <ListItem8 />
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[871.5px] top-0 w-[242.5px]" data-name="Container">
      <InlineContent8 />
      <List2 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <p className="[word-break:break-word] font-['Roboto:ExtraBold',sans-serif] font-extrabold leading-[30px] relative shrink-0 text-[20px] text-white whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          Opening Hours
        </p>
      </div>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-full relative shrink-0 w-[124.569px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-white top-[1.4px] whitespace-nowrap">Monday - Saturday</p>
      </div>
    </div>
  );
}

function Text19() {
  return (
    <div className="h-full relative shrink-0 w-[109.619px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-white top-[1.4px] whitespace-nowrap">8.00 - 18.00 Hours</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex h-[19.5px] items-start justify-between left-0 right-0 top-[24px]" data-name="Container">
      <Text18 />
      <Text19 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-full relative shrink-0 w-[48.856px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-white top-[1.4px] whitespace-nowrap">Sunday</p>
      </div>
    </div>
  );
}

function Text21() {
  return (
    <div className="h-full relative shrink-0 w-[109.15px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Poppins:Regular',sans-serif] leading-[19.5px] left-0 not-italic text-[13px] text-white top-[1.4px] whitespace-nowrap">8.00 - 13.00 Hours</p>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex h-[35px] items-start justify-between left-0 pt-[16px] top-[44px] w-[327px]" data-name="Container">
      <Text20 />
      <Text21 />
    </div>
  );
}

function Container62() {
  return (
    <div className="h-[79px] relative shrink-0 w-[327px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col h-[112px] items-start left-0 top-[2.85px] w-[347px]" data-name="Container">
      <Heading16 />
      <Container62 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute h-[225px] left-[32px] right-[32px] top-0" data-name="Container">
      <Container54 />
      <Container55 />
      <Container57 />
      <Container59 />
      <Container61 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[412.538px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.6px] whitespace-nowrap">{`© 2026 SaiSangama Diagnostics & Health Care. All rights reserved.`}</p>
      </div>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function LinkFacebook() {
  return (
    <div className="bg-[#1e2939] relative rounded-[13421800px] shrink-0 size-[40px]" data-name="Link - Facebook">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon22 />
      </div>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p2ffa5d80} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function LinkTwitter() {
  return (
    <div className="bg-[#1e2939] relative rounded-[13421800px] shrink-0 size-[40px]" data-name="Link - Twitter">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_21_1133)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p19f4a800} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_21_1133">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function LinkInstagram() {
  return (
    <div className="bg-[#1e2939] relative rounded-[13421800px] shrink-0 size-[40px]" data-name="Link - Instagram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.peba4c00} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M5 7.5H1.66667V17.5H5V7.5Z" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p25677470} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function LinkLinkedIn() {
  return (
    <div className="bg-[#1e2939] relative rounded-[13421800px] shrink-0 size-[40px]" data-name="Link - LinkedIn">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon25 />
      </div>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31dea900} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p212a8900} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function LinkYouTube() {
  return (
    <div className="bg-[#1e2939] relative rounded-[13421800px] shrink-0 size-[40px]" data-name="Link - YouTube">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center relative size-full">
        <LinkFacebook />
        <LinkTwitter />
        <LinkInstagram />
        <LinkLinkedIn />
        <LinkYouTube />
      </div>
    </div>
  );
}

function Link7() {
  return (
    <div className="h-[20px] relative shrink-0 w-[82.556px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.6px] whitespace-nowrap">Privacy Policy</p>
      </div>
    </div>
  );
}

function Link8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[99.925px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.6px] whitespace-nowrap">Terms of Service</p>
      </div>
    </div>
  );
}

function Link9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[74.481px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[#99a1af] text-[14px] top-[-0.6px] whitespace-nowrap">Accessibility</p>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-start relative size-full">
        <Link7 />
        <Link8 />
        <Link9 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Paragraph13 />
        <Container67 />
        <Container68 />
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[32.8px] right-0 top-[48px]" data-name="Container">
      <div aria-hidden className="absolute border-[#1e2939] border-solid border-t-[0.8px] inset-0 pointer-events-none" />
      <Container66 />
    </div>
  );
}

function ContainerMargin10() {
  return (
    <div className="absolute h-[120.8px] left-[32px] right-[32px] top-[225px]" data-name="Container (margin)">
      <Container65 />
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[345.8px] max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container53 />
        <ContainerMargin10 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#101828] relative shrink-0 w-full" data-name="Footer">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] pt-[64px] relative size-full">
        <Container52 />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white min-h-[728px] relative shrink-0 w-full" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start min-h-[inherit] relative size-full">
        <EmergencyBanner />
        <Header />
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Footer />
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="h-[728px] relative shrink-0 w-[1178px]" data-name="Body">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <App />
      </div>
    </div>
  );
}

export default function RedesignHospitalWebsite() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Redesign Hospital Website">
      <Body />
    </div>
  );
}