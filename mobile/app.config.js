// Merges your local, uncommitted settings (app.local.json) into app.json's
// "extra", so Cloudinary details and your LAN API URL stay out of git.
const fs = require('fs');
const path = require('path');

module.exports = ({ config }) => {
  const localPath = path.join(__dirname, 'app.local.json');
  const local = fs.existsSync(localPath)
    ? JSON.parse(fs.readFileSync(localPath, 'utf8'))
    : {};
  return { ...config, extra: { ...config.extra, ...local } };
};
