# App Store Submission Guide for Hushhly

This guide will help you submit your Hushhly app to the Apple App Store. Since you're developing on Windows, you'll need to use a Mac or cloud Mac service for the final submission steps.

## Prerequisites

1. **Apple Developer Account** - You need to enroll in the [Apple Developer Program](https://developer.apple.com/programs/) ($99/year)
2. **Access to a Mac** - Either a physical Mac or cloud Mac service (MacStadium, MacInCloud, etc.)
3. **Xcode** - Installed on the Mac (version 12.0 or later)

## Preparation Steps (Already Done)

The following steps have been completed on your Windows machine:

1. ✅ Added iOS platform to your Capacitor project
2. ✅ Generated iOS project files
3. ✅ Built web assets and copied them to iOS project
4. ✅ Updated app version to 1.0.0
5. ✅ Generated app icons and splash screens
6. ✅ Verified project configuration

## Final Steps for App Store Submission

### Step 1: Transfer Project to Mac

1. Compress your entire project folder:
   ```bash
   # On Windows, create a zip of your project
   cd c:\Users\Lenovo\Downloads\hushhly-main\hushhly-main
   # Create zip file of the project
   ```

2. Transfer the project to your Mac using your preferred method:
   - Cloud storage (Google Drive, Dropbox, etc.)
   - Direct file transfer
   - Git repository

### Step 2: Open Project in Xcode

1. On your Mac, navigate to the project directory
2. Open the iOS project in Xcode:
   ```bash
   cd hushhly-main/ios
   open App.xcworkspace
   ```

### Step 3: Configure App Settings in Xcode

1. Select your project in the Navigator
2. Go to the "Signing & Capabilities" tab
3. Select your Team from the dropdown (requires Apple Developer account)
4. Set the Bundle Identifier to: `com.hushhly.app`
5. Ensure "Automatically manage signing" is checked

### Step 4: Update App Information

1. In Xcode, select your target
2. Go to the "General" tab
3. Verify:
   - Display Name: "Hushhly"
   - Bundle Identifier: "com.hushhly.app"
   - Version: "1.0.0"
   - Build: "1"

### Step 5: Test the App

1. Connect an iOS device or use the simulator
2. Build and run the app to ensure it works correctly
3. Test all functionality

### Step 6: Archive the App

1. In Xcode, go to Product > Archive
2. Wait for the archive process to complete
3. The Organizer window will appear

### Step 7: Upload to App Store

1. In the Organizer, select your archive
2. Click "Distribute App"
3. Select "App Store Connect"
4. Choose "Upload"
5. Follow the prompts to upload your app

## App Store Connect Setup

Before uploading, set up your app in App Store Connect:

1. Go to [App Store Connect](https://appstoreconnect.apple.com/)
2. Click "My Apps"
3. Click the "+" button and select "New App"
4. Fill in the required information:
   - Platforms: iOS
   - Name: Hushhly
   - Primary Language: English
   - Bundle ID: com.hushhly.app (must match Xcode)
   - SKU: hushhly-app (unique identifier)
   - User Access: Full Access

## App Information for App Store

Prepare the following information for your App Store listing:

### App Details
- **Name**: Hushhly
- **Subtitle**: Wellness & Meditation App
- **Description**: Hushhly is a comprehensive wellness application designed to help users achieve mental balance through guided meditation, breathing exercises, and AI-powered wellness recommendations. Features include personalized meditation flows, mood tracking, sleep stories, and an AI chat assistant for mental wellness support.
- **Keywords**: meditation, wellness, mindfulness, mental health, relaxation, breathing, sleep, stories, ai, chat
- **Privacy Policy URL**: [Your Privacy Policy URL]

### Screenshots
Prepare screenshots for the following devices:
- iPhone 6.7" Display (iPhone 14 Pro Max)
- iPhone 6.5" Display (iPhone 12 Pro Max)
- iPhone 5.5" Display (iPhone 8 Plus)
- iPad Pro (12.9-inch) (3rd generation)
- iPad Pro (12.9-inch) (2nd generation)

### App Icon
The 1024x1024 app icon has been generated and is located in:
`ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png`

## Required Documentation

### Privacy Policy
You must have a privacy policy that complies with Apple's privacy guidelines. The policy should include:
- What data you collect
- How you use the data
- How you protect the data
- How users can request data deletion

### App Store Review Guidelines
Ensure your app complies with Apple's [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/), particularly:
- Section 1.2 - Safety
- Section 3.1.1 - In-App Purchases
- Section 5 - Legal

## Troubleshooting

### Common Issues
1. **Signing Errors**: Ensure your Apple Developer account is active and properly configured in Xcode
2. **Missing Icons**: All required icon sizes must be present
3. **Invalid Binary**: Check that all required fields are filled in App Store Connect

### Need Help?
If you encounter issues during submission:
1. Check the Xcode console for detailed error messages
2. Review Apple's documentation
3. Contact Apple Developer Support

## Next Steps

1. Set up your Apple Developer Account
2. Arrange access to a Mac
3. Transfer your project
4. Follow the submission steps above
5. Monitor App Store Connect for review status

Your app is now ready for App Store submission! The iOS project has been properly configured with all necessary assets and settings.