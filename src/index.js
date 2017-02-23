if (typeof window.SandboxApp === 'undefined') {
  require("./styles/sass/index.scss");
  const { SandboxApp } = require("./scripts/app.js");

  window.SandboxApp = SandboxApp;
}
