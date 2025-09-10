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