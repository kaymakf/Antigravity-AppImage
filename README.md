<h2 align="center">Antigravity AppImage</h2>
<p align="center">Unofficial / Community provided Google Antigravity AppImage</p>

[![Antigravity AppImage release](https://github.com/kaymakf/Antigravity-AppImage/actions/workflows/release.yml/badge.svg?branch=main)](https://github.com/kaymakf/Antigravity-AppImage/actions/workflows/release.yml)

## Get Started

#### [Download the latest release](https://github.com/kaymakf/Antigravity-AppImage/releases/latest)
- supports update of the AppImage

### Executing
#### File Manager
Double-click the `*.AppImage` file and you are done!

> In normal cases, the above method should work, but in some cases you 
> need mark file as executable. You can do this using File manager -> right click > Properties > Allow Execution,
> or by terminal issuing command `chmod +x Antigravity-*.AppImage`

#### AppImageLauncher
Use AppImageLauncher for better desktop integration ==> [download AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher)

#### Terminal
```bash
chmod +x Antigravity-*.AppImage
./Antigravity-*.AppImage
```

#### Official source
The official home of Antigravity is available at the link provided:
https://antigravity.google

#### Build
The AppImage is built from the .tar.gz Antigravity package by GitHub Continuous Integration using this
bash script https://github.com/valicm/appimage-bash.

#### Auto-Update
This repository includes an automated workflow that checks for updates daily.
- **Scraping**: A script checks the official download page for the latest Linux tarball.
- **Automation**: If a new version is found, the release workflow is automatically updated and triggered to build the new AppImage.

