# Breakpoint Tester Chrome Extension
## BBC Edition

The Breakpoint Tester chrome extension allows to quickly set your window size to a predefined breakpoint width, and displays the current breakpoint group in the Icon.

Breakpoint Tester BBC Edition uses the breakpoints commonly used in the BBC
- <= 400 px (Mobile)
- <= 600 px (Tablet)
- <= 1008 px (Laptop)
- > 1008 px (Desktop)

## Installation
- Get the [latest release](https://github.com/bbc/BreakpointTester/releases)
- Drag into Chrome
- Done. Possibly have to restart Chrome

## Roadmap
- Define breakpoints centrally (setting page?)

## Release History

### v1.1 - BBC Edition
**April 22, 2016**
+ Change breakpoint to BBC groups (400, 600, 1008)
+ Show current BG in icon on load and window resize
+ Remove Google Analytics logging

### v1.0.4
**April 18, 2014**
+ Added a history of the 5 most recently used custom breakpoints.
+ Adjusted the layout of the popup to allow for more features:
	+ The overall layout is much more compact to allow for better use of the real estate available to the popup.
	+ Added a sidebar that contains recently used breakpoints for quick reference and fast re-use.
	+ Made the gray a little darker (from #DDD to #BBB) to provide better contrast/readability on "less than amazing" screens.
+ Added support for multiple monitors. When selecting a breakpoint the Chrome window will no longer jump to the primary monitor, it will use whichever monitor it is currently on.
+ Added the ability to determine if the user prefers the right or left side of the screen and resize with this preference in mind (might make this a user-definable setting in the future)
+ Fixed bug in Chrome v34 that pushed the slider position label and button down under the slider.
+ Removed unnecessary permissions

### v1.0.2
**Apr 7, 2014**
+ Fixed references to fonts in CSS pointing to wrong file location. Fonts should load properly when not installed on the local machine.

### v1.0.1
**Mar 31, 2014**
+ Enabled Google Analytics to track usage of presets, custom breakpoints, etc. to facilitate future development.

### v1.0.0
**Mar 21, 2014**
+ Switched to a lighter theme to better work with the default Chrome UI
+ Made some minor modifications to the popup GUI to support various new features
+ Fixed the breakpoint calculation to account for the Chrome window/frame. Tested on Windows 8.
+ Added the Custom Breakpoint slider to allow manual selection of a custom breakpoint.
+ Fixed the resizing of the Chrome window from a maximized state bug (overflow on top/bottom) on Windows 8.

### v0.1.0
**Mar 20, 2014**
+ Initial release
+ It works but there remains quite a bit of tweaking and polishing to do.