import { useStore } from "vuex";
import { computed } from "vue";

export const theme = () => {
  const store = useStore();
  const isDark = computed({
    get: () => store.state.theme.isDark,
    set: (bool) => {
      store.dispatch("theme/setDark", bool);
    },
  });

  const isOld = computed({
    get: () => store.state.theme.isOld,
    set: (bool) => store.dispatch("theme/setOld", bool),
  });
  return {
    isDark,
    isOld,
  };
};

export const metaTheme = () => {
  const getColor = function () {
    const color = window
      .getComputedStyle(document.querySelector(":root") as Element)
      .getPropertyValue("--bg");
    return color;
  };

  const creatMeta = function (metaTags: any) {
    metaTags
      .map((tagDef: any) => {
        const tag = document.createElement("meta");
        Object.keys(tagDef).forEach((key) => {
          tag.setAttribute(key, tagDef[key]);
          tag.setAttribute("data-vue-mixins-controlled", "");
        });
        return tag;
      })
      .forEach((tag: any) => document.head.appendChild(tag));
  };
  const setMeta = function () {
    const fg = getColor();
    const metaTags = [
      {
        name: "theme-color",
        content: fg,
      },
      {
        name: "msapplication-TileColor",
        content: fg,
      },
    ];
    creatMeta(metaTags);
  };
  const changeMeta = function () {
    Array.from(document.querySelectorAll("[data-vue-mixins-controlled]")).map(
      (el: any) => {
        console.log("Change meta -> removed old tags");
        el.parentNode.removeChild(el);
      }
    );
    setMeta();
  };
  return {
    setMeta,
    changeMeta,
  };
};
