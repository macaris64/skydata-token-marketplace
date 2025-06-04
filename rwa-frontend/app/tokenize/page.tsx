'use client';

import { useState } from 'react';
import { useWalletStore } from '@/stores/wallet';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Telescope, 
  FileText, 
  Shield, 
  Check,
  ArrowRight,
  ArrowLeft,
  Upload,
  AlertCircle,
  Database,
  Coins,
  Calculator,
  Info,
  Star,
  Satellite,
  Briefcase
} from 'lucide-react';
import { formatCurrency } from '@/lib/stellar';
import { Progress } from '@/components/ui/progress';

const DATA_TYPES = [
  {
    id: 'image',
    name: '🖼️ Astronomical Images',
    description: 'High-resolution telescope imagery and deep field observations',
    icon: Telescope,
    minValue: 100000,
    examples: ['Galaxy deep fields', 'Nebula photography', 'Planet observations', 'Star field images']
  },
  {
    id: 'spectrum',
    name: '📊 Spectrum Analysis',
    description: 'Spectral data and analysis from various celestial objects',
    icon: Star,
    minValue: 50000,
    examples: ['Stellar spectra', 'Exoplanet atmospheres', 'Galactic compositions', 'Redshift measurements']
  },
  {
    id: 'catalog',
    name: '📚 Data Catalogs',
    description: 'Comprehensive astronomical catalogs and databases',
    icon: Database,
    minValue: 150000,
    examples: ['Star catalogs', 'Exoplanet databases', 'Galaxy classifications', 'Variable star data']
  },
  {
    id: 'educational_set',
    name: '🎓 Educational Datasets',
    description: 'Interactive educational datasets with Skyfield-Astropy integration',
    icon: Satellite,
    minValue: 75000,
    examples: ['Interactive sky maps', 'Orbital simulations', 'Celestial mechanics', 'Educational packages']
  }
];

const LISTING_STEPS = [
  {
    id: 1,
    title: '🔭 Data Information',
    description: 'Provide basic information about your astronomical dataset'
  },
  {
    id: 2,
    title: '📜 Copyright & Documentation',
    description: 'Upload observation rights and quality certification documents'
  },
  {
    id: 3,
    title: '💰 License Structure',
    description: 'Define licensing economics and access distribution'
  },
  {
    id: 4,
    title: '⚖️ Access Requirements',
    description: 'Configure researcher requirements and usage restrictions'
  },
  {
    id: 5,
    title: '🚀 Review & Publish',
    description: 'Review all details and publish your dataset'
  }
];

export default function TokenizePage() {
  const { isConnected } = useWalletStore();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Data Information
    dataType: '',
    dataName: '',
    observatory: '',
    description: '',
    totalValue: '',
    
    // Step 2: Copyright Documentation
    observationRights: null as File | null,
    qualityCertification: null as File | null,
    calibrationData: null as File | null,
    
    // Step 3: License Structure
    licenseSymbol: '',
    totalSupply: '',
    pricePerLicense: '',
    minAccess: '',
    
    // Step 4: Access Requirements
    researcherVerification: true,
    institutionOnly: false,
    usageRestrictions: '',
    
    // Step 5: Launch settings
    releaseDate: '',
    licenseGoal: '',
    availabilityDeadline: ''
  });

  const updateFormData = (field: string, value: string | boolean | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (currentStep < LISTING_STEPS.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const calculateLicenseEconomics = () => {
    if (!formData.totalValue || !formData.totalSupply) return null;
    
    const totalVal = parseFloat(formData.totalValue);
    const supply = parseFloat(formData.totalSupply);
    const pricePerLicense = totalVal / supply;
    
    return {
      pricePerLicense: pricePerLicense.toFixed(2),
      marketCap: totalVal,
      minAccessLicenses: formData.minAccess ? Math.ceil(parseFloat(formData.minAccess) / pricePerLicense) : 0
    };
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-semibold mb-4 block">🌌 Data Type</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {DATA_TYPES.map((type) => {
                  const Icon = type.icon;
                  return (
                    <Card 
                      key={type.id}
                      className={`cursor-pointer transition-all ${
                        formData.dataType === type.id 
                          ? 'ring-2 ring-primary bg-primary/5' 
                          : 'hover:shadow-md'
                      }`}
                      onClick={() => updateFormData('dataType', type.id)}
                    >
                      <CardContent className="p-6 text-center">
                        <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <h3 className="font-semibold mb-2">{type.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                        <Badge variant="outline">Min: {formatCurrency(type.minValue.toString())}</Badge>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="dataName">📡 Dataset Name</Label>
                <Input
                  id="dataName"
                  placeholder="e.g., Andromeda Galaxy Deep Field"
                  value={formData.dataName}
                  onChange={(e) => updateFormData('dataName', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="observatory">🔭 Observatory/Source</Label>
                <Input
                  id="observatory"
                  placeholder="e.g., Hubble Space Telescope"
                  value={formData.observatory}
                  onChange={(e) => updateFormData('observatory', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="description">🌌 Dataset Description</Label>
              <Textarea
                id="description"
                placeholder="Detailed description of your dataset, its features, and investment potential..."
                value={formData.description}
                onChange={(e) => updateFormData('description', e.target.value)}
                className="min-h-24"
              />
            </div>

            <div>
              <Label htmlFor="totalValue">💰 Total Dataset Value (USD)</Label>
              <Input
                id="totalValue"
                type="number"
                placeholder="2500000"
                value={formData.totalValue}
                onChange={(e) => updateFormData('totalValue', e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Based on professional appraisal or market valuation
              </p>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertDescription>
                All documents must be notarized and verified by our legal team before tokenization approval.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Observation Rights
                  </CardTitle>
                  <CardDescription>
                    Observation rights and usage agreement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Upload PDF or image</p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    Quality Certification
                  </CardTitle>
                  <CardDescription>
                    Quality certification from accredited observatory
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Upload certification report</p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Calibration Data
                  </CardTitle>
                  <CardDescription>
                    Calibration data and calibration certificate
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Upload calibration data</p>
                    <Button variant="outline" size="sm">
                      Choose File
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5" />
                    Additional Documents
                  </CardTitle>
                  <CardDescription>
                    Any other relevant legal or financial documents
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground mb-2">Optional documents</p>
                    <Button variant="outline" size="sm">
                      Choose Files
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      case 3:
        const licenseEconomics = calculateLicenseEconomics();
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="licenseSymbol">💰 License Symbol</Label>
                <Input
                  id="licenseSymbol"
                  placeholder="e.g., LAPT"
                  value={formData.licenseSymbol}
                  onChange={(e) => updateFormData('licenseSymbol', e.target.value.toUpperCase())}
                  maxLength={5}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  3-5 character unique identifier
                </p>
              </div>
              <div>
                <Label htmlFor="totalSupply">🌌 Total License Supply</Label>
                <Input
                  id="totalSupply"
                  type="number"
                  placeholder="1000000"
                  value={formData.totalSupply}
                  onChange={(e) => updateFormData('totalSupply', e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="minAccess">💰 Minimum Access (USD)</Label>
              <Input
                id="minAccess"
                type="number"
                placeholder="250"
                value={formData.minAccess}
                onChange={(e) => updateFormData('minAccess', e.target.value)}
              />
            </div>

            {licenseEconomics && (
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle>Calculated License Economics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground">Price Per License</p>
                      <p className="text-2xl font-bold">${licenseEconomics.pricePerLicense}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Market Cap</p>
                      <p className="text-2xl font-bold">{formatCurrency(licenseEconomics.marketCap.toString())}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Min Access Licenses</p>
                      <p className="text-2xl font-bold">{licenseEconomics.minAccessLicenses.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="licenseGoal">💰 License Goal (USD)</Label>
                <Input
                  id="licenseGoal"
                  type="number"
                  placeholder="1000000"
                  value={formData.licenseGoal}
                  onChange={(e) => updateFormData('licenseGoal', e.target.value)}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  Target amount to raise from investors
                </p>
              </div>
              <div>
                <Label htmlFor="availabilityDeadline">🌌 Availability Deadline</Label>
                <Input
                  id="availabilityDeadline"
                  type="date"
                  value={formData.availabilityDeadline}
                  onChange={(e) => updateFormData('availabilityDeadline', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>👩‍🔬 Researcher Requirements</CardTitle>
                <CardDescription>
                  Set compliance requirements for researchers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Researcher Verification Required</Label>
                    <p className="text-sm text-muted-foreground">All researchers must complete identity verification</p>
                  </div>
                  <Button
                    variant={formData.researcherVerification ? "default" : "outline"}
                    onClick={() => updateFormData('researcherVerification', !formData.researcherVerification)}
                  >
                    {formData.researcherVerification ? 'Required' : 'Optional'}
                  </Button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <Label>Institution Only</Label>
                    <p className="text-sm text-muted-foreground">Restrict to accredited institutions</p>
                  </div>
                  <Button
                    variant={formData.institutionOnly ? "default" : "outline"}
                    onClick={() => updateFormData('institutionOnly', !formData.institutionOnly)}
                  >
                    {formData.institutionOnly ? 'Required' : 'Open to All'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div>
              <Label htmlFor="usageRestrictions">🌌 Usage Restrictions</Label>
              <Textarea
                id="usageRestrictions"
                placeholder="e.g., Usage limited to educational purposes only, excluding commercial applications..."
                value={formData.usageRestrictions}
                onChange={(e) => updateFormData('usageRestrictions', e.target.value)}
              />
              <p className="text-sm text-muted-foreground mt-1">
                Specify any usage restrictions for the dataset
              </p>
            </div>

            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Our legal team will review these settings to ensure regulatory compliance in relevant jurisdictions.
              </AlertDescription>
            </Alert>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <Alert>
              <Check className="h-4 w-4" />
              <AlertDescription>
                Review all information carefully. Once published, some settings cannot be changed.
              </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>🌌 Dataset Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Name:</span>
                    <span className="font-medium">{formData.dataName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Type:</span>
                    <span className="font-medium">{DATA_TYPES.find(t => t.id === formData.dataType)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Observatory:</span>
                    <span className="font-medium">{formData.observatory}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Value:</span>
                    <span className="font-medium">{formatCurrency(formData.totalValue)}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>💰 License Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Symbol:</span>
                    <span className="font-medium">{formData.licenseSymbol}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Supply:</span>
                    <span className="font-medium">{parseFloat(formData.totalSupply).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Price per License:</span>
                    <span className="font-medium">${calculateLicenseEconomics()?.pricePerLicense}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Min Access:</span>
                    <span className="font-medium">{formatCurrency(formData.minAccess)}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Deployment Cost</h3>
                <div className="text-3xl font-bold mb-2">$2,500 USD</div>
                <p className="text-sm opacity-90">
                  Includes smart contract deployment, legal review, compliance setup, and ongoing platform fees for the first year.
                </p>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Card className="max-w-md mx-auto text-center">
            <CardContent className="p-8">
              <Shield className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-xl font-semibold mb-2">Wallet Required</h2>
              <p className="text-muted-foreground mb-4">
                Connect your wallet to start the tokenization process
              </p>
              <Button className="w-full">Connect Wallet</Button>
            </CardContent>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Astronomical Dataset Tokenization</h1>
            <p className="text-xl text-muted-foreground">
              Transform your astronomical dataset into tradeable tokens
            </p>
          </div>

          {/* Progress Steps */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-6">
                {LISTING_STEPS.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                      currentStep >= step.id 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {currentStep > step.id ? <Check className="h-4 w-4" /> : step.id}
                    </div>
                    {index < LISTING_STEPS.length - 1 && (
                      <div className={`w-16 h-0.5 mx-2 ${
                        currentStep > step.id ? 'bg-primary' : 'bg-muted'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              <Progress value={(currentStep / LISTING_STEPS.length) * 100} className="mb-2" />
              <div className="text-center">
                <h3 className="font-semibold">{LISTING_STEPS[currentStep - 1].title}</h3>
                <p className="text-sm text-muted-foreground">
                  {LISTING_STEPS[currentStep - 1].description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Step Content */}
          <Card>
            <CardContent className="p-8">
              {renderStepContent()}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between">
            <Button 
              variant="outline" 
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            {currentStep < LISTING_STEPS.length ? (
              <Button onClick={nextStep}>
                Next
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button className="bg-green-600 hover:bg-green-700">
                Publish Dataset
                <Coins className="h-4 w-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
} 