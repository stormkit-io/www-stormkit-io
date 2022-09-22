---
title: Multiple Environments
---

# Multiple environments

<section>
With Stormkit you can create multiple environments per application. Each environment will point to a branch and when that branch is updated Stormkit will automatically deploy it (given you have <a href="/docs/deployments/auto-deployments">Auto Deployments</a>. You can also publish multiple deployments at the same time. Check Staged Rollouts for more information on that.
</section>

# Default environment

<section>
By default, each application comes with a production environment already set. You'll need to configure it to deploy it successfully. The production environment cannot be deleted or renamed. However, you can change the branch it points. Any branch that does not match an environment's branch (a feature branch) will be deployed with the default environment's configuration. You can change this behaviour by visiting the Application's settings page and modifying the Default environment dropdown under the Auto deployments section. That will tell Stormkit to build new feature branch deployments with that environment's configuration.

<sk-article-image 
    src="docs/deployments/auto-deployments.png" 
    alt="Auto Deployments" 
    class="bg-blue-50 mt-8"></sk-article-image>

</section>

# Creating an environment

<section>
In order to create a new environment, select your application. You'll be directly brought to a screen where you see a list of environments. On top right, you'll see an <code>Add Environment.</code> Click on that and a <a href="/docs/deployments/configuration">configure</a> your environment.

<sk-article-image 
    src="docs/features/env-screen.png" 
    alt="Env screen" 
    class="bg-blue-50 mt-8"></sk-article-image>

</section>

# Deleting an environment

<section>
<p>
In order to delete an environment, you'll have to navigate to the <a href="/docs/deployments/configuration">configuration</a> page and hit the <b>Delete environment</b> button at the bottom. Deleting an environment will also remove all associated deployments.
</p>
<sk-info-box>
You cannot delete <b>Production</b> environments as they are required by design.
</sk-info-box>
</section>
