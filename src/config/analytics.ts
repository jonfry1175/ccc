export const GTM_CONFIG = {
  CONVERSION_ID: "11565537272",
  LABELS: {
    PAGE_VIEW: "W0gdCLmEkIwaEPiv8Ior",
    CTA: "eck8CPC2vJQaEPiv8Ior",
  },
} as const;

export const getGTMConversionTag = (label: keyof typeof GTM_CONFIG.LABELS) => {
  return `AW-${GTM_CONFIG.CONVERSION_ID}/${GTM_CONFIG.LABELS[label]}`;
};
