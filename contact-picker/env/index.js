const path = require('path');
const fs = require('fs');
const { WORKING_DIR } = require('@pdffiller/webpack5/env');

const PERSONAL_ENV_FOLDER = path.join(WORKING_DIR, 'env/personal');
const DEFAULT_ENV_FOLDER = path.join(WORKING_DIR, 'env/default');

module.exports = {
  ENV_DIRECTORY_PATH: fs.existsSync(PERSONAL_ENV_FOLDER)
    ? PERSONAL_ENV_FOLDER
    : DEFAULT_ENV_FOLDER,
};
