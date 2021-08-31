# Documentation

This file contains general documentation how the set up the project.

- [Internalization workflow and requirements](#Internalization-workflow-and-requirements)

___
## Internalization workflow and requirements

### Requirements:
You need to set the environment variable `GOOGLE_APPLICATION_CREDENTIALS` with the path of the of your [Google Cloud JSON key file](https://cloud.google.com/docs/authentication/getting-started), so the translator can work and generate the intermediate language files.

```shell
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/keyFile.json"
```

You will also need to add the target translation two-letter language codes on `translate` script in [`package.json`](../src/package.json).

### Translation Workflow

To implement internalization we are using: `next/router` for locale routing, `react-intl` to format and extract messages, and [`translate-json`](../src/utils/translator/translate-json.js) that uses the [Google Translate API](https://cloud.google.com/nodejs/docs/reference/translate/latest) to transalte the messages.  

When writing components use `<FormattedMessage defaultMessage="Este es el texto del mensaje" />` to display content that will be translated. The message should be Spanish that is the default language for the project. 


