---
title: Trigger functions
description: Use Stormkit Trigger Functions to set periodic tasks. 
---

# Trigger functions (beta)

<section>

Use Stormkit Trigger Functions to set periodic tasks. 

<sk-info-box class="mb-4">
This feature is behind a feature flag. To activate it, go to <strong>Your application</strong> > <strong>Feature Flags</strong> and create a feature flag called <strong><code>SK_TRIGGER_FUNCTION</code></strong>. Enable it and refresh the page.
</sk-info-box>

Trigger Functions can only be called on your [API endpoints](/docs/features/writing-api). 

To set up a Trigger Function:

1. Go to **Your Application**
2. Click on **Trigger Functions** from the left navigation bar.
3. Click on **New function trigger** button
4. Fill the inputs in the modal
5. Click on **Create** button

This will call the API endpoint with the specified cron periodicity. The timezone is **UTC**. 

</section>
