# insomnia-plugin-request-confirmation

**insomnia-plugin-request-confirmation** is a plugin for Insomnia that shows a confirmation dialog before an HTTP request is sent. The confirmation is triggered if the `shouldConfirm` property is set to `true` in the environment configuration (in every project).

## Features

- Displays a confirmation dialog for users to approve or cancel requests before they are sent.
- Confirmation is only triggered when the `shouldConfirm` property is set to `true` in the active environment.
- Useful for preventing accidental requests, especially in sensitive environments like production.

## Manual installation

1. Open **Insomnia**.
2. Go to **Insomnia → Preferences → Plugins → Open Plugins Folder**.
   - Default location:
     - MacOS: ~/Library/Application\ Support/Insomnia/plugins/
     - Windows: %APPDATA%\Insomnia\plugins\
     - Linux: $XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/
3. In the folder that opens, create a new folder called `insomnia-plugin-request-confirmation`.
4. Clone or download the contents of [this repository](https://github.com/lmarello/insomnia-plugin-request-confirmation) into the newly created folder.
5. Restart Insomnia to load the plugin.

> **Important**: Make sure the folder name starts with `insomnia-plugin-`. If the naming convention is not respected, the plugin will not work because Insomnia requires all plugins to follow this prefix rule.

## Usage

1. In Insomnia, go to your environment settings.
2. Add the `shouldConfirm` property to the environment where you want confirmation enabled:

   ```json
   {
     "url": "https://foo.api.com",
     "shouldConfirm": true
   }
   ```

3. When sending a request using this environment, a confirmation dialog will appear.
4. If the user selects Cancel, the request will be aborted.

## Contributions

Contributions are welcome. You can submit a Pull Request or open an Issue [here](https://github.com/lmarello/insomnia-plugin-confirmation-for-prod/issues)
