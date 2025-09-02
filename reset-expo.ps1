Write-Host "Limpiando proyecto Expo..."

# 1. Eliminar node_modules y locks
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
if (Test-Path package-lock.json) { Remove-Item -Force package-lock.json }

# 2. Eliminar carpetas de Expo
if (Test-Path .expo) { Remove-Item -Recurse -Force .expo }
if (Test-Path .expo-shared) { Remove-Item -Recurse -Force .expo-shared }

# 3. Limpiar caché global de npm
npm cache clean --force

# 4. Reinstalar dependencias
Write-Host "Instalando dependencias..."
npm install

# 5. Iniciar Expo limpiando caché de Metro
Write-Host "Iniciando Expo en limpio..."
npx expo start -c