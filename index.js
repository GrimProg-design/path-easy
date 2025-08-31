import { fileURLToPath } from "url";
import * as nodePath from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = nodePath.dirname(__filename);

export default {
  ...nodePath,
  __dirname,
  __filename
};
