import { datadogRum } from '@datadog/browser-rum';

datadogRum.init({
  applicationId: 'c02871ed-12b8-4814-8793-2a76b6c208ef',
  clientToken: 'puba24e45f02d71b9e02d0eea6d78f9e093',
  // `site` refers to the Datadog site parameter of your organization
  // see https://docs.datadoghq.com/getting_started/site/
  site: 'datadoghq.eu',
  service: 'graphic-editor',
  env: 'main',
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0',
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  defaultPrivacyLevel: 'mask-user-input',
});

datadogRum.startSessionReplayRecording();
