# Tauri + React + Typescript

This template should help get you started developing with Tauri, React and Typescript in Vite.

## TODO: Research IOS compile

Relevant documentation:
https://v2.tauri.app/distribute/app-store/

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

## Build for Android on Windows

1. check prerequiste at a [here](https://v2.tauri.app/start/prerequisites/)
2. restart your pc for `env` variables to take place
3. follow the steps on [Android](https://v2.tauri.app/start/prerequisites/#android)
4. update the `tauri.conf.json` to your package manager `npm`, `pnpm`, `bun`

### Mobile configurations

1. Run this to check if you have all set up`npx tauri android init`

2. if you are on windows , developer mode should be turned on

3. `npx tauri android build`

4. Voila! it will depend on your computer but approx time is 7min
