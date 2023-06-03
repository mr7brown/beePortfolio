---
sidebar_label: "Install the SDK and Sample Code"
sidebar_position: 4
tags: [Raspberry Pi, Git, Github, Linux, Google Assistant SDK, VS Code, Google]
---

# Install the SDK and Sample Code

Follow these instructions to install the SDK and sample code in your project. Run all of the commands on this page in a terminal on the device (either directly or via an SSH connection).

:::note Note:

These instructions assume a Python environment running on a Linux platform. The SDK and sample code are currently only available in Python, but the Google Service API is available in many other languages and platforms.

:::

## Configure the environment

Use a Python virtual environment to isolate the SDK and its dependencies from the system Python packages.

:::note Note:

For the Raspberry Pi, run the following commands from the /home/pi directory.

:::

**(Recommended) For Python 3:**

```
sudo apt-get update
sudo apt-get install python3-dev python3-venv
python3 -m venv env
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate
```

**For Python 2.7:**

```
sudo apt-get update
sudo apt-get install python-dev python-virtualenv
virtualenv env --no-site-packages
env/bin/python -m pip install --upgrade pip setuptools wheel
source env/bin/activate
```

## Get the package

The Google Assistant SDK package contains all the code required to get the Google Assistant running on the device, including the sample code.

Install the package's system dependencies:

```
sudo apt-get install portaudio19-dev libffi-dev libssl-dev
```

Use `pip` to install the latest version of the Python package in the virtual environment:

```
python -m pip install --upgrade google-assistant-sdk[samples]
```

## Generate credentials

1. Install or update the authorization tool:

```
python -m pip install --upgrade google-auth-oauthlib[tool]
```

2. Generate credentials to be able to run the sample code and tools. Reference the JSON file you downloaded in a previous step; you may need to copy it the device. Do not rename this file.

```
google-oauthlib-tool --scope https://www.googleapis.com/auth/assistant-sdk-prototype \
 --save --headless --client-secrets /path/to/client_secret_client-id.json
```

You should see a URL displayed in the terminal:

```
Please visit this URL to authorize this application: https://...
```

3. Copy the URL and paste it into a browser (this can be done on any system). The page will ask you to sign in to your Google account. Sign into the Google account that created the developer project in the previous step.

:::note Note:

Note: To use other accounts, first add those accounts to your Actions Console project as Owners.

:::

4. After you approve the permission request from the API, a code will appear in your browser, such as "4/XXXX". Copy and paste this code into the terminal:

```
Enter the authorization code:
```

If authorization was successful, you will see a response similar to the following:

```
credentials saved: /path/to/.config/google-oauthlib-tool/credentials.json
```

If instead you see `InvalidGrantError`, then an invalid code was entered. Try again, taking care to copy and paste the entire code.

:::note Note:

Note: The authorization tool creates a new credentials.json file in a hidden .config directory on the device. This file contains an access token that is used to call the Google Assistant API.

:::
