# iOS CI: Build IPA + Upload to TestFlight (No Mac Needed)

## 1) Create App Store Connect API Key
- App Store Connect → Users and Access → Keys → Generate API Key (App Manager role).
- Download the `.p8` file once.
- Note the Key ID and Issuer ID.

## 2) Find Identifiers
- IOS_APP_IDENTIFIER: e.g. `com.yourcompany.yourapp` (must match the iOS target).
- APPLE_DEV_TEAM_ID: Apple Developer Team ID (10 chars) from developer.apple.com → Membership.
- APP_STORE_TEAM_ID: Team ID number in App Store Connect (Users and Access → team selector).
- APPLE_ID_EMAIL: Apple ID email used for App Store Connect.

## 3) Base64 the .p8 (Windows PowerShell)
```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("AuthKey_XXXXXXXXXX.p8")) | Set-Content appstoreconnect_p8_base64.txt
```
Copy the contents of `appstoreconnect_p8_base64.txt` into the `APP_STORE_CONNECT_P8` secret.

## 4) Add GitHub Secrets (Repo → Settings → Secrets and variables → Actions)
- APP_STORE_CONNECT_KEY_ID
- APP_STORE_CONNECT_ISSUER_ID
- APP_STORE_CONNECT_P8  (base64 of the .p8 file)
- IOS_APP_IDENTIFIER
- APPLE_DEV_TEAM_ID
- APP_STORE_TEAM_ID
- APPLE_ID_EMAIL
- Optional for signing via match:
  - MATCH_GIT_URL, MATCH_PASSWORD

## 5) Run the Workflow
- GitHub → Actions → "iOS Build and Upload" → Run workflow.
- Input `release=true` to upload to TestFlight, or `false` to only build.
- Download IPA from workflow artifacts if needed.

## Notes
- Workflow builds web, runs `npx cap sync ios`, installs pods, builds IPA, and uploads via Fastlane.
- Fastlane files: `ios/fastlane/`. Workspace: `ios/App/App.xcworkspace`.


