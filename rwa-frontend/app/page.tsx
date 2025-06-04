'use client';

import { useEffect } from 'react';
import { useWalletStore } from '@/stores/wallet';
import { useContractStore } from '@/stores/contract';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Telescope, 
  TrendingUp, 
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Clock,
  Star,
  Database
} from 'lucide-react';
import { formatTokenAmount, formatCurrency } from '@/lib/stellar';
import Link from 'next/link';

export default function Dashboard() {
  const { isConnected, address, checkConnection } = useWalletStore();
  const { 
    assetMetadata, 
    userBalance, 
    isWhitelisted, 
    compliance,
    fetchContractData,
    fetchUserData 
  } = useContractStore();

  // Check wallet connection and fetch data on mount
  useEffect(() => {
    checkConnection();
    fetchContractData();
  }, [checkConnection, fetchContractData]);

  // Fetch user data when wallet connects
  useEffect(() => {
    if (isConnected && address) {
      fetchUserData(address);
    }
  }, [isConnected, address, fetchUserData]);

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-120px)] space-y-8">
            <div className="text-center space-y-4 max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight">
                🌌 SkyData Token Marketplace
              </h1>
              <p className="text-xl text-muted-foreground">
                Tokenization of telescope data enabling researchers to license data 
                and earn revenue through blockchain-based platform.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
              <Card className="text-center">
                <CardHeader>
                  <Telescope className="h-12 w-12 mx-auto text-primary" />
                  <CardTitle className="text-lg">🔭 Astronomical Data</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access premium telescope observations and processed datasets through blockchain tokens
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 mx-auto text-green-600" />
                  <CardTitle className="text-lg">📡 Verified Quality</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    NASA approved and peer-reviewed datasets with quality certification
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 mx-auto text-blue-600" />
                  <CardTitle className="text-lg">🌟 Research Value</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Earn licensing revenue from your astronomical data and discoveries
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Welcome Section */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">🌌 Welcome to SkyData Token Marketplace</h1>
            <p className="text-lg text-muted-foreground">
              Your gateway to tokenized astronomical data and research licensing
            </p>
          </div>

          {/* Portfolio Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">🗂️ Data Portfolio Value</CardTitle>
                <Database className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {formatTokenAmount(userBalance)} SKYDT
                </div>
                <p className="text-xs text-muted-foreground">
                  ≈ {formatCurrency(
                    (parseFloat(formatTokenAmount(userBalance)) * 1000).toString()
                  )}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">⚖️ Copyright Status</CardTitle>
                {isWhitelisted ? (
                  <CheckCircle className="h-4 w-4 text-green-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-yellow-600" />
                )}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isWhitelisted ? 'Verified' : 'Pending'}
                </div>
                <p className="text-xs text-muted-foreground">
                  {compliance?.kyc_verified ? 'License Complete' : 'License Required'}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">📈 Active Data Sets</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">
                  Licensed observations
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">⏰ Next Data Release</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3 days</div>
                <p className="text-xs text-muted-foreground">
                  Webb telescope update
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Current Asset */}
          {assetMetadata && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl">🌌 {assetMetadata.name}</CardTitle>
                    <CardDescription className="text-base">
                      {assetMetadata.description}
                    </CardDescription>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {assetMetadata.asset_type.replace('_', ' ').toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Current Valuation</p>
                    <p className="text-2xl font-bold">
                      {formatCurrency(formatTokenAmount(assetMetadata.valuation, 7))}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Your License Share</p>
                    <p className="text-2xl font-bold">
                      {((parseFloat(formatTokenAmount(userBalance)) / 2500) * 100).toFixed(2)}%
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Data Symbol</p>
                    <p className="text-2xl font-bold font-mono">{assetMetadata.symbol}</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button asChild>
                    <Link href="/transfer">
                      🔄 Transfer License
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/marketplace">
                      🔍 Explore Data
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>🚀 New Data Opportunities</CardTitle>
                <CardDescription>
                  Discover cutting-edge astronomical datasets to license
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">🌌 Andromeda Galaxy Deep Field</p>
                      <p className="text-sm text-muted-foreground">4K RGB Imaging Data</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">Available</p>
                      <Badge variant="outline" className="text-xs">Hubble</Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">🪐 Exoplanet Spectrum Analysis</p>
                      <p className="text-sm text-muted-foreground">AI-Enhanced Catalog</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">Pre-release</p>
                      <Badge variant="outline" className="text-xs">Webb</Badge>
                    </div>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/marketplace">
                    🔭 Browse All Data
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>📊 Recent Activity</CardTitle>
                <CardDescription>
                  Your latest data transactions and updates
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">🌟 Welcome to SkyData</p>
                      <p className="text-xs text-muted-foreground">Researcher account activated</p>
                    </div>
                    <p className="text-xs text-muted-foreground">Just now</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">📜 License Verification</p>
                      <p className="text-xs text-muted-foreground">Copyright status updated</p>
                    </div>
                    <p className="text-xs text-muted-foreground">2 min ago</p>
                  </div>
                </div>
                
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/transfer">
                    🔄 Make Your First Transfer
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
