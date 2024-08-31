export const checkImageURL = (url) => {
    if (!url) return false; // Return false if the URL is null, undefined, or empty
    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
    return pattern.test(url);
  };
  