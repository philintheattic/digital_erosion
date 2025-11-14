# Digital Erosion
Visit the project website: [Digital Erosion](https://philintheattic.github.io/digital_erosion/)
## Description
The project arose from a curiosity about video codecs and how they work. What would happen if I took a heavily compressed format like h.264 and compress it again and again over and over a dozen or even a hundred times?
## How does it work?
The tool uses a simple ffmpeg command to encode a given video file with the worst quality settings possible. This first step alone yields interesting results. Compression artifacts get introduced as the encoder struggles to keep the information within bitrate limits.
But it doesn't stop there. Based on the number of iterations that you specify the tool takes the generated output video file and uses it as the input for the next encoding step and so on. 
This results in crazy artifacts and all kinds of beautiful pixel mush.
## Why would I want to do that to my videos?
Think of it as a game of telephone where you start with some kind of message or information and then put that through a transmission chain. Is there still some discernable meaning at the end? What do you make of it? What can we, as a society, make of all the information that is inevitably lost in transmission?

# Windows Installation

Just download the executable under releases and you should be good to go.

# macOS Installation

(This part was written for me by claude.ai)

## Opening the App on macOS

Since this app is not signed with an Apple Developer certificate, macOS will block it from opening by default. This is normal for apps distributed outside the Mac App Store.

### Method 1: Terminal Command (Easiest)

1. Download and move `VideoBreaker.app` to your desired location (e.g., Applications folder)
2. Open **Terminal** (found in Applications → Utilities)
3. Type the following command and press Enter:
   ```bash
   xattr -cr /Applications/VideoBreaker.app
   ```
   *(Adjust the path if you placed the app elsewhere)*
4. The app will now open normally when double-clicked

**Tip:** You can drag the app from Finder into Terminal to auto-fill the path instead of typing it.

### Method 2: System Preferences

1. Try to open `VideoBreaker.app` by double-clicking it
2. Click **OK** when you see the security warning
3. Open **System Preferences** → **Security & Privacy**
4. Click the **🔒 lock icon** at the bottom left and enter your password
5. Look for the message about VideoBreaker being blocked
6. Click **"Open Anyway"** next to that message
7. Confirm by clicking **Open** in the popup dialog

**Note:** The "Open Anyway" button only appears for about an hour after the blocked attempt. If you don't see it, try opening the app again.

### Method 3: Right-Click Open

1. Right-click (or Control+click) on `VideoBreaker.app`
2. Select **Open** from the menu
3. Click **Open** in the confirmation dialog

This method may require multiple attempts on some macOS versions.

---

## Why This Happens

macOS Gatekeeper blocks apps from unidentified developers as a security measure. This app is safe to use - the source code is available in this repository for verification. To avoid these warnings entirely, I would need to purchase an Apple Developer certificate ($99/year), which isn't practical for a free open-source project.

## Requirements

- macOS 10.13 (High Sierra) or later
- No additional software installation required - FFmpeg is bundled with the app

## Troubleshooting

If you continue to have issues opening the app:
- Make sure you've moved it out of the Downloads folder
- Try moving it to the Applications folder
- Ensure you have admin privileges on your Mac
- Check that your macOS version is supported