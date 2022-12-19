//TODO: добавить пункт анимаций
const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading: "font-poppins font-normal text-[28px] sm:text-[48px] md:text-[62px] lg:text-[78px] leading-[34px] sm:leading-[57px] md:leading-[74.8px] lg:leading-[86.8px] w-full",
  heading2: "font-poppins font-semibold xs:text-[78px] text-[62px] text-white xs:leading-[86.8px] leading-[74.8px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[25px] leading-[32.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;