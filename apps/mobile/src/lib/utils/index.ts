// checks if two elements are colliding
export function isCollide(a: Element, b: Element) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

// export const base_url = "http://192.168.0.225:5000";
export const base_url = "http://localhost:5000";
