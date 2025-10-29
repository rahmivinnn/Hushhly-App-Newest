# iOS Build Instructions for Hushhly

This document provides detailed instructions for building and preparing the Hushhly app for iOS App Store submission.

## Prerequisites

Before building for iOS, ensure you have:

1. A Mac with Xcode installed (version 12.0 or later)
2. Node.js and npm installed
3. The latest version of the project code

## Project Structure

The iOS project is located in the `ios` directory:
```
ios/
├── App/
│   ├── App/
│   │   ├── Assets.xcassets/
│   │   │   ├── AppIcon.appiconset/
│   │   │   └── Splash.imageset/
│   │   ├── Base.lproj/
│   │   ├── AppDelegate.swift
│   │   ├── Info.plist
│   │   └── public/ (web assets)
│   ├── App.xcodeproj/
│   └── App.xcworkspace/
└── capacitor-cordova-ios-plugins/
```

## Updating Web Assets

Whenever you make changes to the web application, you need to update the iOS project:

```bash
# Build the web application
npm run build

# Copy web assets to iOS project
npx cap copy ios

# Update native dependencies
npx cap update ios
```

## Generating iOS Assets

All required iOS icons and splash screens have been generated. If you need to regenerate them:

1. Ensure you have a 1024x1024 app icon in `assets/icon.png`
2. Run the asset generation command:
```bash
npx capacitor-assets generate --ios
```

## Required Icon Sizes

The following icon sizes are required for iOS App Store submission:

- 20x20 (2x and 3x for iPhone, 1x and 2x for iPad)
- 29x29 (2x and 3x for iPhone, 1x and 2x for iPad)
- 40x40 (2x and 3x for iPhone, 1x and 2x for iPad)
- 60x60 (2x and 3x for iPhone)
- 76x76 (1x and 2x for iPad)
- 83.5x83.5 (2x for iPad Pro)
- 1024x1024 (App Store)

All these icons have been generated and configured in the project.

## Version Management

The app version is managed in two places:

1. `package.json` - Project version (currently 1.0.0)
2. `ios/App/App.xcodeproj/project.pbxproj` - iOS build settings

When updating the version:
1. Update `package.json`
2. Run `npx cap update ios` to sync versions

## Testing the iOS Build

To test the iOS build locally:

1. Open the project in Xcode:
```bash
cd ios
open App.xcworkspace
```

2. Select a simulator or connect a device
3. Build and run the application

## Archive and Export for App Store

To create an archive for App Store submission:

1. Open the project in Xcode
2. Select "Any iOS Device" as the target
3. Go to Product > Archive
4. Once archived, open the Organizer and select "Distribute App"
5. Choose "App Store Connect" and follow the prompts

## Troubleshooting

### Common Issues

1. **Missing CocoaPods**: If you see CocoaPods warnings, install CocoaPods:
```bash
sudo gem install cocoapods
cd ios/App
pod install
```

2. **Signing Issues**: Ensure your Apple Developer account is properly configured in Xcode

3. **Asset Generation Failures**: Ensure you have a proper 1024x1024 icon.png in the assets folder

### Build Errors

If you encounter build errors:

1. Clean the build folder in Xcode (Product > Clean Build Folder)
2. Delete the `ios/App/Pods` folder and run `pod install`
3. Ensure all dependencies are properly installed

## Additional Resources

- [Capacitor iOS Documentation](https://capacitorjs.com/docs/ios)
- [Apple App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)
- [Xcode Documentation](https://developer.apple.com/documentation/xcode)

For any issues with the iOS build, refer to these resources or contact the development team.