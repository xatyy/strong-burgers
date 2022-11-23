let policy = {
  userAgent: "*",
};

module.exports = {
  siteUrl: "https://www.strongburgers.ro",
  generateRobotsTxt: true,
  robotsTxtOption: {
    policies: [policy],
  },
  outdir: "./out",
};
