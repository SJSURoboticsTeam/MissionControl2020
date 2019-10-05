const moduleData = {
  windows: {
    "window-1": { id: "window-1" },
    "window-2": { id: "window-2" },
    "window-3": { id: "window-3" },
    "window-4": { id: "window-4" }
  },
  components: {
    "proto-module": { id: "proto-module", value: "Module Dropdown" },
    "xhr-test-module": { id: "xhr-test-module", value: "XHR Test" }
  },

  windowOrder: ["window-1", "window-2", "window-3", "window-4"],
  componentOrder: [
    "proto-module",
    "xhr-test-module"
  ]
};

export default moduleData;
