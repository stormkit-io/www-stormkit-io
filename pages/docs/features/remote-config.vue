<template>
  <main>
    <h1>Remote configuration</h1>
    <section>
      <p>
        It's easy to configure your application remotely on Stormkit. You can
        have a remote configuration per application environment and you can
        provide as many parameters as you'd like to. To start using the remote
        configuration, click on the application environment you'd like to
        configure and then the <b>Remote Config</b> link.
        <img :src="pngRemoteConfig" alt="Remote Config" />
      </p>
    </section>
    <h2>Parameter details</h2>
    <section>
      <table>
        <tbody>
          <tr>
            <td width="35%">
              <b>Parameter name</b>
            </td>
            <td>
              The name of the parameter. You'll provide this name in your source
              code to retrieve the respective value. This field is
              <b>required</b>.
            </td>
          </tr>
          <tr>
            <td>
              <b>Description</b>
            </td>
            <td>
              A helper text that is used internally which describes what the
              parameter is used for. This is optional.
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <h2>Values</h2>
    <section>
      <p>
        The possible values this parameter can take. You can provide multiple
        variables.
      </p>
      <table>
        <tbody>
          <tr>
            <td width="35%">
              <b>Value</b>
            </td>
            <td>
              The value of the parameter. The application will always receive
              string values. This field is <b>required</b>.
            </td>
          </tr>
          <tr>
            <td>
              <b>Apply if</b>
            </td>
            <td>
              If one of the options in the dropdown is specified, this value
              will be shown to the user only if the criteria match. The order is
              important and the first value that matches the criteria will be
              displayed.
            </td>
          </tr>
          <tr>
            <td>
              <b>User in percentile</b>
            </td>
            <td>
              If specified, the user will have <b>X</b> percent of chance to see
              this value. Once a user sees a version, it sticks. Consequent
              calls to this parameter will display the same value for the user.
              If a user already belongs to a bucket and the percentile is
              changed meanwhile, the result will be re-calculated. When the
              percentage is increased, the user will continue to see the same
              value, when it is decreased, it is not guaranteed that the user
              will continue to see the same value. We use a cookie to do this
              calculation. Please make sure you have relevant GDPR compliances.
              The cookie expires after 15 days of no access to this parameter.
            </td>
          </tr>
          <tr>
            <td>
              <b>User segment matches</b>
            </td>
            <td>
              A regex string that tells Stormkit to display the value only if
              the user is identified in the desired segment. You will need to
              identify the user before accessing this parameter for this
              condition to work.
            </td>
          </tr>
          <tr>
            <td>
              <b>App version matches</b>
            </td>
            <td>
              A number value which tells Stormkit to display the value only if
              the application version matches the given condition. You can use
              the <code>&gt;</code> and
              <code>&lt;</code>
              operators to match multiple versions. For instance
              <code>&lt; 10</code>. To match the exact version, omit the
              operator and provide only the version number. This field works
              only with numeric values.
            </td>
          </tr>
        </tbody>
      </table>

      You can access these settings in your code by using our open source
      <a
        href="https://github.com/stormkit-io/stormkit-js"
        rel="noreferrer noopener"
        target="_blank"
      >
        <code>@stormkit/api</code>
      </a>
      package.
      <br />
      <br />
      Here's an example:
      <pre><code>{{remoteConfig}}</code></pre>
    </section>
    <h2>Identifying the segment and version</h2>
    <section>
      <p>
        For <b>User segment matches</b> and
        <b>App version matches</b> conditions to work, you'll need to identify
        the user before accessing these parameters. You can do so as follows:
      </p>
      <pre><code>{{ identifyUser }}</code></pre>
      <p>
        If the <b>Enable Promotions</b> parameter has a condition to match users
        in segment <b>my-segment</b> (or even <b>my-</b> as a regex match is
        executed), then in the above example the promotions will be enabled
        since the user is identified in <b>my-segment</b>.
      </p>
    </section>
    <h2>Server side</h2>
    <section>
      <p>
        If you're using <b>server side rendering</b> and you need to access the
        config on the server, make sure to provide the request and response
        objects. This argument will be ignored on the client side, therefore the
        following example is an isomorphic example.
      </p>
      <pre><code>{{remoteSsrConfig}}</code></pre>
    </section>
  </main>
</template>
<script>
import pngRemoteConfig from '../../../assets/images/docs/features/remote-config.png'

const remoteConfig = `import React from "react";
import sk from "@stormkit/api";

const App = () => {
    // Here \`Enable promotions\` is the parameter name specified in the UI.
    if (sk.config().get("Enable promotions") === "true") {
        return <div>25% discount</div>
    }

    return <div>Full price</div>
}

export default App;`

const identifyUser = `import sk from "@stormkit/api";

sk.context({ segment: "my-segment", version: 16 });
sk.config().get("Enable promotions");`

const remoteSsrConfig = `import React from "react";
import sk from "@stormkit/api";

// Here the \`req\` and \`res\` properties are injected somewhere in server entry file.
const App = ({ req, res }) => {
    sk.context({ segment: "my-segment", version: 16 }, req)

    if (sk.config(req, res).get("Enable promotions") === "true") {
      return <div>25% discount</div>
    }

    return <div>Full price</div>
}

export default App;`

export default {
  layout: 'docs',

  data() {
    return {
      pngRemoteConfig,
      remoteConfig,
      remoteSsrConfig,
      identifyUser
    }
  },

  head() {
    return {
      title: 'Stormkit - Remote configuration'
    }
  }
}
</script>
