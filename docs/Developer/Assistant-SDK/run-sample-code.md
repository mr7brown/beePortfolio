---
sidebar_label: "Run the Sample Code"
sidebar_position: 5
tags: [Raspberry Pi, Git, Github, Linux, Google Assistant SDK, VS Code, Google]
---

# Run the Sample Code

At this point, you are ready to run the sample and make a query.

In the following command:

- Replace `my-dev-project` with the Google Cloud Platform project ID for the Actions Console project you created. To find the project ID in the Actions Console, select the project, click the gear icon, and select **Project settings**.

- Replace `my-model` with the name of the model you created in the previous step.

```
googlesamples-assistant-pushtotalk --project-id my-dev-project --device-model-id my-model
```

Press the Enter key and try some of the following queries:

_Who am I?_
_What time is it?_
_What is the weather in San Francisco?_

If the Assistant does not respond, follow the troubleshooting instructions.

To change the language for the Google Assistant or to enable personal results, use the Google Assistant app.

## Find the device instance ID

When you run the sample the first time, it will generate a device instance for your particular device. This device instance will be associated with the device model that you specified to run the sample. You can also create the instance yourself using the registration tool.

The sample saves both model and instance IDs. If you run the sample without providing these as arguments, it will default to using the saved IDs.

Find the device instance ID in the output for the sample.

```
INFO:root:Connecting to embeddedassistant.googleapis.com
WARNING:root:Device config not found: [Errno 2] No such file or directory: '/home/pi/.config/googlesamples-assistant/device_config.json'
INFO:root:Registering device
INFO:root:Device registered: 0eea18ae-d17e-11e7-ac7a-b827ebb8010f # Device instance ID
Press Enter to send a new request...
```
