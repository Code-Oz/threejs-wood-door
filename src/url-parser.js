const queryString = window.location.search;
const href = window.location.hash;

export const isHrefExist = (key) => {
  return href === `#${key}`;
};

export const getPathParams = new Proxy(new URLSearchParams(queryString), {
  get: (searchParams, prop) => Number(searchParams.get(prop)),
});
