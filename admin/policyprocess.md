---
title: Policy Process
layout: admin   
---

# Policy Process
Stop, Metatime. This document outlines how policy and constitutional changes happen.

## General

All policy or constitutional changes must go to a meeting with specific wording in a pull request. If the wording is updated at the meeting, it must be updated in the pull request and go to meeting again. The pull request must be updated with the meeting notes of the meeting where it is approved.

There will be no voting on any changes without specific known wording. No voting on any policy that is not in a pull request that is one click away from making it official on the website. This is to avoid ambiguity, or to leave policy voted on but unable to be referenced in the official location.

Any policy or rule changes are NOT in effect until they exist on the main website.

## Constitutional Rule Changes

Rule changes will NOT be merged until the [paperwork for the office of fair trading](https://www.qld.gov.au/law/laws-regulated-industries-and-accountability/queensland-laws-and-regulations/associations-charities-and-non-for-profits/incorporated-associations/incorporated-associations-forms-and-fees#changing-rules) is completed.

To reiterate, the process for rules is the below howto, except after step 10 are these steps:

1. Complete the appropriate form. If you're making the rule change its good form to do it for the secretary, otherwise it falls to them
2. Submit the form and pay the fee. Make sure the fee is approved at meeting also.
3. Wait for approval response.
4. Merge the Pull Request.

## How-To

1. Fork the hsbne website
2. Navigate to the admin directory, and pick a file to edit or make a new file.
3. Make your changes or write your policy
4. At the bottom, select 'make a new branch and pull request'. Name your branch `myname-policy-topic`, ie `jhogendorn-policy-elephants`
5. Cancel the pull request and go back to the repository main page by clicking the hsbne.github.com link at the top. This is because its within your own fork, and not back to the main website.
6. On this page you will see a new branch has been made with the yellow banner and you can make a new pull request. By default this will make a pull request back to the main site.
7. Submit the pull request.
8. Add the change to the agenda with a link to the pull request
9. Vote on it at meeting
10. If it passes, update the pull request with a link to the meeting notes

Depending on any extra steps required, the appropriate person will then approve the pull request.

If you have multiple changes to make, you can select your branch from the repository main page from the dropdown top left. Once in your branch, edit files as you like and down the bottom opt to update the branch. All changes will automatically update the pull request. If you've made a new file you may want to update the index file also so people can find the new policy.
