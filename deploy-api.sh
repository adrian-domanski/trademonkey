#!/bin/bash
set -e

echo "🚀 Publishing .NET API..."

dotnet publish ./api/api.csproj -c Release -o ./api/publish

echo "📦 Creating zip package..."

cd api/publish
zip -r ../publish.zip .
cd ../../

echo "☁️ Deploying to Azure..."

az webapp deploy \
  --resource-group TradeMonkeyWeb \
  --name TradeMonkeyApp \
  --src-path ./api/publish.zip \
  --type zip

rm -rf ./api/publish
rm -rf ./api/publish.zip

echo "✅ Deployment complete!"
