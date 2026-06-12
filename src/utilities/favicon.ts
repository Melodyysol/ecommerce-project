export const setFavicon = (href: string) => {
  const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
  if (link) {
    link.href = href;
  } else {
    const newLink = document.createElement("link");
    newLink.rel = "icon";
    newLink.href = href;
    document.head.appendChild(newLink);
  }
};
