@echo off
title Maktab CRM Server
echo ==========================================
echo       Maktab CRM ishga tushirilmoqda...
echo ==========================================
echo.
cd /d "%~dp0"
echo Server ishga tushmoqda, brauzer ochilmoqda...
start http://localhost:5173/
npm run dev
pause
