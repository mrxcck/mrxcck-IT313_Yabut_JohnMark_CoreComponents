# IT313 - Laboratory 6: Student Directory Viewer
**React Native Core Components in Action**

**Student:** John Mark Yabut  
**Repository Name:** `IT313_Yabut_JohnMark_CoreComponents`  

## Overview & Problem Statement
The IT313 registrar has provided a list of students requiring academic advising this term. This application is an Expo (React Native) screen that allows an academic adviser to browse, search, and flag students in need of advising.

The goal of this laboratory is to demonstrate the practical application of React Native's core components:
- Structuring UI layout with **`View`**, **`Text`**, and **`Image`**
- Building scrollable and searchable lists with **`ScrollView`** and **`TextInput`**
- Creating dynamic, interactive touch controls using **`Pressable`**

---

## Component Architecture

The application is structured into two primary components to maintain modularity, separation of concerns, and unidirectional data flow:

```
App.js (Entry Point)
└── StudentDirectory.js (Parent Component - State & Logic Container)
    ├── Header (View, Text)
    ├── Search Box (View, Controlled TextInput)
    └── ScrollView (Scrollable List Container)
        ├── StudentCard (Student #1) (View, Image, Text, Pressable)
        ├── StudentCard (Student #2)
        ├── StudentCard (Student #3)
        ├── StudentCard (Student #4)
        └── StudentCard (Student #5)
```

### 1. `StudentCard` (Presentational Component)
- **Location:** `StudentCard.js`
- **Purpose:** Responsible solely for rendering a single student's card layout.
- **Props Received:**
  - `id` *(string)*: Unique identifier for the student.
  - `name` *(string)*: Student's full name.
  - `year` *(string)*: Academic year level (e.g., "3rd Year").
  - `photoUrl` *(string)*: Remote URL pointing to the student's avatar image.
  - `flagged` *(boolean)*: Advising flag status.
  - `onToggleFlag` *(function)*: Callback invoked when the flag button is pressed.
- **Key Details:**
  - Uses Flexbox (`flexDirection: 'row'`, `alignItems: 'center'`) to align the photo and text details side by side.
  - The `Image` component defines explicit `width: 50` and `height: 50` along with `borderRadius: 25` in `StyleSheet.create`.
  - The `Pressable` uses a style function `({ pressed }) => [...]` to provide tactile feedback on press and dynamic color changes depending on `flagged`.

### 2. `StudentDirectory` (Stateful Container Component)
- **Location:** `StudentDirectory.js`
- **Purpose:** Manages the application state, search query, conditional filtering, and list rendering.
- **State Managed:**
  - `students`: An array of student objects containing `id`, `name`, `year`, `photoUrl`, and `flagged`.
  - `searchQuery`: A string bound to the `TextInput` for real-time searching.
- **Key Details:**
  - Filters students case-insensitively using `.toLowerCase().includes(...)`.
  - Renders cards within a `ScrollView` using `.map()` with a stable `key={student.id}`.
  - Passes `handleToggleFlag` down to each `StudentCard` to update `flagged` status immutably in parent state.

---

## React Native Core Components Used

| Core Component | Purpose in this App |
| :--- | :--- |
| **`View`** | Acts as the foundational container (div equivalent) for screen structure, flexbox layout, and grouping components. |
| **`Text`** | Renders all typographical elements including headers, student names, year levels, and button titles. |
| **`Image`** | Displays student avatars from remote URLs with explicit dimensions and rounded borders. |
| **`ScrollView`** | Provides vertical scrolling capabilities for lists exceeding the screen viewport. |
| **`TextInput`** | Provides a controlled input field for entering real-time student search queries. |
| **`Pressable`** | Handles touch interactions with a dynamic style function for visual feedback upon press. |

---

## Controlled vs. Uncontrolled TextInput Experiment (Requirement 6)

In React Native:
- **Controlled Component:** The input's `value` is bound directly to React state (`searchQuery`), and user input triggers `onChangeText` to update state. React is the single source of truth. Every keystroke updates state, triggering a re-render that recalculates `filteredStudents`.
- **Uncontrolled Component:** If `value` and `onChangeText` are removed, the native platform handles the input's visual text independently. However, React state is never updated, meaning `filteredStudents` never re-evaluates. The student list remains unfiltered regardless of what is typed.

### How to reproduce in your video:
1. In `StudentDirectory.js`, comment out or remove `value={searchQuery}` and `onChangeText={setSearchQuery}` from `<TextInput>`.
2. Type a name (e.g., "Dex") into the search box in the simulator/browser.
3. Observe that the text displays in the box, but the list below does **not** filter.
4. Restore `value={searchQuery}` and `onChangeText={setSearchQuery}`.
5. Notice that typing immediately filters the list as expected.

---

## Common Problems & Resolutions (Video Discussion)

1. **Remote Image not appearing on screen:**
   - *Cause:* Unlike web browsers where `<img>` tags calculate intrinsic dimensions from the downloaded file, React Native remote images (`source={{ uri: ... }}`) **must** have explicit `width` and `height` styles defined. Without them, the image renders with `0x0` dimensions and is completely invisible.
   - *Resolution:* Add `width: 50, height: 50` to the image style in `StyleSheet.create`.

2. **Pressable dynamic style syntax error:**
   - *Cause:* Supplying a plain object or array to `style` instead of a function when attempting to read `pressed`.
   - *Resolution:* Use the style function syntax: `style={({ pressed }) => [styles.base, pressed && styles.pressed]}`.

3. **List item key warning:**
   - *Cause:* Omitting the `key` prop or using non-stable array indices (`key={index}`) when mapping inside `ScrollView`.
   - *Resolution:* Use a unique, stable key from the data model: `key={student.id}`.

---

## How to Run the App

### Prerequisites
- Node.js (v18 or newer recommended)
- Git
- Expo Go app on your physical mobile device (optional, for mobile testing)

### Installation & Launch

1. **Clone or navigate to the repository:**
   ```bash
   cd IT313_Yabut_JohnMark_CoreComponents
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx expo start
   ```

4. **Run on your preferred platform:**
   - Press **`w`** in the terminal to open in your web browser.
   - Scan the QR code using the **Expo Go** app on Android or Camera app on iOS.
   - Press **`a`** to open an Android emulator or **`i`** for an iOS simulator.

---

## Git & GitHub Submission Guide

```bash
# 1. Initialize git
git init

# 2. Add all files
git add .

# 3. Commit files
git commit -m "feat: complete Laboratory 6 Student Directory with React Native Core Components"

# 4. Create and push to GitHub repository
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/IT313_Yabut_JohnMark_CoreComponents.git
git push -u origin main
```
