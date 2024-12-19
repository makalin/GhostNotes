# GhostNotes 👻

A minimalist, distraction-free note-taking app where your thoughts fade away like ghosts. Notes automatically vanish after your chosen duration, helping you focus on what matters now.

## Features ✨

- **Ephemeral Notes**: Notes automatically vanish after 1 hour, 1 day, or 1 week
- **Permanent Pins**: Keep important notes forever by pinning them
- **Distraction-Free**: Clean, minimal interface focuses on your current thoughts
- **Time Awareness**: Clear countdown shows when each note will vanish
- **Offline-First**: Works without internet, syncs when connected
- **Cross-Platform**: Available for Windows, macOS, and Linux

## Installation 🚀

```bash
# Clone the repository
git clone https://github.com/yourusername/ghost-notes.git

# Navigate to project directory
cd ghost-notes

# Install dependencies
npm install

# Start the development server
npm run dev

# Build the desktop app
npm run build
```

## Development Setup 🛠️

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
DB_NAME=ghost_notes
SYNC_INTERVAL=300000
```

### Project Structure

```
ghost-notes/
├── src/
│   ├── main/           # Electron main process
│   ├── renderer/       # React frontend
│   ├── shared/         # Shared utilities
│   └── server/         # Optional sync server
├── public/             # Static assets
├── scripts/           # Build scripts
└── package.json
```

## Technology Stack 💻

- **Frontend**: React, TailwindCSS
- **Storage**: IndexedDB
- **Desktop**: Electron
- **Server** (optional): Node.js
- **UI Components**: shadcn/ui

## Usage 📝

1. **Creating Notes**
   - Type your note in the text area
   - Select duration (1 hour, 1 day, or 1 week)
   - Click "Add Note" or press Ctrl/Cmd + Enter

2. **Managing Notes**
   - Pin/Unpin: Click the pin icon
   - Delete: Click the trash icon
   - View remaining time: Check the clock indicator

3. **Keyboard Shortcuts**
   ```
   Ctrl/Cmd + N: New Note
   Ctrl/Cmd + P: Pin/Unpin Note
   Ctrl/Cmd + D: Delete Note
   ```

## Contributing 🤝

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting PR

## Testing 🧪

```bash
# Run all tests
npm test

# Run specific test suite
npm test -- --grep "Note Management"

# Generate coverage report
npm run test:coverage
```

## Building 🏗️

```bash
# Build for current platform
npm run build

# Build for specific platform
npm run build:mac
npm run build:win
npm run build:linux

# Build all platforms
npm run build:all
```

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments 🙏

- Icons by [Lucide](https://lucide.dev/)
- UI Components by [shadcn/ui](https://ui.shadcn.com/)
- Inspired by the concept of impermanence
