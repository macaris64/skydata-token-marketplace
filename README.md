# 🌌 SkyData Token Marketplace

**Astronomical Data & Copyright Tokenization Platform**

Transform telescope observations and astronomical datasets into tradeable digital assets on Stellar blockchain. The world's first marketplace for tokenized astronomical data licensing and revenue sharing.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Stellar](https://img.shields.io/badge/blockchain-Stellar-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/language-TypeScript-blue.svg)
![Rust](https://img.shields.io/badge/smart_contracts-Rust-orange.svg)
![Next.js](https://img.shields.io/badge/frontend-Next.js_14-black.svg)

---

## 🚀 **Project Overview**

SkyData Token Marketplace enables astronomers, observatories, and research institutions to:

- **Tokenize astronomical datasets** and high-resolution telescope imagery
- **License data access** to researchers and educational institutions
- **Generate revenue** from valuable observational data
- **Create transparent copyright management** through blockchain technology
- **Enable fractional ownership** of expensive dataset collections

### **Key Features**

🔭 **Asset Types Supported:**

- High-resolution telescope imagery (Hubble, JWST, ground-based observatories)
- Spectral analysis data and stellar measurements
- AI-processed astronomical catalogs and star charts
- Educational datasets with Skyfield-Astropy integration
- Real-time observatory feeds and time-series data

💰 **Financial Innovation:**

- Tokenized ownership and revenue sharing
- Automated royalty distribution to original observers
- Fractional licensing for expensive datasets
- Institutional-grade compliance and KYC verification

🌟 **Technology Stack:**

- **Blockchain:** Stellar Soroban Smart Contracts
- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **UI Library:** Shadcn/ui components
- **Authentication:** Freighter Wallet integration
- **Data Storage:** IPFS for metadata and documentation

---

## 📊 **Deployment Information**

### **Live Deployment - Stellar Testnet**

| Component              | Details                                                    |
| ---------------------- | ---------------------------------------------------------- |
| **Smart Contract ID**  | `CCPBNIF65NGD6A3ZERIEJD7JHKWY46PS2WBDZTHTMJGDP676RTPF7L34` |
| **Network**            | Stellar Testnet                                            |
| **Network Passphrase** | `Test SDF Network ; September 2015`                        |
| **Soroban RPC**        | `https://soroban-testnet.stellar.org`                      |
| **Frontend URL**       | `http://localhost:3000` (Development)                      |

### **Contract Hash & Verification**

```bash
# Contract WASM Hash
Contract Hash: CCPBNIF65NGD6A3ZERIEJD7JHKWY46PS2WBDZTHTMJGDP676RTPF7L34

# Stellar Explorer
https://stellar.expert/explorer/testnet/contract/CCPBNIF65NGD6A3ZERIEJD7JHKWY46PS2WBDZTHTMJGDP676RTPF7L34

# Deployer Account
Account: skydata-deployer
Type: Testnet funded account

# Initial Asset Metadata
Asset Name: Andromeda Galaxy Deep Field
Symbol: AGDF
Type: astronomical_image
Total Supply: 2,500,000 tokens
Valuation: $2,500,000 USD
```

---

## 🛠️ **Installation & Setup**

### **Prerequisites**

```bash
# Required Tools
- Node.js 18+ and npm
- Rust 1.70+
- Soroban CLI
- Freighter Wallet Browser Extension
```

### **1. Clone Repository**

```bash
git clone https://github.com/macaris64]/skydata-token-marketplace.git
cd skydata-token-marketplace
```

### **2. Install Soroban CLI**

```bash
# Install Rust (if not already installed)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y
source "$HOME/.cargo/env"

# Install Soroban CLI
cargo install --locked soroban-cli

# Add WebAssembly target
rustup target add wasm32v1-none
```

### **3. Smart Contract Setup**

```bash
# Build the contract
soroban contract build

# Set up testnet network
soroban network add testnet \
  --rpc-url https://soroban-testnet.stellar.org \
  --network-passphrase "Test SDF Network ; September 2015"

# Generate deployer account
soroban keys generate skydata-deployer

# Fund account with testnet tokens
soroban keys fund skydata-deployer

# Deploy contract
soroban contract deploy \
  --wasm target/wasm32v1-none/release/rwa_temp.wasm \
  --source skydata-deployer \
  --network testnet
```

### **4. Frontend Setup**

```bash
cd rwa-frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

---

## 🔧 **Contract Interactions**

### **Core Contract Functions**

```rust
// Initialize contract with astronomical data
soroban contract invoke \
  --id CCPBNIF65NGD6A3ZERIEJD7JHKWY46PS2WBDZTHTMJGDP676RTPF7L34 \
  --source skydata-deployer \
  -- initialize \
  --admin skydata-deployer \
  --asset_metadata '{
    "name": "Andromeda Galaxy Deep Field",
    "symbol": "AGDF",
    "asset_type": "astronomical_image",
    "description": "4K RGB high-resolution imaging data with H-alpha filtering",
    "valuation": "2500000",
    "last_valuation_date": 1704067200,
    "legal_doc_hash": "sky_data_observation_rights_2024"
  }' \
  --initial_supply 2500000

// Get contract metadata
soroban contract invoke \
  --id CCPBNIF65NGD6A3ZERIEJD7JHKWY46PS2WBDZTHTMJGDP676RTPF7L34 \
  --source skydata-deployer \
  -- get_metadata

// Check total supply
soroban contract invoke \
  --id CCPBNIF65NGD6A3ZERIEJD7JHKWY46PS2WBDZTHTMJGDP676RTPF7L34 \
  --source skydata-deployer \
  -- get_total_supply
```

### **Token Economics**

| Metric                 | Value                                 |
| ---------------------- | ------------------------------------- |
| **Total Supply**       | 2,500,000 AGDF tokens                 |
| **Price per Token**    | $1.00 USD                             |
| **Market Cap**         | $2,500,000 USD                        |
| **Minimum Investment** | $250 USD (250 tokens)                 |
| **Revenue Model**      | Licensing fees + royalty distribution |

---

## 🎨 **Frontend Customizations**

### **Design System**

**Color Palette:**

```css
/* Astronomical Theme Colors */
--primary: #1e3a8a; /* Deep space blue */
--secondary: #fbbf24; /* Star yellow */
--background: #ffffff; /* Clean white */
--muted: #1e293b; /* Dark matter gray */
--accent: #3b82f6; /* Nebula blue */
```

**Typography:**

- **Primary Font:** Inter (modern, clean readability)
- **Monospace:** Geist Mono (for addresses and hashes)

**Icons & Themes:**

- 🌌 Deep space and cosmic imagery
- 🔭 Telescope and observatory icons
- 📡 Satellite and data transmission
- 🌟 Star and celestial body symbols

### **Key Pages Customized:**

1. **Dashboard** (`/`) - Portfolio overview with astronomical assets
2. **Marketplace** (`/marketplace`) - Browse available telescope datasets
3. **Tokenization** (`/tokenize`) - List new astronomical datasets
4. **Transfer** (`/transfer`) - Send tokens between verified researchers

---

## 📖 **Usage Guide**

### **For Data Providers (Observatories)**

1. **Connect Freighter Wallet** and complete KYC verification
2. **Navigate to Tokenization** page and select asset type
3. **Upload documentation:**
   - Observation rights and usage agreements
   - Quality certification from accredited observatory
   - Calibration data and technical specifications
4. **Configure licensing:**
   - Set token supply and pricing structure
   - Define minimum access requirements
   - Specify usage restrictions and researcher requirements
5. **Deploy dataset** and start earning licensing revenue

### **For Researchers & Institutions**

1. **Browse Marketplace** for available astronomical datasets
2. **Review dataset details:**
   - Quality metrics and technical specifications
   - Licensing terms and usage rights
   - Pricing and access requirements
3. **Purchase access tokens** with required licensing fees
4. **Download data** and access associated research tools
5. **Transfer tokens** to collaborators or sell on secondary market

### **Compliance Requirements**

- ✅ **KYC Verification** - Identity verification for all users
- ✅ **Institution Verification** - Accreditation for educational access
- ✅ **Jurisdiction Compliance** - Regional copyright and data laws
- ✅ **Usage Monitoring** - Automated compliance checking

---

## 🧪 **Testing**

### **Smart Contract Tests**

```bash
# Run contract tests
cargo test

# Test specific functions
cargo test test_initialize
cargo test test_transfer
cargo test test_whitelist
```

### **Frontend Tests**

```bash
cd rwa-frontend

# Run unit tests
npm test

# Run end-to-end tests
npm run test:e2e

# Type checking
npm run type-check
```

### **Manual Testing Checklist**

- [ ] Wallet connection and disconnection
- [ ] Contract initialization with test data
- [ ] Tokenization workflow (all 5 steps)
- [ ] Marketplace browsing and filtering
- [ ] Token transfer between addresses
- [ ] Compliance verification process

---

## 🚀 **Deployment Guide**

### **Production Deployment**

1. **Prepare for Mainnet:**

```bash
# Add mainnet network
soroban network add mainnet \
  --rpc-url https://soroban.stellar.org \
  --network-passphrase "Public Global Stellar Network ; September 2015"

# Generate production keypair (SECURE STORAGE!)
soroban keys generate production-deployer
```

2. **Deploy to Mainnet:**

```bash
# Fund production account
# (Transfer XLM from funded account)

# Deploy production contract
soroban contract deploy \
  --wasm target/wasm32v1-none/release/rwa_temp.wasm \
  --source production-deployer \
  --network mainnet
```

3. **Frontend Deployment:**

```bash
cd rwa-frontend

# Build for production
npm run build

# Deploy to Vercel/Netlify
npm run deploy
```

### **Environment Variables**

```bash
# .env.local
NEXT_PUBLIC_STELLAR_NETWORK=mainnet
NEXT_PUBLIC_CONTRACT_ID=YOUR_MAINNET_CONTRACT_ID
NEXT_PUBLIC_SOROBAN_RPC_URL=https://soroban.stellar.org
```

---

## 📁 **Project Structure**

```
astro-copyrights/
├── src/                          # Rust smart contract source
│   └── lib.rs                    # Main contract logic
├── rwa-frontend/                 # Next.js frontend application
│   ├── app/                      # App router pages
│   │   ├── page.tsx              # Dashboard (customized)
│   │   ├── marketplace/          # Asset marketplace
│   │   ├── tokenize/             # Dataset tokenization
│   │   └── transfer/             # Token transfers
│   ├── components/               # Reusable UI components
│   │   ├── layout/               # Header, navigation
│   │   └── ui/                   # Shadcn/ui components
│   ├── stores/                   # State management
│   │   ├── wallet.ts             # Wallet connection
│   │   └── contract.ts           # Contract interactions
│   └── lib/                      # Utilities and helpers
│       └── stellar.ts            # Stellar SDK utilities
├── target/                       # Compiled contract artifacts
├── Cargo.toml                    # Rust dependencies
├── PDR-FRONTEND-TEMP.md          # Project Design Requirements
└── README.md                     # This file
```

---

## 🤝 **Contributing**

We welcome contributions from the astronomical and blockchain communities!

### **Development Workflow**

1. **Fork the repository** and create a feature branch
2. **Make changes** following our coding standards:
   - Rust: Follow `rustfmt` formatting
   - TypeScript: Use ESLint and Prettier
   - Commit messages: Use conventional commits
3. **Test thoroughly** with both unit and integration tests
4. **Submit a pull request** with detailed description

### **Areas for Contribution**

- 🔭 Additional astronomical asset types
- 📊 Advanced data visualization components
- 🛡️ Enhanced security and compliance features
- 🌍 Multi-language internationalization
- 📱 Mobile-responsive improvements
- 🔌 Integration with more observatory APIs

---

## 📄 **License & Legal**

### **Open Source License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### **Important Legal Notes**

- This is experimental software for educational purposes
- Not financial or investment advice
- Astronomical data may have additional copyright restrictions
- Comply with local regulations regarding tokenized assets
- Observatories retain original data ownership rights

### **Disclaimer**

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. Users are responsible for compliance with applicable laws and regulations.

---

## 📞 **Support & Contact**

### **Technical Support**

- 📧 Email: support@skydata-marketplace.com
- 💬 Discord: [SkyData Community](https://discord.gg/skydata)
- 🐛 Issues: [GitHub Issues](https://github.com/[username]/astro-copyrights/issues)

### **Research Partnerships**

For observatory partnerships and institutional licensing:

- 🌟 Partnerships: partnerships@skydata-marketplace.com
- 🔬 Research: research@skydata-marketplace.com

### **Community Resources**

- 📚 Documentation: [docs.skydata-marketplace.com](https://docs.skydata-marketplace.com)
- 🎓 Tutorials: [YouTube Channel](https://youtube.com/@skydatamarketplace)
- 📰 Blog: [blog.skydata-marketplace.com](https://blog.skydata-marketplace.com)

---

## 🌟 **Acknowledgments**

Special thanks to:

- **Stellar Development Foundation** for Soroban smart contract platform
- **NASA & ESA** for inspiration from open astronomy data initiatives
- **Hubble Space Telescope** and **James Webb Space Telescope** teams
- **Astropy Community** for astronomical data processing tools
- **Open source contributors** who made this project possible

---

**Built with ❤️ for the astronomical research community**

🚀 _"Tokenizing the cosmos, one dataset at a time"_ 🌌

---

_Last updated: January 2025_
_Contract Version: v1.0.0_
_Network: Stellar Testnet_
