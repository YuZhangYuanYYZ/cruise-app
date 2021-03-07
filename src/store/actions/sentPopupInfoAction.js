export const SENT_POPUP_INFO = 'SENT_POPUP_INFO';
export function sentPopupInfoAction(payload) {
  return {
    type: SENT_POPUP_INFO,
    payload,
  };
}
