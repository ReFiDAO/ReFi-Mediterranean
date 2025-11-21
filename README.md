# ReFi Mediterranean Website

Website and knowledge base for ReFi Mediterranean - A coordination of ReFi nodes serving the Mediterranean bioregion.

**Website:** [refidao.github.io/ReFi-Mediterranean](https://refidao.github.io/ReFi-Mediterranean)

## About

ReFi Mediterranean connects regenerative finance initiatives across the Mediterranean region, supporting projects that leverage Web3 for real-world impact and address local needs.

## Features

- **Mediterranean Ocean Theme** - Custom theme inspired by the Mediterranean Sea
- **Bioregional Focus** - Supporting regenerative initiatives across Mediterranean countries
- **Community Coordination** - Connecting local initiatives with global ReFi networks
- **Knowledge Base** - Documentation and resources for the Mediterranean ReFi community

## Development

### Prerequisites

- Node.js v22+ (see `.node-version` for the specific version)
- npm v10.9.2+

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npx quartz build --serve
```

The site will be available at `http://localhost:8080`

### Build for Production

```bash
npx quartz build
```

## Project Structure

```
ReFi-Mediterranean/
├── content/                    # Markdown content files
│   ├── index.md               # Homepage
│   ├── about/                 # About ReFi Mediterranean
│   ├── initiatives/           # Regional initiatives
│   ├── resources/             # Resources and documentation
│   └── community/             # Community information
├── quartz/                    # Quartz framework files
├── quartz.config.ts          # Quartz configuration
└── package.json              # Dependencies
```

## Deployment

The site is automatically deployed via GitHub Actions when changes are pushed to the `main` branch.

- **GitHub Pages:** https://refidao.github.io/ReFi-Mediterranean
- **Repository:** https://github.com/ReFiDAO/ReFi-Mediterranean

## Customization

### Theme Colors

The site uses a Mediterranean Ocean theme with colors defined in `quartz/styles/custom.scss`:

- **Primary Dark:** `#0D4A6B` - Deep Mediterranean blue
- **Primary Medium:** `#1E7A9F` - Mediterranean blue
- **Primary Light:** `#4AB3D9` - Light aqua
- **Secondary:** `#D4A574` - Warm gold
- **Tertiary:** `#6B8E23` - Olive green

See [CUSTOMIZATIONS.md](CUSTOMIZATIONS.md) for detailed customization information.

## Upstream Sync

This repository is based on the [quartz-refi-template](https://github.com/ReFiDAO/quartz-refi-template).

To sync improvements from the template:

```bash
npm run sync:upstream
# or manually
git fetch upstream
git merge upstream/main
```

See [docs/UPSTREAM-SYNC.md](docs/UPSTREAM-SYNC.md) for detailed instructions.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on contributing to this project.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Contact

For questions or contributions, contact us through:
- **GitHub:** https://github.com/ReFiDAO/ReFi-Mediterranean
- **ReFi DAO:** https://refidao.com

---

Built with 💚 by the ReFi Mediterranean community
