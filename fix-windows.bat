@echo off
echo Fixing Windows + Next.js issues...
echo.

echo Step 1: Stopping any running processes...
taskkill /F /IM node.exe >nul 2>&1

echo Step 2: Deleting cache folders...
if exist .next rmdir /s /q .next
if exist node_modules\.cache rmdir /s /q node_modules\.cache

echo Step 3: Clearing npm cache...
call npm cache clean --force

echo Step 4: Reinstalling dependencies...
call npm install

echo.
echo ✅ Done! Now run: npm run dev
echo.
pause

