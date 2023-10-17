const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export function formatView(view) {
  return VIEW_FORMATTER.format(view);
}
