// #!/usr/bin/env node

import prompts from "prompts";
import { red, green } from "kolorist";
import framework from "./templates";

const frameworkTypes = framework.map((item) => item.type);
console.log(frameworkTypes);

(async () => {
  const defaultProjectName = "aws-vite-project";

  let result: {
    projectName?: string;
    shouldOverwrite?: boolean;
    frame?: string;
    link?: string;
  } = {};

  try {
  } catch (error) {}
})();
