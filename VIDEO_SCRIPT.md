# IT313 - Laboratory 6: Video Demonstration Script
**Student:** John Mark Yabut  
**Course & Section:** IT 313  
**Repository:** https://github.com/mrxcck/mrxcck-IT313_Yabut_JohnMark_CoreComponents  
**Estimated Time:** 3 to 4.5 Minutes  

---

## 🎬 [0:00 – 0:45] 1. Introduction & Problem Statement
*(Action: Show VS Code Explorer or Title Screen)*

> "Good day, sir and classmates! My name is John Mark Yabut from section [insert your section here].
> 
> Today, I am presenting my solution for Laboratory 6 in IT 313: Mobile Programming — *React Native Core Components in Action*.
> 
> The problem requires us to build a Student Directory Viewer for academic advising. Our goal is to display a list of students with their photos and details, implement a real-time search filter, and allow the adviser to toggle an advising flag on each card using React Native's core components."

---

## 🎬 [0:45 – 1:45] 2. React Native Core Components & Architecture
*(Action: Open and show `StudentCard.js` and `StudentDirectory.js`)*

> "To solve this, we used six fundamental React Native components:
> 
> 1. **`View`**: Serves as our layout container, utilizing Flexbox with `flexDirection: 'row'` to place the student photo and text side by side.
> 2. **`Text`**: Used for all typography, including the student name (bold) and year level.
> 3. **`Image`**: Displays remote student avatars. Crucially, remote images in React Native require explicit `width` and `height` in StyleSheet, so we gave it 50 by 50 pixels with rounded corners.
> 4. **`ScrollView`**: Provides vertical scrolling for the card list.
> 5. **`TextInput`**: Captures our search queries in real time.
> 6. **`Pressable`**: Handles touch interaction for the 'Flag for Advising' button using a dynamic style function.
> 
> Our architecture is split into two components: `StudentDirectory` as the stateful parent managing the student list and search state, and `StudentCard` as the child presentational component."

---

## 🎬 [1:45 – 2:45] 3. Live Demo & Advising Flag Interaction
*(Action: Switch to the running app in browser/emulator, click flags, and type in search)*

> "Now, let's look at the working interface.
> 
> Here is our header and the list of student cards. When I click on the flag button for Bea Santos or Dex Alonzo, notice how the button immediately provides visual feedback, changes color to amber, and updates the text to '★ Flagged'. Clicking it again toggles it back to '☆ Flag'.
> 
> This works because `StudentCard` passes the toggle action up to the parent using the `onToggleFlag` prop, which updates the student's boolean flag in state immutably.
> 
> Next, when I type in the search box — for example, 'Ana' or 'Dex' — the list instantly narrows down only to matching students. The filtering is completely case-insensitive using JavaScript's `.toLowerCase().includes()` method."

---

## 🎬 [2:45 – 3:45] 4. Requirement 6: Uncontrolled Input Experiment
*(Action: In `StudentDirectory.js`, comment out `value` and `onChangeText`, then type in search)*

> "Now, I will demonstrate the experiment required in Requirement 6: observing an uncontrolled `TextInput`.
> 
> In our code, `TextInput` is a *controlled* component because it is bound to `value` and `onChangeText`. When we temporarily remove `value` and `onChangeText`, the input becomes *uncontrolled*.
> 
> When we type into an uncontrolled input, the letters still appear on screen because the native mobile OS manages its own text buffer. However, because `onChangeText` is missing, our React state never updates. Since state doesn't update, the component never re-renders, and the student list remains completely unfiltered.
> 
> Once we restore `value` and `onChangeText`, it becomes controlled again, and typing filters the list in real time."

---

## 🎬 [3:45 – 4:30] 5. Common Error & Conclusion
*(Action: Show GitHub repository page in browser)*

> "A common error encountered when solving this is remote images not rendering on screen. In web development with HTML, `<img>` tags automatically size themselves based on the downloaded file. But in React Native, remote images have no default size. If you forget to set explicit `width` and `height`, the image renders at 0 by 0 pixels and stays completely invisible. We solved this by defining fixed dimensions in `StyleSheet.create`.
> 
> Finally, my code is committed and published to GitHub. My public repository URL is:
> 
> https://github.com/mrxcck/mrxcck-IT313_Yabut_JohnMark_CoreComponents
> 
> It contains `StudentCard.js`, `StudentDirectory.js`, `App.js`, and the required `README.md`.
> 
> Thank you very much for listening, and have a great day!"
