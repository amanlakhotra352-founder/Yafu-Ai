import ReactGA from "react-ga4";

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

export const initGA = () => {
  if (MEASUREMENT_ID) {
    ReactGA.initialize(MEASUREMENT_ID);
    console.log("GA4 Initialized");
  } else {
    console.warn("GA4 Measurement ID not found. Skipping initialization.");
  }
};

export const trackPageView = (path?: string) => {
  if (MEASUREMENT_ID) {
    ReactGA.send({ hitType: "pageview", page: path || window.location.pathname });
  }
};

export const trackEvent = (category: string, action: string, label?: string) => {
  if (MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};
