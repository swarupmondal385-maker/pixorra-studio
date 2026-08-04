export const calLink = "pixorra-studio-pnd7ht/15min";
export const calNamespace = "15min";
export const calBookingUrl = `https://cal.com/${calLink}`;
export const calDataAttributes = {
  "data-cal-link": calLink,
  "data-cal-namespace": calNamespace,
  "data-cal-config": '{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"light"}',
} as const;
