import Vue from "vue";

import "../styles/quasar.styl";
import "quasar/dist/quasar.ie.polyfills";
import lang from "quasar/lang/en-us.js";
import "@quasar/extras/material-icons/material-icons.css";
import {
  Quasar,
  LoadingBar,
  Ripple,
  QBtn,
  Notify,
  QTooltip,
  QAvatar,
  QChip,
  QInput,
  QToolbar,
  QDrawer,
  QIcon,
  QScrollArea,
  QList,
  QItem,
  QItemSection,
  QItemLabel,
  QLayout,
  QExpansionItem,
  QMenu,
  ClosePopup
} from "quasar";

Vue.use(Quasar, {
  config: {},
  components: {
    QBtn,
    QTooltip,
    QAvatar,
    QChip,
    QInput,
    QToolbar,
    QDrawer,
    QIcon,
    QScrollArea,
    QList,
    QItem,
    QItemSection,
    QItemLabel,
    QLayout,
    QExpansionItem,
    QMenu
  },
  directives: {
    Ripple,
    ClosePopup
  },
  plugins: {
    LoadingBar,
    Notify
  },
  lang: lang
});

// Config

LoadingBar.setDefaults({
  color: "primary",
  size: "3px",
  position: "top",
  skipHijack: true
});

Notify.setDefaults({
  position: "bottom-left",
  timeout: 2000,
  actions: [{ icon: "close", color: "white" }]
});
