interface Config {
  threshold: number;
  root: null;
  rootMargin: string;
}

const defaultConfig: Config = {
  threshold: 0,
  root: null,
  rootMargin: "0px",
};

function except(object: any, keys: any) {
  return Object.keys(object).reduce((reduced: any, key: any) => {
    if (!keys.includes(key)) {
      reduced[key] = object[key];
    }
    return reduced;
  }, {});
}

function parseIntersectValue(value: any) {
  return typeof value === "function"
    ? Object.assign({}, defaultConfig, { callback: value })
    : Object.assign({}, defaultConfig, value);
}

// Vue 2
// export const intersect = {
//   inserted: function(el: HTMLElement, { value }: any) {
//     const config = parseIntersectValue(value);

//     const observer = new IntersectionObserver(([entry]) => {
//       config.callback(entry);
//     }, except(config, ["callback"]));

//     observer.observe(el);
//   },
// };

// Vue3
export const intersect = {
  mounted: function(el: HTMLElement, { value }: any) {
    const config = parseIntersectValue(value);
    const observer = new IntersectionObserver(([entry]) => {
      config.callback(entry);
    }, except(config, ["callback"]));

    observer.observe(el);
  },
};
