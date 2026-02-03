@echo off
echo ========================================
echo Starting TechLand Development Environment
echo ========================================
echo.

REM Start Backend
echo [1/3] Starting Backend Server...
start "TechLand Backend" cmd /k "cd /d c:\techland\techland\backend && npm run dev"
timeout /t 3 /nobreak >nul

REM Start Frontend
echo [2/3] Starting Frontend...
start "TechLand Frontend" cmd /k "cd /d c:\techland\techland\frontend && npm run dev"
timeout /t 2 /nobreak >nul

REM Start Admin Panel
echo [3/3] Starting Admin Panel...
start "TechLand Admin" cmd /k "cd /d c:\techland\techland\Admin && npm run dev"

echo.
echo ========================================
echo All services started!
echo ========================================
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo Admin:    http://localhost:3001
echo ========================================
echo.
echo Press any key to exit this window (services will keep running)...
pause >nul
