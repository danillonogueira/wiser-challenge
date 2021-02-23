const MediaQueries = {
  desktop: '(max-width: 1366px)',
  tablet: '(max-width: 768px)',
  mobile: '(max-width: 482px)'
};

export default function include(media, styles) {
  return `
    @media ${MediaQueries[media]} {
      ${styles}
    }
  `;
}
