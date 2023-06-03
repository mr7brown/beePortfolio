---
sidebar_label: "Register the Device Model"
sidebar_position: 3
tags: [Raspberry Pi, Git, Github, Linux, Google Assistant SDK, VS Code, Google]
---

# Register the Device Model

In order for the Google Assistant to respond to commands appropriate to your device and the given context, the Assistant needs information about your particular device. You provide this information, which includes fields like device type and manufacturer, as a device model. You can think of this model as a general class of device -- such as a light, speaker, or toy robot.

This information is then accessible to the Assistant and is associated with your Actions Console project. No other projects have access to your model and device information.

## Use the registration UI

Use the registration UI in the Actions Console to register a device model.

:::note Note:

The registration UI will not appear if you did not click the Device registration box when creating the project (see the previous step).

:::

Click the **REGISTER MODEL** button.

![Device models tab](/img/google-device1.png)

## Create model

1. Fill out all of the fields for your device. Select any device type, such as Light. See the device model JSON reference for more information on these fields.
2. When you are finished, click **REGISTER MODEL**.

## Download credentials

The `client*secret*<client-id>`.json file must be located on the device. This file contains a client ID and client secret, but no access token. Later, you will run an authorization tool and reference this file in order to authorize the Google Assistant SDK sample to make Google Assistant queries (see the OAuth 2.0 documentation for more information). Do not rename this file.

Download this file and transfer it to the device. Click **NEXT**.

![Download credentials](/img/google-device2.png)

**For the Raspberry Pi only**

Make sure this file is located in `/home/pi`. If you want to upload the file to the device, do the following:

1. Open a new terminal window. Run the following command in this new terminal:

:::note Note:

Do not run the following command in an SSH session connected to the device. This command transfers the JSON file from a directory on your development machine to the device. An SSH session cannot access your local directories.

:::

```
scp ~/Downloads/client_secret_client-id.json pi@raspberry-pi-ip-address:/home/pi/
```

```
password: <password-for-device>
```

2. Close this terminal window.

## Specify traits

Later, you will specify the different abilities that your device supports on this screen. But for now, click the **SKIP** button.

![Download credentials](/img/google-device3.png)

## Edit the model

If you need to edit the model, click its row in the list. Make sure to click SAVE after any edits.

![Download credentials](/img/google-device4.png)

If you need to download the credentials file again, click the ellipses. You can delete the model from this menu as well.

![Download credentials](/img/google-device5.png)
