---
title: Deploy your app on AWS S3
description: Learn how to deploy your static applications on your own AWS account using Stormkit.
date: 2022-04-10
---

Stormkit users can now deploy their static applications directly to their **AWS** account.

<!--more-->

## Create AWS credentials

To deploy your application on **AWS S3**, you will have to have a user with programmatic access and grant necessary permissions to upload files on the bucket. To do so, visit the **IAM Service** and create a new user with programmatic access, with the following policy attached:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:ListBucket"],
      "Resource": "arn:aws:s3:::<bucket-name>"
    },
    {
      "Effect": "Allow",
      "Action": ["s3:*"],
      "Resource": "arn:aws:s3:::<bucket-name>/*"
    }
  ]
}
```

Make sure to replace `<bucket-name>` with your actual bucket name.

## S3 bucket permissions

Go to your S3 Bucket and click on **Permissions**. Make sure to have:
<br/>
<br/>

1. **Block all public access** turned on and
1. **Object Ownership** to be **Bucket owner enforced**

This will increase the security of your S3 bucket and will block public access.

## Grant CloudFront access to S3 bucket

Now that we have blocked public access, we'll need to grant **CloudFront** access to **S3**. The [official documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html) contains all the steps required, but essentially
you'll need to create an **OAI** so that **CloudFront** can access your **S3** bucket and serve the files.
To do so:
<br />
<br />

1. Go to your CloudFront distribution
2. Click on **Origins** tab
3. Select your origin
4. Click on **Edit**
5. Make sure **Yes use OAI (bucket can restrict access to only CloudFront)** is checked
6. Optionally you can select **Yes, update the bucket policy** to update the bucket policy automatically

## Configuring Stormkit

Now that your **AWS** account is ready, go to **Stormkit** and find the **Environment** that you'd like
to connect to your **S3** Bucket. Click on the three dots menu next to the environment name and choose
**Custom Storage**.

Use the **Access Key ID** and **Secret Access Key** obtained from the **IAM user** and provide the bucket name
created above. Make sure to have the region configured correctly. Here's an example:

<div class="img-wrapper">
    <img src="/assets/blog/how-to-deploy-on-aws-s3/aws-s3-integration.png" 
    alt="AWS S3 integration" />
</div>

Click submit.

## Time to deploy

Now your integration is ready. Anytime you deploy with the `Publish` toggle turned on, Stormkit will deploy your branch directly to your AWS account and will overwrite existing files. From `git push` right into your
**S3** bucket.

## Previewing your application

You can create multiple environments and connect them to different buckets. For instance, you could have
a **staging** environment to preview your application before releasing it to **production**.
