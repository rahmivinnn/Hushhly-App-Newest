#!/usr/bin/env node

/**
 * iOS Build Script for Hushhly
 * 
 * This script automates the process of building and preparing the iOS app
 * for distribution. It should be run from the project root directory.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m'
};

// Log functions
const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset} ${msg}`),
  success: (msg) => console.log(`${colors.green}✔${colors.reset} ${msg}`),
  warn: (msg) => console.log(`${colors.yellow}⚠${colors.reset} ${msg}`),
  error: (msg) => console.log(`${colors.red}✖${colors.reset} ${msg}`)
};

// Execute command with error handling
function execCommand(command, options = {}) {
  try {
    log.info(`Executing: ${command}`);
    const result = execSync(command, { 
      stdio: 'inherit', 
      ...options 
    });
    return result;
  } catch (error) {
    log.error(`Command failed: ${command}`);
    process.exit(1);
  }
}

// Check if required files exist
function checkPrerequisites() {
  log.info('Checking prerequisites...');
  
  const requiredFiles = [
    'package.json',
    'ios/App/App.xcodeproj/project.pbxproj'
  ];
  
  for (const file of requiredFiles) {
    if (!fs.existsSync(file)) {
      log.error(`Required file not found: ${file}`);
      process.exit(1);
    }
  }
  
  log.success('All prerequisites met');
}

// Get current version from package.json
function getCurrentVersion() {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  return packageJson.version;
}

// Build the web application
function buildWebApp() {
  log.info('Building web application...');
  execCommand('npm run build');
  log.success('Web application built successfully');
}

// Copy web assets to iOS project
function copyAssets() {
  log.info('Copying web assets to iOS project...');
  execCommand('npx cap copy ios');
  log.success('Assets copied successfully');
}

// Update iOS project
function updateIOS() {
  log.info('Updating iOS project...');
  execCommand('npx cap update ios');
  log.success('iOS project updated successfully');
}

// Generate iOS assets
function generateAssets() {
  log.info('Generating iOS assets...');
  if (fs.existsSync('assets/icon.png')) {
    execCommand('npx capacitor-assets generate --ios');
    log.success('iOS assets generated successfully');
  } else {
    log.warn('assets/icon.png not found, skipping asset generation');
  }
}

// Main build process
async function buildIOS() {
  try {
    log.info('Starting iOS build process...');
    
    // Check prerequisites
    checkPrerequisites();
    
    // Get current version
    const version = getCurrentVersion();
    log.info(`Current app version: ${version}`);
    
    // Build web app
    buildWebApp();
    
    // Generate assets
    generateAssets();
    
    // Copy assets to iOS
    copyAssets();
    
    // Update iOS project
    updateIOS();
    
    log.success('iOS build process completed successfully!');
    log.info('Next steps:');
    log.info('1. Transfer the project to a Mac');
    log.info('2. Open ios/App/App.xcworkspace in Xcode');
    log.info('3. Configure signing and capabilities');
    log.info('4. Test the app on simulator or device');
    log.info('5. Archive and upload to App Store Connect');
    
  } catch (error) {
    log.error('Build process failed:');
    log.error(error.message);
    process.exit(1);
  }
}

// Run the build process
if (require.main === module) {
  buildIOS();
}

module.exports = {
  buildIOS,
  buildWebApp,
  copyAssets,
  updateIOS,
  generateAssets
};