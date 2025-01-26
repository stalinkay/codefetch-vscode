// in ".releaserc.js" or "release.config.js"

import dateFormat from "dateformat";
import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Given a `const` variable `TEMPLATE_DIR` which points to "<semantic-release-gitmoji>/lib/assets/templates"

// the *.hbs template and partials should be passed as strings of contents

const PACKAGE_NAME = "semantic-release-gitmoji";
const ASSET_DIR = "lib/assets";
const TEMPLATE_DIR = path.resolve(
  __dirname,
  "node_modules",
  PACKAGE_NAME,
  ASSET_DIR,
  "templates",
);

const template = readFile(path.join(TEMPLATE_DIR, "default-template.hbs"));
const commitTemplate = readFile(path.join(TEMPLATE_DIR, "commit-template.hbs"));

export default {
  debug: true,
  branches: [
    "main",
    {
      name: "next",
      channel: "next",
      prerelease: "rc",
    },
    {
      name: "beta",
      prerelease: true,
    },
    {
      name: "alpha",
      prerelease: true,
    },
  ],
  tagFormat: "v${version}",
  plugins: [
    [
      "semantic-release-gitmoji",
      {
        releaseRules: {
          major: [":boom:"],
          minor: [":sparkles:"],
          patch: [
            ":zap:",
            ":bug:",
            ":ambulance:",
            ":lipstick:",
            ":lock:",
            ":arrow_down:",
            ":arrow_up:",
            ":pushpin:",
            ":chart_with_upwards_trend:",
            ":heavy_plus_sign:",
            ":heavy_minus_sign:",
            ":wrench:",
            ":globe_with_meridians:",
            ":pencil2:",
            ":rewind:",
            ":package:",
            ":alien:",
            ":bento:",
            ":wheelchair:",
            ":speech-balloon:",
            ":card-file-box:",
            ":children-crossing:",
            ":iphone:",
            ":egg:",
            ":alembic:",
            ":mag:",
            ":label:",
            ":triangular-flag-on-post:",
            ":goal-net:",
            ":dizzy:",
            ":wastebasket:",
            ":passport-control:",
            ":adhesive-bandage:",
            ":necktie:",
          ],
        },
        releaseNotes: {
          template,
          partials: { commitTemplate },
          helpers: {
            datetime: function (format = "UTC:yyyy-mm-dd") {
              return dateFormat(new Date(), format);
            },
          },
          issueResolution: {
            template: "{baseUrl}/{owner}/{repo}/issues/{ref}",
            baseUrl: "https://gitlab.com",
            source: "gitlab.com",
            removeFromCommit: false,
            regex: /#\d+/g,
          },
        },
      },
    ],
    "@semantic-release/github",
    "@semantic-release/npm",
    [
      "@semantic-release/exec",
      {
        "prepareCmd": "node update-gitmoji-changelog-version.js"
      }
    ],
    [
      "@semantic-release/exec",
      {
        "publishCmd": "node publish-to-azure-devops.js"
      }
    ],
  ],
};
